webpackJsonp([20],{1169:function(t,e,n){var i=n(1170);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n(1036)("875dd1d4",i,!0,{})},1170:function(t,e,n){(t.exports=n(164)(!1)).push([t.i,".md-app[data-v-bbd93c7c]{min-height:100%;max-width:100%;height:100%}",""])},1171:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(n(19)),o=a(n(81));n(47);function a(t){return t&&t.__esModule?t:{default:t}}e.default={name:"DocTypeList",data:function(){return{configed:!1,items:[],pager:{},isFinished:!1,search_q:""}},beforeRouteEnter:function(t,e,n){n(function(t){t.$store.dispatch("amiba/config").then(function(){return t.config()},function(e){t.$tip(e)})})},methods:{config:function(){var t,e=(t=i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.configed=!0;case 1:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(o,a){try{var c=e[o](a),s=c.value}catch(t){return void n(t)}if(!c.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),onSearch:function(t){this.fetchData()},onItemClick:function(t){this.$go({name:"cbo.doc.type.edit",query:{id:t.id}})},onAddClick:function(){this.$go({name:"cbo.doc.type.edit"})},onRefresh:function(t){this.fetchData(null,t)},onScrollLoad:function(t){this.pager.page++,this.fetchData(this.pager,t)},fetchData:function(t,e){var n=this;if(this.configed){var i=(0,o.default)({q:this.search_q},{size:20},t);t||(this.items=[],this.isFinished=!1),this.$http("suite.cbo").get("api/cbo/doc-types",{params:i}).then(function(t){n.items=n.items.concat(t.data.data),n.pager=t.data.pager,n.isFinished=n.pager.items<n.pager.size,e&&e()},function(t){e&&e(),n.isFinished=!0})}else e&&e()}}}},1172:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[n("md-app-content",{staticClass:"layout-column"},[n("md-x-search",{attrs:{placeholder:"输入您想要查找的内容"},on:{search:t.onSearch},model:{value:t.search_q,callback:function(e){t.search_q=e},expression:"search_q"}}),t._v(" "),n("div",{staticClass:"flex scroll"},[n("md-pull-refresh",{on:{refresh:t.onRefresh}},[n("md-scroll-load",{attrs:{"md-finished":t.isFinished,configed:t.configed},on:{load:t.onScrollLoad}},[n("md-x-cell-group",t._l(t.items,function(e){return n("md-x-cell",{key:e.id,attrs:{icon:"md:settings_input_svideo","is-link":"",title:e.name,label:e.code,tag:e.biz_type_enum},on:{click:function(n){t.onItemClick(e)}}})}))],1)],1)],1)],1),t._v(" "),n("md-app-bottom-bar",[n("md-x-submit-bar",{attrs:{"show-back":"",speed:"md:add"},on:{submit:t.onAddClick,back:function(e){t.$router.back()}}})],1)],1)},staticRenderFns:[]}},174:function(t,e,n){var i=n(0)(n(1171),n(1172),!1,function(t){n(1169)},"data-v-bbd93c7c",null);t.exports=i.exports}});