if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue, shared) {
  "use strict";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const setTabbar = () => {
    formatAppLog("log", "at utils/utils.js:4", "111");
    [{
      "pagePath": "pages/index/index",
      "iconPath": "static/img/tabbar/home.png",
      "selectedIconPath": "static/img/tabbar/home_select.png",
      "text": `${globalThis.$t("app.home")}`
    }, {
      "pagePath": "pages/join/join",
      "iconPath": "static/img/tabbar/join.png",
      "selectedIconPath": "static/img/tabbar/join_select.png",
      "text": `${globalThis.$t("app.join")}`
    }, {
      "pagePath": "pages/classification/classification",
      "iconPath": "static/img/tabbar/classification.png",
      "selectedIconPath": "static/img/tabbar/classification_select.png",
      "text": `${globalThis.$t("app.classification_select")}`
    }, {
      "pagePath": "pages/me/me",
      "iconPath": "static/img/tabbar/me.png",
      "selectedIconPath": "static/img/tabbar/me_select.png",
      "text": `${globalThis.$t("app.me")}`
    }];
    uni.setTabBarItem({
      index: 1,
      pagePath: "pages/index/index",
      text: "xxx",
      iconPath: "static/img/tabbar/home.png",
      selectedIconPath: "static/img/tabbar/join_select.png",
      success: (res) => {
        formatAppLog("log", "at utils/utils.js:44", res, "======");
      },
      fail: (fail) => {
        formatAppLog("log", "at utils/utils.js:46", fail, "------}}");
      }
    });
  };
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$8 = {
    name: "customHeader",
    props: ["headerText"],
    data() {
      return {
        iStatusBarHeight: 0,
        array: ["中文", "English"],
        index: 0,
        iconList: ["../../static/img/cn.png", "../../static/img/eg.png"],
        imgSrc: "../../static/img/cn.png",
        locale: { "zh-Hans": 0, en: 1 },
        code: ["zh-Hans", "en"]
      };
    },
    mounted() {
      this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
      formatAppLog("log", "at components/customHeader/customHeader.vue:42", this.iStatusBarHeight, "系统栏高度");
      let code = uni.getLocale();
      if (code) {
        this.imgSrc = this.iconList[this.locale[code]];
      }
    },
    methods: {
      bindPickerChange: function(e) {
        formatAppLog("log", "at components/customHeader/customHeader.vue:52", this.$t, "------");
        formatAppLog("log", "at components/customHeader/customHeader.vue:53", "picker发送选择改变，携带值为", this.code[e.detail.value]);
        this.imgSrc = this.iconList[e.detail.value];
        uni.setLocale(this.code[e.detail.value]);
        this.$i18n.locale = this.code[e.detail.value];
        setTabbar();
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "page" }, [
      vue.createElementVNode("view", { class: "image-width" }, [
        vue.createElementVNode("view", { class: "header" }, [
          vue.createElementVNode("view", { class: "header-icon" }, [
            vue.createElementVNode("image", {
              src: "/static/img/logo.png",
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("view", { class: "header-text" }, [
            vue.createElementVNode(
              "text",
              null,
              vue.toDisplayString($props.headerText),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("picker", {
            onChange: _cache[0] || (_cache[0] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
            value: $data.index,
            range: $data.array
          }, [
            vue.createElementVNode("view", { class: "header-select" }, [
              vue.createElementVNode("image", {
                class: "header-select-icon",
                src: $data.imgSrc,
                mode: "widthFix"
              }, null, 8, ["src"]),
              vue.createElementVNode("image", {
                class: "header-select-select",
                src: "/static/img/select_icon.png",
                mode: "widthFix"
              })
            ])
          ], 40, ["value", "range"])
        ])
      ])
    ]);
  }
  const __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__scopeId", "data-v-07ba079a"], ["__file", "D:/私人文件夹/crossBorderShop/components/customHeader/customHeader.vue"]]);
  const _sfc_main$7 = {
    components: { customHeader: __easycom_0 },
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
      },
      menuList() {
        return [
          [
            {
              iconUrl: "../../static/img/icon/index/1.png",
              tit: this.$t("index.menuBtn1")
            },
            {
              iconUrl: "../../static/img/icon/index/2.png",
              tit: this.$t("index.menuBtn2")
            },
            {
              iconUrl: "../../static/img/icon/index/3.png",
              tit: this.$t("index.menuBtn3")
            }
          ],
          [
            {
              iconUrl: "../../static/img/icon/index/4.png",
              tit: this.$t("index.menuBtn4")
            },
            {
              iconUrl: "../../static/img/icon/index/5.png",
              tit: this.$t("index.menuBtn5")
            },
            {
              iconUrl: "../../static/img/icon/index/6.png",
              tit: this.$t("index.menuBtn6")
            }
          ],
          [
            {
              iconUrl: "../../static/img/icon/index/7.png",
              tit: this.$t("index.menuBtn7")
            },
            {
              iconUrl: "../../static/img/icon/index/8.png",
              tit: this.$t("index.menuBtn8")
            },
            {
              iconUrl: "../../static/img/icon/index/9.png",
              tit: this.$t("index.menuBtn9")
            }
          ]
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
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_customHeader = resolveEasycom(vue.resolveDynamicComponent("customHeader"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "profix-page-container index-page" }, [
      vue.createVNode(_component_customHeader, {
        style: { "z-index": "0" },
        headerText: "普斯集团"
      }),
      vue.createVNode(_component_customHeader, {
        headerText: "普斯集团",
        style: { "position": "fixed", "top": "0", "z-index": "1" }
      }),
      vue.createElementVNode("view", { class: "index-scroll page-scroll" }, [
        vue.createElementVNode("view", { class: "banner" }, [
          vue.createElementVNode("swiper", {
            class: "swiper",
            circular: "",
            autoplay: ""
          }, [
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "swiper-item" }, [
                vue.createElementVNode("view", { class: "pic" }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/banner/banner.png",
                    mode: "widthFix",
                    class: "img"
                  })
                ])
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "swiper-item" }, [
                vue.createElementVNode("view", { class: "pic" }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/banner/banner.png",
                    mode: "widthFix",
                    class: "img"
                  })
                ])
              ])
            ]),
            vue.createElementVNode("swiper-item", null, [
              vue.createElementVNode("view", { class: "swiper-item" }, [
                vue.createElementVNode("view", { class: "pic" }, [
                  vue.createElementVNode("image", {
                    src: "/static/img/banner/banner.png",
                    mode: "widthFix",
                    class: "img"
                  })
                ])
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "news-list" }, [
          vue.createElementVNode(
            "view",
            { class: "left-tit" },
            vue.toDisplayString(_ctx.$t("index.news")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "news-swiper" }, [
            vue.createElementVNode("swiper", {
              class: "swiper",
              vertical: "",
              circular: "",
              autoplay: ""
            }, [
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-item" }, "lual or a team, whether you have e-co1lual or a team, whether you have e-co1")
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-item" }, "lual or a team, whether you have e-co1lual or a team, whether you have e-co1")
              ]),
              vue.createElementVNode("swiper-item", null, [
                vue.createElementVNode("view", { class: "swiper-item" }, "lual or a team, whether you have")
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "menu-container" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($options.menuList, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: "menu-list",
                key: index
              }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(item, (e, i) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      class: "menu-item",
                      key: i
                    }, [
                      vue.createElementVNode("view", { class: "pic" }, [
                        vue.createElementVNode("image", {
                          src: e.iconUrl,
                          mode: "widthFix",
                          class: "img"
                        }, null, 8, ["src"])
                      ]),
                      vue.createElementVNode(
                        "view",
                        { class: "menu-tit" },
                        vue.toDisplayString(e.tit),
                        1
                        /* TEXT */
                      )
                    ]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        vue.createElementVNode("view", { class: "paper-card-list" }, [
          vue.createElementVNode("view", { class: "paper-card pic" }, [
            vue.createElementVNode("image", {
              src: "/static/img/paperCard/join.png",
              mode: "widthFix",
              class: "img"
            })
          ]),
          vue.createElementVNode("view", { class: "paper-card pic" }, [
            vue.createElementVNode("image", {
              src: "/static/img/paperCard/paper_air.png",
              mode: "widthFix",
              class: "img"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "product-container" }, [
          vue.createElementVNode(
            "view",
            { class: "tit" },
            vue.toDisplayString(_ctx.$t("index.moreProduct")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "desc" },
            vue.toDisplayString(_ctx.$t("index.moreProductDesc")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "product-list" }, [
            vue.createElementVNode("view", { class: "product-item" }, [
              vue.createElementVNode("view", { class: "product-img pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/product/1.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "product-info" }, [
                vue.createElementVNode("view", { class: "product-tit" }, "GGMARMONT超保暖羽绒服限时发售GGMARMONT超保暖羽绒服限时发售"),
                vue.createElementVNode("view", { class: "product-price-info" }, [
                  vue.createElementVNode("view", { class: "rebate" }, "$ 198"),
                  vue.createElementVNode("view", { class: "brfore-rebate" }, "$ 1980")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "product-item" }, [
              vue.createElementVNode("view", { class: "product-img pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/product/2.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "product-info" }, [
                vue.createElementVNode("view", { class: "product-tit" }, "古驰限量绝版包包限时发售古驰限量绝版包包限时发售古驰限量绝版包包限时发售"),
                vue.createElementVNode("view", { class: "product-price-info" }, [
                  vue.createElementVNode("view", { class: "rebate" }, "$ 198"),
                  vue.createElementVNode("view", { class: "brfore-rebate" }, "$ 1980")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "product-item" }, [
              vue.createElementVNode("view", { class: "product-img pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/product/1.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "product-info" }, [
                vue.createElementVNode("view", { class: "product-tit" }, "GGMARMONT超保暖羽绒服限时发售GGMARMONT超保暖羽绒服限时发售"),
                vue.createElementVNode("view", { class: "product-price-info" }, [
                  vue.createElementVNode("view", { class: "rebate" }, "$ 198"),
                  vue.createElementVNode("view", { class: "brfore-rebate" }, "$ 1980")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "product-item" }, [
              vue.createElementVNode("view", { class: "product-img pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/product/2.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "product-info" }, [
                vue.createElementVNode("view", { class: "product-tit" }, "古驰限量绝版包包限时发售古驰限量绝版包包限时发售古驰限量绝版包包限时发售"),
                vue.createElementVNode("view", { class: "product-price-info" }, [
                  vue.createElementVNode("view", { class: "rebate" }, "$ 198"),
                  vue.createElementVNode("view", { class: "brfore-rebate" }, "$ 1980")
                ])
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/私人文件夹/crossBorderShop/pages/index/index.vue"]]);
  const _sfc_main$6 = {
    components: {
      customHeader: __easycom_0
    },
    computed: {
      tabList() {
        return [this.$t("app.Product"), this.$t("app.Store"), this.$t("app.Sell")];
      }
    },
    data() {
      return {
        active: 0,
        leftIndex: 0,
        tabBool: true,
        conLeftList: [
          {
            title: "All"
          },
          {
            title: "lv1"
          },
          {
            title: "lv2"
          }
        ],
        conBox: [{
          src: "../../static/img/logo.png",
          title: "New Balance Mens 411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }, {
          src: "../../static/img/logo.png",
          title: "New Balance Mens 411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }, {
          src: "../../static/img/logo.png",
          title: "New Balance Mens 411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }, {
          src: "../../static/img/logo.png",
          title: "New Balance Mens 411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }, {
          src: "../../static/img/logo.png",
          title: "New Balance Mens 411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }, {
          src: "../../static/img/logo.png",
          title: "New Balance Mens 411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }, {
          src: "../../static/img/logo.png",
          title: "New   411 V1 Training S..",
          price: "55",
          price1: "1",
          label: "促销"
        }]
      };
    },
    mounted() {
    },
    methods: {
      search() {
      },
      activeClick(index) {
        formatAppLog("log", "at pages/classification/classification.vue:145", index);
        this.active = index;
        if (index > 0) {
          this.tabBool = false;
        } else {
          this.tabBool = true;
        }
      },
      leftClick(index) {
        this.leftIndex = index;
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_customHeader = resolveEasycom(vue.resolveDynamicComponent("customHeader"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { style: { "background": "#FFFFFF", "height": "100%" } }, [
      vue.createElementVNode("view", { style: { "height": "100%" } }, [
        vue.createElementVNode("view", { class: "" }, " 11112 "),
        vue.createVNode(_component_customHeader, {
          style: { "z-index": "0" },
          headerText: _ctx.$t("app.name")
        }, null, 8, ["headerText"]),
        vue.createVNode(_component_customHeader, {
          headerText: _ctx.$t("app.name"),
          style: { "width": "100%", "position": "absolute", "top": "0" }
        }, null, 8, ["headerText"]),
        vue.createElementVNode("view", { class: "search" }, [
          vue.createElementVNode("view", { class: "flex" }, [
            vue.createElementVNode("image", {
              src: "/static/img/icon/icon_search.png",
              mode: "widthFix"
            }),
            vue.createElementVNode("input", {
              type: "text",
              placeholder: _ctx.$t("app.search"),
              style: { "font-size": "24rpx" },
              "confirm-type": "search",
              onConfirm: _cache[0] || (_cache[0] = (...args) => $options.search && $options.search(...args))
            }, null, 40, ["placeholder"]),
            vue.createElementVNode("view", { class: "" })
          ])
        ]),
        vue.createElementVNode("view", { style: { "display": "flex", "justify-content": "space-between", "flex-flow": "nowrap" } }, [
          $data.tabBool ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "con-left"
          }, [
            (vue.openBlock(true), vue.createElementBlock(
              vue.Fragment,
              null,
              vue.renderList($data.conLeftList, (item, index) => {
                return vue.openBlock(), vue.createElementBlock("view", {
                  class: "item",
                  key: index,
                  onClick: ($event) => $options.leftClick(index)
                }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass($data.leftIndex == index ? "hr" : "hr1")
                    },
                    null,
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode(
                    "view",
                    { class: "item-text" },
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ], 8, ["onClick"]);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              class: "content",
              style: vue.normalizeStyle({ width: $data.tabBool ? "" : "100%" })
            },
            [
              vue.createElementVNode("view", { class: "tab" }, [
                vue.createElementVNode("view", { class: "h-tab" }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList($options.tabList, (item, index) => {
                      return vue.openBlock(), vue.createElementBlock("view", {
                        class: vue.normalizeClass(["h-tab-item h-tab-item-active", $data.active == index ? "active" : ""]),
                        onClick: ($event) => $options.activeClick(index),
                        key: index
                      }, vue.toDisplayString(item), 11, ["onClick"]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ])
              ]),
              vue.createElementVNode("view", { class: "con-box" }, [
                vue.createElementVNode(
                  "scroll-view",
                  {
                    style: { "height": "1250rpx" },
                    "scroll-y": "true",
                    class: "scroll-Y",
                    onScrolltoupper: _cache[1] || (_cache[1] = (...args) => _ctx.upper && _ctx.upper(...args)),
                    onScrolltolower: _cache[2] || (_cache[2] = (...args) => _ctx.lower && _ctx.lower(...args)),
                    onScroll: _cache[3] || (_cache[3] = (...args) => _ctx.scroll && _ctx.scroll(...args))
                  },
                  [
                    $data.tabBool ? (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      { key: 0 },
                      vue.renderList($data.conBox, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "item",
                          key: index
                        }, [
                          vue.createElementVNode("view", { class: "img" }, [
                            vue.createElementVNode("image", {
                              src: item.src,
                              mode: "widthFix"
                            }, null, 8, ["src"])
                          ]),
                          vue.createElementVNode(
                            "text",
                            null,
                            vue.toDisplayString(item.title),
                            1
                            /* TEXT */
                          ),
                          vue.createElementVNode(
                            "text",
                            null,
                            vue.toDisplayString(item.title),
                            1
                            /* TEXT */
                          )
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )) : vue.createCommentVNode("v-if", true),
                    !$data.tabBool ? (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      { key: 1 },
                      vue.renderList($data.conBox, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: "item1",
                          key: index
                        }, [
                          vue.createElementVNode("view", { class: "img" }, [
                            vue.createElementVNode("image", {
                              src: item.src,
                              mode: "widthFix"
                            }, null, 8, ["src"])
                          ]),
                          vue.createElementVNode("view", { class: "item1-text" }, [
                            vue.createElementVNode(
                              "text",
                              { class: "title" },
                              vue.toDisplayString(item.title),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "price" },
                              vue.toDisplayString(_ctx.$t("app.price")) + ":" + vue.toDisplayString(item.price),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "label" },
                              vue.toDisplayString(item.label),
                              1
                              /* TEXT */
                            ),
                            vue.createElementVNode(
                              "text",
                              { class: "price1" },
                              vue.toDisplayString(item.price),
                              1
                              /* TEXT */
                            )
                          ])
                        ]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    )) : vue.createCommentVNode("v-if", true)
                  ],
                  32
                  /* HYDRATE_EVENTS */
                )
              ])
            ],
            4
            /* STYLE */
          )
        ])
      ])
    ]);
  }
  const PagesClassificationClassification = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__scopeId", "data-v-5fbab323"], ["__file", "D:/私人文件夹/crossBorderShop/pages/classification/classification.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        userInfo: {
          name: "昵称",
          id: "111111",
          vip: 1,
          num1: 1,
          num2: 1,
          num3: 1
        }
      };
    },
    computed: {
      linkList() {
        return [
          { url: "", title: this.$t("app.myWallet"), src: "../../static/img/lc.png" },
          { url: "", title: this.$t("app.financial"), src: "../../static/img/cw.png" },
          { url: "", title: this.$t("app.securityCenter"), src: "../../static/img/ws.png" },
          { url: "", title: this.$t("app.recharge"), src: "../../static/img/cz.png" },
          { url: "", title: this.$t("app.withdraw"), src: "../../static/img/tx.png" },
          { url: "", title: this.$t("app.basicFunctions"), src: "../../static/img/jz.png" }
        ];
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", { class: "bk" }, [
        vue.createElementVNode("view", { class: "userinfo" }, [
          vue.createElementVNode("view", { class: "logo" }, [
            vue.createElementVNode("image", {
              src: "/static/img/logo.png",
              mode: "widthFix"
            })
          ]),
          vue.createElementVNode("view", { class: "msg" }, [
            vue.createElementVNode("view", { class: "name" }, [
              vue.createElementVNode(
                "text",
                { class: "name-text" },
                vue.toDisplayString($data.userInfo.name),
                1
                /* TEXT */
              ),
              vue.createElementVNode(
                "view",
                { class: "vip" },
                "VIP" + vue.toDisplayString($data.userInfo.vip),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "id" }, [
              vue.createElementVNode(
                "text",
                null,
                vue.toDisplayString($data.userInfo.id),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "number" }, [
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("view", { class: "num" }, [
              vue.createElementVNode("text", null, "1")
            ]),
            vue.createElementVNode("view", { class: "text" }, [
              vue.createElementVNode("text", null, "平衡 (U)")
            ])
          ]),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("view", { class: "num" }, [
              vue.createElementVNode("text", null, "1")
            ]),
            vue.createElementVNode("view", { class: "text" }, [
              vue.createElementVNode("text", null, "总收入 (U)")
            ])
          ]),
          vue.createElementVNode("view", { class: "item" }, [
            vue.createElementVNode("view", { class: "num" }, [
              vue.createElementVNode("text", null, "1")
            ]),
            vue.createElementVNode("view", { class: "text" }, [
              vue.createElementVNode("text", null, "存款 (U)")
            ])
          ])
        ])
      ]),
      vue.createElementVNode("view", { class: "list" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($options.linkList, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: "item",
              key: index
            }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("image", {
                  src: item.src,
                  mode: "widthFix"
                }, null, 8, ["src"]),
                vue.createElementVNode("view", { class: "text" }, [
                  vue.createElementVNode(
                    "text",
                    null,
                    vue.toDisplayString(item.title),
                    1
                    /* TEXT */
                  )
                ])
              ]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/right_arrow.png",
                  mode: "widthFix"
                })
              ])
            ]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createElementVNode("view", { class: "btn-box" }, [
        vue.createElementVNode("view", { class: "box" }, [
          vue.createElementVNode("view", { class: "exit" }, [
            vue.createElementVNode("text", null, "退出登陆")
          ]),
          vue.createElementVNode("view", { class: "agreement" }, [
            vue.createElementVNode("text", null, "服务协议")
          ])
        ])
      ])
    ]);
  }
  const PagesMeMe = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__scopeId", "data-v-19c123a7"], ["__file", "D:/私人文件夹/crossBorderShop/pages/me/me.vue"]]);
  const _sfc_main$4 = {
    name: "hxNavbar",
    components: {},
    data() {
      return {
        title: "",
        backgroundColorRgba: "",
        backgroundColorRgb: "rgb(222,222,222)",
        backgroundImage: null,
        backgroundImageEnd: null,
        //当前使用文字颜色
        txtColor: "#333333",
        // 背景颜色过度数组
        bgArr: [],
        // 文字颜色过度数组
        colorArr: [],
        // 状态栏颜色
        statusBarBackground: "",
        // 背景透明
        bgTransparent: 1,
        // 背景图片透明
        bgImgTransparent: [1, 1],
        // 小程序 胶囊宽度
        jnWidth: 0,
        // 背景颜色是否为线性渐变
        bgIsLine: false,
        // 插槽过度透明度
        slotSwitchOpacity: 1,
        // 默认设置
        conf: {
          // 标题
          title: "",
          // nav 高度
          height: 44,
          // 是否固定头部
          fixed: true,
          // 是否包含状态栏
          statusBar: true,
          // 状态栏字体颜色，只支持黑（#000000）和白（#FFFFFF）两种颜色。为数组则是滑动变色
          statusBarFontColor: "#000000",
          //状态栏背景颜色
          statusBarBackground: null,
          // 字体
          font: "hxicon",
          // 字体大小
          fontSize: "18px",
          // 文字颜色，可以数组和string，为数组则是滑动变色 ["#000000","#ff9900"]
          color: "#333333",
          //背景颜色;参数一：透明度;参数二：背景颜色（array则为线性渐变，string为单色背景）、
          // [1,['#24bdab','#80c54c']]
          backgroundColor: [1, "#ffffff"],
          // 背景图片（array则为滑动切换背景图，string为单一背景图）
          // 普通背景
          // ['/static/xj.jpg']
          // 切换功能参数说明：第一张图片，第二张图，第一张图透明度，第二张图透明度
          // ['/static/xj.jpg','/static/xk.jpg',1,1]
          backgroundImg: null,
          // 线性渐变角度
          backgroundColorLinearDeg: "to right",
          // 滑动距离
          slideHeight: 100,
          // 滑动后背景颜色;参数一：透明度;参数二：背景颜色（array则为线性渐变，string为单色背景）
          slideBackgroundColor: null,
          // 是否需要返回按钮
          back: true,
          // 返回文本 '返回',小程序无效
          backTxt: null,
          // 返回tab页面
          backTabPage: null,
          // 返回普通页面
          backPage: null,
          // 左侧按钮组，icon参数为必填
          leftButton: null,
          // 右侧按钮组，icon参数为必填
          rightButton: null,
          // rightButton:[{
          //	key: 'address',		// 标识，方便事件识别是哪一个按钮触发
          // 	icon: '&#xe64b;',	// 图标代码
          //	txt: '文本',			// 文本，常用于城市选择
          // 	color: '#ff9900',	// 图标颜色
          //  position: 'left', // 图标居于文字left 或 right
          // },{
          //	key: 'address',		// 标识，方便事件识别是哪一个按钮触发
          // 	icon: '&#xe650;', 
          // 	txt: '文本',
          // 	color: '#894574',
          // },]
          // 搜索框
          search: null,
          // search: {
          // 	value:'',
          // 	placeholder: '',
          // 	disabled: false
          // }
          // 阴影
          shadow: false,
          // 底边框
          border: false,
          // 导航栏占位符
          barPlaceholder: true,
          // 插槽滑动切换
          slotSwitch: 0,
          // 右插槽
          rightSlot: false,
          // 右插槽切换
          rightSlotSwitch: false
        }
      };
    },
    props: {
      config: {
        type: Object,
        default: () => ({})
      }
    },
    computed: {
      //获取系统状态栏高度
      statusBarHeight() {
        return uni.getSystemInfoSync().statusBarHeight;
      },
      navbarHeight() {
        var that = this;
        return uni.getSystemInfoSync().statusBarHeight + that.conf.height + "px";
      },
      screenWidth() {
        return uni.getSystemInfoSync().screenWidth;
      }
    },
    created() {
      var that = this;
      that.init();
    },
    mounted() {
    },
    watch: {
      // 'conf.leftButton': {
      // 	handler(newVal, oldVal) {
      // 		__f__('log','at components/hx-navbar.vue:316',"出发了")
      // 		//this.init()
      // 		this.conf.leftButton = newVal
      // 	},
      // 	// 启用深度监听
      // 	deep: true
      // }
    },
    methods: {
      iconHandle(icon) {
        icon = icon.replace(/(&#x|;)/g, "");
        return unescape("%u" + icon);
      },
      init() {
        var that = this;
        that.conf = Object.assign(that.conf, that.config);
        if (that.conf.title != "") {
          uni.setNavigationBarTitle({
            title: that.conf.title
          });
        }
        if (that.conf.title) {
          if (typeof that.conf.title == "object" && that.conf.title.length == 2) {
            that.title = that.conf.title[0];
          } else {
            that.title = that.conf.title;
          }
        }
        if (that.conf.statusBarBackground) {
          if (typeof that.conf.statusBarBackground == "object" && that.conf.statusBarBackground.length == 2) {
            that.statusBarBackground = that.conf.statusBarBackground[0];
          } else {
            that.statusBarBackground = that.conf.statusBarBackground;
          }
        }
        if (that.conf.statusBarFontColor) {
          uni.setNavigationBarColor({
            frontColor: typeof that.conf.statusBarFontColor == "object" ? that.conf.statusBarFontColor[0] : that.conf.statusBarFontColor,
            backgroundColor: "#000000"
          });
        }
        if (that.conf.color != "") {
          if (typeof that.conf.color == "object" && that.conf.color.length == 2) {
            that.txtColor = that.conf.color[0];
            that.colorArr = that.gradientColor(that.conf.color[0], that.conf.color[1], that.conf.slideHeight);
          } else {
            that.txtColor = that.conf.color;
          }
        }
        if (that.conf.backgroundImg) {
          let img = "";
          if (typeof that.conf.backgroundImg == "object") {
            img = that.conf.backgroundImg[0];
            if (that.conf.backgroundImg.length > 2) {
              that.bgTransparent = that.conf.backgroundImg[2];
            }
          } else {
            img = that.conf.backgroundImg;
            that.bgTransparent = 1;
          }
          that.backgroundImage = that.bgImgStringHandle(img);
        }
        if (that.conf.backgroundColor) {
          let transparent = that.conf.backgroundColor[0];
          let background = that.conf.backgroundColor[1];
          if (typeof background == "object" && background.length > 1) {
            that.bgIsLine = true;
          }
          if (that.conf.slideBackgroundColor) {
            let backgroundEnd = that.conf.slideBackgroundColor[1];
            that.bgArr = [];
            if (background && typeof background == "object" && background.length > 0) {
              for (var i in background) {
                that.bgArr.push(that.gradientColor(background[i], backgroundEnd[i], that.conf.slideHeight));
              }
            } else {
              that.bgArr.push(that.gradientColor(background, backgroundEnd, that.conf.slideHeight));
            }
          }
          that.bgTransparent = transparent;
          that.setBgColor(background, transparent);
        }
        if (that.conf.rightButton && that.conf.rightButton.length > 0)
          ;
      },
      // 返回
      onBack() {
        var that = this;
        if (that.conf.backTabPage) {
          uni.switchTab({
            url: that.conf.backTabPage
          });
        } else if (that.conf.backPage) {
          uni.redirectTo({
            url: that.conf.backPage
          });
        } else if (getCurrentPages().length > 1) {
          uni.navigateBack();
        } else
          ;
      },
      onClickBtn(e) {
        this.$emit("clickBtn", e);
      },
      pageScroll(e) {
        var that = this;
        const st = parseFloat(e.scrollTop.toFixed(2));
        let slideHeight = that.conf.slideHeight;
        let a = Math.round(st);
        if (a > 0) {
          a -= 1;
        } else {
          a = 0;
        }
        if (that.conf.title && typeof that.conf.title == "object" && that.conf.title.length == 2) {
          if (st <= slideHeight) {
            that.title = that.conf.title[0];
          } else {
            that.title = that.conf.title[1];
          }
        }
        if (that.conf.color && typeof that.conf.color == "object" && that.conf.color.length == 2) {
          let colorArr = that.colorArr;
          let rgb = a <= colorArr.length - 1 ? colorArr[a] : colorArr[colorArr.length - 1];
          that.txtColor = rgb;
        }
        that.slotSwitchOpacity = that.transHandle(st, slideHeight, 1, 0);
        if (that.conf.statusBarFontColor && typeof that.conf.statusBarFontColor == "object" && that.conf.statusBarFontColor.length == 2) {
          if (st <= slideHeight) {
            uni.setNavigationBarColor({
              frontColor: that.conf.statusBarFontColor[0],
              backgroundColor: "#ffffff"
            });
          } else {
            uni.setNavigationBarColor({
              frontColor: that.conf.statusBarFontColor[1],
              backgroundColor: "#ffffff"
            });
          }
        }
        if (that.conf.statusBarBackground && typeof that.conf.statusBarBackground == "object" && that.conf.statusBarBackground.length == 2) {
          if (st <= slideHeight) {
            that.statusBarBackground = that.conf.statusBarBackground[0];
          } else {
            that.statusBarBackground = that.conf.statusBarBackground[1];
          }
        }
        let BI = that.conf.backgroundImg;
        if (that.conf.backgroundImg && typeof that.conf.backgroundImg == "object" && BI.length > 1) {
          let BIL = BI.length;
          that.bgTransparent = BIL <= 3 ? 1 : that.transHandle(st, slideHeight, BI[2], BI[3]);
          that.bgImgTransparent[0] = BIL <= 3 ? 1 : that.transHandle(st, slideHeight, BI[2], 0);
          that.bgImgTransparent[1] = BI[3];
          if (st <= slideHeight) {
            BI[0];
          } else {
            BI[1];
          }
          that.backgroundImage = that.bgImgStringHandle(BI[0]);
          that.backgroundImageEnd = that.bgImgStringHandle(BI[1]);
        }
        if (that.conf.slideBackgroundColor) {
          let bgArr = that.bgArr;
          var bgData = [];
          for (var i in that.bgArr) {
            let rgb = a <= bgArr[i].length - 1 ? bgArr[i][a] : bgArr[i][bgArr[i].length - 1];
            bgData.push(rgb.replace(/(?:\(|\)|rgb|RGB)*/g, "").split(","));
          }
          let transparentStart = that.conf.backgroundColor[0];
          let transparentEnd = that.conf.slideBackgroundColor[0];
          let transparent = transparentEnd;
          if (st <= slideHeight) {
            let cVal = Math.abs(transparentEnd - transparentStart);
            let tVal = parseFloat(cVal / slideHeight).toFixed(4);
            let curVal = parseFloat(tVal * st).toFixed(2);
            transparent = transparentStart > transparentEnd ? transparentStart - curVal : transparentStart + curVal;
            transparent = parseFloat(transparent).toFixed(2);
          }
          let backgroundEnd = that.conf.slideBackgroundColor[1];
          let rgbStr = "";
          if (typeof backgroundEnd == "object" && backgroundEnd.length > 1) {
            rgbStr = "linear-gradient(" + that.conf.backgroundColorLinearDeg + ",";
            let l = bgData.length;
            for (var i in bgData) {
              let c = bgData[i];
              rgbStr += "rgba(" + c[0] + "," + c[1] + "," + c[2] + "," + transparent + ")";
              if (l != i * 1 + 1) {
                rgbStr += ",";
              }
            }
            rgbStr += ")";
          } else {
            rgbStr = "rgba(" + bgData[0][0] + "," + bgData[0][1] + "," + bgData[0][2] + "," + transparent + ")";
          }
          that.bgTransparent = transparent;
          that.backgroundColorRgba = rgbStr;
        }
      },
      // 透明度计算，
      // 起始位置，结束位置，起始透明度，目标透明度
      transHandle(hStart, hEnd, tStart, tEnd) {
        let transparent = tEnd;
        if (hStart <= hEnd) {
          let cVal = Math.abs(tEnd - tStart);
          let tVal = parseFloat(cVal / hEnd).toFixed(4);
          let curVal = parseFloat(tVal * hStart).toFixed(2);
          transparent = tStart > tEnd ? tStart - curVal : tStart + curVal;
          transparent = parseFloat(transparent).toFixed(2);
        }
        return transparent;
      },
      // 起始颜色，结束颜色，过渡数量
      gradientColor(startColor, endColor, step) {
        var that = this;
        let startRGB = that.colorRgb(startColor);
        let startR = startRGB[0];
        let startG = startRGB[1];
        let startB = startRGB[2];
        let endRGB = that.colorRgb(endColor);
        let endR = endRGB[0];
        let endG = endRGB[1];
        let endB = endRGB[2];
        let sR = (endR - startR) / step;
        let sG = (endG - startG) / step;
        let sB = (endB - startB) / step;
        let colorArr = [];
        for (let i = 0; i < step; i++) {
          var str = "rgb(" + parseInt(sR * i + startR) + "," + parseInt(sG * i + startG) + "," + parseInt(sB * i + startB) + ")";
          let hex = that.colorHex(str);
          colorArr.push(hex);
        }
        return colorArr;
      },
      // 转换函数
      colorRgb(sColor) {
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        var sColor = sColor.toLowerCase();
        if (sColor && reg.test(sColor)) {
          if (sColor.length === 4) {
            var sColorNew = "#";
            for (var i = 1; i < 4; i += 1) {
              sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
            }
            sColor = sColorNew;
          }
          var sColorChange = [];
          for (var i = 1; i < 7; i += 2) {
            sColorChange.push(parseInt("0x" + sColor.slice(i, i + 2)));
          }
          return sColorChange;
        } else {
          return sColor;
        }
      },
      colorHex(rgb) {
        var _this = rgb;
        var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
        if (/^(rgb|RGB)/.test(_this)) {
          var aColor = _this.replace(/(?:(|)|rgb|RGB)*/g, "").split(",");
          var strHex = "#";
          for (var i = 0; i < aColor.length; i++) {
            var hex = Number(aColor[i]).toString(16);
            hex = hex < 10 ? "0" + hex : hex;
            if (hex === "0") {
              hex += hex;
            }
            strHex += hex;
          }
          if (strHex.length !== 7) {
            strHex = _this;
          }
          return strHex;
        } else if (reg.test(_this)) {
          var aNum = _this.replace(/#/, "").split("");
          if (aNum.length === 6) {
            return _this;
          } else if (aNum.length === 3) {
            var numHex = "#";
            for (var i = 0; i < aNum.length; i += 1) {
              numHex += aNum[i] + aNum[i];
            }
            return numHex;
          }
        } else {
          return _this;
        }
      },
      //背景颜色初始化
      // 透明度，背景颜色string ，array
      setBgColor(background, transparent) {
        var that = this;
        if (typeof background == "object" && background.length > 0) {
          let rgbStr = "linear-gradient(" + that.conf.backgroundColorLinearDeg + ",";
          let c = null;
          for (var i in background) {
            c = background[i];
            let o = that.colorRgb(c);
            rgbStr += `rgba(${o[0]}, ${o[1]}, ${o[2]}, ${transparent})`;
            if (background.length != i * 1 + 1) {
              rgbStr += ",";
            }
          }
          rgbStr += ")";
          that.backgroundColorRgba = rgbStr;
        } else {
          let c = background;
          let o = that.colorRgb(c);
          that.backgroundColorRgba = `rgba(${o[0]}, ${o[1]}, ${o[2]}, ${transparent})`;
        }
      },
      bgImgStringHandle(img) {
        return img;
      },
      // 搜索框，点击完成时触发
      searchConfirm(event) {
        this.$emit("searchConfirm", event.detail);
      },
      // 搜索框点击事件
      searchClick(event) {
        this.$emit("searchClick", true);
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock(
      "view",
      {
        class: "hx-navbar",
        style: vue.normalizeStyle({ width: $options.screenWidth + "px" })
      },
      [
        vue.createElementVNode(
          "view",
          {
            class: vue.normalizeClass(["hx-navbar__content", { "hx-navbar__fixed": $data.conf.fixed, "hx-navbar__shadow": $data.conf.shadow, "hx-navbar__border": $data.conf.border }]),
            style: vue.normalizeStyle({ width: $options.screenWidth + "px", "background-color": !$data.bgIsLine ? $data.backgroundColorRgba : "", "background-image": $data.bgIsLine ? $data.backgroundColorRgba : "", height: $options.navbarHeight, color: $data.txtColor })
          },
          [
            vue.createCommentVNode(` <block v-if="backgroundImage">\r
				<view class="hx-navbar__img" :style="{'background-image': backgroundImageEnd,'opacity': bgImgTransparent[1]}"></view>\r
				<view class="hx-navbar__img" :style="{'background-image': backgroundImage,'opacity': bgImgTransparent[0]}"></view>\r
			</block> `),
            $data.backgroundImage ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 0,
                class: "hx-navbar__content__imgctn",
                style: vue.normalizeStyle({ "opacity": $data.bgImgTransparent[1] })
              },
              [
                vue.createElementVNode("image", {
                  class: "hx-navbar__imgctn__img",
                  style: vue.normalizeStyle({ "height": $data.conf.height + $options.statusBarHeight + "px", width: $options.screenWidth + "px" }),
                  src: $data.backgroundImageEnd,
                  mode: "scaleToFill"
                }, null, 12, ["src"])
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true),
            $data.backgroundImage ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 1,
                class: "hx-navbar__content__imgctn",
                style: vue.normalizeStyle({ "opacity": $data.bgImgTransparent[0] })
              },
              [
                vue.createElementVNode("image", {
                  class: "hx-navbar__imgctn__img",
                  style: vue.normalizeStyle({ "height": $data.conf.height + $options.statusBarHeight + "px", width: $options.screenWidth + "px" }),
                  src: $data.backgroundImage,
                  mode: "scaleToFill"
                }, null, 12, ["src"])
              ],
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 状态栏 "),
            $data.conf.statusBar ? (vue.openBlock(), vue.createElementBlock(
              "view",
              {
                key: 2,
                style: vue.normalizeStyle("height:" + $options.statusBarHeight + "px;" + ($data.statusBarBackground ? "background-color:" + $data.statusBarBackground : "")),
                class: "hx-navbar__status"
              },
              null,
              4
              /* STYLE */
            )) : vue.createCommentVNode("v-if", true),
            vue.createCommentVNode(" 小程序分开编译 "),
            vue.createElementVNode(
              "view",
              {
                class: "hx-navbar__content__main",
                style: vue.normalizeStyle({ height: $data.conf.height + "px", fontSize: $data.conf.fontSize })
              },
              [
                vue.createCommentVNode(" 不是app的时候中返回和left在前面 "),
                $data.conf.back ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 0,
                  class: "hx-navbar__content__main_back",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.onBack && $options.onBack(...args))
                }, [
                  vue.createElementVNode(
                    "text",
                    {
                      class: vue.normalizeClass(["hxicon hx-navbar__icon", { "hx-navbar__icontran": $data.bgTransparent == 0 }]),
                      style: vue.normalizeStyle({ color: $data.txtColor })
                    },
                    "",
                    6
                    /* CLASS, STYLE */
                  ),
                  $data.conf.backTxt ? (vue.openBlock(), vue.createElementBlock(
                    "text",
                    {
                      key: 0,
                      class: "hx_font_size",
                      style: vue.normalizeStyle({ color: $data.txtColor })
                    },
                    vue.toDisplayString($data.conf.backTxt),
                    5
                    /* TEXT, STYLE */
                  )) : vue.createCommentVNode("v-if", true)
                ])) : vue.createCommentVNode("v-if", true),
                $data.conf.leftSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 1,
                  class: "hx-navbar__content__main_left",
                  style: { "padding": "0", "margin": "0 13px 0 0" }
                }, [
                  $data.conf.leftSlotSwitch && $data.slotSwitchOpacity == 0 ? vue.renderSlot(_ctx.$slots, "leftSwitch", { key: 0 }, void 0, true) : vue.renderSlot(_ctx.$slots, "left", { key: 1 }, void 0, true)
                ])) : vue.createCommentVNode("v-if", true),
                $data.conf.leftButton ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 2,
                    class: "hx-navbar__content__main_left",
                    style: vue.normalizeStyle({ "padding": $data.conf.back || $data.conf.leftSlot ? "0" : "0 9px 0 13px;" })
                  },
                  [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($data.conf.leftButton, (btn, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: index,
                          class: vue.normalizeClass(["hx-navbar__content__main_left_btn", { "hx-navbar__btntran": $data.bgTransparent == 0 }]),
                          onClick: ($event) => $options.onClickBtn(btn)
                        }, [
                          btn.position && btn.position == "left" ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 0,
                              class: vue.normalizeClass(["hx-navbar__icon", $data.conf.font]),
                              style: vue.normalizeStyle({ color: btn.color ? btn.color : $data.txtColor, marginRight: btn.txt ? "2px" : "0" })
                            },
                            vue.toDisplayString($options.iconHandle(btn.icon)),
                            7
                            /* TEXT, CLASS, STYLE */
                          )) : vue.createCommentVNode("v-if", true),
                          btn.txt ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 1,
                              class: "hx-navbar__content__main_lefticon_txt hx_font_size",
                              style: vue.normalizeStyle({ color: btn.color ? btn.color : $data.txtColor })
                            },
                            vue.toDisplayString(btn.txt),
                            5
                            /* TEXT, STYLE */
                          )) : vue.createCommentVNode("v-if", true),
                          !btn.position || btn.position != "left" ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 2,
                              class: vue.normalizeClass(["hx-navbar__icon", $data.conf.font]),
                              style: vue.normalizeStyle({ color: btn.color ? btn.color : $data.txtColor, marginLeft: btn.txt ? "2px" : "0" })
                            },
                            vue.toDisplayString($options.iconHandle(btn.icon)),
                            7
                            /* TEXT, CLASS, STYLE */
                          )) : vue.createCommentVNode("v-if", true)
                        ], 10, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )) : vue.createCommentVNode("v-if", true),
                !$data.conf.search && !$data.conf.maxSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 3,
                  class: "hx-navbar__content__main_center"
                }, [
                  vue.createElementVNode("view", { class: "hx-navbar__content__main_center_flex" }),
                  vue.createElementVNode("view", { class: "hx-navbar__content__main_center_txt" }, [
                    !$data.conf.centerSlot && $data.title ? (vue.openBlock(), vue.createElementBlock(
                      "text",
                      {
                        key: 0,
                        class: "hx_font_size hx_text_overflow",
                        style: vue.normalizeStyle({ color: $data.txtColor })
                      },
                      vue.toDisplayString($data.title),
                      5
                      /* TEXT, STYLE */
                    )) : vue.createCommentVNode("v-if", true),
                    $data.conf.centerSlotSwitch && $data.slotSwitchOpacity == 0 ? vue.renderSlot(_ctx.$slots, "centerSwitch", { key: 1 }, void 0, true) : vue.renderSlot(_ctx.$slots, "center", { key: 2 }, void 0, true)
                  ]),
                  vue.createElementVNode("view", { class: "hx-navbar__content__main_center_flex" })
                ])) : vue.createCommentVNode("v-if", true),
                !$data.conf.search && $data.conf.maxSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 4,
                  class: "hx-navbar__content__main_center",
                  style: { "overflow": "hidden" }
                }, [
                  $data.conf.maxSlotSwitch && $data.slotSwitchOpacity == 0 ? vue.renderSlot(_ctx.$slots, "maxSwitch", { key: 0 }, void 0, true) : vue.renderSlot(_ctx.$slots, "max", { key: 1 }, void 0, true)
                ])) : vue.createCommentVNode("v-if", true),
                $data.conf.search ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 5,
                    class: "hx-navbar__content__main_search",
                    style: vue.normalizeStyle({ "padding-left": $data.conf.leftButton ? "9px" : "13px", "padding-right": $data.conf.rightButton ? "9px" : "13px" }),
                    onClick: _cache[2] || (_cache[2] = (...args) => $options.searchClick && $options.searchClick(...args))
                  },
                  [
                    vue.createElementVNode("text", {
                      class: "hxicon hx-navbar__content__main_search_hxicon",
                      style: { "color": "#dbdbdb" }
                    }, ""),
                    vue.createElementVNode("input", {
                      type: "text",
                      class: "hx-navbar__content__main_search_input hx_font_size",
                      "placeholder-style": "color:#dbdbdb;",
                      "confirm-type": "search",
                      value: $data.conf.search.value,
                      placeholder: $data.conf.search.placeholder ? $data.conf.search.placeholder : "请输入搜索内容",
                      disabled: $data.conf.search.disabled,
                      onConfirm: _cache[1] || (_cache[1] = (...args) => $options.searchConfirm && $options.searchConfirm(...args))
                    }, null, 40, ["value", "placeholder", "disabled"])
                  ],
                  4
                  /* STYLE */
                )) : vue.createCommentVNode("v-if", true),
                !$data.conf.search ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 6,
                  class: "",
                  style: { "flex": "1" }
                })) : vue.createCommentVNode("v-if", true),
                $data.conf.rightButton ? (vue.openBlock(), vue.createElementBlock(
                  "view",
                  {
                    key: 7,
                    class: "hx-navbar__content__main_right",
                    style: vue.normalizeStyle({ padding: $data.conf.rightSlot ? "0" : "0 13px 0 9px;" })
                  },
                  [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList($data.conf.rightButton, (btn, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: index,
                          class: vue.normalizeClass(["hx-navbar__content__main_right_btn", { "hx-navbar__btntran": $data.bgTransparent == 0 }]),
                          onClick: ($event) => $options.onClickBtn(btn)
                        }, [
                          btn.position && btn.position == "left" ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 0,
                              class: vue.normalizeClass(["hxicon hx-navbar__content__main_right_icon hx-navbar__icon", $data.conf.font]),
                              style: vue.normalizeStyle({ color: btn.color ? btn.color : "", marginRight: btn.txt ? "2px" : "0" })
                            },
                            vue.toDisplayString($options.iconHandle(btn.icon)),
                            7
                            /* TEXT, CLASS, STYLE */
                          )) : vue.createCommentVNode("v-if", true),
                          btn.txt ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 1,
                              class: "hx-navbar__content__main_right_txt hx_font_size",
                              style: vue.normalizeStyle({ color: btn.color ? btn.color : $data.txtColor })
                            },
                            vue.toDisplayString(btn.txt),
                            5
                            /* TEXT, STYLE */
                          )) : vue.createCommentVNode("v-if", true),
                          !btn.position || btn.position != "left" ? (vue.openBlock(), vue.createElementBlock(
                            "text",
                            {
                              key: 2,
                              class: vue.normalizeClass(["hxicon hx-navbar__content__main_right_icon hx-navbar__icon", $data.conf.font]),
                              style: vue.normalizeStyle({ color: btn.color ? btn.color : "", marginLeft: btn.txt ? "2px" : "0" })
                            },
                            vue.toDisplayString($options.iconHandle(btn.icon)),
                            7
                            /* TEXT, CLASS, STYLE */
                          )) : vue.createCommentVNode("v-if", true)
                        ], 10, ["onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ],
                  4
                  /* STYLE */
                )) : vue.createCommentVNode("v-if", true),
                $data.conf.rightSlot ? (vue.openBlock(), vue.createElementBlock("view", {
                  key: 8,
                  class: "hx-navbar__content__main_right",
                  style: { "padding": "0", "margin": "0" }
                }, [
                  $data.conf.rightSlotSwitch && $data.slotSwitchOpacity == 0 ? vue.renderSlot(_ctx.$slots, "rightSwitch", { key: 0 }, void 0, true) : vue.renderSlot(_ctx.$slots, "right", { key: 1 }, void 0, true),
                  vue.createCommentVNode(" 滑动过度 和 突变两种模式，因不实用在此先注释 "),
                  vue.createCommentVNode(` <view v-if="conf.rightSlotSwitch && (conf.slotSwitch == 1 || conf.slotSwitch == 2 && slotSwitchOpacity == 0) " :style="{'opacity': 1 - slotSwitchOpacity,top:statusBarHeight+ 1 + 'px'}">\r
						<slot name="rightSwitch" />\r
					</view>\r
					<view v-if="conf.slotSwitch == 1 || (conf.slotSwitch == 2 && slotSwitchOpacity != 0)"   :style="{'opacity': conf.slotSwitch == 1 ? slotSwitchOpacity : 1,top:statusBarHeight + 1 + 'px'}">\r
						<slot name="right" />\r
					</view> `)
                ])) : vue.createCommentVNode("v-if", true)
              ],
              4
              /* STYLE */
            )
          ],
          6
          /* CLASS, STYLE */
        ),
        vue.createCommentVNode(" 占位符，一般都需要 "),
        $data.conf.barPlaceholder && $data.conf.fixed ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
          $data.conf.statusBar ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              style: vue.normalizeStyle({ height: $options.statusBarHeight + "px" })
            },
            null,
            4
            /* STYLE */
          )) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode(
            "view",
            {
              style: vue.normalizeStyle({ height: $data.conf.height + "px" })
            },
            null,
            4
            /* STYLE */
          )
        ])) : vue.createCommentVNode("v-if", true)
      ],
      4
      /* STYLE */
    );
  }
  const hxNavbar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__scopeId", "data-v-4614d97c"], ["__file", "D:/私人文件夹/crossBorderShop/components/hx-navbar.vue"]]);
  const _sfc_main$3 = {
    components: { hxNavbar },
    data() {
      return {
        config: {
          title: "这里是新疆",
          color: "#ffffff",
          backgroundColor: [1, "#24bdab"],
          // 背景图片（array则为滑动切换背景图，string为单一背景图）
          // backgroundImg: ['/static/xj.jpg','/static/logo.png'],
          backgroundImg: "../../static/header_tabber.png"
        }
      };
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_hx_navbar = vue.resolveComponent("hx-navbar");
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createVNode(_component_hx_navbar, { config: $data.config }, null, 8, ["config"]),
      vue.createElementVNode("view", { class: "" }, " 1111 ")
    ]);
  }
  const PagesMeWalletWallet = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/私人文件夹/crossBorderShop/pages/me/wallet/wallet.vue"]]);
  const _sfc_main$2 = {
    components: {
      CustomHeader: __easycom_0
    },
    data() {
      return {
        pNumberPerfix: "+1",
        // 手机前缀
        pNumberPerfixArr: ["+1", "+2", "+3"]
        // 手机前缀可选数组
      };
    },
    methods: {
      bindPickerChange() {
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_customHeader = resolveEasycom(vue.resolveDynamicComponent("customHeader"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "profix-page-container region-page" }, [
      vue.createVNode(_component_customHeader, { style: { "z-index": "0" } }),
      vue.createVNode(_component_customHeader, { style: { "position": "fixed", "top": "0", "width": "100%" } }),
      vue.createElementVNode("view", { class: "region-scroll page-scroll" }, [
        vue.createElementVNode("view", { class: "logo pic" }, [
          vue.createElementVNode("image", {
            src: "/static/img/logo.png",
            mode: "widthFix",
            class: "img"
          })
        ]),
        vue.createElementVNode("view", { class: "form-container" }, [
          vue.createElementVNode("view", { class: "form-tit" }, "PUTH GROUP"),
          vue.createElementVNode("view", { class: "input-con account" }, [
            vue.createElementVNode("view", { class: "image-icon" }),
            vue.createElementVNode("view", { class: "prefix-con" }, [
              vue.createElementVNode(
                "view",
                { class: "number-prefix" },
                vue.toDisplayString($data.pNumberPerfix),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "arrow" })
            ]),
            vue.createElementVNode("view", { class: "inp" }, [
              vue.createElementVNode("input", {
                type: "number",
                placeholder: _ctx.$t("login.phonePlaceholder")
              }, null, 8, ["placeholder"])
            ])
          ]),
          vue.createElementVNode("view", { class: "input-con password" }, [
            vue.createElementVNode("view", { class: "image-icon" }),
            vue.createElementVNode("view", { class: "inp" }, [
              vue.createElementVNode("input", {
                type: "text",
                password: "",
                placeholder: _ctx.$t("login.pwdPlaceholder")
              }, null, 8, ["placeholder"])
            ]),
            vue.createElementVNode("view", { class: "eye-icon" })
          ]),
          vue.createElementVNode("view", { class: "input-con invite-code" }, [
            vue.createElementVNode("view", { class: "image-icon" }),
            vue.createElementVNode("view", { class: "inp" }, [
              vue.createElementVNode("input", {
                type: "number",
                placeholder: _ctx.$t("region.invitePlaceholder")
              }, null, 8, ["placeholder"])
            ]),
            vue.createElementVNode("view", { class: "eye-icon" })
          ]),
          vue.createElementVNode("view", { class: "btn-list" }, [
            vue.createElementVNode(
              "button",
              { class: "button login-btn" },
              vue.toDisplayString(_ctx.$t("region.btn1")),
              1
              /* TEXT */
            ),
            vue.createElementVNode(
              "button",
              { class: "button region-btn" },
              vue.toDisplayString(_ctx.$t("region.btn2")),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createCommentVNode(" 手机号前缀选择器 "),
        vue.createElementVNode("picker", {
          onChange: _cache[0] || (_cache[0] = (...args) => $options.bindPickerChange && $options.bindPickerChange(...args)),
          value: $data.pNumberPerfix,
          range: $data.pNumberPerfixArr
        }, [
          vue.createElementVNode(
            "view",
            { class: "uni-input" },
            vue.toDisplayString($data.pNumberPerfixArr[$data.pNumberPerfix]),
            1
            /* TEXT */
          )
        ], 40, ["value", "range"])
      ])
    ]);
  }
  const PagesLoginRegion = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/私人文件夹/crossBorderShop/pages/login/region.vue"]]);
  const _sfc_main$1 = {
    components: {
      customHeader: __easycom_0
    },
    data() {
      return {};
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_customHeader = resolveEasycom(vue.resolveDynamicComponent("customHeader"), __easycom_0);
    return vue.openBlock(), vue.createElementBlock("view", { class: "profix-page-container join-page" }, [
      vue.createVNode(_component_customHeader, {
        style: { "z-index": "0" },
        headerText: "普斯集团"
      }),
      vue.createVNode(_component_customHeader, {
        headerText: "普斯集团",
        style: { "position": "fixed", "top": "0", "width": "100%", "z-index": "1" }
      }),
      vue.createElementVNode("view", { class: "join-scroll page-scroll" }, [
        vue.createElementVNode("view", { class: "banner" }, [
          vue.createElementVNode(
            "view",
            { class: "banner-tit" },
            vue.toDisplayString(_ctx.$t("join.bannerTit")),
            1
            /* TEXT */
          ),
          vue.createElementVNode(
            "view",
            { class: "banner-tit" },
            vue.toDisplayString(_ctx.$t("join.bannerTit1")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "banner-img pic" }, [
            vue.createElementVNode("image", {
              src: "/static/img/banner/renwu.png",
              mode: "widthFix",
              class: "img"
            })
          ])
        ]),
        vue.createElementVNode("view", { class: "join-info" }, [
          vue.createElementVNode(
            "view",
            { class: "join-tit" },
            vue.toDisplayString(_ctx.$t("join.joinTit1")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "info-box" }, [
            vue.createElementVNode("view", { class: "icon-text" }, [
              vue.createElementVNode("view", { class: "icon pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/icon/code.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode(
                "view",
                { class: "text" },
                "LboEgPy6 (" + vue.toDisplayString(_ctx.$t("loacal.chinaText")) + ")",
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode(
              "view",
              { class: "copy-btn" },
              vue.toDisplayString(_ctx.$t("join.copy")),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "join-info" }, [
          vue.createElementVNode(
            "view",
            { class: "join-tit" },
            vue.toDisplayString(_ctx.$t("join.joinTit2")),
            1
            /* TEXT */
          ),
          vue.createElementVNode("view", { class: "info-box" }, [
            vue.createElementVNode("view", { class: "icon-text" }, [
              vue.createElementVNode("view", { class: "icon pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/icon/code.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "text" }, "https://puth1.com/#/pages/ashdiashda/asdjuhf")
            ]),
            vue.createElementVNode(
              "view",
              { class: "copy-btn" },
              vue.toDisplayString(_ctx.$t("join.copy")),
              1
              /* TEXT */
            )
          ])
        ]),
        vue.createElementVNode("view", { class: "census-box" }, [
          vue.createElementVNode("view", { class: "census-tit" }, [
            vue.createElementVNode("view", { class: "icon pic" }, [
              vue.createElementVNode("image", {
                src: "/static/img/icon/wallet.png",
                mode: "widthFix",
                class: "img"
              })
            ]),
            vue.createElementVNode(
              "view",
              { class: "tit" },
              vue.toDisplayString(_ctx.$t("join.boxTit")),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "chart-con" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", { class: "chart-box" }, [
                vue.createElementVNode("view", {
                  class: "color-line",
                  style: { "background-color": "#ffba1f" }
                }),
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.bonusText")),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "chart-box" }, [
                vue.createElementVNode("view", {
                  class: "color-line",
                  style: { "background-color": "#fd7e1f" }
                }),
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.commissionText")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("view", { class: "pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/pig.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "count" }, "0"),
              vue.createElementVNode(
                "view",
                { class: "text" },
                vue.toDisplayString(_ctx.$t("join.compensationText")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "census-box" }, [
          vue.createElementVNode("view", { class: "census-tit" }, [
            vue.createElementVNode("view", { class: "icon pic" }, [
              vue.createElementVNode("image", {
                src: "/static/img/icon/wallet.png",
                mode: "widthFix",
                class: "img"
              })
            ]),
            vue.createElementVNode(
              "view",
              { class: "tit" },
              vue.toDisplayString(_ctx.$t("join.boxTit")),
              1
              /* TEXT */
            )
          ]),
          vue.createElementVNode("view", { class: "chart-con" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", { class: "chart-box" }, [
                vue.createElementVNode("view", {
                  class: "color-line",
                  style: { "background-color": "#6e1fff" }
                }),
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.bonusText")),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "chart-box" }, [
                vue.createElementVNode("view", {
                  class: "color-line",
                  style: { "background-color": "#1f5efd" }
                }),
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.commissionText")),
                  1
                  /* TEXT */
                )
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("view", { class: "pic" }, [
                vue.createElementVNode("image", {
                  src: "/static/img/person.png",
                  mode: "widthFix",
                  class: "img"
                })
              ]),
              vue.createElementVNode("view", { class: "count" }, "0"),
              vue.createElementVNode(
                "view",
                { class: "text" },
                vue.toDisplayString(_ctx.$t("join.compensationText")),
                1
                /* TEXT */
              )
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "team-info" }, [
          vue.createElementVNode("view", { class: "info-box" }, [
            vue.createElementVNode("view", { class: "info-tit" }, [
              vue.createElementVNode("view", { class: "line" }),
              vue.createElementVNode(
                "view",
                { class: "tit" },
                vue.toDisplayString(_ctx.$t("join.teamTit1")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "arrow-icon" })
            ]),
            vue.createElementVNode("view", { class: "box-num" }, [
              vue.createElementVNode("view", { class: "count-info san" }, [
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.partners")),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "count-info yi" }, [
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.committee")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "info-box" }, [
            vue.createElementVNode("view", { class: "info-tit" }, [
              vue.createElementVNode("view", { class: "line" }),
              vue.createElementVNode(
                "view",
                { class: "tit" },
                vue.toDisplayString(_ctx.$t("join.teamTit2")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "arrow-icon" })
            ]),
            vue.createElementVNode("view", { class: "box-num" }, [
              vue.createElementVNode("view", { class: "count-info san" }, [
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.partners")),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "count-info yi" }, [
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.committee")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "info-box" }, [
            vue.createElementVNode("view", { class: "info-tit" }, [
              vue.createElementVNode("view", { class: "line" }),
              vue.createElementVNode(
                "view",
                { class: "tit" },
                vue.toDisplayString(_ctx.$t("join.teamTit3")),
                1
                /* TEXT */
              ),
              vue.createElementVNode("view", { class: "arrow-icon" })
            ]),
            vue.createElementVNode("view", { class: "box-num" }, [
              vue.createElementVNode("view", { class: "count-info san" }, [
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.partners")),
                  1
                  /* TEXT */
                )
              ]),
              vue.createElementVNode("view", { class: "count-info yi" }, [
                vue.createElementVNode("view", { class: "count" }, "0"),
                vue.createElementVNode(
                  "view",
                  { class: "text" },
                  vue.toDisplayString(_ctx.$t("join.committee")),
                  1
                  /* TEXT */
                )
              ])
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesJoinJoin = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/私人文件夹/crossBorderShop/pages/join/join.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/classification/classification", PagesClassificationClassification);
  __definePage("pages/me/me", PagesMeMe);
  __definePage("pages/me/wallet/wallet", PagesMeWalletWallet);
  __definePage("pages/login/region", PagesLoginRegion);
  __definePage("pages/join/join", PagesJoinJoin);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
      let code = uni.getLocale();
      if (!code) {
        uni.setLocale("zh-Hans");
      }
      formatAppLog("log", "at App.vue:9", code);
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:12", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:15", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/私人文件夹/crossBorderShop/App.vue"]]);
  const en = {
    "locale.auto": "System",
    "locale.en": "English",
    "locale.zh-hans": "简体中文",
    "locale.zh-hant": "繁体中文",
    "locale.ja": "日语",
    "index.title": "Hello i18n",
    "index.home": "Home",
    "index.component": "Component",
    "index.api": "API",
    "index.schema": "Schema",
    "index.demo": "uni-app globalization",
    "index.demo-description": "Include uni-framework, manifest.json, pages.json, tabbar, Page, Component, API, Schema",
    "index.detail": "Detail",
    "index.language": "Language",
    "index.language-info": "Settings",
    "index.system-language": "System language",
    "index.application-language": "Application language",
    "index.language-change-confirm": "Applying this setting will restart the app",
    "api.message": "Message",
    "schema.name": "Name",
    "schema.add": "Add",
    "schema.add-success": "Add success",
    "login.phonePlaceholder": "Please enter your phone number",
    "login.pwdPlaceholder": "Please enter the password",
    "login.btn1": "LOGIN",
    "login.radioText": "remember password",
    "region.invitePlaceholder": "Please enter the invitation code",
    "region.btn1": "REGISTER",
    "region.btn2": "Existing account, please go to log in",
    "app.name": "profi group",
    "app.search": "Click to search for content",
    "app.Product": "Product",
    "app.Store": "Store",
    "app.Sell": "Sell",
    "app.price": "price",
    "app.balance": "balance",
    "app.TotalIncome": "Total income",
    "app.deposit": "deposit",
    "app.myWallet": "My wallet",
    "app.financial": "Financial details",
    "app.securityCenter": "Security Center",
    "app.recharge": "I need to recharge",
    "app.withdraw": " I need to withdraw",
    "app.basicFunctions": " Basic functions",
    "app.home": "home",
    "app.join": "join",
    "app.classification": "classification",
    "app.me": "me"
  };
  const zhHans = {
    "locale.auto": "系统",
    "locale.en": "English",
    "locale.zh-hans": "简体中文",
    "locale.zh-hant": "繁体中文",
    "locale.ja": "日语",
    "index.title": "Hello i18n",
    "index.home": "主页",
    "index.component": "组件",
    "index.api": "API",
    "index.schema": "Schema",
    "index.demo": "uni-app 国际化演示",
    "index.demo-description": "包含 uni-framework、manifest.json、pages.json、tabbar、页面、组件、API、Schema",
    "index.detail": "详情",
    "index.language": "语言",
    "index.language-info": "语言信息",
    "index.system-language": "系统语言",
    "index.application-language": "应用语言",
    "index.language-change-confirm": "应用此设置将重启App",
    "api.message": "提示",
    "schema.name": "姓名",
    "schema.add": "新增",
    "loacal.chinaText": "英语",
    "login.phonePlaceholder": "请输入手机号",
    "login.pwdPlaceholder": "请输入密码",
    "login.btn1": "登录",
    "login.radioText": "记住密码",
    "region.invitePlaceholder": "请输入邀请码",
    "region.btn1": "注册",
    "region.btn2": "已有账号，请前往登录",
    "app.name": "普斯集团",
    "app.search": "点击搜索内容",
    "app.Product": "产品",
    "app.Store": "店",
    "app.Sell": "卖",
    "app.price": "价格",
    "app.balance": "平衡",
    "app.TotalIncome": "总收入",
    "app.deposit": "存款",
    "app.myWallet": "我的钱包",
    "app.financial": "财务细节",
    "app.securityCenter": "安全中心",
    "app.recharge": "我要充值",
    "app.withdraw": "我要提现",
    "app.basicFunctions": "基本功能",
    "app.home": "首页",
    "app.join": "加盟",
    "app.classification": "分类",
    "app.me": "我的",
    "index.news": "新闻",
    "index.moreProduct": "更多商品",
    "index.moreProductDesc": "顶级产品·令人难以置信的价格",
    "index.menuBtn1": "关于我们",
    "index.menuBtn2": "企业资质",
    "index.menuBtn3": "平台奖励",
    "index.menuBtn4": "储存级别",
    "index.menuBtn5": "钱包充值",
    "index.menuBtn6": "我要提现",
    "index.menuBtn7": "下载应用",
    "index.menuBtn8": "平台活动",
    "index.menuBtn9": "邀请好友",
    "join.bannerTit": "立即加入, 永久加入团队",
    "join.bannerTit1": "即可享受稳定的收入和奖金",
    "join.joinTit1": "加入代码",
    "join.joinTit2": "加入链接",
    "join.copy": "复制",
    "join.boxTit": "加入的统计数量",
    "join.bonusText": "加盟店佣金",
    "join.commissionText": "加盟店佣金",
    "join.compensationText": "加盟店佣金",
    "join.teamTit1": "A-level团队加入详情",
    "join.teamTit2": "B级团队加入详情",
    "join.teamTit3": "C级团队加入详情",
    "join.committee": "委员会",
    "join.partners": "合伙人数量"
  };
  const messages = {
    en,
    "zh-Hans": zhHans
  };
  /*!
    * @intlify/shared v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const inBrowser = typeof window !== "undefined";
  let mark;
  let measure;
  {
    const perf = inBrowser && window.performance;
    if (perf && perf.mark && perf.measure && perf.clearMarks && perf.clearMeasures) {
      mark = (tag) => perf.mark(tag);
      measure = (name, startTag, endTag) => {
        perf.measure(name, startTag, endTag);
        perf.clearMarks(startTag);
        perf.clearMarks(endTag);
      };
    }
  }
  const RE_ARGS = /\{([0-9a-zA-Z]+)\}/g;
  function format(message, ...args) {
    if (args.length === 1 && isObject$1(args[0])) {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    return message.replace(RE_ARGS, (match, identifier) => {
      return args.hasOwnProperty(identifier) ? args[identifier] : "";
    });
  }
  const hasSymbol = typeof Symbol === "function" && typeof Symbol.toStringTag === "symbol";
  const makeSymbol = (name) => hasSymbol ? Symbol(name) : name;
  const generateFormatCacheKey = (locale, key, source) => friendlyJSONstringify({ l: locale, k: key, s: source });
  const friendlyJSONstringify = (json) => JSON.stringify(json).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027");
  const isNumber = (val) => typeof val === "number" && isFinite(val);
  const isDate = (val) => toTypeString(val) === "[object Date]";
  const isRegExp = (val) => toTypeString(val) === "[object RegExp]";
  const isEmptyObject = (val) => isPlainObject(val) && Object.keys(val).length === 0;
  function warn(msg, err) {
    if (typeof console !== "undefined") {
      console.warn(`[intlify] ` + msg);
      if (err) {
        console.warn(err.stack);
      }
    }
  }
  const assign = Object.assign;
  let _globalThis;
  const getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function escapeHtml(rawText) {
    return rawText.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
  }
  const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
  function hasOwn$1(obj, key) {
    return hasOwnProperty$1.call(obj, key);
  }
  const isArray = Array.isArray;
  const isFunction = (val) => typeof val === "function";
  const isString = (val) => typeof val === "string";
  const isBoolean = (val) => typeof val === "boolean";
  const isObject$1 = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const objectToString = Object.prototype.toString;
  const toTypeString = (value) => objectToString.call(value);
  const isPlainObject = (val) => toTypeString(val) === "[object Object]";
  const toDisplayString = (val) => {
    return val == null ? "" : isArray(val) || isPlainObject(val) && val.toString === objectToString ? JSON.stringify(val, null, 2) : String(val);
  };
  const RANGE = 2;
  function generateCodeFrame(source, start = 0, end = source.length) {
    const lines = source.split(/\r?\n/);
    let count = 0;
    const res = [];
    for (let i = 0; i < lines.length; i++) {
      count += lines[i].length + 1;
      if (count >= start) {
        for (let j = i - RANGE; j <= i + RANGE || end > count; j++) {
          if (j < 0 || j >= lines.length)
            continue;
          const line = j + 1;
          res.push(`${line}${" ".repeat(3 - String(line).length)}|  ${lines[j]}`);
          const lineLength = lines[j].length;
          if (j === i) {
            const pad = start - (count - lineLength) + 1;
            const length = Math.max(1, end > count ? lineLength - pad : end - start);
            res.push(`   |  ` + " ".repeat(pad) + "^".repeat(length));
          } else if (j > i) {
            if (end > count) {
              const length = Math.max(Math.min(end - count, lineLength), 1);
              res.push(`   |  ` + "^".repeat(length));
            }
            count += lineLength + 1;
          }
        }
        break;
      }
    }
    return res.join("\n");
  }
  function createEmitter() {
    const events = /* @__PURE__ */ new Map();
    const emitter = {
      events,
      on(event, handler) {
        const handlers = events.get(event);
        const added = handlers && handlers.push(handler);
        if (!added) {
          events.set(event, [handler]);
        }
      },
      off(event, handler) {
        const handlers = events.get(event);
        if (handlers) {
          handlers.splice(handlers.indexOf(handler) >>> 0, 1);
        }
      },
      emit(event, payload) {
        (events.get(event) || []).slice().map((handler) => handler(payload));
        (events.get("*") || []).slice().map((handler) => handler(event, payload));
      }
    };
    return emitter;
  }
  /*!
    * @intlify/message-resolver v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
  }
  const isObject = (val) => (
    // eslint-disable-line
    val !== null && typeof val === "object"
  );
  const pathStateMachine = [];
  pathStateMachine[
    0
    /* BEFORE_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      0
      /* BEFORE_PATH */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    1
    /* IN_PATH */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      1
      /* IN_PATH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4
      /* IN_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7
      /* AFTER_PATH */
    ]
  };
  pathStateMachine[
    2
    /* BEFORE_IDENT */
  ] = {
    [
      "w"
      /* WORKSPACE */
    ]: [
      2
      /* BEFORE_IDENT */
    ],
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    3
    /* IN_IDENT */
  ] = {
    [
      "i"
      /* IDENT */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "0"
      /* ZERO */
    ]: [
      3,
      0
      /* APPEND */
    ],
    [
      "w"
      /* WORKSPACE */
    ]: [
      1,
      1
      /* PUSH */
    ],
    [
      "."
      /* DOT */
    ]: [
      2,
      1
      /* PUSH */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      1
      /* PUSH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: [
      7,
      1
      /* PUSH */
    ]
  };
  pathStateMachine[
    4
    /* IN_SUB_PATH */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      5,
      0
      /* APPEND */
    ],
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      6,
      0
      /* APPEND */
    ],
    [
      "["
      /* LEFT_BRACKET */
    ]: [
      4,
      2
      /* INC_SUB_PATH_DEPTH */
    ],
    [
      "]"
      /* RIGHT_BRACKET */
    ]: [
      1,
      3
      /* PUSH_SUB_PATH */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      4,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    5
    /* IN_SINGLE_QUOTE */
  ] = {
    [
      "'"
      /* SINGLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      5,
      0
      /* APPEND */
    ]
  };
  pathStateMachine[
    6
    /* IN_DOUBLE_QUOTE */
  ] = {
    [
      '"'
      /* DOUBLE_QUOTE */
    ]: [
      4,
      0
      /* APPEND */
    ],
    [
      "o"
      /* END_OF_FAIL */
    ]: 8,
    [
      "l"
      /* ELSE */
    ]: [
      6,
      0
      /* APPEND */
    ]
  };
  const literalValueRE = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
  function isLiteral(exp) {
    return literalValueRE.test(exp);
  }
  function stripQuotes(str) {
    const a = str.charCodeAt(0);
    const b = str.charCodeAt(str.length - 1);
    return a === b && (a === 34 || a === 39) ? str.slice(1, -1) : str;
  }
  function getPathCharType(ch) {
    if (ch === void 0 || ch === null) {
      return "o";
    }
    const code = ch.charCodeAt(0);
    switch (code) {
      case 91:
      case 93:
      case 46:
      case 34:
      case 39:
        return ch;
      case 95:
      case 36:
      case 45:
        return "i";
      case 9:
      case 10:
      case 13:
      case 160:
      case 65279:
      case 8232:
      case 8233:
        return "w";
    }
    return "i";
  }
  function formatSubPath(path) {
    const trimmed = path.trim();
    if (path.charAt(0) === "0" && isNaN(parseInt(path))) {
      return false;
    }
    return isLiteral(trimmed) ? stripQuotes(trimmed) : "*" + trimmed;
  }
  function parse(path) {
    const keys = [];
    let index = -1;
    let mode = 0;
    let subPathDepth = 0;
    let c;
    let key;
    let newChar;
    let type;
    let transition;
    let action;
    let typeMap;
    const actions = [];
    actions[
      0
      /* APPEND */
    ] = () => {
      if (key === void 0) {
        key = newChar;
      } else {
        key += newChar;
      }
    };
    actions[
      1
      /* PUSH */
    ] = () => {
      if (key !== void 0) {
        keys.push(key);
        key = void 0;
      }
    };
    actions[
      2
      /* INC_SUB_PATH_DEPTH */
    ] = () => {
      actions[
        0
        /* APPEND */
      ]();
      subPathDepth++;
    };
    actions[
      3
      /* PUSH_SUB_PATH */
    ] = () => {
      if (subPathDepth > 0) {
        subPathDepth--;
        mode = 4;
        actions[
          0
          /* APPEND */
        ]();
      } else {
        subPathDepth = 0;
        if (key === void 0) {
          return false;
        }
        key = formatSubPath(key);
        if (key === false) {
          return false;
        } else {
          actions[
            1
            /* PUSH */
          ]();
        }
      }
    };
    function maybeUnescapeQuote() {
      const nextChar = path[index + 1];
      if (mode === 5 && nextChar === "'" || mode === 6 && nextChar === '"') {
        index++;
        newChar = "\\" + nextChar;
        actions[
          0
          /* APPEND */
        ]();
        return true;
      }
    }
    while (mode !== null) {
      index++;
      c = path[index];
      if (c === "\\" && maybeUnescapeQuote()) {
        continue;
      }
      type = getPathCharType(c);
      typeMap = pathStateMachine[mode];
      transition = typeMap[type] || typeMap[
        "l"
        /* ELSE */
      ] || 8;
      if (transition === 8) {
        return;
      }
      mode = transition[0];
      if (transition[1] !== void 0) {
        action = actions[transition[1]];
        if (action) {
          newChar = c;
          if (action() === false) {
            return;
          }
        }
      }
      if (mode === 7) {
        return keys;
      }
    }
  }
  const cache = /* @__PURE__ */ new Map();
  function resolveValue(obj, path) {
    if (!isObject(obj)) {
      return null;
    }
    let hit = cache.get(path);
    if (!hit) {
      hit = parse(path);
      if (hit) {
        cache.set(path, hit);
      }
    }
    if (!hit) {
      return null;
    }
    const len = hit.length;
    let last = obj;
    let i = 0;
    while (i < len) {
      const val = last[hit[i]];
      if (val === void 0) {
        return null;
      }
      last = val;
      i++;
    }
    return last;
  }
  function handleFlatJson(obj) {
    if (!isObject(obj)) {
      return obj;
    }
    for (const key in obj) {
      if (!hasOwn(obj, key)) {
        continue;
      }
      if (!key.includes(
        "."
        /* DOT */
      )) {
        if (isObject(obj[key])) {
          handleFlatJson(obj[key]);
        }
      } else {
        const subKeys = key.split(
          "."
          /* DOT */
        );
        const lastIndex = subKeys.length - 1;
        let currentObj = obj;
        for (let i = 0; i < lastIndex; i++) {
          if (!(subKeys[i] in currentObj)) {
            currentObj[subKeys[i]] = {};
          }
          currentObj = currentObj[subKeys[i]];
        }
        currentObj[subKeys[lastIndex]] = obj[key];
        delete obj[key];
        if (isObject(currentObj[subKeys[lastIndex]])) {
          handleFlatJson(currentObj[subKeys[lastIndex]]);
        }
      }
    }
    return obj;
  }
  /*!
    * @intlify/runtime v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const DEFAULT_MODIFIER = (str) => str;
  const DEFAULT_MESSAGE = (ctx) => "";
  const DEFAULT_MESSAGE_DATA_TYPE = "text";
  const DEFAULT_NORMALIZE = (values) => values.length === 0 ? "" : values.join("");
  const DEFAULT_INTERPOLATE = toDisplayString;
  function pluralDefault(choice, choicesLength) {
    choice = Math.abs(choice);
    if (choicesLength === 2) {
      return choice ? choice > 1 ? 1 : 0 : 1;
    }
    return choice ? Math.min(choice, 2) : 0;
  }
  function getPluralIndex(options) {
    const index = isNumber(options.pluralIndex) ? options.pluralIndex : -1;
    return options.named && (isNumber(options.named.count) || isNumber(options.named.n)) ? isNumber(options.named.count) ? options.named.count : isNumber(options.named.n) ? options.named.n : index : index;
  }
  function normalizeNamed(pluralIndex, props) {
    if (!props.count) {
      props.count = pluralIndex;
    }
    if (!props.n) {
      props.n = pluralIndex;
    }
  }
  function createMessageContext(options = {}) {
    const locale = options.locale;
    const pluralIndex = getPluralIndex(options);
    const pluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? options.pluralRules[locale] : pluralDefault;
    const orgPluralRule = isObject$1(options.pluralRules) && isString(locale) && isFunction(options.pluralRules[locale]) ? pluralDefault : void 0;
    const plural = (messages2) => messages2[pluralRule(pluralIndex, messages2.length, orgPluralRule)];
    const _list = options.list || [];
    const list = (index) => _list[index];
    const _named = options.named || {};
    isNumber(options.pluralIndex) && normalizeNamed(pluralIndex, _named);
    const named = (key) => _named[key];
    function message(key) {
      const msg = isFunction(options.messages) ? options.messages(key) : isObject$1(options.messages) ? options.messages[key] : false;
      return !msg ? options.parent ? options.parent.message(key) : DEFAULT_MESSAGE : msg;
    }
    const _modifier = (name) => options.modifiers ? options.modifiers[name] : DEFAULT_MODIFIER;
    const normalize = isPlainObject(options.processor) && isFunction(options.processor.normalize) ? options.processor.normalize : DEFAULT_NORMALIZE;
    const interpolate = isPlainObject(options.processor) && isFunction(options.processor.interpolate) ? options.processor.interpolate : DEFAULT_INTERPOLATE;
    const type = isPlainObject(options.processor) && isString(options.processor.type) ? options.processor.type : DEFAULT_MESSAGE_DATA_TYPE;
    const ctx = {
      [
        "list"
        /* LIST */
      ]: list,
      [
        "named"
        /* NAMED */
      ]: named,
      [
        "plural"
        /* PLURAL */
      ]: plural,
      [
        "linked"
        /* LINKED */
      ]: (key, modifier) => {
        const msg = message(key)(ctx);
        return isString(modifier) ? _modifier(modifier)(msg) : msg;
      },
      [
        "message"
        /* MESSAGE */
      ]: message,
      [
        "type"
        /* TYPE */
      ]: type,
      [
        "interpolate"
        /* INTERPOLATE */
      ]: interpolate,
      [
        "normalize"
        /* NORMALIZE */
      ]: normalize
    };
    return ctx;
  }
  /*!
    * @intlify/message-compiler v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const errorMessages$2 = {
    // tokenizer error messages
    [
      0
      /* EXPECTED_TOKEN */
    ]: `Expected token: '{0}'`,
    [
      1
      /* INVALID_TOKEN_IN_PLACEHOLDER */
    ]: `Invalid token in placeholder: '{0}'`,
    [
      2
      /* UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER */
    ]: `Unterminated single quote in placeholder`,
    [
      3
      /* UNKNOWN_ESCAPE_SEQUENCE */
    ]: `Unknown escape sequence: \\{0}`,
    [
      4
      /* INVALID_UNICODE_ESCAPE_SEQUENCE */
    ]: `Invalid unicode escape sequence: {0}`,
    [
      5
      /* UNBALANCED_CLOSING_BRACE */
    ]: `Unbalanced closing brace`,
    [
      6
      /* UNTERMINATED_CLOSING_BRACE */
    ]: `Unterminated closing brace`,
    [
      7
      /* EMPTY_PLACEHOLDER */
    ]: `Empty placeholder`,
    [
      8
      /* NOT_ALLOW_NEST_PLACEHOLDER */
    ]: `Not allowed nest placeholder`,
    [
      9
      /* INVALID_LINKED_FORMAT */
    ]: `Invalid linked format`,
    // parser error messages
    [
      10
      /* MUST_HAVE_MESSAGES_IN_PLURAL */
    ]: `Plural must have messages`,
    [
      11
      /* UNEXPECTED_EMPTY_LINKED_MODIFIER */
    ]: `Unexpected empty linked modifier`,
    [
      12
      /* UNEXPECTED_EMPTY_LINKED_KEY */
    ]: `Unexpected empty linked key`,
    [
      13
      /* UNEXPECTED_LEXICAL_ANALYSIS */
    ]: `Unexpected lexical analysis in token: '{0}'`
  };
  function createCompileError(code, loc, options = {}) {
    const { domain, messages: messages2, args } = options;
    const msg = format((messages2 || errorMessages$2)[code] || "", ...args || []);
    const error = new SyntaxError(String(msg));
    error.code = code;
    if (loc) {
      error.location = loc;
    }
    error.domain = domain;
    return error;
  }
  /*!
    * @intlify/devtools-if v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const IntlifyDevToolsHooks = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
  };
  /*!
    * @intlify/core-base v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  let devtools = null;
  function setDevToolsHook(hook) {
    devtools = hook;
  }
  function initI18nDevTools(i18n2, version, meta) {
    devtools && devtools.emit(IntlifyDevToolsHooks.I18nInit, {
      timestamp: Date.now(),
      i18n: i18n2,
      version,
      meta
    });
  }
  const translateDevTools = /* @__PURE__ */ createDevToolsHook(IntlifyDevToolsHooks.FunctionTranslate);
  function createDevToolsHook(hook) {
    return (payloads) => devtools && devtools.emit(hook, payloads);
  }
  const warnMessages$1 = {
    [
      0
      /* NOT_FOUND_KEY */
    ]: `Not found '{key}' key in '{locale}' locale messages.`,
    [
      1
      /* FALLBACK_TO_TRANSLATE */
    ]: `Fall back to translate '{key}' key with '{target}' locale.`,
    [
      2
      /* CANNOT_FORMAT_NUMBER */
    ]: `Cannot format a number value due to not supported Intl.NumberFormat.`,
    [
      3
      /* FALLBACK_TO_NUMBER_FORMAT */
    ]: `Fall back to number format '{key}' key with '{target}' locale.`,
    [
      4
      /* CANNOT_FORMAT_DATE */
    ]: `Cannot format a date value due to not supported Intl.DateTimeFormat.`,
    [
      5
      /* FALLBACK_TO_DATE_FORMAT */
    ]: `Fall back to datetime format '{key}' key with '{target}' locale.`
  };
  function getWarnMessage$1(code, ...args) {
    return format(warnMessages$1[code], ...args);
  }
  const VERSION$1 = "9.1.9";
  const NOT_REOSLVED = -1;
  const MISSING_RESOLVE_VALUE = "";
  function getDefaultLinkedModifiers() {
    return {
      upper: (val) => isString(val) ? val.toUpperCase() : val,
      lower: (val) => isString(val) ? val.toLowerCase() : val,
      // prettier-ignore
      capitalize: (val) => isString(val) ? `${val.charAt(0).toLocaleUpperCase()}${val.substr(1)}` : val
    };
  }
  let _compiler;
  let _additionalMeta = null;
  const setAdditionalMeta = (meta) => {
    _additionalMeta = meta;
  };
  const getAdditionalMeta = () => _additionalMeta;
  let _cid = 0;
  function createCoreContext(options = {}) {
    const version = isString(options.version) ? options.version : VERSION$1;
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || isString(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const messages2 = isPlainObject(options.messages) ? options.messages : { [locale]: {} };
    const datetimeFormats = isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [locale]: {} };
    const numberFormats = isPlainObject(options.numberFormats) ? options.numberFormats : { [locale]: {} };
    const modifiers = assign({}, options.modifiers || {}, getDefaultLinkedModifiers());
    const pluralRules = options.pluralRules || {};
    const missing = isFunction(options.missing) ? options.missing : null;
    const missingWarn = isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    const fallbackWarn = isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    const fallbackFormat = !!options.fallbackFormat;
    const unresolving = !!options.unresolving;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    const processor = isPlainObject(options.processor) ? options.processor : null;
    const warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    const escapeParameter = !!options.escapeParameter;
    const messageCompiler = isFunction(options.messageCompiler) ? options.messageCompiler : _compiler;
    const onWarn = isFunction(options.onWarn) ? options.onWarn : warn;
    const internalOptions = options;
    const __datetimeFormatters = isObject$1(internalOptions.__datetimeFormatters) ? internalOptions.__datetimeFormatters : /* @__PURE__ */ new Map();
    const __numberFormatters = isObject$1(internalOptions.__numberFormatters) ? internalOptions.__numberFormatters : /* @__PURE__ */ new Map();
    const __meta = isObject$1(internalOptions.__meta) ? internalOptions.__meta : {};
    _cid++;
    const context = {
      version,
      cid: _cid,
      locale,
      fallbackLocale,
      messages: messages2,
      datetimeFormats,
      numberFormats,
      modifiers,
      pluralRules,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackFormat,
      unresolving,
      postTranslation,
      processor,
      warnHtmlMessage,
      escapeParameter,
      messageCompiler,
      onWarn,
      __datetimeFormatters,
      __numberFormatters,
      __meta
    };
    {
      context.__v_emitter = internalOptions.__v_emitter != null ? internalOptions.__v_emitter : void 0;
    }
    {
      initI18nDevTools(context, version, __meta);
    }
    return context;
  }
  function isTranslateFallbackWarn(fallback, key) {
    return fallback instanceof RegExp ? fallback.test(key) : fallback;
  }
  function isTranslateMissingWarn(missing, key) {
    return missing instanceof RegExp ? missing.test(key) : missing;
  }
  function handleMissing(context, key, locale, missingWarn, type) {
    const { missing, onWarn } = context;
    {
      const emitter = context.__v_emitter;
      if (emitter) {
        emitter.emit("missing", {
          locale,
          key,
          type,
          groupId: `${type}:${key}`
        });
      }
    }
    if (missing !== null) {
      const ret = missing(context, locale, key, type);
      return isString(ret) ? ret : key;
    } else {
      if (isTranslateMissingWarn(missingWarn, key)) {
        onWarn(getWarnMessage$1(0, { key, locale }));
      }
      return key;
    }
  }
  function getLocaleChain(ctx, fallback, start) {
    const context = ctx;
    if (!context.__localeChainCache) {
      context.__localeChainCache = /* @__PURE__ */ new Map();
    }
    let chain = context.__localeChainCache.get(start);
    if (!chain) {
      chain = [];
      let block = [start];
      while (isArray(block)) {
        block = appendBlockToChain(chain, block, fallback);
      }
      const defaults = isArray(fallback) ? fallback : isPlainObject(fallback) ? fallback["default"] ? fallback["default"] : null : fallback;
      block = isString(defaults) ? [defaults] : defaults;
      if (isArray(block)) {
        appendBlockToChain(chain, block, false);
      }
      context.__localeChainCache.set(start, chain);
    }
    return chain;
  }
  function appendBlockToChain(chain, block, blocks) {
    let follow = true;
    for (let i = 0; i < block.length && isBoolean(follow); i++) {
      const locale = block[i];
      if (isString(locale)) {
        follow = appendLocaleToChain(chain, block[i], blocks);
      }
    }
    return follow;
  }
  function appendLocaleToChain(chain, locale, blocks) {
    let follow;
    const tokens = locale.split("-");
    do {
      const target = tokens.join("-");
      follow = appendItemToChain(chain, target, blocks);
      tokens.splice(-1, 1);
    } while (tokens.length && follow === true);
    return follow;
  }
  function appendItemToChain(chain, target, blocks) {
    let follow = false;
    if (!chain.includes(target)) {
      follow = true;
      if (target) {
        follow = target[target.length - 1] !== "!";
        const locale = target.replace(/!/g, "");
        chain.push(locale);
        if ((isArray(blocks) || isPlainObject(blocks)) && blocks[locale]) {
          follow = blocks[locale];
        }
      }
    }
    return follow;
  }
  function updateFallbackLocale(ctx, locale, fallback) {
    const context = ctx;
    context.__localeChainCache = /* @__PURE__ */ new Map();
    getLocaleChain(ctx, fallback, locale);
  }
  function createCoreError(code) {
    return createCompileError(code, null, { messages: errorMessages$1 });
  }
  const errorMessages$1 = {
    [
      14
      /* INVALID_ARGUMENT */
    ]: "Invalid arguments",
    [
      15
      /* INVALID_DATE_ARGUMENT */
    ]: "The date provided is an invalid Date object.Make sure your Date represents a valid date.",
    [
      16
      /* INVALID_ISO_DATE_ARGUMENT */
    ]: "The argument provided is not a valid ISO date string"
  };
  const NOOP_MESSAGE_FUNCTION = () => "";
  const isMessageFunction = (val) => isFunction(val);
  function translate(context, ...args) {
    const { fallbackFormat, postTranslation, unresolving, fallbackLocale, messages: messages2 } = context;
    const [key, options] = parseTranslateArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const escapeParameter = isBoolean(options.escapeParameter) ? options.escapeParameter : context.escapeParameter;
    const resolvedMessage = !!options.resolvedMessage;
    const defaultMsgOrKey = isString(options.default) || isBoolean(options.default) ? !isBoolean(options.default) ? options.default : key : fallbackFormat ? key : "";
    const enableDefaultMsg = fallbackFormat || defaultMsgOrKey !== "";
    const locale = isString(options.locale) ? options.locale : context.locale;
    escapeParameter && escapeParams(options);
    let [format2, targetLocale, message] = !resolvedMessage ? resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) : [
      key,
      locale,
      messages2[locale] || {}
    ];
    let cacheBaseKey = key;
    if (!resolvedMessage && !(isString(format2) || isMessageFunction(format2))) {
      if (enableDefaultMsg) {
        format2 = defaultMsgOrKey;
        cacheBaseKey = format2;
      }
    }
    if (!resolvedMessage && (!(isString(format2) || isMessageFunction(format2)) || !isString(targetLocale))) {
      return unresolving ? NOT_REOSLVED : key;
    }
    if (isString(format2) && context.messageCompiler == null) {
      warn(`The message format compilation is not supported in this build. Because message compiler isn't included. You need to pre-compilation all message format. So translate function return '${key}'.`);
      return key;
    }
    let occurred = false;
    const errorDetector = () => {
      occurred = true;
    };
    const msg = !isMessageFunction(format2) ? compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) : format2;
    if (occurred) {
      return format2;
    }
    const ctxOptions = getMessageContextOptions(context, targetLocale, message, options);
    const msgContext = createMessageContext(ctxOptions);
    const messaged = evaluateMessage(context, msg, msgContext);
    const ret = postTranslation ? postTranslation(messaged) : messaged;
    {
      const payloads = {
        timestamp: Date.now(),
        key: isString(key) ? key : isMessageFunction(format2) ? format2.key : "",
        locale: targetLocale || (isMessageFunction(format2) ? format2.locale : ""),
        format: isString(format2) ? format2 : isMessageFunction(format2) ? format2.source : "",
        message: ret
      };
      payloads.meta = assign({}, context.__meta, getAdditionalMeta() || {});
      translateDevTools(payloads);
    }
    return ret;
  }
  function escapeParams(options) {
    if (isArray(options.list)) {
      options.list = options.list.map((item) => isString(item) ? escapeHtml(item) : item);
    } else if (isObject$1(options.named)) {
      Object.keys(options.named).forEach((key) => {
        if (isString(options.named[key])) {
          options.named[key] = escapeHtml(options.named[key]);
        }
      });
    }
  }
  function resolveMessageFormat(context, key, locale, fallbackLocale, fallbackWarn, missingWarn) {
    const { messages: messages2, onWarn } = context;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    let message = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "translate";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(1, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      message = messages2[targetLocale] || {};
      let start = null;
      let startTag;
      let endTag;
      if (inBrowser) {
        start = window.performance.now();
        startTag = "intlify-message-resolve-start";
        endTag = "intlify-message-resolve-end";
        mark && mark(startTag);
      }
      if ((format2 = resolveValue(message, key)) === null) {
        format2 = message[key];
      }
      if (inBrowser) {
        const end = window.performance.now();
        const emitter = context.__v_emitter;
        if (emitter && start && format2) {
          emitter.emit("message-resolve", {
            type: "message-resolve",
            key,
            message: format2,
            time: end - start,
            groupId: `${type}:${key}`
          });
        }
        if (startTag && endTag && mark && measure) {
          mark(endTag);
          measure("intlify message resolve", startTag, endTag);
        }
      }
      if (isString(format2) || isFunction(format2))
        break;
      const missingRet = handleMissing(context, key, targetLocale, missingWarn, type);
      if (missingRet !== key) {
        format2 = missingRet;
      }
      from = to;
    }
    return [format2, targetLocale, message];
  }
  function compileMessageFormat(context, key, targetLocale, format2, cacheBaseKey, errorDetector) {
    const { messageCompiler, warnHtmlMessage } = context;
    if (isMessageFunction(format2)) {
      const msg2 = format2;
      msg2.locale = msg2.locale || targetLocale;
      msg2.key = msg2.key || key;
      return msg2;
    }
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-compilation-start";
      endTag = "intlify-message-compilation-end";
      mark && mark(startTag);
    }
    const msg = messageCompiler(format2, getCompileOptions(context, targetLocale, cacheBaseKey, format2, warnHtmlMessage, errorDetector));
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-compilation", {
          type: "message-compilation",
          message: format2,
          time: end - start,
          groupId: `${"translate"}:${key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message compilation", startTag, endTag);
      }
    }
    msg.locale = targetLocale;
    msg.key = key;
    msg.source = format2;
    return msg;
  }
  function evaluateMessage(context, msg, msgCtx) {
    let start = null;
    let startTag;
    let endTag;
    if (inBrowser) {
      start = window.performance.now();
      startTag = "intlify-message-evaluation-start";
      endTag = "intlify-message-evaluation-end";
      mark && mark(startTag);
    }
    const messaged = msg(msgCtx);
    if (inBrowser) {
      const end = window.performance.now();
      const emitter = context.__v_emitter;
      if (emitter && start) {
        emitter.emit("message-evaluation", {
          type: "message-evaluation",
          value: messaged,
          time: end - start,
          groupId: `${"translate"}:${msg.key}`
        });
      }
      if (startTag && endTag && mark && measure) {
        mark(endTag);
        measure("intlify message evaluation", startTag, endTag);
      }
    }
    return messaged;
  }
  function parseTranslateArgs(...args) {
    const [arg1, arg2, arg3] = args;
    const options = {};
    if (!isString(arg1) && !isNumber(arg1) && !isMessageFunction(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const key = isNumber(arg1) ? String(arg1) : isMessageFunction(arg1) ? arg1 : arg1;
    if (isNumber(arg2)) {
      options.plural = arg2;
    } else if (isString(arg2)) {
      options.default = arg2;
    } else if (isPlainObject(arg2) && !isEmptyObject(arg2)) {
      options.named = arg2;
    } else if (isArray(arg2)) {
      options.list = arg2;
    }
    if (isNumber(arg3)) {
      options.plural = arg3;
    } else if (isString(arg3)) {
      options.default = arg3;
    } else if (isPlainObject(arg3)) {
      assign(options, arg3);
    }
    return [key, options];
  }
  function getCompileOptions(context, locale, key, source, warnHtmlMessage, errorDetector) {
    return {
      warnHtmlMessage,
      onError: (err) => {
        errorDetector && errorDetector(err);
        {
          const message = `Message compilation error: ${err.message}`;
          const codeFrame = err.location && generateCodeFrame(source, err.location.start.offset, err.location.end.offset);
          const emitter = context.__v_emitter;
          if (emitter) {
            emitter.emit("compile-error", {
              message: source,
              error: err.message,
              start: err.location && err.location.start.offset,
              end: err.location && err.location.end.offset,
              groupId: `${"translate"}:${key}`
            });
          }
          console.error(codeFrame ? `${message}
${codeFrame}` : message);
        }
      },
      onCacheKey: (source2) => generateFormatCacheKey(locale, key, source2)
    };
  }
  function getMessageContextOptions(context, locale, message, options) {
    const { modifiers, pluralRules } = context;
    const resolveMessage = (key) => {
      const val = resolveValue(message, key);
      if (isString(val)) {
        let occurred = false;
        const errorDetector = () => {
          occurred = true;
        };
        const msg = compileMessageFormat(context, key, locale, val, key, errorDetector);
        return !occurred ? msg : NOOP_MESSAGE_FUNCTION;
      } else if (isMessageFunction(val)) {
        return val;
      } else {
        return NOOP_MESSAGE_FUNCTION;
      }
    };
    const ctxOptions = {
      locale,
      modifiers,
      pluralRules,
      messages: resolveMessage
    };
    if (context.processor) {
      ctxOptions.processor = context.processor;
    }
    if (options.list) {
      ctxOptions.list = options.list;
    }
    if (options.named) {
      ctxOptions.named = options.named;
    }
    if (isNumber(options.plural)) {
      ctxOptions.pluralIndex = options.plural;
    }
    return ctxOptions;
  }
  const intlDefined = typeof Intl !== "undefined";
  const Availabilities = {
    dateTimeFormat: intlDefined && typeof Intl.DateTimeFormat !== "undefined",
    numberFormat: intlDefined && typeof Intl.NumberFormat !== "undefined"
  };
  function datetime(context, ...args) {
    const { datetimeFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __datetimeFormatters } = context;
    if (!Availabilities.dateTimeFormat) {
      onWarn(getWarnMessage$1(
        4
        /* CANNOT_FORMAT_DATE */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseDateTimeArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.DateTimeFormat(locale).format(value);
    }
    let datetimeFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "datetime format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(5, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      datetimeFormat = datetimeFormats[targetLocale] || {};
      format2 = datetimeFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __datetimeFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.DateTimeFormat(targetLocale, assign({}, format2, overrides));
      __datetimeFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseDateTimeArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    let value;
    if (isString(arg1)) {
      if (!/\d{4}-\d{2}-\d{2}(T.*)?/.test(arg1)) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
      value = new Date(arg1);
      try {
        value.toISOString();
      } catch (e) {
        throw createCoreError(
          16
          /* INVALID_ISO_DATE_ARGUMENT */
        );
      }
    } else if (isDate(arg1)) {
      if (isNaN(arg1.getTime())) {
        throw createCoreError(
          15
          /* INVALID_DATE_ARGUMENT */
        );
      }
      value = arg1;
    } else if (isNumber(arg1)) {
      value = arg1;
    } else {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearDateTimeFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__datetimeFormatters.has(id)) {
        continue;
      }
      context.__datetimeFormatters.delete(id);
    }
  }
  function number(context, ...args) {
    const { numberFormats, unresolving, fallbackLocale, onWarn } = context;
    const { __numberFormatters } = context;
    if (!Availabilities.numberFormat) {
      onWarn(getWarnMessage$1(
        2
        /* CANNOT_FORMAT_NUMBER */
      ));
      return MISSING_RESOLVE_VALUE;
    }
    const [key, value, options, overrides] = parseNumberArgs(...args);
    const missingWarn = isBoolean(options.missingWarn) ? options.missingWarn : context.missingWarn;
    const fallbackWarn = isBoolean(options.fallbackWarn) ? options.fallbackWarn : context.fallbackWarn;
    const part = !!options.part;
    const locale = isString(options.locale) ? options.locale : context.locale;
    const locales = getLocaleChain(context, fallbackLocale, locale);
    if (!isString(key) || key === "") {
      return new Intl.NumberFormat(locale).format(value);
    }
    let numberFormat = {};
    let targetLocale;
    let format2 = null;
    let from = locale;
    let to = null;
    const type = "number format";
    for (let i = 0; i < locales.length; i++) {
      targetLocale = to = locales[i];
      if (locale !== targetLocale && isTranslateFallbackWarn(fallbackWarn, key)) {
        onWarn(getWarnMessage$1(3, {
          key,
          target: targetLocale
        }));
      }
      if (locale !== targetLocale) {
        const emitter = context.__v_emitter;
        if (emitter) {
          emitter.emit("fallback", {
            type,
            key,
            from,
            to,
            groupId: `${type}:${key}`
          });
        }
      }
      numberFormat = numberFormats[targetLocale] || {};
      format2 = numberFormat[key];
      if (isPlainObject(format2))
        break;
      handleMissing(context, key, targetLocale, missingWarn, type);
      from = to;
    }
    if (!isPlainObject(format2) || !isString(targetLocale)) {
      return unresolving ? NOT_REOSLVED : key;
    }
    let id = `${targetLocale}__${key}`;
    if (!isEmptyObject(overrides)) {
      id = `${id}__${JSON.stringify(overrides)}`;
    }
    let formatter = __numberFormatters.get(id);
    if (!formatter) {
      formatter = new Intl.NumberFormat(targetLocale, assign({}, format2, overrides));
      __numberFormatters.set(id, formatter);
    }
    return !part ? formatter.format(value) : formatter.formatToParts(value);
  }
  function parseNumberArgs(...args) {
    const [arg1, arg2, arg3, arg4] = args;
    let options = {};
    let overrides = {};
    if (!isNumber(arg1)) {
      throw createCoreError(
        14
        /* INVALID_ARGUMENT */
      );
    }
    const value = arg1;
    if (isString(arg2)) {
      options.key = arg2;
    } else if (isPlainObject(arg2)) {
      options = arg2;
    }
    if (isString(arg3)) {
      options.locale = arg3;
    } else if (isPlainObject(arg3)) {
      overrides = arg3;
    }
    if (isPlainObject(arg4)) {
      overrides = arg4;
    }
    return [options.key || "", value, options, overrides];
  }
  function clearNumberFormat(ctx, locale, format2) {
    const context = ctx;
    for (const key in format2) {
      const id = `${locale}__${key}`;
      if (!context.__numberFormatters.has(id)) {
        continue;
      }
      context.__numberFormatters.delete(id);
    }
  }
  function getDevtoolsGlobalHook() {
    return getTarget().__VUE_DEVTOOLS_GLOBAL_HOOK__;
  }
  function getTarget() {
    return typeof navigator !== "undefined" && typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {};
  }
  const isProxyAvailable = typeof Proxy === "function";
  const HOOK_SETUP = "devtools-plugin:setup";
  const HOOK_PLUGIN_SETTINGS_SET = "plugin:settings:set";
  class ApiProxy {
    constructor(plugin, hook) {
      this.target = null;
      this.targetQueue = [];
      this.onQueue = [];
      this.plugin = plugin;
      this.hook = hook;
      const defaultSettings = {};
      if (plugin.settings) {
        for (const id in plugin.settings) {
          const item = plugin.settings[id];
          defaultSettings[id] = item.defaultValue;
        }
      }
      const localSettingsSaveId = `__vue-devtools-plugin-settings__${plugin.id}`;
      let currentSettings = { ...defaultSettings };
      try {
        const raw = localStorage.getItem(localSettingsSaveId);
        const data = JSON.parse(raw);
        Object.assign(currentSettings, data);
      } catch (e) {
      }
      this.fallbacks = {
        getSettings() {
          return currentSettings;
        },
        setSettings(value) {
          try {
            localStorage.setItem(localSettingsSaveId, JSON.stringify(value));
          } catch (e) {
          }
          currentSettings = value;
        }
      };
      hook.on(HOOK_PLUGIN_SETTINGS_SET, (pluginId, value) => {
        if (pluginId === this.plugin.id) {
          this.fallbacks.setSettings(value);
        }
      });
      this.proxiedOn = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target.on[prop];
          } else {
            return (...args) => {
              this.onQueue.push({
                method: prop,
                args
              });
            };
          }
        }
      });
      this.proxiedTarget = new Proxy({}, {
        get: (_target, prop) => {
          if (this.target) {
            return this.target[prop];
          } else if (prop === "on") {
            return this.proxiedOn;
          } else if (Object.keys(this.fallbacks).includes(prop)) {
            return (...args) => {
              this.targetQueue.push({
                method: prop,
                args,
                resolve: () => {
                }
              });
              return this.fallbacks[prop](...args);
            };
          } else {
            return (...args) => {
              return new Promise((resolve) => {
                this.targetQueue.push({
                  method: prop,
                  args,
                  resolve
                });
              });
            };
          }
        }
      });
    }
    async setRealTarget(target) {
      this.target = target;
      for (const item of this.onQueue) {
        this.target.on[item.method](...item.args);
      }
      for (const item of this.targetQueue) {
        item.resolve(await this.target[item.method](...item.args));
      }
    }
  }
  function setupDevtoolsPlugin(pluginDescriptor, setupFn) {
    const target = getTarget();
    const hook = getDevtoolsGlobalHook();
    const enableProxy = isProxyAvailable && pluginDescriptor.enableEarlyProxy;
    if (hook && (target.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !enableProxy)) {
      hook.emit(HOOK_SETUP, pluginDescriptor, setupFn);
    } else {
      const proxy = enableProxy ? new ApiProxy(pluginDescriptor, hook) : null;
      const list = target.__VUE_DEVTOOLS_PLUGINS__ = target.__VUE_DEVTOOLS_PLUGINS__ || [];
      list.push({
        pluginDescriptor,
        setupFn,
        proxy
      });
      if (proxy)
        setupFn(proxy.proxiedTarget);
    }
  }
  /*!
    * @intlify/vue-devtools v9.1.9
    * (c) 2021 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VueDevToolsLabels = {
    [
      "vue-devtools-plugin-vue-i18n"
      /* PLUGIN */
    ]: "Vue I18n devtools",
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "I18n Resources",
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: "Vue I18n"
  };
  const VueDevToolsPlaceholders = {
    [
      "vue-i18n-resource-inspector"
      /* CUSTOM_INSPECTOR */
    ]: "Search for scopes ..."
  };
  const VueDevToolsTimelineColors = {
    [
      "vue-i18n-timeline"
      /* TIMELINE */
    ]: 16764185
  };
  /*!
    * vue-i18n v9.1.9
    * (c) 2022 kazuya kawaguchi
    * Released under the MIT License.
    */
  const VERSION = "9.1.9";
  function initFeatureFlags() {
    let needWarn = false;
    {
      needWarn = true;
    }
    if (needWarn) {
      console.warn(`You are running the esm-bundler build of vue-i18n. It is recommended to configure your bundler to explicitly replace feature flag globals with boolean literals to get proper tree-shaking in the final bundle.`);
    }
  }
  const warnMessages = {
    [
      6
      /* FALLBACK_TO_ROOT */
    ]: `Fall back to {type} '{key}' with root locale.`,
    [
      7
      /* NOT_SUPPORTED_PRESERVE */
    ]: `Not supported 'preserve'.`,
    [
      8
      /* NOT_SUPPORTED_FORMATTER */
    ]: `Not supported 'formatter'.`,
    [
      9
      /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
    ]: `Not supported 'preserveDirectiveContent'.`,
    [
      10
      /* NOT_SUPPORTED_GET_CHOICE_INDEX */
    ]: `Not supported 'getChoiceIndex'.`,
    [
      11
      /* COMPONENT_NAME_LEGACY_COMPATIBLE */
    ]: `Component name legacy compatible: '{name}' -> 'i18n'`,
    [
      12
      /* NOT_FOUND_PARENT_SCOPE */
    ]: `Not found parent scope. use the global scope.`
  };
  function getWarnMessage(code, ...args) {
    return format(warnMessages[code], ...args);
  }
  function createI18nError(code, ...args) {
    return createCompileError(code, null, { messages: errorMessages, args });
  }
  const errorMessages = {
    [
      14
      /* UNEXPECTED_RETURN_TYPE */
    ]: "Unexpected return type in composer",
    [
      15
      /* INVALID_ARGUMENT */
    ]: "Invalid argument",
    [
      16
      /* MUST_BE_CALL_SETUP_TOP */
    ]: "Must be called at the top of a `setup` function",
    [
      17
      /* NOT_INSLALLED */
    ]: "Need to install with `app.use` function",
    [
      22
      /* UNEXPECTED_ERROR */
    ]: "Unexpected error",
    [
      18
      /* NOT_AVAILABLE_IN_LEGACY_MODE */
    ]: "Not available in legacy mode",
    [
      19
      /* REQUIRED_VALUE */
    ]: `Required in value: {0}`,
    [
      20
      /* INVALID_VALUE */
    ]: `Invalid value`,
    [
      21
      /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
    ]: `Cannot setup vue-devtools plugin`
  };
  const DEVTOOLS_META = "__INTLIFY_META__";
  const TransrateVNodeSymbol = makeSymbol("__transrateVNode");
  const DatetimePartsSymbol = makeSymbol("__datetimeParts");
  const NumberPartsSymbol = makeSymbol("__numberParts");
  const EnableEmitter = makeSymbol("__enableEmitter");
  const DisableEmitter = makeSymbol("__disableEmitter");
  const SetPluralRulesSymbol = makeSymbol("__setPluralRules");
  makeSymbol("__intlifyMeta");
  const InejctWithOption = makeSymbol("__injectWithOption");
  let composerID = 0;
  function defineCoreMissingHandler(missing) {
    return (ctx, locale, key, type) => {
      return missing(locale, key, vue.getCurrentInstance() || void 0, type);
    };
  }
  function getLocaleMessages(locale, options) {
    const { messages: messages2, __i18n } = options;
    const ret = isPlainObject(messages2) ? messages2 : isArray(__i18n) ? {} : { [locale]: {} };
    if (isArray(__i18n)) {
      __i18n.forEach(({ locale: locale2, resource }) => {
        if (locale2) {
          ret[locale2] = ret[locale2] || {};
          deepCopy(resource, ret[locale2]);
        } else {
          deepCopy(resource, ret);
        }
      });
    }
    if (options.flatJson) {
      for (const key in ret) {
        if (hasOwn$1(ret, key)) {
          handleFlatJson(ret[key]);
        }
      }
    }
    return ret;
  }
  const isNotObjectOrIsArray = (val) => !isObject$1(val) || isArray(val);
  function deepCopy(src, des) {
    if (isNotObjectOrIsArray(src) || isNotObjectOrIsArray(des)) {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
    for (const key in src) {
      if (hasOwn$1(src, key)) {
        if (isNotObjectOrIsArray(src[key]) || isNotObjectOrIsArray(des[key])) {
          des[key] = src[key];
        } else {
          deepCopy(src[key], des[key]);
        }
      }
    }
  }
  const getMetaInfo = () => {
    const instance = vue.getCurrentInstance();
    return instance && instance.type[DEVTOOLS_META] ? { [DEVTOOLS_META]: instance.type[DEVTOOLS_META] } : null;
  };
  function createComposer(options = {}) {
    const { __root } = options;
    const _isGlobal = __root === void 0;
    let _inheritLocale = isBoolean(options.inheritLocale) ? options.inheritLocale : true;
    const _locale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.locale.value : isString(options.locale) ? options.locale : "en-US"
    );
    const _fallbackLocale = vue.ref(
      // prettier-ignore
      __root && _inheritLocale ? __root.fallbackLocale.value : isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : _locale.value
    );
    const _messages = vue.ref(getLocaleMessages(_locale.value, options));
    const _datetimeFormats = vue.ref(isPlainObject(options.datetimeFormats) ? options.datetimeFormats : { [_locale.value]: {} });
    const _numberFormats = vue.ref(isPlainObject(options.numberFormats) ? options.numberFormats : { [_locale.value]: {} });
    let _missingWarn = __root ? __root.missingWarn : isBoolean(options.missingWarn) || isRegExp(options.missingWarn) ? options.missingWarn : true;
    let _fallbackWarn = __root ? __root.fallbackWarn : isBoolean(options.fallbackWarn) || isRegExp(options.fallbackWarn) ? options.fallbackWarn : true;
    let _fallbackRoot = __root ? __root.fallbackRoot : isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    let _fallbackFormat = !!options.fallbackFormat;
    let _missing = isFunction(options.missing) ? options.missing : null;
    let _runtimeMissing = isFunction(options.missing) ? defineCoreMissingHandler(options.missing) : null;
    let _postTranslation = isFunction(options.postTranslation) ? options.postTranslation : null;
    let _warnHtmlMessage = isBoolean(options.warnHtmlMessage) ? options.warnHtmlMessage : true;
    let _escapeParameter = !!options.escapeParameter;
    const _modifiers = __root ? __root.modifiers : isPlainObject(options.modifiers) ? options.modifiers : {};
    let _pluralRules = options.pluralRules || __root && __root.pluralRules;
    let _context;
    function getCoreContext() {
      return createCoreContext({
        version: VERSION,
        locale: _locale.value,
        fallbackLocale: _fallbackLocale.value,
        messages: _messages.value,
        messageCompiler: function compileToFunction(source) {
          return (ctx) => {
            return ctx.normalize([source]);
          };
        },
        datetimeFormats: _datetimeFormats.value,
        numberFormats: _numberFormats.value,
        modifiers: _modifiers,
        pluralRules: _pluralRules,
        missing: _runtimeMissing === null ? void 0 : _runtimeMissing,
        missingWarn: _missingWarn,
        fallbackWarn: _fallbackWarn,
        fallbackFormat: _fallbackFormat,
        unresolving: true,
        postTranslation: _postTranslation === null ? void 0 : _postTranslation,
        warnHtmlMessage: _warnHtmlMessage,
        escapeParameter: _escapeParameter,
        __datetimeFormatters: isPlainObject(_context) ? _context.__datetimeFormatters : void 0,
        __numberFormatters: isPlainObject(_context) ? _context.__numberFormatters : void 0,
        __v_emitter: isPlainObject(_context) ? _context.__v_emitter : void 0,
        __meta: { framework: "vue" }
      });
    }
    _context = getCoreContext();
    updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
    function trackReactivityValues() {
      return [
        _locale.value,
        _fallbackLocale.value,
        _messages.value,
        _datetimeFormats.value,
        _numberFormats.value
      ];
    }
    const locale = vue.computed({
      get: () => _locale.value,
      set: (val) => {
        _locale.value = val;
        _context.locale = _locale.value;
      }
    });
    const fallbackLocale = vue.computed({
      get: () => _fallbackLocale.value,
      set: (val) => {
        _fallbackLocale.value = val;
        _context.fallbackLocale = _fallbackLocale.value;
        updateFallbackLocale(_context, _locale.value, val);
      }
    });
    const messages2 = vue.computed(() => _messages.value);
    const datetimeFormats = vue.computed(() => _datetimeFormats.value);
    const numberFormats = vue.computed(() => _numberFormats.value);
    function getPostTranslationHandler() {
      return isFunction(_postTranslation) ? _postTranslation : null;
    }
    function setPostTranslationHandler(handler) {
      _postTranslation = handler;
      _context.postTranslation = handler;
    }
    function getMissingHandler() {
      return _missing;
    }
    function setMissingHandler(handler) {
      if (handler !== null) {
        _runtimeMissing = defineCoreMissingHandler(handler);
      }
      _missing = handler;
      _context.missing = _runtimeMissing;
    }
    function isResolvedTranslateMessage(type, arg) {
      return type !== "translate" || !!arg.resolvedMessage === false;
    }
    function wrapWithDeps(fn, argumentParser, warnType, fallbackSuccess, fallbackFail, successCondition) {
      trackReactivityValues();
      let ret;
      {
        try {
          setAdditionalMeta(getMetaInfo());
          ret = fn(_context);
        } finally {
          setAdditionalMeta(null);
        }
      }
      if (isNumber(ret) && ret === NOT_REOSLVED) {
        const [key, arg2] = argumentParser();
        if (__root && isString(key) && isResolvedTranslateMessage(warnType, arg2)) {
          if (_fallbackRoot && (isTranslateFallbackWarn(_fallbackWarn, key) || isTranslateMissingWarn(_missingWarn, key))) {
            warn(getWarnMessage(6, {
              key,
              type: warnType
            }));
          }
          {
            const { __v_emitter: emitter } = _context;
            if (emitter && _fallbackRoot) {
              emitter.emit("fallback", {
                type: warnType,
                key,
                to: "global",
                groupId: `${warnType}:${key}`
              });
            }
          }
        }
        return __root && _fallbackRoot ? fallbackSuccess(__root) : fallbackFail(key);
      } else if (successCondition(ret)) {
        return ret;
      } else {
        throw createI18nError(
          14
          /* UNEXPECTED_RETURN_TYPE */
        );
      }
    }
    function t(...args) {
      return wrapWithDeps((context) => translate(context, ...args), () => parseTranslateArgs(...args), "translate", (root) => root.t(...args), (key) => key, (val) => isString(val));
    }
    function rt(...args) {
      const [arg1, arg2, arg3] = args;
      if (arg3 && !isObject$1(arg3)) {
        throw createI18nError(
          15
          /* INVALID_ARGUMENT */
        );
      }
      return t(...[arg1, arg2, assign({ resolvedMessage: true }, arg3 || {})]);
    }
    function d(...args) {
      return wrapWithDeps((context) => datetime(context, ...args), () => parseDateTimeArgs(...args), "datetime format", (root) => root.d(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function n(...args) {
      return wrapWithDeps((context) => number(context, ...args), () => parseNumberArgs(...args), "number format", (root) => root.n(...args), () => MISSING_RESOLVE_VALUE, (val) => isString(val));
    }
    function normalize(values) {
      return values.map((val) => isString(val) ? vue.createVNode(vue.Text, null, val, 0) : val);
    }
    const interpolate = (val) => val;
    const processor = {
      normalize,
      interpolate,
      type: "vnode"
    };
    function transrateVNode(...args) {
      return wrapWithDeps(
        (context) => {
          let ret;
          const _context2 = context;
          try {
            _context2.processor = processor;
            ret = translate(_context2, ...args);
          } finally {
            _context2.processor = null;
          }
          return ret;
        },
        () => parseTranslateArgs(...args),
        "translate",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[TransrateVNodeSymbol](...args),
        (key) => [vue.createVNode(vue.Text, null, key, 0)],
        (val) => isArray(val)
      );
    }
    function numberParts(...args) {
      return wrapWithDeps(
        (context) => number(context, ...args),
        () => parseNumberArgs(...args),
        "number format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[NumberPartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function datetimeParts(...args) {
      return wrapWithDeps(
        (context) => datetime(context, ...args),
        () => parseDateTimeArgs(...args),
        "datetime format",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (root) => root[DatetimePartsSymbol](...args),
        () => [],
        (val) => isString(val) || isArray(val)
      );
    }
    function setPluralRules(rules) {
      _pluralRules = rules;
      _context.pluralRules = _pluralRules;
    }
    function te(key, locale2) {
      const targetLocale = isString(locale2) ? locale2 : _locale.value;
      const message = getLocaleMessage(targetLocale);
      return resolveValue(message, key) !== null;
    }
    function resolveMessages(key) {
      let messages3 = null;
      const locales = getLocaleChain(_context, _fallbackLocale.value, _locale.value);
      for (let i = 0; i < locales.length; i++) {
        const targetLocaleMessages = _messages.value[locales[i]] || {};
        const messageValue = resolveValue(targetLocaleMessages, key);
        if (messageValue != null) {
          messages3 = messageValue;
          break;
        }
      }
      return messages3;
    }
    function tm(key) {
      const messages3 = resolveMessages(key);
      return messages3 != null ? messages3 : __root ? __root.tm(key) || {} : {};
    }
    function getLocaleMessage(locale2) {
      return _messages.value[locale2] || {};
    }
    function setLocaleMessage(locale2, message) {
      _messages.value[locale2] = message;
      _context.messages = _messages.value;
    }
    function mergeLocaleMessage(locale2, message) {
      _messages.value[locale2] = _messages.value[locale2] || {};
      deepCopy(message, _messages.value[locale2]);
      _context.messages = _messages.value;
    }
    function getDateTimeFormat(locale2) {
      return _datetimeFormats.value[locale2] || {};
    }
    function setDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = format2;
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function mergeDateTimeFormat(locale2, format2) {
      _datetimeFormats.value[locale2] = assign(_datetimeFormats.value[locale2] || {}, format2);
      _context.datetimeFormats = _datetimeFormats.value;
      clearDateTimeFormat(_context, locale2, format2);
    }
    function getNumberFormat(locale2) {
      return _numberFormats.value[locale2] || {};
    }
    function setNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = format2;
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    function mergeNumberFormat(locale2, format2) {
      _numberFormats.value[locale2] = assign(_numberFormats.value[locale2] || {}, format2);
      _context.numberFormats = _numberFormats.value;
      clearNumberFormat(_context, locale2, format2);
    }
    composerID++;
    if (__root) {
      vue.watch(__root.locale, (val) => {
        if (_inheritLocale) {
          _locale.value = val;
          _context.locale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
      vue.watch(__root.fallbackLocale, (val) => {
        if (_inheritLocale) {
          _fallbackLocale.value = val;
          _context.fallbackLocale = val;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      });
    }
    const composer = {
      id: composerID,
      locale,
      fallbackLocale,
      get inheritLocale() {
        return _inheritLocale;
      },
      set inheritLocale(val) {
        _inheritLocale = val;
        if (val && __root) {
          _locale.value = __root.locale.value;
          _fallbackLocale.value = __root.fallbackLocale.value;
          updateFallbackLocale(_context, _locale.value, _fallbackLocale.value);
        }
      },
      get availableLocales() {
        return Object.keys(_messages.value).sort();
      },
      messages: messages2,
      datetimeFormats,
      numberFormats,
      get modifiers() {
        return _modifiers;
      },
      get pluralRules() {
        return _pluralRules || {};
      },
      get isGlobal() {
        return _isGlobal;
      },
      get missingWarn() {
        return _missingWarn;
      },
      set missingWarn(val) {
        _missingWarn = val;
        _context.missingWarn = _missingWarn;
      },
      get fallbackWarn() {
        return _fallbackWarn;
      },
      set fallbackWarn(val) {
        _fallbackWarn = val;
        _context.fallbackWarn = _fallbackWarn;
      },
      get fallbackRoot() {
        return _fallbackRoot;
      },
      set fallbackRoot(val) {
        _fallbackRoot = val;
      },
      get fallbackFormat() {
        return _fallbackFormat;
      },
      set fallbackFormat(val) {
        _fallbackFormat = val;
        _context.fallbackFormat = _fallbackFormat;
      },
      get warnHtmlMessage() {
        return _warnHtmlMessage;
      },
      set warnHtmlMessage(val) {
        _warnHtmlMessage = val;
        _context.warnHtmlMessage = val;
      },
      get escapeParameter() {
        return _escapeParameter;
      },
      set escapeParameter(val) {
        _escapeParameter = val;
        _context.escapeParameter = val;
      },
      t,
      rt,
      d,
      n,
      te,
      tm,
      getLocaleMessage,
      setLocaleMessage,
      mergeLocaleMessage,
      getDateTimeFormat,
      setDateTimeFormat,
      mergeDateTimeFormat,
      getNumberFormat,
      setNumberFormat,
      mergeNumberFormat,
      getPostTranslationHandler,
      setPostTranslationHandler,
      getMissingHandler,
      setMissingHandler,
      [TransrateVNodeSymbol]: transrateVNode,
      [NumberPartsSymbol]: numberParts,
      [DatetimePartsSymbol]: datetimeParts,
      [SetPluralRulesSymbol]: setPluralRules,
      [InejctWithOption]: options.__injectWithOption
      // eslint-disable-line @typescript-eslint/no-explicit-any
    };
    {
      composer[EnableEmitter] = (emitter) => {
        _context.__v_emitter = emitter;
      };
      composer[DisableEmitter] = () => {
        _context.__v_emitter = void 0;
      };
    }
    return composer;
  }
  function convertComposerOptions(options) {
    const locale = isString(options.locale) ? options.locale : "en-US";
    const fallbackLocale = isString(options.fallbackLocale) || isArray(options.fallbackLocale) || isPlainObject(options.fallbackLocale) || options.fallbackLocale === false ? options.fallbackLocale : locale;
    const missing = isFunction(options.missing) ? options.missing : void 0;
    const missingWarn = isBoolean(options.silentTranslationWarn) || isRegExp(options.silentTranslationWarn) ? !options.silentTranslationWarn : true;
    const fallbackWarn = isBoolean(options.silentFallbackWarn) || isRegExp(options.silentFallbackWarn) ? !options.silentFallbackWarn : true;
    const fallbackRoot = isBoolean(options.fallbackRoot) ? options.fallbackRoot : true;
    const fallbackFormat = !!options.formatFallbackMessages;
    const modifiers = isPlainObject(options.modifiers) ? options.modifiers : {};
    const pluralizationRules = options.pluralizationRules;
    const postTranslation = isFunction(options.postTranslation) ? options.postTranslation : void 0;
    const warnHtmlMessage = isString(options.warnHtmlInMessage) ? options.warnHtmlInMessage !== "off" : true;
    const escapeParameter = !!options.escapeParameterHtml;
    const inheritLocale = isBoolean(options.sync) ? options.sync : true;
    if (options.formatter) {
      warn(getWarnMessage(
        8
        /* NOT_SUPPORTED_FORMATTER */
      ));
    }
    if (options.preserveDirectiveContent) {
      warn(getWarnMessage(
        9
        /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
      ));
    }
    let messages2 = options.messages;
    if (isPlainObject(options.sharedMessages)) {
      const sharedMessages = options.sharedMessages;
      const locales = Object.keys(sharedMessages);
      messages2 = locales.reduce((messages3, locale2) => {
        const message = messages3[locale2] || (messages3[locale2] = {});
        assign(message, sharedMessages[locale2]);
        return messages3;
      }, messages2 || {});
    }
    const { __i18n, __root, __injectWithOption } = options;
    const datetimeFormats = options.datetimeFormats;
    const numberFormats = options.numberFormats;
    const flatJson = options.flatJson;
    return {
      locale,
      fallbackLocale,
      messages: messages2,
      flatJson,
      datetimeFormats,
      numberFormats,
      missing,
      missingWarn,
      fallbackWarn,
      fallbackRoot,
      fallbackFormat,
      modifiers,
      pluralRules: pluralizationRules,
      postTranslation,
      warnHtmlMessage,
      escapeParameter,
      inheritLocale,
      __i18n,
      __root,
      __injectWithOption
    };
  }
  function createVueI18n(options = {}) {
    const composer = createComposer(convertComposerOptions(options));
    const vueI18n = {
      // id
      id: composer.id,
      // locale
      get locale() {
        return composer.locale.value;
      },
      set locale(val) {
        composer.locale.value = val;
      },
      // fallbackLocale
      get fallbackLocale() {
        return composer.fallbackLocale.value;
      },
      set fallbackLocale(val) {
        composer.fallbackLocale.value = val;
      },
      // messages
      get messages() {
        return composer.messages.value;
      },
      // datetimeFormats
      get datetimeFormats() {
        return composer.datetimeFormats.value;
      },
      // numberFormats
      get numberFormats() {
        return composer.numberFormats.value;
      },
      // availableLocales
      get availableLocales() {
        return composer.availableLocales;
      },
      // formatter
      get formatter() {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
        return {
          interpolate() {
            return [];
          }
        };
      },
      set formatter(val) {
        warn(getWarnMessage(
          8
          /* NOT_SUPPORTED_FORMATTER */
        ));
      },
      // missing
      get missing() {
        return composer.getMissingHandler();
      },
      set missing(handler) {
        composer.setMissingHandler(handler);
      },
      // silentTranslationWarn
      get silentTranslationWarn() {
        return isBoolean(composer.missingWarn) ? !composer.missingWarn : composer.missingWarn;
      },
      set silentTranslationWarn(val) {
        composer.missingWarn = isBoolean(val) ? !val : val;
      },
      // silentFallbackWarn
      get silentFallbackWarn() {
        return isBoolean(composer.fallbackWarn) ? !composer.fallbackWarn : composer.fallbackWarn;
      },
      set silentFallbackWarn(val) {
        composer.fallbackWarn = isBoolean(val) ? !val : val;
      },
      // modifiers
      get modifiers() {
        return composer.modifiers;
      },
      // formatFallbackMessages
      get formatFallbackMessages() {
        return composer.fallbackFormat;
      },
      set formatFallbackMessages(val) {
        composer.fallbackFormat = val;
      },
      // postTranslation
      get postTranslation() {
        return composer.getPostTranslationHandler();
      },
      set postTranslation(handler) {
        composer.setPostTranslationHandler(handler);
      },
      // sync
      get sync() {
        return composer.inheritLocale;
      },
      set sync(val) {
        composer.inheritLocale = val;
      },
      // warnInHtmlMessage
      get warnHtmlInMessage() {
        return composer.warnHtmlMessage ? "warn" : "off";
      },
      set warnHtmlInMessage(val) {
        composer.warnHtmlMessage = val !== "off";
      },
      // escapeParameterHtml
      get escapeParameterHtml() {
        return composer.escapeParameter;
      },
      set escapeParameterHtml(val) {
        composer.escapeParameter = val;
      },
      // preserveDirectiveContent
      get preserveDirectiveContent() {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
        return true;
      },
      set preserveDirectiveContent(val) {
        warn(getWarnMessage(
          9
          /* NOT_SUPPORTED_PRESERVE_DIRECTIVE */
        ));
      },
      // pluralizationRules
      get pluralizationRules() {
        return composer.pluralRules || {};
      },
      // for internal
      __composer: composer,
      // t
      t(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = {};
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      rt(...args) {
        return composer.rt(...args);
      },
      // tc
      tc(...args) {
        const [arg1, arg2, arg3] = args;
        const options2 = { plural: 1 };
        let list = null;
        let named = null;
        if (!isString(arg1)) {
          throw createI18nError(
            15
            /* INVALID_ARGUMENT */
          );
        }
        const key = arg1;
        if (isString(arg2)) {
          options2.locale = arg2;
        } else if (isNumber(arg2)) {
          options2.plural = arg2;
        } else if (isArray(arg2)) {
          list = arg2;
        } else if (isPlainObject(arg2)) {
          named = arg2;
        }
        if (isString(arg3)) {
          options2.locale = arg3;
        } else if (isArray(arg3)) {
          list = arg3;
        } else if (isPlainObject(arg3)) {
          named = arg3;
        }
        return composer.t(key, list || named || {}, options2);
      },
      // te
      te(key, locale) {
        return composer.te(key, locale);
      },
      // tm
      tm(key) {
        return composer.tm(key);
      },
      // getLocaleMessage
      getLocaleMessage(locale) {
        return composer.getLocaleMessage(locale);
      },
      // setLocaleMessage
      setLocaleMessage(locale, message) {
        composer.setLocaleMessage(locale, message);
      },
      // mergeLocaleMessage
      mergeLocaleMessage(locale, message) {
        composer.mergeLocaleMessage(locale, message);
      },
      // d
      d(...args) {
        return composer.d(...args);
      },
      // getDateTimeFormat
      getDateTimeFormat(locale) {
        return composer.getDateTimeFormat(locale);
      },
      // setDateTimeFormat
      setDateTimeFormat(locale, format2) {
        composer.setDateTimeFormat(locale, format2);
      },
      // mergeDateTimeFormat
      mergeDateTimeFormat(locale, format2) {
        composer.mergeDateTimeFormat(locale, format2);
      },
      // n
      n(...args) {
        return composer.n(...args);
      },
      // getNumberFormat
      getNumberFormat(locale) {
        return composer.getNumberFormat(locale);
      },
      // setNumberFormat
      setNumberFormat(locale, format2) {
        composer.setNumberFormat(locale, format2);
      },
      // mergeNumberFormat
      mergeNumberFormat(locale, format2) {
        composer.mergeNumberFormat(locale, format2);
      },
      // getChoiceIndex
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      getChoiceIndex(choice, choicesLength) {
        warn(getWarnMessage(
          10
          /* NOT_SUPPORTED_GET_CHOICE_INDEX */
        ));
        return -1;
      },
      // for internal
      __onComponentInstanceCreated(target) {
        const { componentInstanceCreatedListener } = options;
        if (componentInstanceCreatedListener) {
          componentInstanceCreatedListener(target, vueI18n);
        }
      }
    };
    {
      vueI18n.__enableEmitter = (emitter) => {
        const __composer = composer;
        __composer[EnableEmitter] && __composer[EnableEmitter](emitter);
      };
      vueI18n.__disableEmitter = () => {
        const __composer = composer;
        __composer[DisableEmitter] && __composer[DisableEmitter]();
      };
    }
    return vueI18n;
  }
  const baseFormatProps = {
    tag: {
      type: [String, Object]
    },
    locale: {
      type: String
    },
    scope: {
      type: String,
      validator: (val) => val === "parent" || val === "global",
      default: "parent"
    },
    i18n: {
      type: Object
    }
  };
  const Translation = {
    /* eslint-disable */
    name: "i18n-t",
    props: assign({
      keypath: {
        type: String,
        required: true
      },
      plural: {
        type: [Number, String],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        validator: (val) => isNumber(val) || !isNaN(val)
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const { slots, attrs } = context;
      const i18n2 = props.i18n || useI18n({
        useScope: props.scope,
        __useComponent: true
      });
      const keys = Object.keys(slots).filter((key) => key !== "_");
      return () => {
        const options = {};
        if (props.locale) {
          options.locale = props.locale;
        }
        if (props.plural !== void 0) {
          options.plural = isString(props.plural) ? +props.plural : props.plural;
        }
        const arg = getInterpolateArg(context, keys);
        const children = i18n2[TransrateVNodeSymbol](props.keypath, arg, options);
        const assignedAttrs = assign({}, attrs);
        return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
      };
    }
  };
  function getInterpolateArg({ slots }, keys) {
    if (keys.length === 1 && keys[0] === "default") {
      return slots.default ? slots.default() : [];
    } else {
      return keys.reduce((arg, key) => {
        const slot = slots[key];
        if (slot) {
          arg[key] = slot();
        }
        return arg;
      }, {});
    }
  }
  function renderFormatter(props, context, slotKeys, partFormatter) {
    const { slots, attrs } = context;
    return () => {
      const options = { part: true };
      let overrides = {};
      if (props.locale) {
        options.locale = props.locale;
      }
      if (isString(props.format)) {
        options.key = props.format;
      } else if (isObject$1(props.format)) {
        if (isString(props.format.key)) {
          options.key = props.format.key;
        }
        overrides = Object.keys(props.format).reduce((options2, prop) => {
          return slotKeys.includes(prop) ? assign({}, options2, { [prop]: props.format[prop] }) : options2;
        }, {});
      }
      const parts = partFormatter(...[props.value, options, overrides]);
      let children = [options.key];
      if (isArray(parts)) {
        children = parts.map((part, index) => {
          const slot = slots[part.type];
          return slot ? slot({ [part.type]: part.value, index, parts }) : [part.value];
        });
      } else if (isString(parts)) {
        children = [parts];
      }
      const assignedAttrs = assign({}, attrs);
      return isString(props.tag) ? vue.h(props.tag, assignedAttrs, children) : isObject$1(props.tag) ? vue.h(props.tag, assignedAttrs, children) : vue.h(vue.Fragment, assignedAttrs, children);
    };
  }
  const NUMBER_FORMAT_KEYS = [
    "localeMatcher",
    "style",
    "unit",
    "unitDisplay",
    "currency",
    "currencyDisplay",
    "useGrouping",
    "numberingSystem",
    "minimumIntegerDigits",
    "minimumFractionDigits",
    "maximumFractionDigits",
    "minimumSignificantDigits",
    "maximumSignificantDigits",
    "notation",
    "formatMatcher"
  ];
  const NumberFormat = {
    /* eslint-disable */
    name: "i18n-n",
    props: assign({
      value: {
        type: Number,
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, NUMBER_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[NumberPartsSymbol](...args)
      ));
    }
  };
  const DATETIME_FORMAT_KEYS = [
    "dateStyle",
    "timeStyle",
    "fractionalSecondDigits",
    "calendar",
    "dayPeriod",
    "numberingSystem",
    "localeMatcher",
    "timeZone",
    "hour12",
    "hourCycle",
    "formatMatcher",
    "weekday",
    "era",
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "timeZoneName"
  ];
  const DatetimeFormat = {
    /* eslint-disable */
    name: "i18n-d",
    props: assign({
      value: {
        type: [Number, Date],
        required: true
      },
      format: {
        type: [String, Object]
      }
    }, baseFormatProps),
    /* eslint-enable */
    setup(props, context) {
      const i18n2 = props.i18n || useI18n({ useScope: "parent", __useComponent: true });
      return renderFormatter(props, context, DATETIME_FORMAT_KEYS, (...args) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        i18n2[DatetimePartsSymbol](...args)
      ));
    }
  };
  function getComposer$2(i18n2, instance) {
    const i18nInternal = i18n2;
    if (i18n2.mode === "composition") {
      return i18nInternal.__getInstance(instance) || i18n2.global;
    } else {
      const vueI18n = i18nInternal.__getInstance(instance);
      return vueI18n != null ? vueI18n.__composer : i18n2.global.__composer;
    }
  }
  function vTDirective(i18n2) {
    const bind = (el, { instance, value, modifiers }) => {
      if (!instance || !instance.$) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const composer = getComposer$2(i18n2, instance.$);
      if (modifiers.preserve) {
        warn(getWarnMessage(
          7
          /* NOT_SUPPORTED_PRESERVE */
        ));
      }
      const parsedValue = parseValue(value);
      el.textContent = composer.t(...makeParams(parsedValue));
    };
    return {
      beforeMount: bind,
      beforeUpdate: bind
    };
  }
  function parseValue(value) {
    if (isString(value)) {
      return { path: value };
    } else if (isPlainObject(value)) {
      if (!("path" in value)) {
        throw createI18nError(19, "path");
      }
      return value;
    } else {
      throw createI18nError(
        20
        /* INVALID_VALUE */
      );
    }
  }
  function makeParams(value) {
    const { path, locale, args, choice, plural } = value;
    const options = {};
    const named = args || {};
    if (isString(locale)) {
      options.locale = locale;
    }
    if (isNumber(choice)) {
      options.plural = choice;
    }
    if (isNumber(plural)) {
      options.plural = plural;
    }
    return [path, named, options];
  }
  function apply(app, i18n2, ...options) {
    const pluginOptions = isPlainObject(options[0]) ? options[0] : {};
    const useI18nComponentName = !!pluginOptions.useI18nComponentName;
    const globalInstall = isBoolean(pluginOptions.globalInstall) ? pluginOptions.globalInstall : true;
    if (globalInstall && useI18nComponentName) {
      warn(getWarnMessage(11, {
        name: Translation.name
      }));
    }
    if (globalInstall) {
      app.component(!useI18nComponentName ? Translation.name : "i18n", Translation);
      app.component(NumberFormat.name, NumberFormat);
      app.component(DatetimeFormat.name, DatetimeFormat);
    }
    app.directive("t", vTDirective(i18n2));
  }
  const VUE_I18N_COMPONENT_TYPES = "vue-i18n: composer properties";
  let devtoolsApi;
  async function enableDevTools(app, i18n2) {
    return new Promise((resolve, reject) => {
      try {
        setupDevtoolsPlugin({
          id: "vue-devtools-plugin-vue-i18n",
          label: VueDevToolsLabels[
            "vue-devtools-plugin-vue-i18n"
            /* PLUGIN */
          ],
          packageName: "vue-i18n",
          homepage: "https://vue-i18n.intlify.dev",
          logo: "https://vue-i18n.intlify.dev/vue-i18n-devtools-logo.png",
          componentStateTypes: [VUE_I18N_COMPONENT_TYPES],
          app
        }, (api) => {
          devtoolsApi = api;
          api.on.visitComponentTree(({ componentInstance, treeNode }) => {
            updateComponentTreeTags(componentInstance, treeNode, i18n2);
          });
          api.on.inspectComponent(({ componentInstance, instanceData }) => {
            if (componentInstance.vnode.el.__VUE_I18N__ && instanceData) {
              if (i18n2.mode === "legacy") {
                if (componentInstance.vnode.el.__VUE_I18N__ !== i18n2.global.__composer) {
                  inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
                }
              } else {
                inspectComposer(instanceData, componentInstance.vnode.el.__VUE_I18N__);
              }
            }
          });
          api.addInspector({
            id: "vue-i18n-resource-inspector",
            label: VueDevToolsLabels[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ],
            icon: "language",
            treeFilterPlaceholder: VueDevToolsPlaceholders[
              "vue-i18n-resource-inspector"
              /* CUSTOM_INSPECTOR */
            ]
          });
          api.on.getInspectorTree((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              registerScope(payload, i18n2);
            }
          });
          api.on.getInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              inspectScope(payload, i18n2);
            }
          });
          api.on.editInspectorState((payload) => {
            if (payload.app === app && payload.inspectorId === "vue-i18n-resource-inspector") {
              editScope(payload, i18n2);
            }
          });
          api.addTimelineLayer({
            id: "vue-i18n-timeline",
            label: VueDevToolsLabels[
              "vue-i18n-timeline"
              /* TIMELINE */
            ],
            color: VueDevToolsTimelineColors[
              "vue-i18n-timeline"
              /* TIMELINE */
            ]
          });
          resolve(true);
        });
      } catch (e) {
        console.error(e);
        reject(false);
      }
    });
  }
  function updateComponentTreeTags(instance, treeNode, i18n2) {
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    if (instance && instance.vnode.el.__VUE_I18N__) {
      if (instance.vnode.el.__VUE_I18N__ !== global2) {
        const label = instance.type.name || instance.type.displayName || instance.type.__file;
        const tag = {
          label: `i18n (${label} Scope)`,
          textColor: 0,
          backgroundColor: 16764185
        };
        treeNode.tags.push(tag);
      }
    }
  }
  function inspectComposer(instanceData, composer) {
    const type = VUE_I18N_COMPONENT_TYPES;
    instanceData.state.push({
      type,
      key: "locale",
      editable: true,
      value: composer.locale.value
    });
    instanceData.state.push({
      type,
      key: "availableLocales",
      editable: false,
      value: composer.availableLocales
    });
    instanceData.state.push({
      type,
      key: "fallbackLocale",
      editable: true,
      value: composer.fallbackLocale.value
    });
    instanceData.state.push({
      type,
      key: "inheritLocale",
      editable: true,
      value: composer.inheritLocale
    });
    instanceData.state.push({
      type,
      key: "messages",
      editable: false,
      value: getLocaleMessageValue(composer.messages.value)
    });
    instanceData.state.push({
      type,
      key: "datetimeFormats",
      editable: false,
      value: composer.datetimeFormats.value
    });
    instanceData.state.push({
      type,
      key: "numberFormats",
      editable: false,
      value: composer.numberFormats.value
    });
  }
  function getLocaleMessageValue(messages2) {
    const value = {};
    Object.keys(messages2).forEach((key) => {
      const v = messages2[key];
      if (isFunction(v) && "source" in v) {
        value[key] = getMessageFunctionDetails(v);
      } else if (isObject$1(v)) {
        value[key] = getLocaleMessageValue(v);
      } else {
        value[key] = v;
      }
    });
    return value;
  }
  const ESC = {
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "&": "&amp;"
  };
  function escape(s) {
    return s.replace(/[<>"&]/g, escapeChar);
  }
  function escapeChar(a) {
    return ESC[a] || a;
  }
  function getMessageFunctionDetails(func) {
    const argString = func.source ? `("${escape(func.source)}")` : `(?)`;
    return {
      _custom: {
        type: "function",
        display: `<span>ƒ</span> ${argString}`
      }
    };
  }
  function registerScope(payload, i18n2) {
    payload.rootNodes.push({
      id: "global",
      label: "Global Scope"
    });
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    for (const [keyInstance, instance] of i18n2.__instances) {
      const composer = i18n2.mode === "composition" ? instance : instance.__composer;
      if (global2 === composer) {
        continue;
      }
      const label = keyInstance.type.name || keyInstance.type.displayName || keyInstance.type.__file;
      payload.rootNodes.push({
        id: composer.id.toString(),
        label: `${label} Scope`
      });
    }
  }
  function getComposer$1(nodeId, i18n2) {
    if (nodeId === "global") {
      return i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    } else {
      const instance = Array.from(i18n2.__instances.values()).find((item) => item.id.toString() === nodeId);
      if (instance) {
        return i18n2.mode === "composition" ? instance : instance.__composer;
      } else {
        return null;
      }
    }
  }
  function inspectScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      payload.state = makeScopeInspectState(composer);
    }
  }
  function makeScopeInspectState(composer) {
    const state = {};
    const localeType = "Locale related info";
    const localeStates = [
      {
        type: localeType,
        key: "locale",
        editable: true,
        value: composer.locale.value
      },
      {
        type: localeType,
        key: "fallbackLocale",
        editable: true,
        value: composer.fallbackLocale.value
      },
      {
        type: localeType,
        key: "availableLocales",
        editable: false,
        value: composer.availableLocales
      },
      {
        type: localeType,
        key: "inheritLocale",
        editable: true,
        value: composer.inheritLocale
      }
    ];
    state[localeType] = localeStates;
    const localeMessagesType = "Locale messages info";
    const localeMessagesStates = [
      {
        type: localeMessagesType,
        key: "messages",
        editable: false,
        value: getLocaleMessageValue(composer.messages.value)
      }
    ];
    state[localeMessagesType] = localeMessagesStates;
    const datetimeFormatsType = "Datetime formats info";
    const datetimeFormatsStates = [
      {
        type: datetimeFormatsType,
        key: "datetimeFormats",
        editable: false,
        value: composer.datetimeFormats.value
      }
    ];
    state[datetimeFormatsType] = datetimeFormatsStates;
    const numberFormatsType = "Datetime formats info";
    const numberFormatsStates = [
      {
        type: numberFormatsType,
        key: "numberFormats",
        editable: false,
        value: composer.numberFormats.value
      }
    ];
    state[numberFormatsType] = numberFormatsStates;
    return state;
  }
  function addTimelineEvent(event, payload) {
    if (devtoolsApi) {
      let groupId;
      if (payload && "groupId" in payload) {
        groupId = payload.groupId;
        delete payload.groupId;
      }
      devtoolsApi.addTimelineEvent({
        layerId: "vue-i18n-timeline",
        event: {
          title: event,
          groupId,
          time: Date.now(),
          meta: {},
          data: payload || {},
          logType: event === "compile-error" ? "error" : event === "fallback" || event === "missing" ? "warning" : "default"
        }
      });
    }
  }
  function editScope(payload, i18n2) {
    const composer = getComposer$1(payload.nodeId, i18n2);
    if (composer) {
      const [field] = payload.path;
      if (field === "locale" && isString(payload.state.value)) {
        composer.locale.value = payload.state.value;
      } else if (field === "fallbackLocale" && (isString(payload.state.value) || isArray(payload.state.value) || isObject$1(payload.state.value))) {
        composer.fallbackLocale.value = payload.state.value;
      } else if (field === "inheritLocale" && isBoolean(payload.state.value)) {
        composer.inheritLocale = payload.state.value;
      }
    }
  }
  function defineMixin(vuei18n, composer, i18n2) {
    return {
      beforeCreate() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        const options = this.$options;
        if (options.i18n) {
          const optionsI18n = options.i18n;
          if (options.__i18n) {
            optionsI18n.__i18n = options.__i18n;
          }
          optionsI18n.__root = composer;
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, optionsI18n);
          } else {
            optionsI18n.__injectWithOption = true;
            this.$i18n = createVueI18n(optionsI18n);
          }
        } else if (options.__i18n) {
          if (this === this.$root) {
            this.$i18n = mergeToRoot(vuei18n, options);
          } else {
            this.$i18n = createVueI18n({
              __i18n: options.__i18n,
              __injectWithOption: true,
              __root: composer
            });
          }
        } else {
          this.$i18n = vuei18n;
        }
        vuei18n.__onComponentInstanceCreated(this.$i18n);
        i18n2.__setInstance(instance, this.$i18n);
        this.$t = (...args) => this.$i18n.t(...args);
        this.$rt = (...args) => this.$i18n.rt(...args);
        this.$tc = (...args) => this.$i18n.tc(...args);
        this.$te = (key, locale) => this.$i18n.te(key, locale);
        this.$d = (...args) => this.$i18n.d(...args);
        this.$n = (...args) => this.$i18n.n(...args);
        this.$tm = (key) => this.$i18n.tm(key);
      },
      mounted() {
        {
          this.$el.__VUE_I18N__ = this.$i18n.__composer;
          const emitter = this.__v_emitter = createEmitter();
          const _vueI18n = this.$i18n;
          _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          emitter.on("*", addTimelineEvent);
        }
      },
      beforeUnmount() {
        const instance = vue.getCurrentInstance();
        if (!instance) {
          throw createI18nError(
            22
            /* UNEXPECTED_ERROR */
          );
        }
        {
          if (this.__v_emitter) {
            this.__v_emitter.off("*", addTimelineEvent);
            delete this.__v_emitter;
          }
          const _vueI18n = this.$i18n;
          _vueI18n.__disableEmitter && _vueI18n.__disableEmitter();
          delete this.$el.__VUE_I18N__;
        }
        delete this.$t;
        delete this.$rt;
        delete this.$tc;
        delete this.$te;
        delete this.$d;
        delete this.$n;
        delete this.$tm;
        i18n2.__deleteInstance(instance);
        delete this.$i18n;
      }
    };
  }
  function mergeToRoot(root, options) {
    root.locale = options.locale || root.locale;
    root.fallbackLocale = options.fallbackLocale || root.fallbackLocale;
    root.missing = options.missing || root.missing;
    root.silentTranslationWarn = options.silentTranslationWarn || root.silentFallbackWarn;
    root.silentFallbackWarn = options.silentFallbackWarn || root.silentFallbackWarn;
    root.formatFallbackMessages = options.formatFallbackMessages || root.formatFallbackMessages;
    root.postTranslation = options.postTranslation || root.postTranslation;
    root.warnHtmlInMessage = options.warnHtmlInMessage || root.warnHtmlInMessage;
    root.escapeParameterHtml = options.escapeParameterHtml || root.escapeParameterHtml;
    root.sync = options.sync || root.sync;
    root.__composer[SetPluralRulesSymbol](options.pluralizationRules || root.pluralizationRules);
    const messages2 = getLocaleMessages(root.locale, {
      messages: options.messages,
      __i18n: options.__i18n
    });
    Object.keys(messages2).forEach((locale) => root.mergeLocaleMessage(locale, messages2[locale]));
    if (options.datetimeFormats) {
      Object.keys(options.datetimeFormats).forEach((locale) => root.mergeDateTimeFormat(locale, options.datetimeFormats[locale]));
    }
    if (options.numberFormats) {
      Object.keys(options.numberFormats).forEach((locale) => root.mergeNumberFormat(locale, options.numberFormats[locale]));
    }
    return root;
  }
  function createI18n(options = {}) {
    const __legacyMode = isBoolean(options.legacy) ? options.legacy : true;
    const __globalInjection = !!options.globalInjection;
    const __instances = /* @__PURE__ */ new Map();
    const __global = __legacyMode ? createVueI18n(options) : createComposer(options);
    const symbol = makeSymbol("vue-i18n");
    const i18n2 = {
      // mode
      get mode() {
        return __legacyMode ? "legacy" : "composition";
      },
      // install plugin
      async install(app, ...options2) {
        {
          app.__VUE_I18N__ = i18n2;
        }
        app.__VUE_I18N_SYMBOL__ = symbol;
        app.provide(app.__VUE_I18N_SYMBOL__, i18n2);
        if (!__legacyMode && __globalInjection) {
          injectGlobalFields(app, i18n2.global);
        }
        {
          apply(app, i18n2, ...options2);
        }
        if (__legacyMode) {
          app.mixin(defineMixin(__global, __global.__composer, i18n2));
        }
        {
          const ret = await enableDevTools(app, i18n2);
          if (!ret) {
            throw createI18nError(
              21
              /* CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN */
            );
          }
          const emitter = createEmitter();
          if (__legacyMode) {
            const _vueI18n = __global;
            _vueI18n.__enableEmitter && _vueI18n.__enableEmitter(emitter);
          } else {
            const _composer = __global;
            _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
          }
          emitter.on("*", addTimelineEvent);
        }
      },
      // global accessor
      get global() {
        return __global;
      },
      // @internal
      __instances,
      // @internal
      __getInstance(component) {
        return __instances.get(component) || null;
      },
      // @internal
      __setInstance(component, instance) {
        __instances.set(component, instance);
      },
      // @internal
      __deleteInstance(component) {
        __instances.delete(component);
      }
    };
    return i18n2;
  }
  function useI18n(options = {}) {
    const instance = vue.getCurrentInstance();
    if (instance == null) {
      throw createI18nError(
        16
        /* MUST_BE_CALL_SETUP_TOP */
      );
    }
    if (!instance.appContext.app.__VUE_I18N_SYMBOL__) {
      throw createI18nError(
        17
        /* NOT_INSLALLED */
      );
    }
    const i18n2 = vue.inject(instance.appContext.app.__VUE_I18N_SYMBOL__);
    if (!i18n2) {
      throw createI18nError(
        22
        /* UNEXPECTED_ERROR */
      );
    }
    const global2 = i18n2.mode === "composition" ? i18n2.global : i18n2.global.__composer;
    const scope = isEmptyObject(options) ? "__i18n" in instance.type ? "local" : "global" : !options.useScope ? "local" : options.useScope;
    if (scope === "global") {
      let messages2 = isObject$1(options.messages) ? options.messages : {};
      if ("__i18nGlobal" in instance.type) {
        messages2 = getLocaleMessages(global2.locale.value, {
          messages: messages2,
          __i18n: instance.type.__i18nGlobal
        });
      }
      const locales = Object.keys(messages2);
      if (locales.length) {
        locales.forEach((locale) => {
          global2.mergeLocaleMessage(locale, messages2[locale]);
        });
      }
      if (isObject$1(options.datetimeFormats)) {
        const locales2 = Object.keys(options.datetimeFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeDateTimeFormat(locale, options.datetimeFormats[locale]);
          });
        }
      }
      if (isObject$1(options.numberFormats)) {
        const locales2 = Object.keys(options.numberFormats);
        if (locales2.length) {
          locales2.forEach((locale) => {
            global2.mergeNumberFormat(locale, options.numberFormats[locale]);
          });
        }
      }
      return global2;
    }
    if (scope === "parent") {
      let composer2 = getComposer(i18n2, instance, options.__useComponent);
      if (composer2 == null) {
        {
          warn(getWarnMessage(
            12
            /* NOT_FOUND_PARENT_SCOPE */
          ));
        }
        composer2 = global2;
      }
      return composer2;
    }
    if (i18n2.mode === "legacy") {
      throw createI18nError(
        18
        /* NOT_AVAILABLE_IN_LEGACY_MODE */
      );
    }
    const i18nInternal = i18n2;
    let composer = i18nInternal.__getInstance(instance);
    if (composer == null) {
      const type = instance.type;
      const composerOptions = assign({}, options);
      if (type.__i18n) {
        composerOptions.__i18n = type.__i18n;
      }
      if (global2) {
        composerOptions.__root = global2;
      }
      composer = createComposer(composerOptions);
      setupLifeCycle(i18nInternal, instance, composer);
      i18nInternal.__setInstance(instance, composer);
    }
    return composer;
  }
  function getComposer(i18n2, target, useComponent = false) {
    let composer = null;
    const root = target.root;
    let current = target.parent;
    while (current != null) {
      const i18nInternal = i18n2;
      if (i18n2.mode === "composition") {
        composer = i18nInternal.__getInstance(current);
      } else {
        const vueI18n = i18nInternal.__getInstance(current);
        if (vueI18n != null) {
          composer = vueI18n.__composer;
        }
        if (useComponent && composer && !composer[InejctWithOption]) {
          composer = null;
        }
      }
      if (composer != null) {
        break;
      }
      if (root === current) {
        break;
      }
      current = current.parent;
    }
    return composer;
  }
  function setupLifeCycle(i18n2, target, composer) {
    let emitter = null;
    vue.onMounted(() => {
      if (target.vnode.el) {
        target.vnode.el.__VUE_I18N__ = composer;
        emitter = createEmitter();
        const _composer = composer;
        _composer[EnableEmitter] && _composer[EnableEmitter](emitter);
        emitter.on("*", addTimelineEvent);
      }
    }, target);
    vue.onUnmounted(() => {
      if (target.vnode.el && target.vnode.el.__VUE_I18N__) {
        emitter && emitter.off("*", addTimelineEvent);
        const _composer = composer;
        _composer[DisableEmitter] && _composer[DisableEmitter]();
        delete target.vnode.el.__VUE_I18N__;
      }
      i18n2.__deleteInstance(target);
    }, target);
  }
  const globalExportProps = [
    "locale",
    "fallbackLocale",
    "availableLocales"
  ];
  const globalExportMethods = ["t", "rt", "d", "n", "tm"];
  function injectGlobalFields(app, composer) {
    const i18n2 = /* @__PURE__ */ Object.create(null);
    globalExportProps.forEach((prop) => {
      const desc = Object.getOwnPropertyDescriptor(composer, prop);
      if (!desc) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      const wrap = vue.isRef(desc.value) ? {
        get() {
          return desc.value.value;
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        set(val) {
          desc.value.value = val;
        }
      } : {
        get() {
          return desc.get && desc.get();
        }
      };
      Object.defineProperty(i18n2, prop, wrap);
    });
    app.config.globalProperties.$i18n = i18n2;
    globalExportMethods.forEach((method) => {
      const desc = Object.getOwnPropertyDescriptor(composer, method);
      if (!desc || !desc.value) {
        throw createI18nError(
          22
          /* UNEXPECTED_ERROR */
        );
      }
      Object.defineProperty(app.config.globalProperties, `$${method}`, desc);
    });
  }
  {
    initFeatureFlags();
  }
  {
    const target = getGlobalThis();
    target.__INTLIFY__ = true;
    setDevToolsHook(target.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
  }
  let i18nConfig = {
    locale: uni.getLocale(),
    messages
  };
  const i18n = createI18n(i18nConfig);
  function createApp() {
    const app = vue.createVueApp(App);
    app.use(i18n);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue, uni.VueShared);
