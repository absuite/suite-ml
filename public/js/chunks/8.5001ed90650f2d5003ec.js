webpackJsonp([8],{"6u9R":function(t,e,n){var i=n("Ts14");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("e66219fc",i,!0,{})},G4ej:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".md-app[data-v-37262c04]{min-height:100%;max-width:100%;height:100%}.md-avatar .md-icon[data-v-37262c04]{font-size:36px}",""])},GOd7:function(t,e,n){var i=n("Rtr9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("c49f4a76",i,!0,{})},IFgq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=n("Xl3j"),r=(i=s)&&i.__esModule?i:{default:i};e.default={name:"AppBackButtom",components:{MdIconBack:r.default},props:{title:String},methods:{goBack:function(){this.$router.back()}}}},JYy5:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MdIconBack"}},MGoV:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("app-rpt-view",{attrs:{title:"经营业绩"}},[n("md-x-tabs",{on:{click:t.onPeriodChanged}},t._l(t.periods,function(t){return n("md-x-tab",{key:t.id,attrs:{title:t}})})),t._v(" "),n("md-layout",{staticClass:"flex",attrs:{"md-column":""}},[n("md-pull-refresh",{on:{refresh:t.onListRefresh}},[n("md-scroll-load",{attrs:{"md-finished":t.isListFinished,"immediate-check":!1},on:{load:t.onListScrollLoad}},[n("md-table",{scopedSlots:t._u([{key:"md-table-row",fn:function(e){var i=e.item;return n("md-table-row",{},[n("md-table-cell",{attrs:{"md-label":"阿米巴"}},[t._v(t._s(i.group_name))]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"收/支"}},[n("div",[t._v("收:"+t._s(i.this_income))]),t._v(" "),n("div",[t._v("支:"+t._s(i.this_cost))])]),t._v(" "),n("md-table-cell",{attrs:{"md-label":"利润"}},[t._v(t._s(i.this_profit))])],1)}}]),model:{value:t.listItems,callback:function(e){t.listItems=e},expression:"listItems"}})],1)],1)],1)],1)},staticRenderFns:[]}},Rtr9:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,".md-icon[data-v-d989ebe2]{font-size:30px}",""])},SagZ:function(t,e,n){var i=n("G4ej");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("rjj0")("5eafb413",i,!0,{})},Ts14:function(t,e,n){(t.exports=n("FZ+f")(!1)).push([t.i,"",""])},VMqF:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("md-icon",this._g({staticClass:"md-icon-image"},this.$listeners),[e("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),this._v(" "),e("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])])}]}},Xl3j:function(t,e,n){var i=n("VU/8")(n("JYy5"),n("VMqF"),!1,null,null,null);t.exports=i.exports},Y3r9:function(t,e,n){var i=n("VU/8")(n("uMLT"),n("tuOF"),!1,function(t){n("SagZ")},"data-v-37262c04",null);t.exports=i.exports},YxOe:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(n("Xxa5")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r=u(n("Y3r9")),o=u(n("Lr25")),a=u(n("H8RI")),c=n("NYxO");function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptAchieveTotal",components:{AppRptView:r.default},created:function(){},data:function(){return{configed:!1,listItems:[],listPager:{},isListFinished:!1,period:null}},beforeRouteEnter:function(t,e,n){n(function(t){t.$store.dispatch("amiba/config").then(function(){return t.config()},function(e){t.$tip(e)})})},computed:s({},(0,c.mapState)("amiba",["purpose","periods"]),(0,c.mapGetters)("amiba",["currentPeriod"])),watch:{purpose:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},period:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()}},methods:{config:function(){var t,e=(t=i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/getPurposes");case 2:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=6;break}return t.next=6,this.$store.dispatch("amiba/setPurpose",e[0]);case 6:return t.next=8,this.$store.dispatch("amiba/getPeriods");case 8:t.sent,this.period=this.currentPeriod,this.configed=!0,this.fetchListData();case 12:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(s,r){try{var o=e[s](r),a=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onListRefresh:function(t){this.fetchListData(null,t)},onListScrollLoad:function(t){this.listPager.page++,this.fetchListData(this.listPager,t)},onPeriodChanged:function(t,e){this.period=e},fetchListData:(0,a.default)(function(t,e){var n=this;if(this.configed&&this.purpose&&this.group&&this.period){var i=(0,o.default)({purpose_id:this.purpose.id,group:this.group.code,period:this.period.code},{size:20},t);t||(this.listItems=[]),this.$http("suite.cbo").post("api/amiba/reports/profit/total",i).then(function(t){n.listItems=n.listItems.concat(t.data.data),n.listPager=t.data.pager,e&&e()},function(t){e&&e()})}else e&&e()},500)}}},cQYR:function(t,e,n){var i=n("VU/8")(n("wp5S"),n("fAHM"),!1,null,null,null);t.exports=i.exports},fAHM:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("md-icon",this._g({staticClass:"md-icon-image"},this.$listeners),[e("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}}),this._v(" "),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])}]}},lKvl:function(t,e,n){var i=n("VU/8")(n("YxOe"),n("MGoV"),!1,function(t){n("6u9R")},"data-v-4aa2bc4c",null);t.exports=i.exports},rVeX:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("md-icon",{on:{click:this.goBack}},[this._v("keyboard_arrow_left")])},staticRenderFns:[]}},tuOF:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[n("md-app-toolbar",{staticClass:"md-primary"},[n("div",{staticClass:"md-toolbar-row"},[n("div",{staticClass:"md-toolbar-section-start"},[n("app-back-nav")],1),t._v(" "),n("div",{staticClass:"flex md-title"},[t._v(t._s(t.title))]),t._v(" "),n("div",{staticClass:"md-toolbar-section-end"},[n("md-icon-filter",{on:{click:function(e){t.isShowFilling=!0}}})],1)])]),t._v(" "),n("md-app-content",{staticClass:"layout-column"},[t._t("default"),t._v(" "),n("md-x-popup",{attrs:{position:"bottom"},model:{value:t.isShowFilling,callback:function(e){t.isShowFilling=e},expression:"isShowFilling"}},[n("md-picker",{attrs:{"md-data":t.purposes,"md-show-toolbar":""},on:{"md-cancel":function(e){t.isShowFilling=!1},"md-confirm":t.onConfirmPurpose},model:{value:t.currentPurpose,callback:function(e){t.currentPurpose=e},expression:"currentPurpose"}})],1)],2)],1)},staticRenderFns:[]}},uMLT:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(n("Xxa5")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},r=c(n("uQ/s")),o=c(n("cQYR")),a=(c(n("Lr25")),c(n("H8RI")),n("NYxO"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptView",components:{AppBackNav:r.default,MdIconFilter:o.default},props:{title:String},data:function(){return{configed:!1,isShowFilling:!1,currentPurpose:[]}},computed:s({},(0,a.mapState)({purpose:function(t){return t.amiba.purpose},purposes:function(t){return t.amiba.purposes&&t.amiba.purposes.length?[t.amiba.purposes.map(function(t){return t.value=t.id,t})]:[]}})),methods:s({},(0,a.mapActions)("amiba",["setPurpose"]),{config:function(){var t,e=(t=i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/config");case 2:return t.next=4,this.$store.dispatch("amiba/getPurposes");case 4:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=8;break}return t.next=8,this.$store.dispatch("amiba/setPurpose",e[0]);case 8:this.configed=!0,this.purpose&&(this.currentPurpose=[this.purpose.id]);case 10:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function i(s,r){try{var o=e[s](r),a=o.value}catch(t){return void n(t)}if(!o.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onConfirmPurpose:function(t){if(this.isShowFilling=!1,t&&t.length>0){var e=this.purposes&&this.purposes[0].find(function(e){return e.id==t[0]});e&&this.setPurpose(e)}}}),created:function(){},mounted:function(){this.config()}}},"uQ/s":function(t,e,n){var i=n("VU/8")(n("IFgq"),n("rVeX"),!1,function(t){n("GOd7")},"data-v-d989ebe2",null);t.exports=i.exports},wp5S:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MdIconFilter"}}});