webpackJsonp([7],{1077:function(t,e,r){var i=r(0)(r(1078),r(1079),!1,null,null,null);t.exports=i.exports},1078:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,n=r(19),o=(i=n)&&i.__esModule?i:{default:i},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},s=r(47);e.default={name:"FilterPurposeDropdown",props:{title:{type:String,default:"核算目的"},mdData:Array,value:Object},data:function(){return{configed:!1,picker_value:[],isActive:!1}},computed:a({},(0,s.mapState)("amiba",["purposes","purpose"]),{picker_datas:function(){return this.mdData&&this.mdData.length?[this.mdData.map(function(t){return t.value=t.id,t})]:this.purposes&&this.purposes.length?[this.purposes.map(function(t){return t.value=t.id,t})]:[]},playValue:function(){return this.value||this.purpose}}),watch:{picker_value:function(t){var e=null;t&&t.length>0&&(e=this.picker_datas&&this.picker_datas[0].find(function(e){return e.id==t[0]}))&&this.$store.dispatch("amiba/setPurpose",e),e&&!this.value&&this.$emit("input",e)},value:function(t){this.picker_value=t&&t.id?[t.id]:[]}},methods:{config:function(){var t,e=(t=o.default.mark(function t(){return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.configed=!0;case 1:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function i(n,o){try{var a=e[n](o),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),onConfirm:function(t){var e=null;t&&t.length>0&&(e=this.picker_datas&&this.picker_datas[0].find(function(e){return e.id==t[0]})),this.$emit("input",e),this.isActive=!1}},mounted:function(){this.config()}}},1079:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-x-dropdown",{attrs:{title:t.playValue?t.playValue:t.title,"md-active":t.isActive},on:{"update:mdActive":function(e){t.isActive=e}}},[r("md-picker",{attrs:{"md-data":t.picker_datas,"md-show-toolbar":"","md-toolbar-position":"bottom"},on:{"md-confirm":t.onConfirm,"md-cancel":function(e){t.isActive=!1}},model:{value:t.picker_value,callback:function(e){t.picker_value=e},expression:"picker_value"}})],1)},staticRenderFns:[]}},1080:function(t,e,r){var i=r(0)(r(1081),r(1082),!1,null,null,null);t.exports=i.exports},1081:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},n=r(47);e.default={name:"FilterGroupDropdown",props:{title:{type:String,default:"阿米巴"},mdData:Array,value:Object},data:function(){return{configed:!1,picker_value:[],isActive:!1}},computed:i({},(0,n.mapState)("amiba",["groups"]),{picker_datas:function(){return this.mdData&&this.mdData.length?[this.mdData.map(function(t){return t.value=t.id,t})]:this.groups&&this.groups.length?[this.groups.map(function(t){return t.value=t.id,t})]:[]},playValue:function(){return this.value}}),watch:{picker_value:function(t){var e=null;t&&t.length>0&&(e=this.picker_datas&&this.picker_datas[0].find(function(e){return e.id==t[0]})),e&&!this.value&&this.$emit("input",e)},value:function(t){this.picker_value=t&&t.id?[t.id]:[]}},methods:{onConfirm:function(t){var e=null;t&&t.length>0&&(e=this.picker_datas&&this.picker_datas[0].find(function(e){return e.id==t[0]})),this.$emit("input",e),this.isActive=!1}}}},1082:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-x-dropdown",{attrs:{title:t.playValue?t.playValue:t.title,"md-active":t.isActive},on:{"update:mdActive":function(e){t.isActive=e}}},[r("md-picker",{attrs:{"md-data":t.picker_datas,"md-toolbar-position":"bottom","md-show-toolbar":""},on:{"md-confirm":t.onConfirm,"md-cancel":function(e){t.isActive=!1}},model:{value:t.picker_value,callback:function(e){t.picker_value=e},expression:"picker_value"}})],1)},staticRenderFns:[]}},1083:function(t,e,r){var i=r(0)(r(1084),r(1085),!1,null,null,null);t.exports=i.exports},1084:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},n=r(47);e.default={name:"FilterPeriodDropdown",props:{title:{type:String,default:"期间"},mdData:Array,value:Object},data:function(){return{configed:!1,picker_value:[],isActive:!1}},computed:i({},(0,n.mapState)("amiba",["periods"]),(0,n.mapGetters)("amiba",["currentPeriod"]),{picker_datas:function(){return this.mdData&&this.mdData.length?[this.mdData.map(function(t){return t.value=t.id,t})]:this.periods&&this.periods.length?[this.periods.map(function(t){return t.value=t.id,t})]:[]},playValue:function(){return this.value}}),watch:{picker_value:function(t){var e=null;t&&t.length>0&&(e=this.picker_datas&&this.picker_datas[0].find(function(e){return e.id==t[0]})),e&&!this.value&&this.$emit("input",e)},value:function(t){this.picker_value=t&&t.id?[t.id]:[]}},methods:{onConfirm:function(t){var e=null;t&&t.length>0&&(e=this.picker_datas&&this.picker_datas[0].find(function(e){return e.id==t[0]})),this.$emit("input",e),this.isActive=!1}}}},1085:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-x-dropdown",{attrs:{title:t.playValue?t.playValue:t.title,"md-active":t.isActive},on:{"update:mdActive":function(e){t.isActive=e}}},[r("md-picker",{attrs:{"md-data":t.picker_datas,"md-show-toolbar":"","md-toolbar-position":"bottom"},on:{"md-confirm":t.onConfirm,"md-cancel":function(e){t.isActive=!1}},model:{value:t.picker_value,callback:function(e){t.picker_value=e},expression:"picker_value"}})],1)},staticRenderFns:[]}},1225:function(t,e,r){var i=r(1226);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);r(1036)("01ce5a20",i,!0,{})},1226:function(t,e,r){(t.exports=r(164)(!1)).push([t.i,".md-app[data-v-e3b5d4ce]{min-height:100%;max-width:100%;height:100%}.md-app-bottom-bar[data-v-e3b5d4ce]{height:50px}",""])},1227:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=d(r(19)),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},o=d(r(1077)),a=d(r(1080)),s=d(r(1083)),u=d(r(81)),c=d(r(165)),l=r(47);function d(t){return t&&t.__esModule?t:{default:t}}e.default={name:"RptProfitTrend",components:{FilterPurposeDropdown:o.default,FilterGroupDropdown:a.default,FilterPeriodDropdown:s.default},created:function(){},data:function(){return{configed:!1,listItems:[],listPager:{},selector:{purpose:null,group:null,fm_period:null,to_period:null}}},beforeRouteEnter:function(t,e,r){r(function(t){t.$store.dispatch("amiba/config").then(function(){return t.config()},function(e){t.$tip(e)})})},computed:n({},(0,l.mapGetters)("amiba",["yearFirstPeriod","currentPeriod","purpose"]),{topChartData:function(){return this.listItems.filter(function(t,e){return e<5&&t})},filterKey:function(){var t="1";return this.selector.purpose&&(t+=this.selector.purpose.id),this.selector.group&&(t+=this.selector.group.id),this.selector.fm_period&&(t+=this.selector.fm_period.id),this.selector.to_period&&(t+=this.selector.to_period.id),t}}),watch:{filterKey:function(t){this.configed&&this.fetchData()},topChartData:function(){this.$refs.topChart.rerender()}},methods:{config:function(){var t,e=(t=i.default.mark(function t(){var e;return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$store.dispatch("amiba/getPurposes");case 2:if(e=t.sent,!(!this.purpose&&e&&e.length>0)){t.next=6;break}return t.next=6,this.$store.dispatch("amiba/setPurpose",e[0]);case 6:this.selector.fm_period=this.yearFirstPeriod,this.selector.to_period=this.currentPeriod,this.configed=!0;case 9:case"end":return t.stop()}},t,this)}),function(){var e=t.apply(this,arguments);return new Promise(function(t,r){return function i(n,o){try{var a=e[n](o),s=a.value}catch(t){return void r(t)}if(!a.done)return Promise.resolve(s).then(function(t){i("next",t)},function(t){i("throw",t)});t(s)}("next")})});return function(){return e.apply(this,arguments)}}(),onListRefresh:function(t){this.fetchData(null,t)},fetchData:(0,c.default)(function(t,e){var r=this;if(this.configed&&this.selector.purpose&&this.selector.group&&this.selector.fm_period&&this.selector.to_period){var i=(0,u.default)({purpose_id:this.selector.purpose.id,group:this.selector.group.code,fm_period:this.selector.fm_period.code,to_period:this.selector.to_period.code},{size:20},t);t||(this.listItems=[]),this.$http("suite.cbo").post("api/amiba/reports/profit/trend",i).then(function(t){r.listItems=r.listItems.concat(t.data.data),r.listPager=t.data.pager,e&&e()},function(t){e&&e()})}else e&&e()},500)}}},1228:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("md-app",{attrs:{"md-waterfall":"","md-mode":"fixed"}},[r("md-app-content",{staticClass:"layout-column"},[t.configed?r("md-x-dropdowns",[r("filter-purpose-dropdown",{model:{value:t.selector.purpose,callback:function(e){t.$set(t.selector,"purpose",e)},expression:"selector.purpose"}}),t._v(" "),r("filter-group-dropdown",{model:{value:t.selector.group,callback:function(e){t.$set(t.selector,"group",e)},expression:"selector.group"}}),t._v(" "),r("filter-period-dropdown",{attrs:{title:"开始期间"},model:{value:t.selector.fm_period,callback:function(e){t.$set(t.selector,"fm_period",e)},expression:"selector.fm_period"}}),t._v(" "),r("filter-period-dropdown",{attrs:{title:"结束期间"},model:{value:t.selector.to_period,callback:function(e){t.$set(t.selector,"to_period",e)},expression:"selector.to_period"}})],1):t._e(),t._v(" "),r("md-layout",[r("md-x-chart",{ref:"topChart",attrs:{"md-data":t.topChartData}},[r("md-x-scale",{attrs:{x:"",field:"period_name",alias:"期间","tick-count":0}}),t._v(" "),r("md-x-scale",{attrs:{y:"",field:"this_profit",alias:"利润","tick-count":5}}),t._v(" "),r("md-x-point",{style:{stroke:"#fff",lineWidth:1},attrs:{shape:"smooth"}}),t._v(" "),r("md-x-line",{attrs:{shape:"smooth"}})],1)],1),t._v(" "),r("div",{staticClass:"flex scroll"},[r("md-pull-refresh",{on:{refresh:t.onListRefresh}},[r("md-table",{scopedSlots:t._u([{key:"md-table-row",fn:function(e){var i=e.item;return r("md-table-row",{},[r("md-table-cell",{attrs:{"md-label":"期间"}},[t._v(t._s(i.period_name))]),t._v(" "),r("md-table-cell",{attrs:{"md-label":"利润"}},[t._v(t._s(i.this_profit))]),t._v(" "),r("md-table-cell",{attrs:{"md-label":"利润率"}},[t._v(t._s(i.this_profit_rate>0?Math.round(100*i.this_profit_rate)/100:"-"))])],1)}}]),model:{value:t.listItems,callback:function(e){t.listItems=e},expression:"listItems"}})],1)],1)],1),t._v(" "),r("md-app-bottom-bar",[r("md-x-submit-bar",{attrs:{"button-text":"","show-back":""},on:{back:function(e){t.$router.back()}}})],1)],1)},staticRenderFns:[]}},187:function(t,e,r){var i=r(0)(r(1227),r(1228),!1,function(t){r(1225)},"data-v-e3b5d4ce",null);t.exports=i.exports}});