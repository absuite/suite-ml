webpackJsonp([8],{

/***/ 1036:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(343)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

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

/***/ 1080:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1081)
/* template */
var __vue_template__ = __webpack_require__(1082)
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
Component.options.__file = "resources\\assets\\js\\components\\Filter\\GroupDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-04d20823", Component.options)
  } else {
    hotAPI.reload("data-v-04d20823", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _vuex = __webpack_require__(47);

exports.default = {
  name: "FilterGroupDropdown",
  props: {
    title: {
      type: String,
      default: '阿米巴'
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
  computed: _extends({}, (0, _vuex.mapState)("amiba", ["groups"]), {
    picker_datas: function picker_datas() {
      if (this.mdData && this.mdData.length) {
        return [this.mdData.map(function (r) {
          r.value = r.id;
          return r;
        })];
      } else if (this.groups && this.groups.length) {
        return [this.groups.map(function (r) {
          r.value = r.id;
          return r;
        })];
      } else {
        return [];
      }
    },
    playValue: function playValue() {
      return this.value;
    }
  }),
  watch: {
    picker_value: function picker_value(v) {
      var val = null;
      if (v && v.length > 0) {
        val = this.picker_datas && this.picker_datas[0].find(function (r) {
          return r.id == v[0];
        });
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
  }
};

/***/ }),

/***/ 1082:
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
          "md-toolbar-position": "bottom",
          "md-show-toolbar": ""
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
    require("vue-hot-reload-api")      .rerender("data-v-04d20823", module.exports)
  }
}

/***/ }),

/***/ 1083:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1084)
/* template */
var __vue_template__ = __webpack_require__(1085)
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
Component.options.__file = "resources\\assets\\js\\components\\Filter\\PeriodDropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-136f740f", Component.options)
  } else {
    hotAPI.reload("data-v-136f740f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1084:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
//
//
//
//
//

var _vuex = __webpack_require__(47);

exports.default = {
  name: "FilterPeriodDropdown",
  props: {
    title: {
      type: String,
      default: '期间'
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
  computed: _extends({}, (0, _vuex.mapState)("amiba", ["periods"]), (0, _vuex.mapGetters)("amiba", ["currentPeriod"]), {
    picker_datas: function picker_datas() {
      if (this.mdData && this.mdData.length) {
        return [this.mdData.map(function (r) {
          r.value = r.id;
          return r;
        })];
      } else if (this.periods && this.periods.length) {
        return [this.periods.map(function (r) {
          r.value = r.id;
          return r;
        })];
      } else {
        return [];
      }
    },
    playValue: function playValue() {
      return this.value;
    }
  }),
  watch: {
    picker_value: function picker_value(v) {
      var val = null;
      if (v && v.length > 0) {
        val = this.picker_datas && this.picker_datas[0].find(function (r) {
          return r.id == v[0];
        });
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
  }
};

/***/ }),

/***/ 1085:
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
    require("vue-hot-reload-api")      .rerender("data-v-136f740f", module.exports)
  }
}

/***/ }),

