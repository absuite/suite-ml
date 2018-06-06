window.Vue = window.Vue || require('vue');

import gapp from 'gmf/app';
import http from 'gmf/core/utils/http';
import AppRoot from './AppRoot'
import routesAuth from 'gmf/routes/auth';
import routesWeb from './routes/web';
import gmfComponent from 'gmf/component'
import URL from 'gmf/core/utils/MdURL';


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
        const vcode = getQueryString('vcode');
        if (vcode) {
            http.post('/api/sys/auth/login-vcode/' + vcode).then(res => {
                getConfigs();
            });
        } else {
            getConfigs();
        }

        function getConfigs() {
            var url = new URL(window.location, true);
            http.get('/site/configs', { params: url.query }).then(res => {
                resolve(res.data.data);
            }, err => {
                console.log(err);
            });
        }
    })
});
gapp.run({ app: AppRoot, locale: 'enUS' });