import { resolveComponent, openBlock, createElementBlock, createElementVNode, normalizeStyle, createVNode, withCtx, toDisplayString, Fragment, renderList, createCommentVNode } from "vue";
function formatAppLog(type, filename, ...args) {
  if (uni.__log__) {
    uni.__log__(type, filename, ...args);
  } else {
    console[type].apply(console, [...args, filename]);
  }
}
const _style_0$1 = { "page": { "": { "width": 100 } }, "image-width": { "": { "width": 100, "backgroundImage": "url('/static/header_tabber.png')", "height": "200rpx" } }, "header": { ".image-width ": { "display": "flex", "flexDirection": "row", "justifyContent": "space-between", "alignItems": "center", "marginTop": 0, "marginBottom": 0 } }, "header-text": { ".image-width .header ": { "color": "#FFFFFF" } }, "header-select": { ".image-width .header ": { "display": "flex", "flexDirection": "row", "alignItems": "center" } }, "header-select-icon": { ".image-width .header .header-select ": { "width": "53rpx", "borderRadius": 50 } }, "header-select-select": { ".image-width .header .header-select ": { "width": "19rpx", "height": "12rpx", "marginLeft": "9rpx" } } };
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {
  name: "customHeader",
  data() {
    return {
      iStatusBarHeight: 0,
      array: ["中文", "英语"],
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
  const _component_picker = resolveComponent("picker");
  return openBlock(), createElementBlock("view", {
    class: "page",
    renderWhole: true
  }, [
    createElementVNode("view", { class: "image-width" }, [
      createElementVNode(
        "view",
        {
          class: "header",
          style: normalizeStyle({ paddingTop: $data.iStatusBarHeight + "px" })
        },
        [
          createElementVNode("view", { class: "header-icon" }, [
            createElementVNode("u-image", {
              src: "/static/logo.png",
              mode: "widthFix"
            })
          ]),
          createElementVNode("view", { class: "header-text" }, [
            createElementVNode("u-text", null, "普斯集团")
          ]),
          createVNode(_component_picker, {
            onChange: $options.bindPickerChange,
            value: $data.index,
            range: $data.array
          }, {
            default: withCtx(() => [
              createElementVNode("view", { class: "header-select" }, [
                createElementVNode("u-image", {
                  class: "header-select-icon",
                  src: $data.imgSrc,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                createElementVNode("u-image", {
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
const customHeader = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["styles", [_style_0$1]], ["__file", "D:/私人文件夹/crossBorderShop/components/customHeader/customHeader.nvue"]]);
const _style_0 = { "content": { "": { "display": "flex", "flexDirection": "column", "alignItems": "center", "justifyContent": "center" } }, "logo": { "": { "height": "200rpx", "width": "200rpx", "marginTop": "200rpx", "marginBottom": "50rpx" } }, "text-area": { "": { "display": "flex", "justifyContent": "center" } }, "title": { "": { "fontSize": "36rpx", "color": "#8f8f94" } } };
const _sfc_main = {
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
  const _component_customHeader = resolveComponent("customHeader");
  return openBlock(), createElementBlock("scroll-view", {
    scrollY: true,
    showScrollbar: true,
    enableBackToTop: true,
    bubble: "true",
    style: { flexDirection: "column" }
  }, [
    createElementVNode("view", { class: "content" }, [
      createVNode(_component_customHeader),
      createElementVNode("u-image", {
        class: "logo",
        src: "/static/logo.png"
      }),
      createElementVNode("view", { class: "text-area" }, [
        createElementVNode(
          "u-text",
          { class: "title" },
          toDisplayString($data.title) + toDisplayString(_ctx.$t("index.system-language")),
          1
          /* TEXT */
        )
      ]),
      createElementVNode("view", { class: "locale-list" }, [
        (openBlock(true), createElementBlock(
          Fragment,
          null,
          renderList($options.locales, (item, index2) => {
            return openBlock(), createElementBlock("view", {
              class: "locale-item",
              key: index2,
              onClick: ($event) => $options.onLocaleChange(item)
            }, [
              createElementVNode(
                "u-text",
                { class: "text" },
                toDisplayString(item.text),
                1
                /* TEXT */
              ),
              item.code == _ctx.applicationLocale ? (openBlock(), createElementBlock("u-text", {
                key: 0,
                class: "icon-check"
              })) : createCommentVNode("v-if", true)
            ], 8, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ])
    ])
  ]);
}
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["styles", [_style_0]], ["__file", "D:/私人文件夹/crossBorderShop/pages/index/index.nvue"]]);
export {
  index as default
};