/***/ 1221:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1222);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(1036)("3a5c202c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6beba045\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rank.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-6beba045\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Rank.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(164)(false);
// imports


// module
exports.push([module.i, "\n.md-app[data-v-6beba045] {\n  min-height: 100%;\n  max-width: 100%;\n  height: 100%;\n}\n.md-app-bottom-bar[data-v-6beba045] {\n  height: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ 1223:
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
//
//
//
//
//
//
//
//
//

var _PurposeDropdown = __webpack_require__(1077);

var _PurposeDropdown2 = _interopRequireDefault(_PurposeDropdown);

var _GroupDropdown = __webpack_require__(1080);

var _GroupDropdown2 = _interopRequireDefault(_GroupDropdown);

var _PeriodDropdown = __webpack_require__(1083);

var _PeriodDropdown2 = _interopRequireDefault(_PeriodDropdown);

var _extend = __webpack_require__(81);

var _extend2 = _interopRequireDefault(_extend);

var _MdDebounce = __webpack_require__(165);

var _MdDebounce2 = _interopRequireDefault(_MdDebounce);

var _vuex = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  name: "RptProfitRank",
  components: {
    FilterPurposeDropdown: _PurposeDropdown2.default,
    FilterGroupDropdown: _GroupDropdown2.default,
    FilterPeriodDropdown: _PeriodDropdown2.default
  },
  data: function data() {
    return {
      configed: false,
      listItems: [],
      listPager: {},
      selector: {
        purpose: null,
        period: null
      }
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

  computed: _extends({}, (0, _vuex.mapGetters)("amiba", ["currentPeriod", "purpose"]), {
    topChartData: function topChartData() {
      return this.listItems.filter(function (r, i) {
        return i < 5 ? r : false;
      });
    },
    filterKey: function filterKey() {
      var k = '1';
      if (this.selector.purpose) k += this.selector.purpose.id;
      if (this.selector.period) k += this.selector.period.id;
      return k;
    }
  }),
  watch: {
    filterKey: function filterKey(n) {
      if (this.configed) {
        this.fetchData();
      }
    },
    topChartData: function topChartData() {
      this.$refs.topChart.rerender();
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
                this.selector.period = this.currentPeriod;
                this.configed = true;

              case 8:
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
    onListRefresh: function onListRefresh(c) {
      this.fetchData(null, c);
    },
    onListScrollLoad: function onListScrollLoad(c) {
      this.listPager.page++;
      this.fetchData(this.listPager, c);
    },

    fetchData: (0, _MdDebounce2.default)(function (pager, c) {
      var _this = this;

      if (!this.configed || !this.selector.purpose || !this.selector.period) {
        c && c();
        return;
      }
      var options = (0, _extend2.default)({
        purpose_id: this.selector.purpose.id,
        period: this.selector.period.code
      }, {
        size: 20
      }, pager);
      if (!pager) {
        this.listItems = [];
        this.isListFinished = false;
      }
      this.$http("suite.cbo").post("api/amiba/reports/profit/rank", options).then(function (res) {
        _this.listItems = _this.listItems.concat(res.data.data);
        _this.listPager = res.data.pager;
        c && c();
      }, function (err) {
        c && c();
      });
    }, 500)
  }
};

/***/ }),

/***/ 1224:
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
            ? _c(
                "md-x-dropdowns",
                [
                  _c("filter-purpose-dropdown", {
                    model: {
                      value: _vm.selector.purpose,
                      callback: function($$v) {
                        _vm.$set(_vm.selector, "purpose", $$v)
                      },
                      expression: "selector.purpose"
                    }
                  }),
                  _vm._v(" "),
                  _c("filter-period-dropdown", {
                    attrs: { title: "期间" },
                    model: {
                      value: _vm.selector.period,
                      callback: function($$v) {
                        _vm.$set(_vm.selector, "period", $$v)
                      },
                      expression: "selector.period"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "md-layout",
            [
              _c(
                "md-x-chart",
                { ref: "topChart", attrs: { "md-data": _vm.topChartData } },
                [
                  _c("md-x-bar"),
                  _vm._v(" "),
                  _c("md-x-scale", {
                    attrs: { x: "", field: "group_name", alias: "阿米巴" }
                  }),
                  _vm._v(" "),
                  _c("md-x-scale", {
                    attrs: { y: "", field: "this_profit", alias: "利润" }
                  }),
                  _vm._v(" "),
                  _c("md-x-tooltip", { attrs: { "show-item-marker": false } })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex scroll" },
            [
              _c(
                "md-pull-refresh",
                { on: { refresh: _vm.onListRefresh } },
                [
                  _c("md-table", {
                    scopedSlots: _vm._u([
                      {
                        key: "md-table-row",
                        fn: function(ref) {
                          var item = ref.item
                          return _c(
                            "md-table-row",
                            {},
                            [
                              _c(
                                "md-table-cell",
                                { attrs: { "md-label": "阿米巴" } },
                                [_vm._v(_vm._s(item.group_name))]
                              ),
                              _vm._v(" "),
                              _c(
                                "md-table-cell",
                                { attrs: { "md-label": "利润" } },
                                [_vm._v(_vm._s(item.this_profit))]
                              ),
                              _vm._v(" "),
                              _c(
                                "md-table-cell",
                                { attrs: { "md-label": "利润率" } },
                                [
                                  _vm._v(
                                    _vm._s(
                                      item.this_profit_rate > 0
                                        ? Math.round(
                                            item.this_profit_rate * 100
                                          ) / 100
                                        : "-"
                                    )
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        }
                      }
                    ]),
                    model: {
                      value: _vm.listItems,
                      callback: function($$v) {
                        _vm.listItems = $$v
                      },
                      expression: "listItems"
                    }
                  })
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
    require("vue-hot-reload-api")      .rerender("data-v-6beba045", module.exports)
  }
}

/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1221)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(1223)
/* template */
var __vue_template__ = __webpack_require__(1224)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6beba045"
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
Component.options.__file = "resources\\assets\\js\\pages\\RptProfit\\Rank.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6beba045", Component.options)
  } else {
    hotAPI.reload("data-v-6beba045", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 343:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ })

});