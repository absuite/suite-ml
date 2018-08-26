webpackJsonp([15],{

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

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1238);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1036)("7fd9318f", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-941e44fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Work.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-941e44fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Work.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)(false);
// imports


// module
exports.push([module.i, "\n.md-app[data-v-941e44fc] {\n  min-height: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n.md-layout-grid[data-v-941e44fc] {\n  background: white;\n}\n", ""]);

// exports


/***/ }),

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomeBottomBar = __webpack_require__(1092);

var _HomeBottomBar2 = _interopRequireDefault(_HomeBottomBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: "Work",
  components: {
    HomeBottomBar: _HomeBottomBar2.default
  },
  data: function data() {
    return {
      menuVisible: false
    };
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

/***/ 1240:
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
          _c("md-subheader", [_vm._v("基础设置")]),
          _vm._v(" "),
          _c(
            "md-layout-grid",
            { attrs: { "md-cols": 3, "md-show-lr-borders": false } },
            [
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/cbo/dept/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("account_box")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("部门")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/cbo/item/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("dns")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("物料")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/cbo/doc-type/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("book")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("单据类型")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("md-subheader", [_vm._v("阿米巴设置")]),
          _vm._v(" "),
          _c(
            "md-layout-grid",
            { attrs: { "md-cols": 3, "md-show-lr-borders": false } },
            [
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/amb/purpose/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("all_out")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("核算目的")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/amb/element/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("aspect_ratio")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("核算要素")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/amb/group/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("group_work")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("阿米巴单元")
                  ])
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("md-subheader", [_vm._v("阿米巴日常")]),
          _vm._v(" "),
          _c(
            "md-layout-grid",
            { attrs: { "md-cols": 3, "md-show-lr-borders": false } },
            [
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/amb/dti/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("library_add")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("接口执行")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/amb/distribute/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("view_quilt")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("费用分配")
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "md-layout-grid-item",
                { attrs: { "md-link": "/m/amb/accounting/list" } },
                [
                  _c("md-icon", { attrs: { slot: "icon" }, slot: "icon" }, [
                    _vm._v("album")
                  ]),
                  _vm._v(" "),
                  _c("span", { attrs: { slot: "label" }, slot: "label" }, [
                    _vm._v("经营核算")
                  ])
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
    require("vue-hot-reload-api")      .rerender("data-v-941e44fc", module.exports)
  }
}

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1237)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1239)
/* template */
var __vue_template__ = __webpack_require__(1240)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-941e44fc"
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
Component.options.__file = "resources\\assets\\js\\pages\\Works\\Work.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-941e44fc", Component.options)
  } else {
    hotAPI.reload("data-v-941e44fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});