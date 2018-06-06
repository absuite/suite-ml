webpackJsonp([3],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/NavBar/HomeBottomBar.vue":
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

exports.default = {
  name: 'HomeBottomBar',
  data: function data() {
    return {
      menuVisible: false
    };
  },
  methods: {},
  created: function created() {},
  mounted: function mounted() {}
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Messages/Message.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeBottomBar = __webpack_require__("./resources/assets/js/components/NavBar/HomeBottomBar.vue");

var _HomeBottomBar2 = _interopRequireDefault(_HomeBottomBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "Home",
  components: {
    HomeBottomBar: _HomeBottomBar2.default
  },
  data: function data() {
    return {
      items: [],
      loading: false
    };
  },
  methods: {
    onLoad: function onLoad() {
      var _this = this;

      setTimeout(function () {
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/1.jpg",
          "title": "Ali Connors",
          "text": "If you pass a href attribute, the item will automatically render an a tag."
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/2.jpg",
          "title": "me, Scott, Jennifer",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/3.jpg",
          "title": "Sandra Adams",
          "text": "List items will render different tags based on the interaction types given."
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/4.jpg",
          "title": "Trevor Hansen",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/5.jpg",
          "title": "aliconnors@example.com",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/6.jpg",
          "title": "ali_connors@example.com",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/7.jpg",
          "title": "ali_connors@example.com",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/8.jpg",
          "title": "ali_connors@example.com",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/9.jpg",
          "title": "ali_connors@example.com",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/10.jpg",
          "title": "ali_connors@example.com",
          "text": "I'll be in your neighborhood"
        });
        _this.items.push({
          "avatar": "/assets/vendor/gmf-sys/avatar/11.jpg",
          "title": "ali_connors@example.com",
          "text": "I'll be in your neighborhood"
        });
      }, 500);
    }
  },
  mounted: function mounted() {
    this.onLoad();
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
//

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e379e4e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Messages/Message.vue":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.md-app[data-v-1e379e4e] {\n  min-height: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e379e4e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Messages/Message.vue":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e379e4e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Messages/Message.vue");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__("./node_modules/vue-style-loader/lib/addStylesClient.js")("66df01cc", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e379e4e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e379e4e\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Message.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e379e4e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Messages/Message.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-app",
    { attrs: { "md-waterfall": "", "md-mode": "fixed" } },
    [
      _c("md-app-toolbar", { staticClass: "md-primary" }, [
        _c("div", { staticClass: "md-toolbar-row" }, [
          _c("div", { staticClass: "md-toolbar-section-start" }),
          _vm._v(" "),
          _c("div", { staticClass: "flex md-title" }, [_vm._v("消息")]),
          _vm._v(" "),
          _c("div", { staticClass: "md-toolbar-section-end" })
        ])
      ]),
      _vm._v(" "),
      _c(
        "md-app-content",
        [
          _c(
            "md-list",
            { staticClass: "md-triple-line" },
            [
              _vm._l(_vm.items, function(item) {
                return [
                  _c(
                    "md-list-item",
                    [
                      _c("md-avatar", [
                        _c("img", { attrs: { src: item.avatar } })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "md-list-item-text" }, [
                        _c("span", [_vm._v(_vm._s(item.title))]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(item.text))])
                      ]),
                      _vm._v(" "),
                      _c(
                        "md-button",
                        { staticClass: "md-icon-button md-list-action" },
                        [
                          _c("md-icon", { staticClass: "md-primary" }, [
                            _vm._v("star")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("md-divider", { staticClass: "md-inset" })
                ]
              })
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("md-app-bottom-bar", [_c("home-bottom-bar")], 1)
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
    require("vue-hot-reload-api")      .rerender("data-v-1e379e4e", module.exports)
  }
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cc378b98\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/NavBar/HomeBottomBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-bottom-bar",
    { attrs: { "md-sync-route": "" } },
    [
      _c("md-bottom-bar-item", {
        attrs: { to: "/", "md-label": "消息", "md-icon": "speaker_notes" }
      }),
      _vm._v(" "),
      _c("md-bottom-bar-item", {
        attrs: { to: "/m/works", "md-label": "工作", "md-icon": "dashboard" }
      }),
      _vm._v(" "),
      _c("md-bottom-bar-item", {
        attrs: { to: "/m/reports", "md-label": "报表", "md-icon": "assessment" }
      }),
      _vm._v(" "),
      _c("md-bottom-bar-item", {
        attrs: {
          to: "/m/settings",
          "md-label": "我的",
          "md-icon": "perm_identity"
        }
      })
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
    require("vue-hot-reload-api")      .rerender("data-v-cc378b98", module.exports)
  }
}

/***/ }),

/***/ "./resources/assets/js/components/NavBar/HomeBottomBar.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/components/NavBar/HomeBottomBar.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-cc378b98\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/components/NavBar/HomeBottomBar.vue")
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
Component.options.__file = "resources\\assets\\js\\components\\NavBar\\HomeBottomBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc378b98", Component.options)
  } else {
    hotAPI.reload("data-v-cc378b98", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ "./resources/assets/js/pages/Messages/Message.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__("./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"id\":1,\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e379e4e\",\"scoped\":true,\"hasInlineConfig\":true}!./node_modules/sass-loader/lib/loader.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./resources/assets/js/pages/Messages/Message.vue")
}
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/pages/Messages/Message.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-1e379e4e\",\"hasScoped\":true,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/pages/Messages/Message.vue")
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1e379e4e"
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
Component.options.__file = "resources\\assets\\js\\pages\\Messages\\Message.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e379e4e", Component.options)
  } else {
    hotAPI.reload("data-v-1e379e4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});