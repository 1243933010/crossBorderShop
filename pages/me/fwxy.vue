<template>
  <view class="profix-page-container fwxy-page">
    <hx-navbar :config="config" />
    <view class="fwxy-scroll page-scroll">
      <rich-text :nodes="richText"></rich-text>

      <view class="btn-box">
        <view class="exit">
          <text>{{ $t("fwxy.btn1") }}</text>
        </view>
        <view class="agreement" @click="goFwxy">
          <text>{{ $t("fwxy.btn2") }}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.vue";

export default {
  components: {
    hxNavbar,
  },
  data() {
    return {
      richText: '<div style="text-align:center;"><img src="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png"/></div>',
    };
  },
  computed: {
    config() {
      return {
        title: this.$t("fwxy.pageTit"),
        color: "#ffffff",
        // backgroundColor: [1, "#24bdab"],
        // 背景图片（array则为滑动切换背景图，string为单一背景图）
        // backgroundImg: ['/static/xj.jpg','/static/logo.png'],
        backgroundImg: "../../static/img/header_tabber.png",
      };
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
  background-color: #f5f4f9;
}

.fwxy-page {
  .fwxy-scroll {
    padding-top: 40rpx;

    .btn-box {
      width: calc(100% - 100rpx);

      position: fixed;
      bottom: 2vh;
      left: 50%;
      transform: translateX(-50%);

      .df(center, space-between);

      .exit,
      .agreement {
        border-radius: 10rpx;
        padding: 32rpx 0;
        font-size: 24rpx;
        width: calc(50% - 40rpx);
        text-align: center;
      }
      .exit {
        color: #383838;
        background: #f0e8e8;
      }
      .agreement {
        background: #fd8124;
        color: #fff;
      }
    }
  }
}
</style>
