## 通过 gmf 安装器
微信菜单:
POST:https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN
{
	"button": [{
			"type": "view",
			"name": "工作",
			"url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a88e6c2a4f54c16&redirect_uri=http://m.myamiba.cn/wx/callback&response_type=code&scope=snsapi_userinfo&state=works#wechat_redirect"
		},
		{
			"type": "view",
			"name": "报表",
			"url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a88e6c2a4f54c16&redirect_uri=http://m.myamiba.cn/wx/callback&response_type=code&scope=snsapi_userinfo&state=reports#wechat_redirect"
		}, {
			"type": "view",
			"name": "我的",
			"url": "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2a88e6c2a4f54c16&redirect_uri=http://m.myamiba.cn/wx/callback&response_type=code&scope=snsapi_userinfo&state=settings#wechat_redirect"
		}
	]
}
