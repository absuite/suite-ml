<?php
namespace App\SDK;
use Gmf\Sys\Builder;
use Gmf\Sys\Models\Profile;
use GuzzleHttp;

class WXJSSDK {
	private $appId;
	private $appSecret;

	public function __construct($appId, $appSecret) {
		$this->appId = $appId;
		$this->appSecret = $appSecret;
	}

	public function getSignPackage($url) {
		$jsapiTicket = $this->getJsApiTicket();

		// 注意 URL 一定要动态获取，不能 hardcode.
		// $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
		// $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

		$timestamp = time();
		$nonceStr = $this->createNonceStr();

		// 这里参数的顺序要按照 key 值 ASCII 码升序排序
		$string = "jsapi_ticket=$jsapiTicket&noncestr=$nonceStr&timestamp=$timestamp&url=$url";

		$signature = sha1($string);

		$signPackage = array(
			"appId" => $this->appId,
			"nonceStr" => $nonceStr,
			"timestamp" => $timestamp,
			"url" => $url,
			"signature" => $signature,
			"rawString" => $string,
		);
		return $signPackage;
	}

	private function createNonceStr($length = 16) {
		$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		$str = "";
		for ($i = 0; $i < $length; $i++) {
			$str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
		}
		return $str;
	}

	private function getJsApiTicket() {
		// jsapi_ticket 应该全局存储与更新，以下代码以写入到文件中做示例
		$data = false;
		if ($pv = Profile::getValue('sys_wx_jsapi_ticket')) {
			$data = json_decode($pv);
		}
		if (empty($data) || empty($data->expire_time) || $data->expire_time < time()) {
			$accessToken = $this->getAccessToken();
			// 如果是企业号用以下 URL 获取 ticket
			// $url = "https://qyapi.weixin.qq.com/cgi-bin/get_jsapi_ticket?access_token=$accessToken";

			$keysArr = array(
				"type" => "jsapi",
				"access_token" => $accessToken,
			);
			$client = new GuzzleHttp\Client([
				'base_uri' => 'https://api.weixin.qq.com',
				'headers' => ['Accept' => 'application/json', 'Content-Type' => 'application/json'],
				'verify' => false]);
			//获取token
			try {
				$res = $client->request('GET', 'cgi-bin/ticket/getticket', ['query' => $keysArr]);
			} catch (\Exception $e) {
				return $e->getMessage();
			}

			$result = (string) $res->getBody();
			$result = json_decode($result);
			$ticket = $result->ticket;
			if ($ticket) {
				$data = new Builder;
				$data->expire_time = time() + 7000;
				$data->jsapi_ticket = $ticket;
				Profile::setValue('sys_wx_jsapi_ticket', json_encode($data));
			}
		} else {
			$ticket = $data->jsapi_ticket;
		}

		return $ticket;
	}
	public function doPOST($url, array $datas = [], $needToken = true) {
		$client = new GuzzleHttp\Client([
			'base_uri' => 'https://api.weixin.qq.com',
			'headers' => ['Accept' => 'application/json', 'Content-Type' => 'application/json'],
			'verify' => false]);
		$query = [];
		if ($needToken) {
			$query['access_token'] = $this->getAccessToken();
		}
		try {
			$res = $client->request('POST', $url, [
				GuzzleHttp\RequestOptions::JSON => $datas,
				GuzzleHttp\RequestOptions::QUERY => $query,
			]);
			$result = (string) $res->getBody();
			return json_decode($result);
		} catch (\Exception $e) {
			throw $e;
		}
		return false;
	}
	public function doGET($url, array $datas = [], $needToken = true) {
		$client = new GuzzleHttp\Client([
			'base_uri' => 'https://api.weixin.qq.com',
			'headers' => ['Accept' => 'application/json', 'Content-Type' => 'application/json'],
			'verify' => false]);
		if (empty($datas)) {
			$datas = [];
		}
		if ($needToken) {
			$datas['access_token'] = $this->getAccessToken();
		}
		try {
			$res = $client->get($url, ['query' => $datas]);
			$result = (string) $res->getBody();
			return json_decode($result);
		} catch (\Exception $e) {
			throw $e;
		}
		return false;
	}
	public function getAccessToken() {
		// access_token 应该全局存储与更新，以下代码以写入到文件中做示例
		$data = false;
		$pvKey = 'sys_wx_jsapi_access_token_' . $this->appId;
		if ($pv = Profile::getValue($pvKey)) {
			$data = json_decode($pv);
		}
		if (empty($data) || empty($data->expire_time) || $data->expire_time < time()) {
			// 如果是企业号用以下URL获取access_token
			// $url = "https://qyapi.weixin.qq.com/cgi-bin/gettoken?corpid=$this->appId&corpsecret=$this->appSecret";
			try {
				$keysArr = array(
					"grant_type" => "client_credential",
					"appid" => $this->appId,
					"secret" => $this->appSecret,
				);
				$client = new GuzzleHttp\Client([
					'base_uri' => 'https://api.weixin.qq.com',
					'headers' => ['Accept' => 'application/json', 'Content-Type' => 'application/json'],
					'verify' => false]);
				//获取token
				try {
					$res = $client->request('GET', 'cgi-bin/token', ['query' => $keysArr]);
				} catch (\Exception $e) {
					return $e->getMessage();
				}
				$result = (string) $res->getBody();
				$result = json_decode($result);
				$access_token = $result->access_token;
				if ($access_token) {
					$data = new Builder;
					$data->expire_time = time() + 7000;
					$data->access_token = $access_token;
					Profile::setValue($pvKey, json_encode($data));
				}
			} catch (\Exception $e) {
				throw $e;
			}

		} else {
			$access_token = $data->access_token;
		}
		return $access_token;
	}
}
