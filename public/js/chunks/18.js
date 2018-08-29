webpackJsonp([18],{

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