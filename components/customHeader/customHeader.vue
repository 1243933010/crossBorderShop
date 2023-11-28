<template>
  <view class="page">
    <view class="image-width">
      <view class="header" :style="{ paddingTop: iStatusBarHeight + 'px' }">
        <view class="header-icon" @click="openPop">
          <image src="../../static/img/logo.jpg" mode="widthFix"></image>
        </view>
        <view class="header-text">
          <text>{{ headerText }}</text>
        </view>
        <picker @change="bindPickerChange" :value="index" :range="array">
          <view class="header-select">
            <image class="header-select-icon" :src="imgSrc" mode="widthFix"></image>
            <image class="header-select-select" src="../../static/img/select_icon.png" mode="widthFix"></image>
          </view>
        </picker>
      </view>
    </view>

    <uni-popup ref="popup" type="center" background-color="#fff" v-if="above">
      <view class="popup-container">
        <view class="popup-tit">普斯集团</view>
        <view class="popup-content">{{ $t("aboutUs.content") }}</view>
        <view class="popup-close-btn" @click="closePop">关闭</view>
      </view>
    </uni-popup>
  </view>
</template>

<script>
import { setTabbar } from "@/utils/utils.js";
export default {
  name: "customHeader", 
  props: ["headerText", "above"],
  data() {
    return {
      iStatusBarHeight: 0,
      array: ["中文", "English","Francés","Español"],
      index: 0,
      iconList: ["../../static/img/cn.png", "../../static/img/eg.png"],
      imgSrc: "../../static/img/cn.png",
      locale: { "zh-Hans": 0, en: 1,fr:2,es:3 },
      code: ["zh-Hans", "en","fr","es"],
    };
  },
  mounted() {
    this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    console.log(this.iStatusBarHeight, "系统栏高度");
    let code = uni.getLocale();
    if (code) {
      this.imgSrc = this.iconList[this.locale[code]];
    }
  },
  methods: {
    bindPickerChange: function (e) {
      console.log(this.$t, "------");
      console.log("picker发送选择改变，携带值为", this.code[e.detail.value]);
      this.imgSrc = this.iconList[e.detail.value];
      uni.setLocale(this.code[e.detail.value]);
      this.$i18n.locale = this.code[e.detail.value];
      setTabbar(this.$t);
    },
    openPop() {
      this.$refs.popup.open("center");
    },
    closePop() {
      this.$refs.popup.close();
    },
  },
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";

.page {
  width: 100%;
}

.image-width {
  padding-top: 44rpx;
  width: 100%;
  background: url("/static/img/header_tabber.png") no-repeat center center / 100%;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 60rpx);
    margin: 0 auto;
    /* #ifdef H5 */
    padding-top: 44rpx;
    /* #endif */
    padding-bottom: 30rpx;
	color: white;
	font-weight: 600;
	font-size: 36rpx;
    .header-icon {
      image {
        width: 68rpx;
        border-radius: 50%;
      }
    }

    .header-select {
      display: flex;
      flex-direction: row;
      align-items: center;

      .header-select-icon {
        width: 53rpx;
        border-radius: 50%;
      }

      .header-select-select {
        width: 19rpx;
        height: 12rpx;
        margin-left: 9rpx;
      }
    }
  }
}

.popup-container {
  border-radius: 20rpx;
  padding: 30rpx 25rpx 55rpx;
  width: calc(100vw - 184rpx);

  .df(center, flex-start);
  flex-direction: column;

  .popup-tit {
    margin-bottom: 36rpx;
    text-align: center;
    font-size: @bodySize;
    color: @bodyColor;
    font-weight: bold;
  }

  .popup-content {
    color: #666;
    font-size: 24rpx;
    line-height: 1.41;
  }

  .popup-close-btn {
    margin-top: 126rpx;
    border-radius: 50rpx;
    padding: 30rpx 80rpx;
    background-color: #fd7e1f;
    color: #fff;
    font-size: 26rpx;
  }
}
</style>
