"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * @Author zhangyi
 * @Date 2019/1/9
 **/

/* eslint-disable */
function setAndroid() {
  var bridge = {
    default: this,
    callHandler: function callHandler(b, a, c) {
      var e = "";
      "function" == typeof a && (c = a, a = {});
      a = {
        data: void 0 === a ? null : a
      };

      if ("function" == typeof c) {
        var g = "dscb" + window.dscb++;
        window[g] = c;
        a._dscbstub = g;
      }

      a = JSON.stringify(a);
      if (window._dsbridge) e = _dsbridge.callHandler(b, a);else if (window._dswk || -1 != navigator.userAgent.indexOf("_dsbridge")) e = prompt("_dsbridge=" + b, a);
      return JSON.parse(e || "{}").data;
    },
    register: function register(b, a, c) {
      c = c ? window._dsaf : window._dsf;
      window._dsInit || (window._dsInit = !0, setTimeout(function () {
        bridge.callHandler("_dsb.dsinit");
      }, 0));
      "object" == _typeof(a) ? c._obs[b] = a : c[b] = a;
    },
    registerAsyn: function registerAsyn(b, a) {
      this.register(b, a, !0);
    },
    hasNativeMethod: function hasNativeMethod(b, a) {
      return this.callHandler("_dsb.hasNativeMethod", {
        name: b,
        type: a || "all"
      });
    },
    disableJavascriptDialogBlock: function disableJavascriptDialogBlock(b) {
      this.call("_dsb.disableJavascriptDialogBlock", {
        disable: !1 !== b
      });
    }
  };
  !function () {
    if (!window._dsf) {
      var b = {
        _dsf: {
          _obs: {}
        },
        _dsaf: {
          _obs: {}
        },
        dscb: 0,
        WebViewJavascriptBridge: bridge,
        close: function close() {
          bridge.callHandler("_dsb.closePage");
        },
        _handleMessageFromNative: function _handleMessageFromNative(a) {
          var e = JSON.parse(a.data),
              b = {
            id: a.callbackId,
            complete: !0
          },
              c = this._dsf[a.method],
              d = this._dsaf[a.method],
              h = function h(a, c) {
            b.data = a.apply(c, e);
            bridge.call("_dsb.returnValue", b);
          },
              k = function k(a, c) {
            e.push(function (a, c) {
              b.data = a;
              b.complete = !1 !== c;
              bridge.callHandler("_dsb.returnValue", b);
            });
            a.apply(c, e);
          };

          if (c) h(c, this._dsf);else if (d) k(d, this._dsaf);else if (c = a.method.split("."), !(2 > c.length)) {
            a = c.pop();
            var c = c.join("."),
                d = this._dsf._obs,
                d = d[c] || {},
                f = d[a];
            f && "function" == typeof f ? h(f, d) : (d = this._dsaf._obs, d = d[c] || {}, (f = d[a]) && "function" == typeof f && k(f, d));
          }
        }
      },
          a;

      for (a in b) {
        window[a] = b[a];
      }

      bridge.register("_hasJavascriptMethod", function (a, b) {
        b = a.split(".");
        if (2 > b.length) return !(!_dsf[b] && !_dsaf[b]);
        a = b.pop();
        b = b.join(".");
        return (b = _dsf._obs[b] || _dsaf._obs[b]) && !!b[a];
      });
    }
  }();
}

var jsBridge = {
  init: function init() {
    if (/(Android)/i.test(navigator.userAgent.toLowerCase())) {
      setAndroid();
    }
  },
  connectJsBridge: function connectJsBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      return callback(window.WebViewJavascriptBridge);
    }

    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }

    window.WVJBCallbacks = [callback];
    var WVJBIframe = document.createElement('iframe');
    WVJBIframe.style.display = 'none';
    WVJBIframe.src = 'https://__bridge_loaded__';
    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function () {
      document.documentElement.removeChild(WVJBIframe);
    }, 0);
  },
  addBridgeProperty: function addBridgeProperty(bridge) {
    var _this = this;

    var dependencies = ['getUserInfo', 'login', 'refreshToken', 'getLocation', 'share', 'setShareConfig', 'getAppInfo', 'track', 'closeWebPage', 'request', 'getEnv', 'getNetwork', 'setNativeStore', 'getNativeStore', 'removeNativeStore', 'pay', 'addToCart', 'getCartInfo'];

    try {
      dependencies.forEach(function (dependency) {
        if (!_this[dependency]) {
          Object.defineProperty(_this, dependency, {
            // configurable: true,
            get: function get() {
              return bridge.callHandler.bind(bridge, dependency);
            }
          });
        }
      });
    } catch (error) {
      console.error(error);
    }

    if (this.openWebPage) {
      this.openWebPage = function (url) {
        window.location.href = "myyh://yhlife.com/show/web?url=".concat(encodeURIComponent(url));
      };
    }

    return this;
  },
  ready: function ready(callback) {
    var _this2 = this;

    this.connectJsBridge(function (bridge) {
      callback(_this2.addBridgeProperty(bridge));
    });
  }
};
jsBridge.init();
var _default = jsBridge;
exports.default = _default;