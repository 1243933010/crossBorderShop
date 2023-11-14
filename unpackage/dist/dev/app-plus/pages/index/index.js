"use weex:vue";

if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor
    return this.then(
      value => promise.resolve(callback()).then(() => value),
      reason => promise.resolve(callback()).then(() => {
        throw reason
      })
    )
  }
};

if (typeof uni !== 'undefined' && uni && uni.requireGlobal) {
  const global = uni.requireGlobal()
  ArrayBuffer = global.ArrayBuffer
  Int8Array = global.Int8Array
  Uint8Array = global.Uint8Array
  Uint8ClampedArray = global.Uint8ClampedArray
  Int16Array = global.Int16Array
  Uint16Array = global.Uint16Array
  Int32Array = global.Int32Array
  Uint32Array = global.Uint32Array
  Float32Array = global.Float32Array
  Float64Array = global.Float64Array
  BigInt64Array = global.BigInt64Array
  BigUint64Array = global.BigUint64Array
};


(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // vue-ns:vue
  var require_vue = __commonJS({
    "vue-ns:vue"(exports, module) {
      module.exports = Vue;
    }
  });

  // ../../../私人文件夹/crossBorderShop/unpackage/dist/dev/.nvue/pages/index/index.js
  var import_vue = __toESM(require_vue());
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  var _style_0$1 = { "page": { "": { "width": 100 } }, "image-width": { "": { "width": 100, "backgroundImage": "url('/static/header_tabber.png')", "height": "200rpx" } }, "header": { ".image-width ": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "marginTop": 0, "marginBottom": 0 } }, "header-text": { ".image-width .header ": { "color": "#FFFFFF" } }, "header-select": { ".image-width .header ": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "header-select-icon": { ".image-width .header .header-select ": { "width": "53rpx", "borderRadius": 50 } }, "header-select-select": { ".image-width .header .header-select ": { "width": "19rpx", "height": "12rpx", "marginLeft": "9rpx" } } };
  var _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  var _sfc_main$1 = {
    name: "customHeader",
    data() {
      return {
        iStatusBarHeight: 0,
        array: ["\u4E2D\u6587", "\u82F1\u8BED"],
        index: 0,
        iconList: ["../../static/cn.png", "../../static/eg.png"],
        imgSrc: "../../static/cn.png",
        locale: { "zh-Hans": 0, "en": 1 }
      };
    },
    mounted() {
      formatAppLog("log", "at components/customHeader/customHeader.nvue:38", uni.getSystemInfoSync().statusBarHeight, "----");
      this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
      let code = uni.getLocale();
      if (code) {
        this.imgSrc = this.iconList[this.locale[code]];
      }
    },
    methods: {
      bindPickerChange: function(e) {
        this.imgSrc = this.iconList[e.detail.value];
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_picker = (0, import_vue.resolveComponent)("picker");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
      class: "page",
      renderWhole: true
    }, [
      (0, import_vue.createElementVNode)("view", { class: "image-width" }, [
        (0, import_vue.createElementVNode)(
          "view",
          {
            class: "header",
            style: (0, import_vue.normalizeStyle)({ paddingTop: $data.iStatusBarHeight + "px" })
          },
          [
            (0, import_vue.createElementVNode)("view", { class: "header-icon" }, [
              (0, import_vue.createElementVNode)("u-image", {
                src: "/static/logo.png",
                mode: "widthFix"
              })
            ]),
            (0, import_vue.createElementVNode)("view", { class: "header-text" }, [
              (0, import_vue.createElementVNode)("u-text", null, "\u666E\u65AF\u96C6\u56E2")
            ]),
            (0, import_vue.createVNode)(_component_picker, {
              onChange: $options.bindPickerChange,
              value: $data.index,
              range: $data.array
            }, {
              default: (0, import_vue.withCtx)(() => [
                (0, import_vue.createElementVNode)("view", { class: "header-select" }, [
                  (0, import_vue.createElementVNode)("u-image", {
                    class: "header-select-icon",
                    src: $data.imgSrc,
                    mode: "widthFix"
                  }, null, 8, ["src"]),
                  (0, import_vue.createElementVNode)("u-image", {
                    class: "header-select-select",
                    src: "/static/select_icon.png",
                    mode: "widthFix"
                  })
                ])
              ]),
              _: 1
              /* STABLE */
            }, 8, ["onChange", "value", "range"])
          ],
          4
          /* STYLE */
        )
      ])
    ]);
  }
  var customHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/\u79C1\u4EBA\u6587\u4EF6\u5939/crossBorderShop/components/customHeader/customHeader.nvue"]]);
  var _style_0 = { "content": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "logo": { "": { "height": "200rpx", "width": "200rpx", "marginTop": "200rpx", "marginBottom": "50rpx" } }, "text-area": { "": { "display": "flex", "justifyContent": "center" } }, "title": { "": { "fontSize": "36rpx", "color": "#8f8f94" } } };
  var _sfc_main = {
    components: { customHeader },
    data() {
      return {
        title: "Hello"
      };
    },
    onLoad() {
    },
    computed: {
      locales() {
        return [
          {
            text: this.$t("locale.auto"),
            code: "auto"
          },
          {
            text: this.$t("locale.en"),
            code: "en"
          },
          {
            text: this.$t("locale.zh-hans"),
            code: "zh-Hans"
          },
          {
            text: this.$t("locale.zh-hant"),
            code: "zh-Hant"
          },
          {
            text: this.$t("locale.ja"),
            code: "ja"
          }
        ];
      }
    },
    methods: {
      onLocaleChange(e) {
        if (this.isAndroid) {
          uni.showModal({
            content: this.$t("index.language-change-confirm"),
            success: (res) => {
              if (res.confirm) {
                uni.setLocale(e.code);
              }
            }
          });
        } else {
          uni.setLocale(e.code);
          this.$i18n.locale = e.code;
        }
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_customHeader = (0, import_vue.resolveComponent)("customHeader");
    return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("scroll-view", {
      scrollY: true,
      showScrollbar: true,
      enableBackToTop: true,
      bubble: "true",
      style: { flexDirection: "column" }
    }, [
      (0, import_vue.createElementVNode)("view", { class: "content" }, [
        (0, import_vue.createVNode)(_component_customHeader),
        (0, import_vue.createElementVNode)("u-image", {
          class: "logo",
          src: "/static/logo.png"
        }),
        (0, import_vue.createElementVNode)("view", { class: "text-area" }, [
          (0, import_vue.createElementVNode)(
            "u-text",
            { class: "title" },
            (0, import_vue.toDisplayString)($data.title) + (0, import_vue.toDisplayString)(_ctx.$t("index.system-language")),
            1
            /* TEXT */
          )
        ]),
        (0, import_vue.createElementVNode)("view", { class: "locale-list" }, [
          ((0, import_vue.openBlock)(true), (0, import_vue.createElementBlock)(
            import_vue.Fragment,
            null,
            (0, import_vue.renderList)($options.locales, (item, index2) => {
              return (0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("view", {
                class: "locale-item",
                key: index2,
                onClick: ($event) => $options.onLocaleChange(item)
              }, [
                (0, import_vue.createElementVNode)(
                  "u-text",
                  { class: "text" },
                  (0, import_vue.toDisplayString)(item.text),
                  1
                  /* TEXT */
                ),
                item.code == _ctx.applicationLocale ? ((0, import_vue.openBlock)(), (0, import_vue.createElementBlock)("u-text", {
                  key: 0,
                  class: "icon-check"
                })) : (0, import_vue.createCommentVNode)("v-if", true)
              ], 8, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ])
    ]);
  }
  var index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/\u79C1\u4EBA\u6587\u4EF6\u5939/crossBorderShop/pages/index/index.nvue"]]);

  // <stdin>
  var webview = plus.webview.currentWebview();
  if (webview) {
    const __pageId = parseInt(webview.id);
    const __pagePath = "pages/index/index";
    let __pageQuery = {};
    try {
      __pageQuery = JSON.parse(webview.__query__);
    } catch (e) {
    }
    index.mpType = "page";
    const app = Vue.createPageApp(index, { $store: getApp({ allowDefault: true }).$store, __pageId, __pagePath, __pageQuery });
    app.provide("__globalStyles", Vue.useCssStyles([...__uniConfig.styles, ...index.styles || []]));
    app.mount("#root");
  }
})();
