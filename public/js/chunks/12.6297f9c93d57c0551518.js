webpackJsonp([12],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AuthCache = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js");

var _AuthCache2 = _interopRequireDefault(_AuthCache);

var _pick = __webpack_require__("./node_modules/lodash/pick.js");

var _pick2 = _interopRequireDefault(_pick);

var _Sns = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");

var _Sns2 = _interopRequireDefault(_Sns);

var _vuelidate = __webpack_require__("./node_modules/vuelidate/lib/index.js");

var _validators = __webpack_require__("./node_modules/vuelidate/lib/validators/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'GmfPagesAuthIdentifier',
  components: {
    AuthSns: _Sns2.default
  },
  mixins: [_vuelidate.validationMixin],
  data: function data() {
    return {
      mainDatas: {},
      loading: 0,
      sending: false
    };
  },

  validations: {
    mainDatas: {
      account: {
        required: _validators.required,
        minLength: (0, _validators.minLength)(3),
        maxLength: (0, _validators.maxLength)(30)
      }
    }
  },
  computed: {
    canRegister: function canRegister() {
      if (!this.$root.configs.auth || !this.$root.configs.auth.register) return false;
      return this.$root.configs.auth.register;
    },
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    }
  },
  methods: {
    getValidationClass: function getValidationClass(fieldName) {
      var field = this.$v.mainDatas[fieldName];
      if (field) {
        return {
          'md-invalid': field.$invalid && field.$dirty
        };
      }
    },
    validateUser: function validateUser() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.submitPost();
      }
    },
    submitPost: function submitPost() {
      var _this = this;

      this.sending = true;
      this.$http.post('sys/auth/checker', this.mainDatas).then(function (response) {
        _this.sending = false;
        var u = response.data.data;
        if (u) {
          u = (0, _pick2.default)(u, ['id', 'account', 'avatar', 'email', 'name', 'nick_name']);
          _AuthCache2.default.add(u);
          _this.$go({ name: 'auth.password', params: { id: u.id }, query: _this.routeQuery });
        }
      }).catch(function (err) {
        _this.sending = false;
        _this.$toast(err);
      });
    },
    fetchData: function fetchData() {}
  },
  created: function created() {},
  mounted: function mounted() {
    this.fetchData();
  }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'GmfPagesAuthSns',
  props: {
    title: {
      type: String,
      default: '使用合作账号登录'
    },
    type: {
      type: String,
      default: 'login'
    }
  },
  data: function data() {
    return {
      sending: false
    };
  },

  computed: {
    canSns: function canSns() {
      if (!this.$root.configs.auth || !this.$root.configs.auth.sns) return false;
      return this.$root.configs.auth.sns;
    },
    snsQQ: function snsQQ() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.qq);
    },
    snsWeixin: function snsWeixin() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.weixin);
    },
    snsWeibo: function snsWeibo() {
      if (!this.canSns) return false;
      return this.makeUrl(this.$root.configs.auth.sns.weibo);
    }
  },
  methods: {
    fetchData: function fetchData() {},
    makeUrl: function makeUrl(old) {
      var url = false;
      if (old && this.type) {
        url = old.indexOf('?') > 0 ? old + '&type=' + this.type : old + '?type=' + this.type;
      } else if (old) {
        url = old;
      }
      if (url && this.$route.query.continue) {
        url = url.indexOf('?') > 0 ? url + '&continue=' + this.$route.query.continue : url + '?continue=' + this.$route.query.continue;
      }
      return url;
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/**\r\n * The default transition, used when the element is visible\r\n * since the beginning of the animation\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The enter transition, used when the element is not visible on the screen\r\n * since the beginning of the animation and become visible\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The leave transition, used when the element is visible on the screen\r\n * since the beginning of the animation and is removed\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The stand transition, used when the element is going to accelerate,\r\n * like movements from bottom to top\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/**\r\n * The out transition, used when the element is going to deaccelerate,\r\n * like movements from top to bottom\r\n * ---\r\n * @access private\r\n * @type transition\r\n * @group transition\r\n */\n/* Transitions - Based on Angular Material */\n/**\r\n * Breakpoint\r\n */\n/**\r\n * Base\r\n */\n/**\r\n * Layout Item\r\n */\n/**\r\n * Hide Element\r\n */\n.login-sns[data-v-d50a4dc6] {\n  text-align: center;\n}\n.login-sns .md-icon-button[data-v-d50a4dc6] {\n    margin: 20px 36px 0px 0px;\n    min-width: auto;\n    box-shadow: none;\n    width: 50px;\n    height: 50px;\n}\n.login-sns .md-icon-button .md-icon[data-v-d50a4dc6] {\n      transition: all .345s;\n      width: 30px;\n      height: 30px;\n      font-size: 30px;\n}\n.login-sns .md-icon-button:hover .md-icon[data-v-d50a4dc6] {\n      transform: scale(1.3);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("e8e9ba5c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sns.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Sns.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6bbca514\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("md-card", [
    _c(
      "form",
      {
        attrs: { novalidate: "" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.validateUser($event)
          }
        }
      },
      [
        _c(
          "md-card-header",
          [
            _c("md-card-header-text", [
              _c("div", { staticClass: "md-title" }, [_vm._v("登录")]),
              _vm._v(" "),
              _c("div", { staticClass: "md-body-1" }, [
                _vm._v("使用您的帐号登录")
              ])
            ]),
            _vm._v(" "),
            _c(
              "md-button",
              {
                staticClass: "md-icon-button md-list-action",
                attrs: { to: { name: "auth.chooser", query: _vm.routeQuery } }
              },
              [
                _c("md-icon", { staticClass: "md-primary" }, [
                  _vm._v("expand_more")
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "md-card-content",
          [
            _c(
              "md-layout",
              [
                _c(
                  "md-field",
                  {
                    class: _vm.getValidationClass("account"),
                    attrs: { "md-clearable": "" }
                  },
                  [
                    _c("label", [_vm._v("电子邮件地址或电话号码")]),
                    _vm._v(" "),
                    _c("md-input", {
                      attrs: { autocomplete: "off", disabled: _vm.sending },
                      model: {
                        value: _vm.mainDatas.account,
                        callback: function($$v) {
                          _vm.$set(_vm.mainDatas, "account", $$v)
                        },
                        expression: "mainDatas.account"
                      }
                    }),
                    _vm._v(" "),
                    !_vm.$v.mainDatas.account.required
                      ? _c("span", { staticClass: "md-error" }, [
                          _vm._v("请输入电子邮件地址或电话号码")
                        ])
                      : _vm._e()
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "md-card-actions",
          [
            _vm.canRegister
              ? _c(
                  "router-link",
                  {
                    attrs: {
                      to: { name: "auth.register", query: _vm.routeQuery }
                    }
                  },
                  [_vm._v("免费注册")]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticClass: "flex" }),
            _vm._v(" "),
            _c(
              "md-button",
              {
                staticClass: "md-primary md-raised",
                attrs: { type: "submit", disabled: _vm.sending }
              },
              [_vm._v("下一步")]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("md-divider"),
        _vm._v(" "),
        _c("auth-sns"),
        _vm._v(" "),
        _vm.sending
          ? _c("md-progress-bar", { attrs: { "md-mode": "indeterminate" } })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-6bbca514", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d50a4dc6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canSns
    ? _c("md-card-content", { staticClass: "login-sns" }, [
        _c("div", { staticClass: "md-subheading" }, [
          _vm._v(_vm._s(_vm.title))
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "layout-row layout-align-center-center" },
          [
            _vm.snsQQ
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsQQ }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-qq.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.snsWeixin
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsWeixin }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-weixin.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.snsWeibo
              ? _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-raised md-primary",
                    attrs: { href: _vm.snsWeibo }
                  },
                  [
                    _c("md-icon", {
                      attrs: {
                        "md-src": "/assets/vendor/gmf-sys/svg/auth-weibo.svg"
                      }
                    })
                  ],
                  1
                )
              : _vm._e()
          ],
          1
        )
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d50a4dc6", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withParams = exports.validationMixin = exports.Vuelidate = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vval = __webpack_require__("./node_modules/vuelidate/lib/vval.js");

var _params = __webpack_require__("./node_modules/vuelidate/lib/params.js");

var NUL = function NUL() {
  return null;
};

var buildFromKeys = function buildFromKeys(keys, fn, keyFn) {
  return keys.reduce(function (build, key) {
    build[keyFn ? keyFn(key) : key] = fn(key);
    return build;
  }, {});
};

function isFunction(val) {
  return typeof val === 'function';
}

function isObject(val) {
  return val !== null && (typeof val === 'object' || isFunction(val));
}

function isPromise(object) {
  return isObject(object) && isFunction(object.then);
}

var getPath = function getPath(ctx, obj, path, fallback) {
  if (typeof path === 'function') {
    return path.call(ctx, obj, fallback);
  }

  path = Array.isArray(path) ? path : path.split('.');
  for (var i = 0; i < path.length; i++) {
    if (obj && typeof obj === 'object') {
      obj = obj[path[i]];
    } else {
      return fallback;
    }
  }

  return typeof obj === 'undefined' ? fallback : obj;
};

var __isVuelidateAsyncVm = '__isVuelidateAsyncVm';
function makePendingAsyncVm(Vue, promise) {
  var asyncVm = new Vue({
    data: {
      p: true, // pending
      v: false // value
    }
  });

  promise.then(function (value) {
    asyncVm.p = false;
    asyncVm.v = value;
  }, function (error) {
    asyncVm.p = false;
    asyncVm.v = false;
    throw error;
  });

  asyncVm[__isVuelidateAsyncVm] = true;
  return asyncVm;
}

var validationGetters = {
  $invalid: function $invalid() {
    var _this = this;

    var proxy = this.proxy;
    return this.nestedKeys.some(function (nested) {
      return _this.refProxy(nested).$invalid;
    }) || this.ruleKeys.some(function (rule) {
      return !proxy[rule];
    });
  },
  $dirty: function $dirty() {
    var _this2 = this;

    if (this.dirty) {
      return true;
    }
    if (this.nestedKeys.length === 0) {
      return false;
    }

    return this.nestedKeys.every(function (key) {
      return _this2.refProxy(key).$dirty;
    });
  },
  $error: function $error() {
    return this.$dirty && !this.$pending && this.$invalid;
  },
  $pending: function $pending() {
    var _this3 = this;

    return this.ruleKeys.some(function (key) {
      return _this3.getRef(key).$pending;
    }) || this.nestedKeys.some(function (key) {
      return _this3.refProxy(key).$pending;
    });
  },
  $params: function $params() {
    var _this4 = this;

    var vals = this.validations;
    return _extends({}, buildFromKeys(this.nestedKeys, function (key) {
      return vals[key] && vals[key].$params || null;
    }), buildFromKeys(this.ruleKeys, function (key) {
      return _this4.getRef(key).$params;
    }));
  }
};

function setDirtyRecursive(newState) {
  this.dirty = newState;
  var proxy = this.proxy;
  var method = newState ? '$touch' : '$reset';
  this.nestedKeys.forEach(function (key) {
    proxy[key][method]();
  });
}

var validationMethods = {
  $touch: function $touch() {
    setDirtyRecursive.call(this, true);
  },
  $reset: function $reset() {
    setDirtyRecursive.call(this, false);
  },
  $flattenParams: function $flattenParams() {
    var proxy = this.proxy;
    var params = [];
    for (var key in this.$params) {
      if (this.isNested(key)) {
        var childParams = proxy[key].$flattenParams();
        for (var j = 0; j < childParams.length; j++) {
          childParams[j].path.unshift(key);
        }
        params = params.concat(childParams);
      } else {
        params.push({ path: [], name: key, params: this.$params[key] });
      }
    }
    return params;
  }
};

var getterNames = Object.keys(validationGetters);
var methodNames = Object.keys(validationMethods);

var _cachedComponent = null;
var getComponent = function getComponent(Vue) {
  if (_cachedComponent) {
    return _cachedComponent;
  }

  var VBase = Vue.extend({
    beforeCreate: function beforeCreate() {
      this._vval = null;
    },
    beforeDestroy: function beforeDestroy() {
      if (this._vval) {
        (0, _vval.patchChildren)(this._vval);
      }
    },

    methods: {
      getModel: function getModel() {
        return this.lazyModel ? this.lazyModel(this.prop) : this.model;
      },
      getModelKey: function getModelKey(key) {
        var model = this.getModel();
        if (model) {
          return model[key];
        }
      }
    },
    computed: {
      refs: function refs() {
        var oldVval = this._vval;
        this._vval = this.children;
        (0, _vval.patchChildren)(oldVval, this._vval);
        var refs = {};
        this._vval.forEach(function (c) {
          refs[c.key] = c.vm;
        });
        return refs;
      }
    }
  });

  var ValidationRule = VBase.extend({
    data: function data() {
      return {
        rule: null,
        lazyModel: null,
        model: null,
        lazyParentModel: null,
        rootModel: null
      };
    },

    methods: {
      runRule: function runRule(parent) {
        // Avoid using this.lazyParentModel to not get dependent on it.
        // Passed as an argument for workaround
        var model = this.getModel();
        (0, _params.pushParams)();
        var rawOutput = this.rule.call(this.rootModel, model, parent);
        var output = isPromise(rawOutput) ? makePendingAsyncVm(Vue, rawOutput) : rawOutput;

        var rawParams = (0, _params.popParams)();
        var params = rawParams && rawParams.$sub ? rawParams.$sub.length > 1 ? rawParams : rawParams.$sub[0] : null;

        return { output: output, params: params };
      }
    },
    computed: {
      run: function run() {
        return this.runRule(this.lazyParentModel());
      },
      $params: function $params() {
        return this.run.params;
      },
      proxy: function proxy() {
        var output = this.run.output;
        if (output[__isVuelidateAsyncVm]) {
          return !!output.v;
        }
        return !!output;
      },
      $pending: function $pending() {
        var output = this.run.output;
        if (output[__isVuelidateAsyncVm]) {
          return output.p;
        }
        return false;
      }
    }
  });

  var Validation = VBase.extend({
    data: function data() {
      return {
        dirty: false,
        validations: null,
        lazyModel: null,
        model: null,
        prop: null,
        lazyParentModel: null,
        rootModel: null
      };
    },

    methods: _extends({}, validationMethods, {
      refProxy: function refProxy(key) {
        return this.getRef(key).proxy;
      },
      getRef: function getRef(key) {
        return this.refs[key];
      },
      isNested: function isNested(key) {
        return typeof this.validations[key] !== 'function';
      }
    }),
    computed: _extends({}, validationGetters, {
      nestedKeys: function nestedKeys() {
        return this.keys.filter(this.isNested);
      },
      ruleKeys: function ruleKeys() {
        var _this5 = this;

        return this.keys.filter(function (k) {
          return !_this5.isNested(k);
        });
      },
      keys: function keys() {
        return Object.keys(this.validations).filter(function (k) {
          return k !== '$params';
        });
      },
      proxy: function proxy() {
        var _this6 = this;

        var keyDefs = buildFromKeys(this.keys, function (key) {
          return {
            enumerable: true,
            configurable: true, // allow mocking lib calls
            get: function get() {
              return _this6.refProxy(key);
            }
          };
        });

        var getterDefs = buildFromKeys(getterNames, function (key) {
          return {
            enumerable: true,
            configurable: true,
            get: function get() {
              return _this6[key];
            }
          };
        });

        var methodDefs = buildFromKeys(methodNames, function (key) {
          return {
            enumerable: false,
            configurable: true,
            get: function get() {
              return _this6[key];
            }
          };
        });

        return Object.defineProperties({}, _extends({}, keyDefs, getterDefs, methodDefs));
      },
      children: function children() {
        var _this7 = this;

        return [].concat(this.nestedKeys.map(function (key) {
          return renderNested(_this7, key);
        }), this.ruleKeys.map(function (key) {
          return renderRule(_this7, key);
        })).filter(Boolean);
      }
    })
  });

  var GroupValidation = Validation.extend({
    methods: {
      isNested: function isNested(key) {
        return typeof this.validations[key]() !== 'undefined';
      },
      getRef: function getRef(key) {
        var vm = this;
        return {
          get proxy() {
            // default to invalid
            return vm.validations[key]() || false;
          }
        };
      }
    }
  });

  var EachValidation = Validation.extend({
    computed: {
      keys: function keys() {
        var model = this.getModel();
        if (isObject(model)) {
          return Object.keys(model);
        } else {
          return [];
        }
      },
      tracker: function tracker() {
        var _this8 = this;

        var trackBy = this.validations.$trackBy;
        return trackBy ? function (key) {
          return '' + getPath(_this8.rootModel, _this8.getModelKey(key), trackBy);
        } : function (x) {
          return '' + x;
        };
      },
      eagerParentModel: function eagerParentModel() {
        var parent = this.lazyParentModel();
        return function () {
          return parent;
        };
      },
      children: function children() {
        var _this9 = this;

        var def = this.validations;
        var model = this.getModel();

        var validations = _extends({}, def);
        delete validations['$trackBy'];

        var usedTracks = {};

        return this.keys.map(function (key) {
          var track = _this9.tracker(key);
          if (usedTracks.hasOwnProperty(track)) {
            return null;
          }
          usedTracks[track] = true;
          return (0, _vval.h)(Validation, track, {
            validations: validations,
            prop: key,
            lazyParentModel: _this9.eagerParentModel,
            model: model[key],
            rootModel: _this9.rootModel
          });
        }).filter(Boolean);
      }
    },
    methods: {
      isNested: function isNested() {
        return true;
      },
      getRef: function getRef(key) {
        return this.refs[this.tracker(key)];
      }
    }
  });

  var renderNested = function renderNested(vm, key) {
    if (key === '$each') {
      return (0, _vval.h)(EachValidation, key, {
        validations: vm.validations[key],
        lazyParentModel: vm.lazyParentModel,
        prop: key,
        lazyModel: vm.getModel,
        rootModel: vm.rootModel
      });
    }
    var validations = vm.validations[key];
    if (Array.isArray(validations)) {
      var root = vm.rootModel;
      var refVals = buildFromKeys(validations, function (path) {
        return function () {
          return getPath(root, root.$v, path);
        };
      }, function (v) {
        return Array.isArray(v) ? v.join('.') : v;
      });
      return (0, _vval.h)(GroupValidation, key, {
        validations: refVals,
        lazyParentModel: NUL,
        prop: key,
        lazyModel: NUL,
        rootModel: root
      });
    }
    return (0, _vval.h)(Validation, key, {
      validations: validations,
      lazyParentModel: vm.getModel,
      prop: key,
      lazyModel: vm.getModelKey,
      rootModel: vm.rootModel
    });
  };

  var renderRule = function renderRule(vm, key) {
    return (0, _vval.h)(ValidationRule, key, {
      rule: vm.validations[key],
      lazyParentModel: vm.lazyParentModel,
      lazyModel: vm.getModel,
      rootModel: vm.rootModel
    });
  };

  _cachedComponent = { VBase: VBase, Validation: Validation };
  return _cachedComponent;
};

var _cachedVue = null;
function getVue(rootVm) {
  if (_cachedVue) return _cachedVue;
  var Vue = rootVm.constructor;
  /* istanbul ignore next */
  while (Vue.super) {
    Vue = Vue.super;
  }_cachedVue = Vue;
  return Vue;
}

var validateModel = function validateModel(model, validations) {
  var Vue = getVue(model);

  var _getComponent = getComponent(Vue),
      Validation = _getComponent.Validation,
      VBase = _getComponent.VBase;

  var root = new VBase({
    computed: {
      children: function children() {
        var vals = typeof validations === 'function' ? validations.call(model) : validations;

        return [(0, _vval.h)(Validation, '$v', {
          validations: vals,
          lazyParentModel: NUL,
          prop: '$v',
          model: model,
          rootModel: model
        })];
      }
    }
  });
  return root;
};

var validationMixin = {
  data: function data() {
    var vals = this.$options.validations;
    if (vals) {
      this._vuelidate = validateModel(this, vals);
    }
    return {};
  },
  beforeCreate: function beforeCreate() {
    var options = this.$options;
    var vals = options.validations;
    if (!vals) return;
    if (!options.computed) options.computed = {};
    if (options.computed.$v) return;
    options.computed.$v = function () {
      return this._vuelidate ? this._vuelidate.refs.$v.proxy : null;
    };
  },
  beforeDestroy: function beforeDestroy() {
    if (this._vuelidate) {
      this._vuelidate.$destroy();
      this._vuelidate = null;
    }
  }
};

function Vuelidate(Vue) {
  Vue.mixin(validationMixin);
}

exports.Vuelidate = Vuelidate;
exports.validationMixin = validationMixin;
exports.withParams = _params.withParams;
exports.default = Vuelidate;

/***/ }),

/***/ "./node_modules/vuelidate/lib/params.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.pushParams = pushParams;
exports.popParams = popParams;
exports.withParams = withParams;

var stack = [];

// exported for tests
var target = exports.target = null;
var _setTarget = exports._setTarget = function _setTarget(x) {
  exports.target = target = x;
};

function pushParams() {
  if (target !== null) {
    stack.push(target);
  }
  exports.target = target = {};
}

function popParams() {
  var lastTarget = target;
  var newTarget = exports.target = target = stack.pop() || null;
  if (newTarget) {
    if (!Array.isArray(newTarget.$sub)) {
      newTarget.$sub = [];
    }
    newTarget.$sub.push(lastTarget);
  }
  return lastTarget;
}

function addParams(params) {
  if (typeof params === 'object' && !Array.isArray(params)) {
    exports.target = target = _extends({}, target, params);
  } else {
    throw new Error('params must be an object');
  }
}

function withParamsDirect(params, validator) {
  return withParamsClosure(function (add) {
    return function () {
      add(params);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return validator.apply(this, args);
    };
  });
}

function withParamsClosure(closure) {
  var validator = closure(addParams);
  return function () {
    pushParams();
    try {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return validator.apply(this, args);
    } finally {
      popParams();
    }
  };
}

function withParams(paramsOrClosure, maybeValidator) {
  if (typeof paramsOrClosure === 'object' && maybeValidator !== undefined) {
    return withParamsDirect(paramsOrClosure, maybeValidator);
  }
  return withParamsClosure(paramsOrClosure);
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alpha.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = (0, _common.regex)('alpha', /^[a-zA-Z]*$/);

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/alphaNum.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = (0, _common.regex)('alphaNum', /^[a-zA-Z0-9]*$/);

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/and.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function () {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({ type: 'and' }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid && fn.apply(_this, args);
    }, true);
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/between.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (min, max) {
  return (0, _common.withParams)({ type: 'between', min: min, max: max }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +min <= +value && +max >= +value;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.regex = exports.ref = exports.len = exports.req = exports.withParams = undefined;

var _withParams = __webpack_require__("./node_modules/vuelidate/lib/withParams.js");

var _withParams2 = _interopRequireDefault(_withParams);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.withParams = _withParams2.default;

// "required" core, used in almost every validator to allow empty values

var req = exports.req = function req(value) {
  if (Array.isArray(value)) return !!value.length;
  if (value === undefined || value === null || value === false) {
    return false;
  }

  if (value instanceof Date) {
    // invalid date won't pass
    return !isNaN(value.getTime());
  }

  if (typeof value === 'object') {
    for (var _ in value) {
      return true;
    }return false;
  }

  return !!String(value).length;
};

// get length in type-agnostic way
var len = exports.len = function len(value) {
  if (Array.isArray(value)) return value.length;
  if (typeof value === 'object') {
    return Object.keys(value).length;
  }
  return String(value).length;
};

// resolve referenced value
var ref = exports.ref = function ref(reference, vm, parentVm) {
  return typeof reference === 'function' ? reference.call(vm, parentVm) : parentVm[reference];
};

// regex based validator template
var regex = exports.regex = function regex(type, expr) {
  return (0, _withParams2.default)({ type: type }, function (value) {
    return !req(value) || expr.test(value);
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/email.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var emailRegex = /(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/;

exports.default = (0, _common.regex)('email', emailRegex);

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxValue = exports.minValue = exports.and = exports.or = exports.url = exports.sameAs = exports.requiredUnless = exports.requiredIf = exports.required = exports.minLength = exports.maxLength = exports.macAddress = exports.ipAddress = exports.email = exports.between = exports.numeric = exports.alphaNum = exports.alpha = undefined;

var _alpha = __webpack_require__("./node_modules/vuelidate/lib/validators/alpha.js");

var _alpha2 = _interopRequireDefault(_alpha);

var _alphaNum = __webpack_require__("./node_modules/vuelidate/lib/validators/alphaNum.js");

var _alphaNum2 = _interopRequireDefault(_alphaNum);

var _numeric = __webpack_require__("./node_modules/vuelidate/lib/validators/numeric.js");

var _numeric2 = _interopRequireDefault(_numeric);

var _between = __webpack_require__("./node_modules/vuelidate/lib/validators/between.js");

var _between2 = _interopRequireDefault(_between);

var _email = __webpack_require__("./node_modules/vuelidate/lib/validators/email.js");

var _email2 = _interopRequireDefault(_email);

var _ipAddress = __webpack_require__("./node_modules/vuelidate/lib/validators/ipAddress.js");

var _ipAddress2 = _interopRequireDefault(_ipAddress);

var _macAddress = __webpack_require__("./node_modules/vuelidate/lib/validators/macAddress.js");

var _macAddress2 = _interopRequireDefault(_macAddress);

var _maxLength = __webpack_require__("./node_modules/vuelidate/lib/validators/maxLength.js");

var _maxLength2 = _interopRequireDefault(_maxLength);

var _minLength = __webpack_require__("./node_modules/vuelidate/lib/validators/minLength.js");

var _minLength2 = _interopRequireDefault(_minLength);

var _required = __webpack_require__("./node_modules/vuelidate/lib/validators/required.js");

var _required2 = _interopRequireDefault(_required);

var _requiredIf = __webpack_require__("./node_modules/vuelidate/lib/validators/requiredIf.js");

var _requiredIf2 = _interopRequireDefault(_requiredIf);

var _requiredUnless = __webpack_require__("./node_modules/vuelidate/lib/validators/requiredUnless.js");

var _requiredUnless2 = _interopRequireDefault(_requiredUnless);

var _sameAs = __webpack_require__("./node_modules/vuelidate/lib/validators/sameAs.js");

var _sameAs2 = _interopRequireDefault(_sameAs);

var _url = __webpack_require__("./node_modules/vuelidate/lib/validators/url.js");

var _url2 = _interopRequireDefault(_url);

var _or = __webpack_require__("./node_modules/vuelidate/lib/validators/or.js");

var _or2 = _interopRequireDefault(_or);

var _and = __webpack_require__("./node_modules/vuelidate/lib/validators/and.js");

var _and2 = _interopRequireDefault(_and);

var _minValue = __webpack_require__("./node_modules/vuelidate/lib/validators/minValue.js");

var _minValue2 = _interopRequireDefault(_minValue);

var _maxValue = __webpack_require__("./node_modules/vuelidate/lib/validators/maxValue.js");

var _maxValue2 = _interopRequireDefault(_maxValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.alpha = _alpha2.default;
exports.alphaNum = _alphaNum2.default;
exports.numeric = _numeric2.default;
exports.between = _between2.default;
exports.email = _email2.default;
exports.ipAddress = _ipAddress2.default;
exports.macAddress = _macAddress2.default;
exports.maxLength = _maxLength2.default;
exports.minLength = _minLength2.default;
exports.required = _required2.default;
exports.requiredIf = _requiredIf2.default;
exports.requiredUnless = _requiredUnless2.default;
exports.sameAs = _sameAs2.default;
exports.url = _url2.default;
exports.or = _or2.default;
exports.and = _and2.default;
exports.minValue = _minValue2.default;
exports.maxValue = _maxValue2.default;

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/ipAddress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = (0, _common.withParams)({ type: 'ipAddress' }, function (value) {
  if (!(0, _common.req)(value)) {
    return true;
  }

  if (typeof value !== 'string') {
    return false;
  }

  var nibbles = value.split('.');
  return nibbles.length === 4 && nibbles.every(nibbleValid);
});


var nibbleValid = function nibbleValid(nibble) {
  if (nibble.length > 3 || nibble.length === 0) {
    return false;
  }

  if (nibble[0] === '0' && nibble !== '0') {
    return false;
  }

  if (!nibble.match(/^\d+$/)) {
    return false;
  }

  var numeric = +nibble | 0;
  return numeric >= 0 && numeric <= 255;
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/macAddress.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function () {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ':';
  return (0, _common.withParams)({ type: 'macAddress' }, function (value) {
    if (!(0, _common.req)(value)) {
      return true;
    }

    if (typeof value !== 'string') {
      return false;
    }

    var parts = typeof separator === 'string' && separator !== '' ? value.split(separator) : value.length === 12 || value.length === 16 ? value.match(/.{2}/g) : null;

    return parts !== null && (parts.length === 6 || parts.length === 8) && parts.every(hexValid);
  });
};

var hexValid = function hexValid(hex) {
  return hex.toLowerCase().match(/^[0-9a-f]{2}$/);
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxLength.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (length) {
  return (0, _common.withParams)({ type: 'maxLength', max: length }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) <= length;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/maxValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (max) {
  return (0, _common.withParams)({ type: 'maxValue', max: max }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value <= +max;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minLength.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (length) {
  return (0, _common.withParams)({ type: 'minLength', min: length }, function (value) {
    return !(0, _common.req)(value) || (0, _common.len)(value) >= length;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/minValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (min) {
  return (0, _common.withParams)({ type: 'minValue', min: min }, function (value) {
    return !(0, _common.req)(value) || (!/\s/.test(value) || value instanceof Date) && +value >= +min;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/numeric.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = (0, _common.regex)('numeric', /^[0-9]*$/);

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/or.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function () {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  return (0, _common.withParams)({ type: 'or' }, function () {
    var _this = this;

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return validators.length > 0 && validators.reduce(function (valid, fn) {
      return valid || fn.apply(_this, args);
    }, false);
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/required.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = (0, _common.withParams)({ type: 'required' }, _common.req);

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredIf.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (prop) {
  return (0, _common.withParams)({ type: 'requiredIf', prop: prop }, function (value, parentVm) {
    return (0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/requiredUnless.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (prop) {
  return (0, _common.withParams)({ type: 'requiredUnless', prop: prop }, function (value, parentVm) {
    return !(0, _common.ref)(prop, this, parentVm) ? (0, _common.req)(value) : true;
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/sameAs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

exports.default = function (equalTo) {
  return (0, _common.withParams)({ type: 'sameAs', eq: equalTo }, function (value, parentVm) {
    return value === (0, _common.ref)(equalTo, this, parentVm);
  });
};

/***/ }),

/***/ "./node_modules/vuelidate/lib/validators/url.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _common = __webpack_require__("./node_modules/vuelidate/lib/validators/common.js");

var urlRegex = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

exports.default = (0, _common.regex)('url', urlRegex);

/***/ }),

/***/ "./node_modules/vuelidate/lib/vval.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.patchChildren = patchChildren;
exports.h = h;
// a minimial single-layer implementation
// of virtual-validation patching,
// based on Vue's snabbdom clone

function isUndef(v) {
  return v === null || v === undefined;
}

function isDef(v) {
  return v !== null && v !== undefined;
}

function sameVval(oldVval, vval) {
  return vval.tag === oldVval.tag && vval.key === oldVval.key;
}

function createVm(vval) {
  var Vm = vval.tag;
  vval.vm = new Vm({ data: vval.args });
}

function updateVval(vval) {
  var keys = Object.keys(vval.args);
  for (var i = 0; i < keys.length; i++) {
    keys.forEach(function (k) {
      vval.vm[k] = vval.args[k];
    });
  }
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i = void 0,
      key = void 0;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) map[key] = i;
  }
  return map;
}

function updateChildren(oldCh, newCh) {
  var oldStartIdx = 0;
  var newStartIdx = 0;
  var oldEndIdx = oldCh.length - 1;
  var oldStartVval = oldCh[0];
  var oldEndVval = oldCh[oldEndIdx];
  var newEndIdx = newCh.length - 1;
  var newStartVval = newCh[0];
  var newEndVval = newCh[newEndIdx];
  var oldKeyToIdx = void 0,
      idxInOld = void 0,
      elmToMove = void 0;

  while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
    if (isUndef(oldStartVval)) {
      oldStartVval = oldCh[++oldStartIdx]; // Vval has been moved left
    } else if (isUndef(oldEndVval)) {
      oldEndVval = oldCh[--oldEndIdx];
    } else if (sameVval(oldStartVval, newStartVval)) {
      patchVval(oldStartVval, newStartVval);
      oldStartVval = oldCh[++oldStartIdx];
      newStartVval = newCh[++newStartIdx];
    } else if (sameVval(oldEndVval, newEndVval)) {
      patchVval(oldEndVval, newEndVval);
      oldEndVval = oldCh[--oldEndIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldStartVval, newEndVval)) {
      // Vval moved right
      patchVval(oldStartVval, newEndVval);
      oldStartVval = oldCh[++oldStartIdx];
      newEndVval = newCh[--newEndIdx];
    } else if (sameVval(oldEndVval, newStartVval)) {
      // Vval moved left
      patchVval(oldEndVval, newStartVval);
      oldEndVval = oldCh[--oldEndIdx];
      newStartVval = newCh[++newStartIdx];
    } else {
      if (isUndef(oldKeyToIdx)) oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
      idxInOld = isDef(newStartVval.key) ? oldKeyToIdx[newStartVval.key] : null;
      if (isUndef(idxInOld)) {
        // New element
        createVm(newStartVval);
        newStartVval = newCh[++newStartIdx];
      } else {
        elmToMove = oldCh[idxInOld];
        if (sameVval(elmToMove, newStartVval)) {
          patchVval(elmToMove, newStartVval);
          oldCh[idxInOld] = undefined;
          newStartVval = newCh[++newStartIdx];
        } else {
          // same key but different element. treat as new element
          createVm(newStartVval);
          newStartVval = newCh[++newStartIdx];
        }
      }
    }
  }
  if (oldStartIdx > oldEndIdx) {
    addVvals(newCh, newStartIdx, newEndIdx);
  } else if (newStartIdx > newEndIdx) {
    removeVvals(oldCh, oldStartIdx, oldEndIdx);
  }
}

function addVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    createVm(vvals[startIdx]);
  }
}

function removeVvals(vvals, startIdx, endIdx) {
  for (; startIdx <= endIdx; ++startIdx) {
    var ch = vvals[startIdx];
    if (isDef(ch)) {
      ch.vm.$destroy();
      ch.vm = null;
    }
  }
}

function patchVval(oldVval, vval) {
  if (oldVval === vval) {
    return;
  }
  vval.vm = oldVval.vm;
  updateVval(vval);
}

function patchChildren(oldCh, ch) {
  if (isDef(oldCh) && isDef(ch)) {
    if (oldCh !== ch) updateChildren(oldCh, ch);
  } else if (isDef(ch)) {
    addVvals(ch, 0, ch.length - 1);
  } else if (isDef(oldCh)) {
    removeVvals(oldCh, 0, oldCh.length - 1);
  }
}

function h(tag, key, args) {
  return { tag: tag, key: key, args: args };
}

/***/ }),

/***/ "./node_modules/vuelidate/lib/withParams.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* istanbul ignore next */
var withParams =  false ? require('./withParamsBrowser').withParams : __webpack_require__("./node_modules/vuelidate/lib/params.js").withParams;

exports.default = withParams;

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AuthCache = function () {
  function AuthCache() {
    _classCallCheck(this, AuthCache);

    this.storageKey = "gmf.sys.auth." + window.location.host;
  }

  _createClass(AuthCache, [{
    key: "get",
    value: function get() {
      return JSON.parse(localStorage.getItem(this.storageKey)) || [];
    }
  }, {
    key: "has",
    value: function has(user) {
      return false;
    }
  }, {
    key: "remove",
    value: function remove(user) {
      if (!user) return;
      var users = this.get();
      var ind = -1;
      for (var i = 0; i < users.length; i++) {
        if (users[i].id == user.id) {
          ind = i;
          break;
        }
      }
      if (i >= 0) {
        users.splice(i, 1);
        localStorage.removeItem(this.storageKey);
        localStorage.setItem(this.storageKey, JSON.stringify(users));
      }
    }
  }, {
    key: "add",
    value: function add(user) {
      if (!user) return;
      var users = this.get();
      var isExists = false;
      users.forEach(function (item) {
        if (item.id == user.id) {
          isExists = true;
        }
      });
      if (!isExists) {
        users.push(user);
      }
      localStorage.removeItem(this.storageKey);
      localStorage.setItem(this.storageKey, JSON.stringify(users));
    }
  }]);

  return AuthCache;
}();

exports.default = new AuthCache();

/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-6bbca514\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Identifier.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Identifier.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6bbca514", Component.options)
  } else {
    hotAPI.reload("data-v-6bbca514", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-d50a4dc6\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-d50a4dc6\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d50a4dc6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Sns.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d50a4dc6", Component.options)
  } else {
    hotAPI.reload("data-v-d50a4dc6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});