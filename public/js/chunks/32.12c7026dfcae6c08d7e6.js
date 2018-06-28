webpackJsonp([32],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AuthCache = __webpack_require__("./resources/assets/js/vendor/gmf-sys/pages/Auth/AuthCache.js");

var _AuthCache2 = _interopRequireDefault(_AuthCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'GmfPagesAuthLogin',
  data: function data() {
    return {
      sending: true
    };
  },

  methods: {
    fetchData: function fetchData() {}
  },
  computed: {
    routeQuery: function routeQuery() {
      var q = {};
      if (this.$route.query && this.$route.query.continue) q.continue = this.$route.query.continue;
      return q;
    }
  },
  mounted: function mounted() {
    var us = _AuthCache2.default.get();
    if (us && us.length > 1) {
      this.$go({ name: 'auth.chooser', query: this.routeQuery });
    } else if (us && us.length == 1) {
      this.$go({ name: 'auth.password', params: { id: us[0].id }, query: this.routeQuery });
    } else {
      this.$go({ name: 'auth.identifier', query: this.routeQuery });
    }
  }
}; //
//
//

/***/ }),

/***/ "./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-657d9b4e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.sending
    ? _c("md-progress-bar", { attrs: { "md-mode": "indeterminate" } })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-657d9b4e", module.exports)
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

/***/ "./resources/assets/js/vendor/gmf-sys/pages/Auth/Login.vue":
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__("./node_modules/vue-loader/lib/component-normalizer.js")
/* script */
var __vue_script__ = __webpack_require__("./node_modules/babel-loader/lib/index.js?{\"cacheDirectory\":true,\"presets\":[[\"env\",{\"modules\":false,\"targets\":{\"browsers\":[\"> 2%\"],\"uglify\":true}}],\"es2015\",\"stage-3\",[\"env\",{\"modules\":false,\"useBuiltIns\":false}]],\"plugins\":[\"transform-object-rest-spread\",[\"transform-runtime\",{\"polyfill\":false,\"helpers\":false}],\"syntax-dynamic-import\"],\"ignore\":[\"dist/*.js\",\"public/*.js\"]}!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Login.vue")
/* template */
var __vue_template__ = __webpack_require__("./node_modules/vue-loader/lib/template-compiler/index.js?{\"id\":\"data-v-657d9b4e\",\"hasScoped\":false,\"buble\":{\"transforms\":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./resources/assets/js/vendor/gmf-sys/pages/Auth/Login.vue")
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
Component.options.__file = "resources\\assets\\js\\vendor\\gmf-sys\\pages\\Auth\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-657d9b4e", Component.options)
  } else {
    hotAPI.reload("data-v-657d9b4e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});