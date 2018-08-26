webpackJsonp([18],{

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1093)
/* template */
var __vue_template__ = __webpack_require__(1094)
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
Component.options.__file = "resources\\assets\\js\\components\\BottomBar\\HomeBottomBar.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-19b1930e", Component.options)
  } else {
    hotAPI.reload("data-v-19b1930e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1093:
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

/***/ 1094:
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
        attrs: { to: "/m/works", "md-label": "工作", "md-icon": "dashboard" }
      }),
      _vm._v(" "),
      _c("md-bottom-bar-item", {
        attrs: { to: "/", "md-label": "报表", "md-icon": "assessment" }
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
    require("vue-hot-reload-api")      .rerender("data-v-19b1930e", module.exports)
  }
}

/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1198);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1036)("66df01cc", content, false, {});
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

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)(false);
// imports


// module
exports.push([module.i, "\n.md-app[data-v-1e379e4e] {\n  min-height: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeBottomBar = __webpack_require__(1092);

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
    onClick: function onClick(item) {
      //this.$tip('test');
      // this.$tip.loading({ mask: true, message:  item.title });
      // this.$tip.loading({ mask: true, message:  item.title });
      this.$tip.success('成功文案');
      this.$tip.fail('失败文案');
    },
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

/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-app",
    { attrs: { "md-waterfall": "", "md-mode": "fixed" } },
    [
      _c(
        "md-app-content",
        [
          _c("md-x-search", {
            attrs: { placeholder: "输入您想要查找的内容" },
            on: { search: _vm.onSearch },
            model: {
              value: _vm.search_q,
              callback: function($$v) {
                _vm.search_q = $$v
              },
              expression: "search_q"
            }
          }),
          _vm._v(" "),
          _c(
            "md-x-cell-group",
            _vm._l(_vm.items, function(item) {
              return _c(
                "md-x-cell",
                { key: item.id },
                [
                  _c(
                    "template",
                    { slot: "icon" },
                    [
                      _c("md-avatar", [
                        _c("img", { attrs: { src: item.avatar } })
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("template", { slot: "title" }, [
                    _c("h3", [_vm._v(_vm._s(item.title))]),
                    _vm._v(" "),
                    _c("p", [_vm._v(_vm._s(item.text))])
                  ]),
                  _vm._v(" "),
                  _c(
                    "template",
                    { slot: "extra" },
                    [
                      _c(
                        "md-button",
                        { staticClass: "md-icon-button" },
                        [
                          _c("md-icon", { staticClass: "md-primary" }, [
                            _vm._v("star")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                2
              )
            })
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

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1197)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1199)
/* template */
var __vue_template__ = __webpack_require__(1200)
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