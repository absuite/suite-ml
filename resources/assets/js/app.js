window.Vue = window.Vue || require('vue');

import gapp from 'gmf/app';
import http from 'gmf/core/utils/http';
import AppRoot from './AppRoot'
import routesAuth from 'gmf/routes/auth';
import routesWeb from './routes/web';
import gmfComponent from 'gmf/component'
import URL from 'gmf/core/utils/MdURL';
import Tip from 'gmf/components/MdTip'
import amiba from './store/amiba'

gapp.route(routesAuth);
gapp.route(routesWeb);
gapp.use(gmfComponent);
gapp.store(amiba);

gapp.config(function () {
  return new Promise(function (resolve, reject) {
    var url = new URL(window.location, true);
    http.get('/site/configs', {
      params: url.query
    }).then(res => {
      http.config(res.data.data);
      resolve(res.data.data);
    }, err => {
      Tip('获取配置信息失败！');
    });
  })
});
gapp.run({
  app: AppRoot,
  locale: 'enUS'
});
