## 通过 gmf 安装器
微信菜单:
POST:https://api.weixin.qq.com/cgi-bin/menu/create?access_token=ACCESS_TOKEN
{
	"button": [{
			"type": "view",
			"name": "工作",
			"url": "http://m.myamiba.cn/m/works"
		},
		{
			"type": "view",
			"name": "报表",
			"url": "http://m.myamiba.cn/m/reports"
		}, {
			"type": "view",
			"name": "我的",
			"url": "http://m.myamiba.cn/m/settings"
		}
	]
}