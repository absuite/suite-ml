webpackJsonp([28],{1046:function(t,e,n){var r=n(0)(n(1130),n(1131),!1,null,null,null);t.exports=r.exports},1053:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.regex=e.ref=e.len=e.req=e.withParams=void 0;var r,i=n(1059),a=(r=i)&&r.__esModule?r:{default:r};e.withParams=a.default;var u=e.req=function(t){if(Array.isArray(t))return!!t.length;if(void 0===t||null===t||!1===t)return!1;if(t instanceof Date)return!isNaN(t.getTime());if("object"==typeof t){for(var e in t)return!0;return!1}return!!String(t).length};e.len=function(t){return Array.isArray(t)?t.length:"object"==typeof t?Object.keys(t).length:String(t).length},e.ref=function(t,e,n){return"function"==typeof t?t.call(e,n):n[t]},e.regex=function(t,e){return(0,a.default)({type:t},function(t){return!u(t)||e.test(t)})}},1054:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t};e.pushParams=u,e.popParams=o,e.withParams=function(t,e){if("object"==typeof t&&void 0!==e)return n=t,r=e,l(function(t){return function(){t(n);for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];return r.apply(this,i)}});var n,r;return l(t)};var i=[],a=e.target=null;e._setTarget=function(t){e.target=a=t};function u(){null!==a&&i.push(a),e.target=a={}}function o(){var t=a,n=e.target=a=i.pop()||null;return n&&(Array.isArray(n.$sub)||(n.$sub=[]),n.$sub.push(t)),t}function s(t){if("object"!=typeof t||Array.isArray(t))throw new Error("params must be an object");e.target=a=r({},a,t)}function l(t){var e=t(s);return function(){u();try{for(var t=arguments.length,n=Array(t),r=0;r<t;r++)n[r]=arguments[r];return e.apply(this,n)}finally{o()}}}},1055:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.withParams=e.validationMixin=e.Vuelidate=void 0;var r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},i=n(1056),a=n(1054),u=function(){return null},o=function(t,e,n){return t.reduce(function(t,r){return t[n?n(r):r]=e(r),t},{})};function s(t){return"function"==typeof t}function l(t){return null!==t&&("object"==typeof t||s(t))}var d=function(t,e,n,r){if("function"==typeof n)return n.call(t,e,r);n=Array.isArray(n)?n:n.split(".");for(var i=0;i<n.length;i++){if(!e||"object"!=typeof e)return r;e=e[n[i]]}return void 0===e?r:e},f="__isVuelidateAsyncVm";var c={$invalid:function(){var t=this,e=this.proxy;return this.nestedKeys.some(function(e){return t.refProxy(e).$invalid})||this.ruleKeys.some(function(t){return!e[t]})},$dirty:function(){var t=this;return!!this.dirty||0!==this.nestedKeys.length&&this.nestedKeys.every(function(e){return t.refProxy(e).$dirty})},$error:function(){return this.$dirty&&!this.$pending&&this.$invalid},$pending:function(){var t=this;return this.ruleKeys.some(function(e){return t.getRef(e).$pending})||this.nestedKeys.some(function(e){return t.refProxy(e).$pending})},$params:function(){var t=this,e=this.validations;return r({},o(this.nestedKeys,function(t){return e[t]&&e[t].$params||null}),o(this.ruleKeys,function(e){return t.getRef(e).$params}))}};function h(t){this.dirty=t;var e=this.proxy,n=t?"$touch":"$reset";this.nestedKeys.forEach(function(t){e[t][n]()})}var v={$touch:function(){h.call(this,!0)},$reset:function(){h.call(this,!1)},$flattenParams:function(){var t=this.proxy,e=[];for(var n in this.$params)if(this.isNested(n)){for(var r=t[n].$flattenParams(),i=0;i<r.length;i++)r[i].path.unshift(n);e=e.concat(r)}else e.push({path:[],name:n,params:this.$params[n]});return e}},m=Object.keys(c),p=Object.keys(v),y=null,g=function(t){if(y)return y;var e=t.extend({beforeCreate:function(){this._vval=null},beforeDestroy:function(){this._vval&&(0,i.patchChildren)(this._vval)},methods:{getModel:function(){return this.lazyModel?this.lazyModel(this.prop):this.model},getModelKey:function(t){var e=this.getModel();if(e)return e[t]}},computed:{refs:function(){var t=this._vval;this._vval=this.children,(0,i.patchChildren)(t,this._vval);var e={};return this._vval.forEach(function(t){e[t.key]=t.vm}),e}}}),n=e.extend({data:function(){return{rule:null,lazyModel:null,model:null,lazyParentModel:null,rootModel:null}},methods:{runRule:function(e){var n=this.getModel();(0,a.pushParams)();var r,i=this.rule.call(this.rootModel,n,e),u=l(r=i)&&s(r.then)?function(t,e){var n=new t({data:{p:!0,v:!1}});return e.then(function(t){n.p=!1,n.v=t},function(t){throw n.p=!1,n.v=!1,t}),n[f]=!0,n}(t,i):i,o=(0,a.popParams)();return{output:u,params:o&&o.$sub?o.$sub.length>1?o:o.$sub[0]:null}}},computed:{run:function(){return this.runRule(this.lazyParentModel())},$params:function(){return this.run.params},proxy:function(){var t=this.run.output;return t[f]?!!t.v:!!t},$pending:function(){var t=this.run.output;return!!t[f]&&t.p}}}),h=e.extend({data:function(){return{dirty:!1,validations:null,lazyModel:null,model:null,prop:null,lazyParentModel:null,rootModel:null}},methods:r({},v,{refProxy:function(t){return this.getRef(t).proxy},getRef:function(t){return this.refs[t]},isNested:function(t){return"function"!=typeof this.validations[t]}}),computed:r({},c,{nestedKeys:function(){return this.keys.filter(this.isNested)},ruleKeys:function(){var t=this;return this.keys.filter(function(e){return!t.isNested(e)})},keys:function(){return Object.keys(this.validations).filter(function(t){return"$params"!==t})},proxy:function(){var t=this,e=o(this.keys,function(e){return{enumerable:!0,configurable:!0,get:function(){return t.refProxy(e)}}}),n=o(m,function(e){return{enumerable:!0,configurable:!0,get:function(){return t[e]}}}),i=o(p,function(e){return{enumerable:!1,configurable:!0,get:function(){return t[e]}}});return Object.defineProperties({},r({},e,n,i))},children:function(){var t=this;return[].concat(this.nestedKeys.map(function(e){return b(t,e)}),this.ruleKeys.map(function(e){return $(t,e)})).filter(Boolean)}})}),g=h.extend({methods:{isNested:function(t){return void 0!==this.validations[t]()},getRef:function(t){var e=this;return{get proxy(){return e.validations[t]()||!1}}}}}),_=h.extend({computed:{keys:function(){var t=this.getModel();return l(t)?Object.keys(t):[]},tracker:function(){var t=this,e=this.validations.$trackBy;return e?function(n){return""+d(t.rootModel,t.getModelKey(n),e)}:function(t){return""+t}},eagerParentModel:function(){var t=this.lazyParentModel();return function(){return t}},children:function(){var t=this,e=this.validations,n=this.getModel(),a=r({},e);delete a.$trackBy;var u={};return this.keys.map(function(e){var r=t.tracker(e);return u.hasOwnProperty(r)?null:(u[r]=!0,(0,i.h)(h,r,{validations:a,prop:e,lazyParentModel:t.eagerParentModel,model:n[e],rootModel:t.rootModel}))}).filter(Boolean)}},methods:{isNested:function(){return!0},getRef:function(t){return this.refs[this.tracker(t)]}}}),b=function(t,e){if("$each"===e)return(0,i.h)(_,e,{validations:t.validations[e],lazyParentModel:t.lazyParentModel,prop:e,lazyModel:t.getModel,rootModel:t.rootModel});var n=t.validations[e];if(Array.isArray(n)){var r=t.rootModel,a=o(n,function(t){return function(){return d(r,r.$v,t)}},function(t){return Array.isArray(t)?t.join("."):t});return(0,i.h)(g,e,{validations:a,lazyParentModel:u,prop:e,lazyModel:u,rootModel:r})}return(0,i.h)(h,e,{validations:n,lazyParentModel:t.getModel,prop:e,lazyModel:t.getModelKey,rootModel:t.rootModel})},$=function(t,e){return(0,i.h)(n,e,{rule:t.validations[e],lazyParentModel:t.lazyParentModel,lazyModel:t.getModel,rootModel:t.rootModel})};return y={VBase:e,Validation:h}},_=null;var b=function(t,e){var n=function(t){if(_)return _;for(var e=t.constructor;e.super;)e=e.super;return _=e,e}(t),r=g(n),a=r.Validation;return new(0,r.VBase)({computed:{children:function(){var n="function"==typeof e?e.call(t):e;return[(0,i.h)(a,"$v",{validations:n,lazyParentModel:u,prop:"$v",model:t,rootModel:t})]}}})},$={data:function(){var t=this.$options.validations;return t&&(this._vuelidate=b(this,t)),{}},beforeCreate:function(){var t=this.$options;t.validations&&(t.computed||(t.computed={}),t.computed.$v||(t.computed.$v=function(){return this._vuelidate?this._vuelidate.refs.$v.proxy:null}))},beforeDestroy:function(){this._vuelidate&&(this._vuelidate.$destroy(),this._vuelidate=null)}};function M(t){t.mixin($)}e.Vuelidate=M,e.validationMixin=$,e.withParams=a.withParams,e.default=M},1056:function(t,e,n){"use strict";function r(t){return null===t||void 0===t}function i(t){return null!==t&&void 0!==t}function a(t,e){return e.tag===t.tag&&e.key===t.key}function u(t){var e=t.tag;t.vm=new e({data:t.args})}function o(t,e,n){var r=void 0,a=void 0,u={};for(r=e;r<=n;++r)i(a=t[r].key)&&(u[a]=r);return u}function s(t,e,n){for(;e<=n;++e)u(t[e])}function l(t,e,n){for(;e<=n;++e){var r=t[e];i(r)&&(r.vm.$destroy(),r.vm=null)}}function d(t,e){t!==e&&(e.vm=t.vm,function(t){for(var e=Object.keys(t.args),n=0;n<e.length;n++)e.forEach(function(e){t.vm[e]=t.args[e]})}(e))}Object.defineProperty(e,"__esModule",{value:!0}),e.patchChildren=function(t,e){i(t)&&i(e)?t!==e&&function(t,e){var n=0,f=0,c=t.length-1,h=t[0],v=t[c],m=e.length-1,p=e[0],y=e[m],g=void 0,_=void 0,b=void 0;for(;n<=c&&f<=m;)r(h)?h=t[++n]:r(v)?v=t[--c]:a(h,p)?(d(h,p),h=t[++n],p=e[++f]):a(v,y)?(d(v,y),v=t[--c],y=e[--m]):a(h,y)?(d(h,y),h=t[++n],y=e[--m]):a(v,p)?(d(v,p),v=t[--c],p=e[++f]):(r(g)&&(g=o(t,n,c)),r(_=i(p.key)?g[p.key]:null)?(u(p),p=e[++f]):a(b=t[_],p)?(d(b,p),t[_]=void 0,p=e[++f]):(u(p),p=e[++f]));n>c?s(e,f,m):f>m&&l(t,n,c)}(t,e):i(e)?s(e,0,e.length-1):i(t)&&l(t,0,t.length-1)},e.h=function(t,e,n){return{tag:t,key:e,args:n}}},1057:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.maxValue=e.minValue=e.and=e.or=e.url=e.sameAs=e.requiredUnless=e.requiredIf=e.required=e.minLength=e.maxLength=e.macAddress=e.ipAddress=e.email=e.between=e.numeric=e.alphaNum=e.alpha=void 0;var r=$(n(1058)),i=$(n(1060)),a=$(n(1061)),u=$(n(1062)),o=$(n(1063)),s=$(n(1064)),l=$(n(1065)),d=$(n(1066)),f=$(n(1067)),c=$(n(1068)),h=$(n(1069)),v=$(n(1070)),m=$(n(1071)),p=$(n(1072)),y=$(n(1073)),g=$(n(1074)),_=$(n(1075)),b=$(n(1076));function $(t){return t&&t.__esModule?t:{default:t}}e.alpha=r.default,e.alphaNum=i.default,e.numeric=a.default,e.between=u.default,e.email=o.default,e.ipAddress=s.default,e.macAddress=l.default,e.maxLength=d.default,e.minLength=f.default,e.required=c.default,e.requiredIf=h.default,e.requiredUnless=v.default,e.sameAs=m.default,e.url=p.default,e.or=y.default,e.and=g.default,e.minValue=_.default,e.maxValue=b.default},1058:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.regex)("alpha",/^[a-zA-Z]*$/)},1059:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1054).withParams;e.default=r},1060:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/)},1061:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.regex)("numeric",/^[0-9]*$/)},1062:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t,e){return(0,r.withParams)({type:"between",min:t,max:e},function(n){return!(0,r.req)(n)||(!/\s/.test(n)||n instanceof Date)&&+t<=+n&&+e>=+n})}},1063:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.regex)("email",/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/)},1064:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.withParams)({type:"ipAddress"},function(t){if(!(0,r.req)(t))return!0;if("string"!=typeof t)return!1;var e=t.split(".");return 4===e.length&&e.every(i)});var i=function(t){if(t.length>3||0===t.length)return!1;if("0"===t[0]&&"0"!==t)return!1;if(!t.match(/^\d+$/))return!1;var e=0|+t;return e>=0&&e<=255}},1065:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},function(e){if(!(0,r.req)(e))return!0;if("string"!=typeof e)return!1;var n="string"==typeof t&&""!==t?e.split(t):12===e.length||16===e.length?e.match(/.{2}/g):null;return null!==n&&(6===n.length||8===n.length)&&n.every(i)})};var i=function(t){return t.toLowerCase().match(/^[0-9a-f]{2}$/)}},1066:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"maxLength",max:t},function(e){return!(0,r.req)(e)||(0,r.len)(e)<=t})}},1067:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"minLength",min:t},function(e){return!(0,r.req)(e)||(0,r.len)(e)>=t})}},1068:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.withParams)({type:"required"},r.req)},1069:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"requiredIf",prop:t},function(e,n){return!(0,r.ref)(t,this,n)||(0,r.req)(e)})}},1070:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"requiredUnless",prop:t},function(e,n){return!!(0,r.ref)(t,this,n)||(0,r.req)(e)})}},1071:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"sameAs",eq:t},function(e,n){return e===(0,r.ref)(t,this,n)})}},1072:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=(0,r.regex)("url",/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i)},1073:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,r.withParams)({type:"or"},function(){for(var t=this,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.length>0&&e.reduce(function(e,n){return e||n.apply(t,r)},!1)})}},1074:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return(0,r.withParams)({type:"and"},function(){for(var t=this,n=arguments.length,r=Array(n),i=0;i<n;i++)r[i]=arguments[i];return e.length>0&&e.reduce(function(e,n){return e&&n.apply(t,r)},!0)})}},1075:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"minValue",min:t},function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e>=+t})}},1076:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(1053);e.default=function(t){return(0,r.withParams)({type:"maxValue",max:t},function(e){return!(0,r.req)(e)||(!/\s/.test(e)||e instanceof Date)&&+e<=+t})}},1130:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=n(19),a=(r=i)&&r.__esModule?r:{default:r},u=n(1055),o=n(1057);function s(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,a){try{var u=e[i](a),o=u.value}catch(t){return void n(t)}if(!u.done)return Promise.resolve(o).then(function(t){r("next",t)},function(t){r("throw",t)});t(o)}("next")})}}e.default={name:"GmfPagesAuthVerifyMail",mixins:[u.validationMixin],data:function(){return{mainDatas:{},loading:0,isSended:!1,sending:!1}},validations:{mainDatas:{token:{required:o.required,minLength:(0,o.minLength)(6),maxLength:(0,o.maxLength)(6)}}},computed:{routeQuery:function(){var t={};return this.$route.query&&this.$route.query.continue&&(t.continue=this.$route.query.continue),t},disabledSendBtn:function(){return this.sending||this.isSended||!!this.mainDatas.token},disabledConfirmBtn:function(){return this.sending||!this.mainDatas.token},tipLabel:function(){return"验证码将发送到 "+this.mainDatas.email}},methods:{getValidationClass:function(t){var e=this.$v.mainDatas[t];if(e)return{"md-invalid":e.$invalid&&e.$dirty}},onOtherClick:function(){this.$go(this.$route.query.continue?this.$route.query.continue:this.$root.configs.home)},onSendCode:function(){var t=this;this.sending=!0;var e={id:this.mainDatas.id,account:this.mainDatas.account,type:"verify-mail",mode:"mail"};this.$http.post("sys/auth/vcode-create",e).then(function(e){t.isSended=!0,t.sending=!1,t.$toast("验证码已发送到您的邮件上，请及时查收!")}).catch(function(e){t.sending=!1,t.$toast(e)})},validateForm:function(){this.$v.$touch(),this.$v.$invalid||this.submitPost()},submitPost:function(){var t=this;this.sending=!0;var e={id:this.mainDatas.id,account:this.mainDatas.account,token:this.mainDatas.token};this.$http.post("sys/auth/verify-mail",e).then(function(e){t.sending=!1,t.$go(t.$route.query.continue?t.$route.query.continue:t.$root.configs.home)}).catch(function(e){t.sending=!1,t.$toast(e)})},fetchData:function(){var t=s(a.default.mark(function t(){var e;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,this.sending=!0,t.next=4,this.$http.post("sys/auth/checker",{id:this.$root.configs.user.id});case 4:e=t.sent,this.mainDatas=e.data.data,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),this.$toast(t.t0),this.$go(this.$route.query.continue?this.$route.query.continue:this.$root.configs.home);case 12:return t.prev=12,this.sending=!1,t.finish(12);case 15:case"end":return t.stop()}},t,this,[[0,8,12,15]])}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=s(a.default.mark(function t(){return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.fetchData();case 2:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},1131:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("md-card",[n("md-card-header",[n("md-card-header-text",[n("div",{staticClass:"md-title"},[t._v("帐号认证")]),t._v(" "),n("div",{staticClass:"md-body-1"},[t._v("电子邮件账号认证")])])],1),t._v(" "),n("md-list",[n("md-list-item",[n("md-avatar",[n("md-image",{attrs:{"md-src":t.mainDatas.avatar}})],1),t._v(" "),n("div",{staticClass:"md-list-item-text"},[n("span",[t._v(t._s(t.mainDatas.name))]),t._v(" "),n("span",[t._v(t._s(t.mainDatas.email))])]),t._v(" "),n("md-button",{staticClass:"md-icon-button md-list-action",attrs:{to:{name:"auth.chooser",query:t.routeQuery}}},[n("md-icon",{staticClass:"md-primary"},[t._v("expand_more")])],1)],1)],1),t._v(" "),n("md-card-content",[n("p",[t._v(t._s(t.tipLabel))])]),t._v(" "),n("md-card-actions",[n("md-button",{staticClass:"md-primary md-raised",attrs:{disabled:t.disabledSendBtn},on:{click:t.onSendCode}},[t._v("发送验证码")])],1),t._v(" "),n("form",{attrs:{novalidate:""},on:{submit:function(e){return e.preventDefault(),t.validateForm(e)}}},[n("md-card-content",[n("md-layout",[n("md-field",{class:t.getValidationClass("token")},[n("label",[t._v("验证码")]),t._v(" "),n("md-input",{attrs:{autocomplete:"off",disabled:t.sending},model:{value:t.mainDatas.token,callback:function(e){t.$set(t.mainDatas,"token",e)},expression:"mainDatas.token"}}),t._v(" "),t.$v.mainDatas.token.required?t._e():n("span",{staticClass:"md-error"},[t._v("请输入验证码")]),t._v(" "),t.$v.mainDatas.token.minLength&&t.$v.mainDatas.token.maxLength?t._e():n("span",{staticClass:"md-error"},[t._v("验证码格式不符合要求")])],1)],1)],1),t._v(" "),n("md-card-actions",[n("md-button",{staticClass:"md-primary",on:{click:t.onOtherClick}},[t._v("不想认证了")]),t._v(" "),n("span",{staticClass:"flex"}),t._v(" "),n("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit",disabled:t.disabledConfirmBtn}},[t._v("认证")])],1)],1),t._v(" "),t.sending?n("md-progress-bar",{attrs:{"md-mode":"indeterminate"}}):t._e()],1)},staticRenderFns:[]}}});