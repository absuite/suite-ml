webpackJsonp([7],{"0pxL":function(t,e,i){var n=i("VE/v");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("868ced3e",n,!0,{})},"8yLj":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},GOd7:function(t,e,i){var n=i("Rtr9");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("c49f4a76",n,!0,{})},IFgq:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=i("Xl3j"),r=(n=s)&&n.__esModule?n:{default:n};e.default={name:"AppBackButtom",components:{MdIconBack:r.default},props:{title:String},methods:{goBack:function(){this.$router.back()}}}},JYy5:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MdIconBack"}},Ln09:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[i("md-app-toolbar",{staticClass:"md-primary"},[i("div",{staticClass:"md-toolbar-row"},[i("div",{staticClass:"md-toolbar-section-start"},[i("app-back-nav")],1),t._v(" "),i("div",{staticClass:"flex md-title"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"md-toolbar-section-end"},[i("md-icon-filter",{on:{click:function(e){t.isShowFilling=!0}}})],1)])]),t._v(" "),i("md-app-content",{staticClass:"layout-column"},[t._t("default"),t._v(" "),i("md-x-popup",{attrs:{position:"bottom"},model:{value:t.isShowFilling,callback:function(e){t.isShowFilling=e},expression:"isShowFilling"}},[i("md-picker",{attrs:{"md-data":t.purposes,"md-show-toolbar":""},on:{"md-cancel":function(e){t.isShowFilling=!1},"md-confirm":t.onConfirmPurpose},model:{value:t.currentPurpose,callback:function(e){t.currentPurpose=e},expression:"currentPurpose"}})],1)],2)],1)},staticRenderFns:[]}},NBgA:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("app-rpt-view",{attrs:{title:"利润排名"}},[i("md-x-tabs",{on:{click:t.onPeriodChanged}},t._l(t.periods,function(t){return i("md-x-tab",{key:t.id,attrs:{title:t}})})),t._v(" "),i("md-layout",[i("md-x-chart",{ref:"topChart",attrs:{"md-data":t.topChartData}},[i("md-x-bar"),t._v(" "),i("md-x-scale",{attrs:{x:"",field:"group_name",alias:"阿米巴"}}),t._v(" "),i("md-x-scale",{attrs:{y:"",field:"this_profit",alias:"利润"}}),t._v(" "),i("md-x-tooltip",{attrs:{"show-item-marker":!1}})],1)],1),t._v(" "),i("md-layout",{staticClass:"flex",attrs:{"md-column":""}},[i("md-pull-refresh",{on:{refresh:t.onListRefresh}},[i("md-scroll-load",{attrs:{"md-finished":t.isListFinished,"immediate-check":!1},on:{load:t.onListScrollLoad}},[i("md-table",{scopedSlots:t._u([{key:"md-table-row",fn:function(e){var n=e.item;return i("md-table-row",{},[i("md-table-cell",{attrs:{"md-label":"阿米巴"}},[t._v(t._s(n.group_name))]),t._v(" "),i("md-table-cell",{attrs:{"md-label":"利润"}},[t._v(t._s(n.this_profit))]),t._v(" "),i("md-table-cell",{attrs:{"md-label":"利润率"}},[t._v(t._s(n.this_profit_rate>0?Math.round(100*n.this_profit_rate)/100:"-"))])],1)}}]),model:{value:t.listItems,callback:function(e){t.listItems=e},expression:"listItems"}})],1)],1)],1)],1)},staticRenderFns:[]}},Rtr9:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".md-icon[data-v-d989ebe2]{font-size:30px}",""])},"VE/v":function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,".md-app[data-v-23a28e9e]{min-height:100%;max-width:100%;height:100%}.md-avatar .md-icon[data-v-23a28e9e]{font-size:36px}",""])},VMqF:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("md-icon",this._g({staticClass:"md-icon-image"},this.$listeners),[e("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),this._v(" "),e("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])])}]}},W5Kq:function(t,e,i){var n=i("8yLj");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i("rjj0")("6745025e",n,!0,{})},Xl3j:function(t,e,i){var n=i("VU/8")(i("JYy5"),i("VMqF"),!1,null,null,null);t.exports=n.exports},Y3r9:function(t,e,i){var n=i("VU/8")(i("uMLT"),i("Ln09"),!1,function(t){i("0pxL")},"data-v-23a28e9e",null);t.exports=n.exports},ajsU:function(t,e,i){var n=i("VU/8")(i("z6C7"),i("NBgA"),!1,function(t){i("W5Kq")},"data-v-f6c91d70",null);t.exports=n.exports},cQYR:function(t,e,i){var n=i("VU/8")(i("wp5S"),i("fAHM"),!1,null,null,null);t.exports=n.exports},fAHM:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("md-icon",this._g({staticClass:"md-icon-image"},this.$listeners),[e("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}}),this._v(" "),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])}]}},rVeX:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("md-icon",{on:{click:this.goBack}},[this._v("keyboard_arrow_left")])},staticRenderFns:[]}},uMLT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=c(i("Xxa5")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},r=c(i("uQ/s")),o=c(i("cQYR")),a=(c(i("Lr25")),c(i("H8RI")),i("NYxO"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptView",components:{AppBackNav:r.default,MdIconFilter:o.default},props:{title:String},data:function(){return{configed:!1,isShowFilling:!1,currentPurpose:[]}},computed:s({},(0,a.mapState)({purpose:function(t){return t.amiba.purpose},purposes:function(t){return t.amiba.purposes&&t.amiba.purposes.length?[t.amiba.purposes.map(function(t){return t.value=t.id,t})]:[]}})),methods:s({},(0,a.mapActions)("amiba",["setPurpose"]),{config:function(){var t,e=(t=n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/config");case 2:return t.next=4,this.$store.dispatch("amiba/getPurposes");case 4:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=8;break}return t.next=8,this.$store.dispatch("amiba/setPurpose",e[0]);case 8:this.configed=!0,this.purpose&&(this.currentPurpose=[this.purpose.id]);case 10:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function n(s,r){try{var o=e[s](r),a=o.value}catch(t){return void i(t)}if(!o.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onConfirmPurpose:function(t){if(this.isShowFilling=!1,t&&t.length>0){var e=this.purposes&&this.purposes[0].find(function(e){return e.id==t[0]});e&&this.setPurpose(e)}}}),created:function(){},mounted:function(){this.config()}}},"uQ/s":function(t,e,i){var n=i("VU/8")(i("IFgq"),i("rVeX"),!1,function(t){i("GOd7")},"data-v-d989ebe2",null);t.exports=n.exports},wp5S:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MdIconFilter"}},z6C7:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=u(i("Xxa5")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},r=u(i("Y3r9")),o=u(i("Lr25")),a=u(i("H8RI")),c=i("NYxO");function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptProfitRank",components:{AppRptView:r.default},created:function(){},data:function(){return{configed:!1,listItems:[],listPager:{},isListFinished:!1,period:null}},beforeRouteEnter:function(t,e,i){i(function(t){t.config()})},computed:s({},(0,c.mapState)("amiba",["purpose","periods"]),(0,c.mapGetters)("amiba",["currentPeriod"]),{topChartData:function(){return this.listItems.filter(function(t,e){return e<5&&t})}}),watch:{purpose:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},period:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},topChartData:function(){this.$refs.topChart.rerender()}},methods:{config:function(){var t,e=(t=n.default.mark(function t(){var e;return n.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/config");case 2:return t.next=4,this.$store.dispatch("amiba/getPurposes");case 4:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=8;break}return t.next=8,this.$store.dispatch("amiba/setPurpose",e[0]);case 8:return t.next=10,this.$store.dispatch("amiba/getPeriods");case 10:t.sent,this.period=this.currentPeriod,this.configed=!0,this.fetchListData();case 14:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,i){return function n(s,r){try{var o=e[s](r),a=o.value}catch(t){return void i(t)}if(!o.done)return Promise.resolve(a).then(function(t){n("next",t)},function(t){n("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onListRefresh:function(t){this.fetchListData(null,t)},onListScrollLoad:function(t){this.listPager.page++,this.fetchListData(this.listPager,t)},onPeriodChanged:function(t,e){this.period=e},fetchListData:(0,a.default)(function(t,e){var i=this;if(!this.configed||!this.purpose||!this.period)return e&&e(),void(this.isListFinished=!0);var n=(0,o.default)({purpose_id:this.purpose.id,period:this.period.code},{size:20},t);t||(this.listItems=[],this.isListFinished=!1),this.$http("suite.cbo").post("api/amiba/reports/profit/rank",n).then(function(t){i.listItems=i.listItems.concat(t.data.data),i.listPager=t.data.pager,i.isListFinished=i.listPager.items<i.listPager.size,e&&e()},function(t){e&&e(),i.isListFinished=!0})},500)}}}});