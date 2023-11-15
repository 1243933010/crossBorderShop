<template>
  <view class="profix-page-container product-detail-page">
    <hx-navbar :config="config" />
    <view class="product-detail-scroll page-scroll">
      <view class="product-img pic">
        <image src="../../static/img/product/detail.png" mode="widthFix" class="img"></image>
      </view>
      <view class="product-info">
        <view class="product-tit">{{ $t("productDetail.title") }}</view>
        <view class="info-list">
          <view class="list-item">
            <view class="left">{{ $t("productDetail.text1") }}</view>
            <view class="right">1198 $</view>
          </view>
          <view class="list-item">
            <view class="left">{{ $t("productDetail.text2") }}</view>
            <view class="right">1.92 $</view>
          </view>
          <view class="list-item">
            <view class="left">{{ $t("productDetail.text3") }}</view>
            <view class="right black">202311120204558244</view>
          </view>
        </view>
      </view>
      <button class="sub-btn">{{ $t("productDetail.btnText") }}</button>
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
      productId: 1,
    };
  },
  onLoad: function ({ id }) {
    this.productId = id;
  },
  computed: {
    config() {
      return {
        title: this.$t("productDetail.pageTit"),
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

.product-detail-page {
  .product-detail-scroll {
    padding: 0;

    .product-img {
      width: 100%;
    }

    .product-info {
      padding: 30rpx;

      .product-tit {
        margin-bottom: 50rpx;
        font-size: 36rpx;
        color: #383838;
        font-weight: bold;
      }

      .info-list {
        .list-item {
          margin-bottom: 34rpx;
          font-size: 28rpx;
          .df(center, space-between);

          .left {
            color: #383838;
          }

          .right {
            color: #ff690c;

            &.black {
              color: #383838;
            }
          }
        }
      }
    }

    .sub-btn {
      margin: 100rpx auto 0;
      padding: 10rpx;
      background-color: #383838;
      color: #fff;
      font-size: @descSize;
      width: calc(100vw - 236rpx);
    }
  }
}
</style>
