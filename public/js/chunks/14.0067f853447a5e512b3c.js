webpackJsonp([14],{

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1078)
/* template */
var __vue_template__ = __webpack_require__(1079)
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
Component.options.__file = "resources\\assets\\js\\components\\Filter\\PurposeDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1a0d0d82", Component.options)
  } else {
    hotAPI.reload("data-v-1a0d0d82", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1078:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _vuex = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: "FilterPurposeDropdown",
  props: {
    title: {
      type: String,
      default: '核算目的'
    },
    mdData: Array,
    value: Object
  },
  data: function data() {
    return {
      configed: false,
      picker_value: [],
      isActive: false
    };
  },
  computed: _extends({}, (0, _vuex.mapState)("amiba", ["purposes", 'purpose']), {
    picker_datas: function picker_datas() {
      if (this.mdData && this.mdData.length) {
        return [this.mdData.map(function (r) {
          r.value = r.id;
          return r;
        })];
      } else if (this.purposes && this.purposes.length) {
        return [this.purposes.map(function (r) {
          r.value = r.id;
          return r;
        })];
      } else {
        return [];
      }
    },
    playValue: function playValue() {
      return this.value || this.purpose;
    }
  }),
  watch: {
    picker_value: function picker_value(v) {
      var val = null;
      if (v && v.length > 0) {
        val = this.picker_datas && this.picker_datas[0].find(function (r) {
          return r.id == v[0];
        });
        val && this.$store.dispatch("amiba/setPurpose", val);
      }
      if (val && !this.value) {
        this.$emit('input', val);
      }
    },
    value: function value(v) {
      this.picker_value = v && v.id ? [v.id] : [];
    }
  },
  methods: {
    config: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.configed = true;

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function config() {
        return _ref.apply(this, arguments);
      }

      return config;
    }(),
    onConfirm: function onConfirm(v) {
      var val = null;
      if (v && v.length > 0) {
        val = this.picker_datas && this.picker_datas[0].find(function (r) {
          return r.id == v[0];
        });
      }
      this.$emit('input', val);
      this.isActive = false;
    }
  },
  mounted: function mounted() {
    this.config();
  }
};

/***/ }),

/***/ 1079:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-x-dropdown",
    {
      attrs: {
        title: _vm.playValue ? _vm.playValue : _vm.title,
        "md-active": _vm.isActive
      },
      on: {
        "update:mdActive": function($event) {
          _vm.isActive = $event
        }
      }
    },
    [
      _c("md-picker", {
        attrs: {
          "md-data": _vm.picker_datas,
          "md-show-toolbar": "",
          "md-toolbar-position": "bottom"
        },
        on: {
          "md-confirm": _vm.onConfirm,
          "md-cancel": function($event) {
            _vm.isActive = false
          }
        },
        model: {
          value: _vm.picker_value,
          callback: function($$v) {
            _vm.picker_value = $$v
          },
          expression: "picker_value"
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
    require("vue-hot-reload-api")      .rerender("data-v-1a0d0d82", module.exports)
  }
}

/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1036)("32a975aa", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22307d66\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22307d66\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./List.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)(false);
// imports


// module
exports.push([module.i, "\n.md-app[data-v-22307d66] {\n  min-height: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(19);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _extend = __webpack_require__(81);

var _extend2 = _interopRequireDefault(_extend);

var _PurposeDropdown = __webpack_require__(1077);

var _PurposeDropdown2 = _interopRequireDefault(_PurposeDropdown);

var _vuex = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: "AmbElementList",
  components: {
    FilterPurposeDropdown: _PurposeDropdown2.default
  },
  data: function data() {
    return {
      configed: false,
      items: [],
      pager: {},
      isFinished: false,
      search_q: ""
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.$store.dispatch("amiba/config").then(function () {
        return vm.config();
      }, function (err) {
        vm.$tip(err);
      });
    });
  },

  computed: _extends({}, (0, _vuex.mapState)("amiba", ["purpose"])),
  watch: {
    purpose: function purpose(n, o) {
      if (n && this.configed && (o && n.id != o.id || !o)) {
        this.fetchData();
      }
    }
  },
  methods: {
    config: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var purposes;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.$store.dispatch("amiba/getPurposes");

              case 2:
                purposes = _context.sent;

                if (!(!this.purpose && purposes && purposes.length > 0)) {
                  _context.next = 6;
                  break;
                }

                _context.next = 6;
                return this.$store.dispatch("amiba/setPurpose", purposes[0]);

              case 6:
                this.configed = true;

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function config() {
        return _ref.apply(this, arguments);
      }

      return config;
    }(),
    onSearch: function onSearch(s) {
      this.fetchData();
    },
    onItemClick: function onItemClick(item) {},
    onRefresh: function onRefresh(c) {
      this.fetchData(null, c);
    },
    onScrollLoad: function onScrollLoad(c) {
      this.pager.page++;
      this.fetchData(this.pager, c);
    },
    fetchData: function fetchData(pager, c) {
      var _this = this;

      if (!this.configed || !this.purpose) {
        c && c();
        return;
      }
      var options = (0, _extend2.default)({
        q: this.search_q
      }, {
        size: 20
      }, pager);
      if (!pager) {
        this.items = [];
        this.isFinished = false;
      }
      this.$http("suite.cbo").get("api/amiba/elements", {
        params: options
      }).then(function (res) {
        _this.items = _this.items.concat(res.data.data);
        _this.pager = res.data.pager;
        _this.isFinished = _this.pager.items < _this.pager.size;
        c && c();
      }, function (err) {
        c && c();
        _this.isFinished = true;
      });
    }
  }
};

/***/ }),

/***/ 1147:
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
        { staticClass: "layout-column" },
        [
          _vm.configed
            ? _c("md-x-dropdowns", [_c("filter-purpose-dropdown")], 1)
            : _vm._e(),
          _vm._v(" "),
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
            "div",
            { staticClass: "flex scroll" },
            [
              _c(
                "md-pull-refresh",
                { on: { refresh: _vm.onRefresh } },
                [
                  _c(
                    "md-scroll-load",
                    {
                      attrs: {
                        "md-finished": _vm.isFinished,
                        configed: _vm.configed
                      },
                      on: { load: _vm.onScrollLoad }
                    },
                    [
                      _c(
                        "md-x-cell-group",
                        _vm._l(_vm.items, function(item) {
                          return _c("md-x-cell", {
                            key: item.id,
                            attrs: {
                              icon: "md:settings_input_svideo",
                              "is-link": "",
                              title: item.name,
                              label: item.code
                            }
                          })
                        })
                      )
                    ],
                    1
                  )
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
        "md-app-bottom-bar",
        [
          _c("md-x-submit-bar", {
            attrs: { "button-text": "", "show-back": "" },
            on: {
              back: function($event) {
                _vm.$router.back()
              }
            }
          })
        ],
        1
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-22307d66", module.exports)
  }
}

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1144)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1146)
/* template */
var __vue_template__ = __webpack_require__(1147)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-22307d66"
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
Component.options.__file = "resources\\assets\\js\\pages\\AmbElement\\List.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22307d66", Component.options)
  } else {
    hotAPI.reload("data-v-22307d66", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});