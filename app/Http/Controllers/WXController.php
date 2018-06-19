<?php

namespace App\Http\Controllers;

use App\SDK\WXJSSDK;
use Gmf\Sys\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Log;
use App\SDK\WXMP\WXBizMsgCrypt;

class WXController extends Controller
{
  public function getSignPackage(Request $request)
  {
    $sdk = new WXJSSDK(env('GMF_MP_WX_APPID'), env('GMF_MP_WX_APPKEY'));
    return $this->toJson($sdk->getSignPackage($request->input('url')));
  }
  public function mpHandle(Request $request)
  {
    if (!$this->mpCheckSignature($request)) {
      return 'error';
    }
    $input = $request->all();
    $from_xml = $request->getContent();
    $pc = new WXBizMsgCrypt(env('GMF_MP_WX_TOKEN'), env('GMF_MP_WX_AESKEY'), env('GMF_MP_WX_APPID'));
    $msg = '';
    $errCode = $pc->decryptMsg($input['signature'], $input['timestamp'], $input['nonce'], $from_xml, $msg);
    Log::error($errCode);
    Log::error($from_xml);
    Log::error($msg);


    Log::error('mp handle ' . json_encode($request->all()));

    return '';
  }
  public function mpCheck(Request $request)
  {
    if ($this->mpCheckSignature($request)) {
      return $request->input('echostr');
    }
    return '0';
  }
  private function mpCheckSignature(Request $request)
  {
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