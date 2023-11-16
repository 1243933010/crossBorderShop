<template>
  <view class="profix-page-container region-page">
    <customHeader style="z-index: 0" />
    <customHeader style="position: fixed; top: 0; width: 100%" />
    <view class="region-scroll page-scroll">
      <view class="logo pic">
        <image src="../../static/img/logo.png" mode="widthFix" class="img"></image>
      </view>

      <view class="form-container">
        <view class="form-tit">PUTH GROUP</view>

        <view class="input-con account">
          <view class="image-icon"></view>
          <view class="prefix-con">
            <picker @change="bindPickerChange" :value="pNumberPerfixIndex" :range="pNumberPerfixArr">
              <view class="number-prefix">{{ formData.pNumberPerfix }}</view>
            </picker>
            <view class="arrow"></view>
          </view>
          <view class="inp">
            <input type="number" v-model="formData.mobile" :placeholder="$t('login.phonePlaceholder')" />
          </view>
        </view>

        <view class="input-con password">
          <view class="image-icon"></view>
          <view class="inp">
            <input type="text" v-model="formData.password" :password="pwdType" :placeholder="$t('login.pwdPlaceholder')" />
          </view>
          <view class="eye-icon" :class="{ close: pwdType }" @click="handleEye"></view>
        </view>

        <view class="input-con invite-code">
          <view class="image-icon"></view>
          <view class="inp">
            <input type="number" v-model="formData.invitation_code" :placeholder="$t('region.invitePlaceholder')" />
          </view>
          <view class="eye-icon"></view>
        </view>

        <view class="btn-list">
          <button class="button login-btn" @click="region">{{ $t("region.btn1") }}</button>
          <button class="button region-btn">{{ $t("region.btn2") }}</button>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import CustomHeader from "@/components/customHeader/customHeader.vue";
import { $request } from "@/utils/request.js";
export default {
  components: {
    CustomHeader,
  },
  data() {
    return {
      pNumberPerfixIndex: 0, // 手机前缀 角标
      pNumberPerfixArr: ["+86"], // 手机前缀可选数组
      pwdType: true,
      formData: {
        mobile: "",
        password_confirmation: "",
        invitation_code: "",
		pNumberPerfix: "+86", // 手机前缀
      },
    };
  },
  methods: {
    bindPickerChange(e) {
      this.pNumberPerfixIndex = e.detail.value;
      this.formData.pNumberPerfix = this.pNumberPerfixArr[this.pNumberPerfixIndex];
    },
    openpNumberPicker() {},
    handleEye() {
      this.pwdType = !this.pwdType;
    },
    async region() {
      let data = await $request("region", this.formData);
      console.log(data);
      uni.showToast({
        icon: "none",
        title: data.data.msg,
      });
      if (data.data.code == 0) {
        uni.setStorageSync("token", `Bearer ${data.data.data.token}`);
        uni.reLaunch({
          url: "/pages/index/index",
        });
      }
    },
  },
};
</script>

<style lang="less">
@import "../../static/less/variable.less";
.region-page {
  background: url("../../static/img/bg/gradient.png") no-repeat center center / 100% 100%;
  width: 100vw;

  .region-scroll {
    height: 100%;

    .logo {
      margin: 170rpx auto 62rpx;
      border-radius: 50%;
      width: 140rpx;
    }

    .form-container {
      padding: 65rpx 45rpx;
      border-radius: 20rpx 20rpx 0 0;
      background-color: #fff;
      min-height: 10%;
      flex-grow: 1;

      .form-tit {
        margin-bottom: 32rpx;
        color: @bodyColor;
        text-align: center;
        font-size: 48rpx;
        font-weight: bold;
      }

      .input-con {
        margin-top: 40rpx;
        padding: 30rpx 28rpx;
        border-radius: 10rpx;
        background-color: #f5f7fb;

        .df(center, flex-start);

        .image-icon {
          width: 35rpx;
          height: 38rpx;
          background: no-repeat center center / 100%;
        }

        .inp {
          margin-left: 25rpx;
          min-width: 10%;
          flex-grow: 1;

          input {
          }
        }

        &.account {
          .image-icon {
            background-image: url("../../static/img/icon/phone.png");
          }

          .prefix-con {
            position: relative;

            .number-prefix {
              margin-left: 22rpx;
              margin-right: 25rpx;
            }

            .arrow {
              width: 20rpx;
              height: 12rpx;
              background: url("../../static/img/icon/arrow.png") no-repeat center center / 100% 100%;

              position: absolute;
              right: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }

        &.password {
          .image-icon {
            background-image: url("../../static/img/icon/clock.png");
          }

          .eye-icon {
            width: 29rpx;
            height: 22rpx;
            background: url("../../static/img/icon/eye.png") no-repeat center center / 100%;

            &.close {
              background-image: url("../../static/img/icon/c_eye.png");
            }
          }
        }

        &.invite-code {
          .image-icon {
            background-image: url("../../static/img/icon/invite.png");
          }
        }
      }

      .remember-me {
        margin-top: 28rpx;
        color: @descColor;

        .df(center, flex-start);

        .radio {
          margin-right: 12rpx;
          transform: scale(0.7);
          font-size: @descSize;
        }
      }

      .btn-list {
        margin-top: 46rpx;

        .button {
          margin-top: 30rpx;
          padding: 32rpx 20rpx;
          width: 100%;
          font-size: @descSize;

          &.login-btn {
            border-color: #383838;
            color: #fff;
            background-color: #383838;
          }

          &.region-btn {
            border: 1px solid @descColor;
            color: #383838;
          }
        }
      }
    }
  }
}
</style>
