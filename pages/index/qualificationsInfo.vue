<template>
  <view class="profix-page-container qualifications-info-page">
    <hx-navbar :config="config" />
    <view class="qualifications-info-scroll page-scroll">
      <view class="pic">
        <image src="../../static/img/qualifications/1.png" mode="widthFix" class="img"></image>
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
    return {};
  },
  computed: {
    config() {
      return {
        title: this.$t("qualifications.item1"),
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

.qualifications-info-page {
  .qualifications-info-scroll {
    .pic {
      margin-right: -30rpx;
      margin-left: -30rpx;
    }
  }
}
</style>
