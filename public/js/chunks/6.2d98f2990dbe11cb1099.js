webpackJsonp([6],{"0pxL":function(t,e,r){var i=r("VE/v");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("868ced3e",i,!0,{})},FecR:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("app-rpt-view",{attrs:{title:"利润趋势"}},[t.configed?r("md-x-dropdowns",[r("md-x-dropdown",{attrs:{title:t.group?t.group:"阿米巴"}},[r("md-picker",{attrs:{"md-data":t.picker_groups},model:{value:t.selector.groups,callback:function(e){t.$set(t.selector,"groups",e)},expression:"selector.groups"}})],1),t._v(" "),r("md-x-dropdown",{attrs:{title:t.fm_period?t.fm_period:"开始期间"}},[r("md-picker",{attrs:{"md-data":t.picker_periods},model:{value:t.selector.fm_periods,callback:function(e){t.$set(t.selector,"fm_periods",e)},expression:"selector.fm_periods"}})],1),t._v(" "),r("md-x-dropdown",{attrs:{title:t.to_period?t.to_period:"结束期间"}},[r("md-picker",{attrs:{"md-data":t.picker_periods},model:{value:t.selector.to_periods,callback:function(e){t.$set(t.selector,"to_periods",e)},expression:"selector.to_periods"}})],1)],1):t._e(),t._v(" "),r("md-layout",[r("md-x-chart",{ref:"topChart",attrs:{"md-data":t.topChartData}},[r("md-x-scale",{attrs:{x:"",field:"period_name",alias:"期间","tick-count":0}}),t._v(" "),r("md-x-scale",{attrs:{y:"",field:"this_profit",alias:"利润","tick-count":5}}),t._v(" "),r("md-x-point",{style:{stroke:"#fff",lineWidth:1},attrs:{shape:"smooth"}}),t._v(" "),r("md-x-line",{attrs:{shape:"smooth"}})],1)],1),t._v(" "),r("md-layout",{staticClass:"flex",attrs:{"md-column":""}},[r("md-pull-refresh",{on:{refresh:t.onListRefresh}},[r("md-table",{scopedSlots:t._u([{key:"md-table-row",fn:function(e){var i=e.item;return r("md-table-row",{},[r("md-table-cell",{attrs:{"md-label":"期间"}},[t._v(t._s(i.period_name))]),t._v(" "),r("md-table-cell",{attrs:{"md-label":"利润"}},[t._v(t._s(i.this_profit))]),t._v(" "),r("md-table-cell",{attrs:{"md-label":"利润率"}},[t._v(t._s(i.this_profit_rate>0?Math.round(100*i.this_profit_rate)/100:"-"))])],1)}}]),model:{value:t.listItems,callback:function(e){t.listItems=e},expression:"listItems"}})],1)],1)],1)},staticRenderFns:[]}},GOd7:function(t,e,r){var i=r("Rtr9");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("c49f4a76",i,!0,{})},IFgq:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=r("Xl3j"),o=(i=s)&&i.__esModule?i:{default:i};e.default={name:"AppBackButtom",components:{MdIconBack:o.default},props:{title:String},methods:{goBack:function(){this.$router.back()}}}},JYy5:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MdIconBack"}},Ln09:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[r("md-app-toolbar",{staticClass:"md-primary"},[r("div",{staticClass:"md-toolbar-row"},[r("div",{staticClass:"md-toolbar-section-start"},[r("app-back-nav")],1),t._v(" "),r("div",{staticClass:"flex md-title"},[t._v(t._s(t.title))]),t._v(" "),r("div",{staticClass:"md-toolbar-section-end"},[r("md-icon-filter",{on:{click:function(e){t.isShowFilling=!0}}})],1)])]),t._v(" "),r("md-app-content",{staticClass:"layout-column"},[t._t("default"),t._v(" "),r("md-x-popup",{attrs:{position:"bottom"},model:{value:t.isShowFilling,callback:function(e){t.isShowFilling=e},expression:"isShowFilling"}},[r("md-picker",{attrs:{"md-data":t.purposes,"md-show-toolbar":""},on:{"md-cancel":function(e){t.isShowFilling=!1},"md-confirm":t.onConfirmPurpose},model:{value:t.currentPurpose,callback:function(e){t.currentPurpose=e},expression:"currentPurpose"}})],1)],2)],1)},staticRenderFns:[]}},PNMt:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,"",""])},Rtr9:function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".md-icon[data-v-d989ebe2]{font-size:30px}",""])},"VE/v":function(t,e,r){(t.exports=r("FZ+f")(!1)).push([t.i,".md-app[data-v-23a28e9e]{min-height:100%;max-width:100%;height:100%}.md-avatar .md-icon[data-v-23a28e9e]{font-size:36px}",""])},VMqF:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("md-icon",this._g({staticClass:"md-icon-image"},this.$listeners),[e("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}}),this._v(" "),e("path",{attrs:{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}})])])}]}},Xl3j:function(t,e,r){var i=r("VU/8")(r("JYy5"),r("VMqF"),!1,null,null,null);t.exports=i.exports},Y3r9:function(t,e,r){var i=r("VU/8")(r("uMLT"),r("Ln09"),!1,function(t){r("0pxL")},"data-v-23a28e9e",null);t.exports=i.exports},cQYR:function(t,e,r){var i=r("VU/8")(r("wp5S"),r("fAHM"),!1,null,null,null);t.exports=i.exports},fAHM:function(t,e){t.exports={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("md-icon",this._g({staticClass:"md-icon-image"},this.$listeners),[e("svg",{attrs:{height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"}}),this._v(" "),e("path",{attrs:{d:"M0 0h24v24H0z",fill:"none"}})])])}]}},lkid:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=u(r("Xxa5")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},o=u(r("Y3r9")),n=u(r("Lr25")),a=u(r("H8RI")),c=r("NYxO");function u(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptProfitTrend",components:{AppRptView:o.default},created:function(){},data:function(){return{configed:!1,listItems:[],listPager:{},selector:{groups:[],fm_periods:[],to_periods:[]}}},beforeRouteEnter:function(t,e,r){r(function(t){t.config()})},computed:s({},(0,c.mapState)("amiba",["purpose","periods","groups"]),(0,c.mapGetters)("amiba",["currentPeriod"]),{picker_periods:function(){return this.periods&&this.periods.length>0?[this.periods.map(function(t){return t.value=t.id,t})]:[]},picker_groups:function(){return this.groups&&this.groups.length>0?[this.groups.map(function(t){return t.value=t.id,t})]:[]},topChartData:function(){return this.listItems.filter(function(t,e){return e<5&&t})},group:function(){var t=this;return this.selector.groups.length&&this.selector.groups[0]?this.groups.find(function(e){return e.id===t.selector.groups[0]}):null},fm_period:function(){var t=this;return this.selector.fm_periods.length&&this.selector.fm_periods[0]?this.periods.find(function(e){return e.id===t.selector.fm_periods[0]}):null},to_period:function(){var t=this;return this.selector.to_periods.length&&this.selector.to_periods[0]?this.periods.find(function(e){return e.id===t.selector.to_periods[0]}):null}}),watch:{purpose:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},group:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},fm_period:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},to_period:function(t,e){t&&this.configed&&(e&&t.id!=e.id||!e)&&this.fetchListData()},topChartData:function(){this.$refs.topChart.rerender()}},methods:{config:function(){var t,e=(t=i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/config");case 2:return t.next=4,this.$store.dispatch("amiba/getPurposes");case 4:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=8;break}return t.next=8,this.$store.dispatch("amiba/setPurpose",e[0]);case 8:return t.next=10,this.$store.dispatch("amiba/getPeriods");case 10:return t.sent,t.next=13,this.$store.dispatch("amiba/getGroups");case 13:this.currentPeriod&&(this.selector.to_periods=[this.currentPeriod.id]),this.configed=!0,this.fetchListData();case 16:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function i(s,o){try{var n=e[s](o),a=n.value}catch(t){return void r(t)}if(!n.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onListRefresh:function(t){this.fetchListData(null,t)},onPeriodChanged:function(t,e){this.period=e},fetchListData:(0,a.default)(function(t,e){var r=this;if(this.configed&&this.purpose&&this.group&&this.fm_period&&this.to_period){var i=(0,n.default)({purpose_id:this.purpose.id,group:this.group.code,fm_period:this.fm_period.code,to_period:this.to_period.code},{size:20},t);t||(this.listItems=[]),this.$http("suite.cbo").post("api/amiba/reports/profit/trend",i).then(function(t){r.listItems=r.listItems.concat(t.data.data),r.listPager=t.data.pager,e&&e()},function(t){e&&e()})}else e&&e()},500)}}},rVeX:function(t,e){t.exports={render:function(){var t=this.$createElement;return(this._self._c||t)("md-icon",{on:{click:this.goBack}},[this._v("keyboard_arrow_left")])},staticRenderFns:[]}},uMLT:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(r("Xxa5")),s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},o=c(r("uQ/s")),n=c(r("cQYR")),a=(c(r("Lr25")),c(r("H8RI")),r("NYxO"));function c(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptView",components:{AppBackNav:o.default,MdIconFilter:n.default},props:{title:String},data:function(){return{configed:!1,isShowFilling:!1,currentPurpose:[]}},computed:s({},(0,a.mapState)({purpose:function(t){return t.amiba.purpose},purposes:function(t){return t.amiba.purposes&&t.amiba.purposes.length?[t.amiba.purposes.map(function(t){return t.value=t.id,t})]:[]}})),methods:s({},(0,a.mapActions)("amiba",["setPurpose"]),{config:function(){var t,e=(t=i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/config");case 2:return t.next=4,this.$store.dispatch("amiba/getPurposes");case 4:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=8;break}return t.next=8,this.$store.dispatch("amiba/setPurpose",e[0]);case 8:this.configed=!0,this.purpose&&(this.currentPurpose=[this.purpose.id]);case 10:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function i(s,o){try{var n=e[s](o),a=n.value}catch(t){return void r(t)}if(!n.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}("next")})});return function(){return e.apply(this,arguments)}}(),onConfirmPurpose:function(t){if(this.isShowFilling=!1,t&&t.length>0){var e=this.purposes&&this.purposes[0].find(function(e){return e.id==t[0]});e&&this.setPurpose(e)}}}),created:function(){},mounted:function(){this.config()}}},"uQ/s":function(t,e,r){var i=r("VU/8")(r("IFgq"),r("rVeX"),!1,function(t){r("GOd7")},"data-v-d989ebe2",null);t.exports=i.exports},wp5S:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"MdIconFilter"}},xore:function(t,e,r){var i=r("VU/8")(r("lkid"),r("FecR"),!1,function(t){r("yR0w")},"data-v-83927a46",null);t.exports=i.exports},yR0w:function(t,e,r){var i=r("PNMt");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r("rjj0")("57ab8413",i,!0,{})}});