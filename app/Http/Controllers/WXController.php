<?php

namespace App\Http\Controllers;

use App\SDK\WXJSSDK;
use Gmf\Sys\Http\Controllers\Controller;
use Gmf\Sys\Models\User;
use Illuminate\Http\Request;
use Log;
use Auth;

class WXController extends Controller {
  public function getSignPackage(Request $request) {
    $sdk = new WXJSSDK(env('GMF_MP_WX_APPID'), env('GMF_MP_WX_APPKEY'));
    return $this->toJson($sdk->getSignPackage($request->input('url')));
  }
  public function mpHandle(Request $request) {
    if (!$this->mpCheckSignature($request)) {
      return 'error';
    }
    $input = $request->all();
    $from_xml = $request->getContent();
    $xmlObj = simplexml_load_string($from_xml, 'SimpleXMLElement', LIBXML_NOCDATA);

    if ($xmlObj->MsgType === 'event' && !empty($input['openid']) && ($xmlObj->Event === 'subscribe' || $xmlObj->Event === 'VIEW')) {
      $user = $this->autoRegUser($input['openid']);
      Auth::login($user);
    }    
    Log::error('mp handle ' . json_encode($request->all()));

    return '';
  }
  private function autoRegUser($openid) {
    $sdk = new WXJSSDK(env('GMF_MP_WX_APPID'), env('GMF_MP_WX_APPKEY'));
    $result = $sdk->doGET('cgi-bin/user/info', ['lang' => 'zh_CN', 'openid' => $openid]);

    $options = ['client_id' => env('GMF_MP_WX_APPID'), 'client_type' => 'wx'];
    $options['src_id'] = $openid;

    if (!empty($result->nickname)) {
      $options['name'] = $result->nickname;
    }
    //用户头像，最后一个数值代表正方形头像大小（有0、46、64、96、132数值可选，0代表640*640正方形头像），用户没有头像时该项为空
    if (!empty($result->headimgurl)) {
      $options['avatar'] = $result->headimgurl;
      if (substr($result->headimgurl, strlen($result->headimgurl) - 1, 1) == '0') {
        $options['avatar'] = substr($result->headimgurl, 0, strlen($result->headimgurl) - 1) . '46';
      }
    }
    //普通用户性别，1为男性，2为女性
    if (!empty($result->sex)) {
      $options['gender'] = $result->sex == '2' ? 'w' : 'm';
    }
    $options['info'] = json_encode($result);

    return User::registerByAccount('wx', $options);
  }
  public function mpCheck(Request $request) {
    if ($this->mpCheckSignature($request)) {
      return $request->input('echostr');
    }
    return '0';
  }
  private function mpCheckSignature(Request $request) {
    //开发者通过检验signature对请求进行校验（下面有校验方式）。
    //若确认此次GET请求来自微信服务器，请原样返回echostr参数内容，则接入生效，成为开发者成功，否则接入失败。
    //加密/校验流程如下：
    //1）将token、timestamp、nonce三个参数进行字典序排序
    //2）将三个参数字符串拼接成一个字符串进行sha1加密
    //3）开发者获得加密后的字符串可与signature对比，标识该请求来源于微信
    $input = $request->all();
    if (empty($input['timestamp']) || empty($input['signature']) || empty($input['nonce'])) {
      return false;
    }
    $token = env('GMF_MP_WX_TOKEN');
    $tmpArr = array($input['timestamp'], $input["nonce"], $token);
    sort($tmpArr, SORT_STRING);
    $tmpStr = implode($tmpArr);
    $tmpStr = sha1($tmpStr);

    if (!empty($input["signature"]) && $input["signature"] == $tmpStr) {
      return true;
    } else {
      return false;
    }
  }
}