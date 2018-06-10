webpackJsonp([21],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Remove.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Sns = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/Sns.vue");

var _Sns2 = _interopRequireDefault(_Sns);

var _AuthCache = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js");

var _AuthCache2 = _interopRequireDefault(_AuthCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
//
//
//
//
//
//
//

exports.default = {
  name: 'AppAuthRemove',
  components: {
    AuthSns: _Sns2.default
  },
  data: function data() {
    return {
      mainDatas: [],
      sending: false
    };
  },

  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    }
  },
  methods: {
    removeItem: function removeItem(item) {
      _AuthCache2.default.remove(item);
      this.fetchData();
    },
    fetchData: function fetchData() {
      this.mainDatas = _AuthCache2.default.get() || [];
    }
  },
  mounted: function mounted() {
    this.fetchData();
  }
};

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

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1308a622\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Remove.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-card",
    [
      _c(
        "md-card-header",
        [
          _c("md-card-header-text", [
            _c("div", { staticClass: "md-title" }, [_vm._v("从此浏览器中移除")])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "md-list",
        [
          _vm._l(_vm.mainDatas, function(item) {
            return _c(
              "md-list-item",
              { key: item.id },
              [
                _c(
                  "md-avatar",
                  [_c("md-image", { attrs: { "md-src": item.avatar } })],
                  1
                ),
                _vm._v(" "),
                _c("div", { staticClass: "md-list-item-text" }, [
                  _c("span", [_vm._v(_vm._s(item.name))]),
                  _vm._v(" "),
                  _c("span", [_vm._v(_vm._s(item.account))])
                ]),
                _vm._v(" "),
                _c(
                  "md-button",
                  {
                    staticClass: "md-icon-button md-list-action",
                    on: {
                      click: function($event) {
                        _vm.removeItem(item)
                      }
                    }
                  },
                  [_c("md-icon", [_vm._v("clear")])],
                  1
                )
              ],
              1
            )
          }),
          _vm._v(" "),
          _c(
            "md-list-item",
            {
              attrs: { to: { name: "auth.identifier", query: _vm.routeQuery } }
            },
            [
              _c(
                "md-avatar",
                [
                  _c("md-icon", { staticClass: "md-size-2x" }, [
                    _vm._v("account_circle")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "md-list-item-text" }, [
                _vm._v("\n        使用其他帐号\n      ")
              ])
            ],
            1
          )
        ],
        2
      ),
      _vm._v(" "),
      _c("md-divider"),
      _vm._v(" "),
      _c(
        "md-card-content",
        { staticClass: "layout layout-align-center-center" },
        [
          _c(
            "md-button",
            { attrs: { to: { name: "auth.login", query: _vm.routeQuery } } },
            [_c("md-icon", [_vm._v("完成")])],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.sending
        ? _c("md-progress-bar", { attrs: { "md-mode": "indeterminate" } })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1308a622", module.exports)
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

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Remove.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Remove.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1308a622\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Remove.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Remove.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1308a622", Component.options)
  } else {
    hotAPI.reload("data-v-1308a622", Component.options)
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