window.Vue = window.Vue || require('vue');

import gapp from 'gmf/app';
import http from 'gmf/core/utils/http';
import AppRoot from './AppRoot'
import routesAuth from 'gmf/routes/auth';
import routesWeb from './routes/web';
import gmfComponent from 'gmf/component'
import URL from 'gmf/core/utils/MdURL';
import Tip from 'gmf/components/MdTip'

gapp.route(routesAuth);
gapp.route(routesWeb);
gapp.use(gmfComponent);

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
gapp.config(function() {
    return new Promise(function(resolve, reject) {
        var url = new URL(window.location, true);
        http.get('/site/configs', { params: url.query }).then(res => {
            http.config(res.data.data);
            appConfig(res.data.data);
        }, err => {
            Tip('获取配置信息失败！');
        });

        function appConfig(data) {
            http.config({ name: "suite.cbo", appId: "suite.cbo" }).then(
                res => {
                    resolve(data)
                },
                err => { Tip('配置应用发现失败！'); }
            );
        }
    })
});
gapp.run({ app: AppRoot, locale: 'enUS' });