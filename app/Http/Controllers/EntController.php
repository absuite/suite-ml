<?php

namespace App\Http\Controllers;

use GAuth;
use Gmf\Sys\Http\Controllers\Controller;
use Gmf\Sys\Models;
use GuzzleHttp;
use Illuminate\Http\Request;
use Validator;

class EntController extends Controller {
  public function auditing(Request $request) {
    $input = $request->all();
    Validator::make($input, [
      'ent_openid' => 'required',
      'user_openid' => 'required',
      'token' => 'required',
      'is_effective' => 'required',
    ])->validate();
    $ent = Models\Ent\Ent::where('id', $input['ent_openid'])->orWhere('openid', $input['ent_openid'])->first();
    if (empty($ent)) {
      throw new \Exception('找不到企业！');
    }
    if ($ent->token != $input['token']) {
      throw new \Exception('token 授权失败!');
    }
    $user = Models\User::where('openid', $input['user_openid'])->first();
    if (empty($user)) {
      throw new \Exception('没有此用户');
    }
    Models\Ent\Ent::setEffective($ent->id, $user->id, $input['is_effective']);
    return $this->toJson(true);
  }
  public function join(Request $request) {
    $input = $request->all();
    Validator::make($input, [
      'entId' => 'required',
    ])->validate();
    $ent = Models\Ent\Ent::where('id', $input['entId'])->orWhere('openid', $input['entId'])->first();
    if (empty($ent)) {
      throw new \Exception('找不到企业！');
    }
    $gateway = $ent->gateway;
    $user = GAuth::user();
    if (!empty($gateway)) {
      $params = [
        "user" => [
          "openid" => $user->openid,
          "name" => $user->name,
          'account' => $user->name,
          "type" => $user->type,
          "avatar" => $user->avatar,
          "client_id" => $user->client_id,
          "client_type" => $user->client_type,
        ],
        "ent_openid" => $ent->openid,
        "app_openid" => '',
        'token' => $ent->token,
      ];
      try {
        $client = new GuzzleHttp\Client(['base_uri' => $gateway]);
        $res = $client->post('api/cbo/ents/injection', ['json' => $params]);
        $body = (String) $res->getBody();
        if ($body) {
          $body = json_decode($body);
          $token = $body && $body->data ? $body->data : false;
        }
      } catch (\GuzzleHttp\Exception\ClientException $exception) {
        $error = $exception->getResponse()->getBody()->getContents();
        throw new \Exception(json_decode($error)->msg);
      }
    }
    if (!$ent->hasUser($user->id)) {
      Models\Ent\Ent::addUser($ent->id, $user->id, ['is_effective' => 0, 'type_enum' => 'member']);
    }
    return $this->toJson(true);
  }
}
