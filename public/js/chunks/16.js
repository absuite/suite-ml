webpackJsonp([16],{1093:function(t,e,a){var n=a(0)(a(1094),a(1095),!1,null,null,null);t.exports=n.exports},1094:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"HomeBottomBar",data:function(){return{menuVisible:!1}},methods:{},created:function(){},mounted:function(){}}},1095:function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("md-bottom-bar",{attrs:{"md-sync-route":""}},[e("md-bottom-bar-item",{attrs:{to:"/m/works","md-label":"工作","md-icon":"dashboard"}}),this._v(" "),e("md-bottom-bar-item",{attrs:{to:"/","md-label":"报表","md-icon":"assessment"}}),this._v(" "),e("md-bottom-bar-item",{attrs:{to:"/m/settings","md-label":"我的","md-icon":"perm_identity"}})],1)},staticRenderFns:[]}},1234:function(t,e,a){var n=a(1235);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(1036)("6c8a9c09",n,!0,{})},1235:function(t,e,a){(t.exports=a(164)(!1)).push([t.i,".md-app[data-v-50b2af30]{min-height:100%;max-width:100%;height:100%}.md-card[data-v-50b2af30],.md-x-cell-group[data-v-50b2af30]{margin-bottom:10px}",""])},1236:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,o=a(1093),i=(n=o)&&n.__esModule?n:{default:n};e.default={name:"Setting",components:{HomeBottomBar:i.default},data:function(){return{}},computed:{user:function(){return this.$root.configs.user||{}},ent:function(){return this.$root.configs.ent||{}}}}},1237:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[a("md-app-content",[a("md-card",[a("md-card-header",[a("md-avatar",[a("img",{attrs:{src:t.user.avatar,alt:"Avatar"}})]),t._v(" "),a("div",{staticClass:"md-title"},[t._v(t._s(t.user.name))]),t._v(" "),a("div",{staticClass:"md-subhead"},[t._v(t._s(t.user.account))])],1),t._v(" "),a("md-card-content",{staticClass:"no-padding"},[a("md-x-cell",{attrs:{title:"切换主企业",icon:"md:dashboard",value:t.ent.name,"is-link":"",to:"/m/ent/select"}})],1)],1),t._v(" "),a("md-x-cell-group",[a("md-x-cell",{attrs:{title:"企业广场",icon:"md:account_balance","is-link":"",to:"/m/ent/list"}}),t._v(" "),a("md-x-cell",{attrs:{title:"巴指数",icon:"md:track_changes",value:"今日上升3分","is-link":""}})],1),t._v(" "),a("md-x-cell-group",[a("md-x-cell",{attrs:{title:"账号",icon:"md:account_circle","is-link":""}}),t._v(" "),a("md-x-cell",{attrs:{title:"意见反馈",icon:"md:feedback","is-link":""}}),t._v(" "),a("md-x-cell",{attrs:{title:"邀请",icon:"md:assignment","is-link":""}}),t._v(" "),a("md-x-cell",{attrs:{title:"退出",icon:"md:exit_to_app","is-link":""}})],1)],1),t._v(" "),a("md-app-bottom-bar",[a("home-bottom-bar")],1)],1)},staticRenderFns:[]}},189:function(t,e,a){var n=a(0)(a(1236),a(1237),!1,function(t){a(1234)},"data-v-50b2af30",null);t.exports=n.exports}});