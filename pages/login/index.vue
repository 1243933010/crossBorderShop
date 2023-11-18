<template>
	<view class="profix-page-container login-page">
		<customHeader style="z-index: 0" />
		<customHeader style="position: fixed; top: 0; width: 100%" />
		<view class="login-scroll page-scroll">
			<view class="logo pic">
				<image src="../../static/img/logo.png" mode="widthFix" class="img"></image>
			</view>

			<view class="form-container">
				<view class="form-tit">PUTH GROUP</view>

				<view class="input-con account">
					<view class="image-icon"></view>
					<view class="prefix-con" @click="openpNumberPicker">
						<!-- 手机号前缀选择器 -->
						<picker @change="bindPickerChange" :value="pNumberPerfixIndex" :range="pNumberPerfixArr">
							<view class="number-prefix">{{ formData.country_code }}</view>
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

				<!-- <label class="remember-me">
					
					<checkbox  class="radio" @change="changeRadio" value="1" checked="true" color="#FD862C" />
					{{ $t("login.radioText") }}
				</label> -->
				<view class="btn-list">
					<button class="button login-btn" :disabled="!(formData.mobile && formData.password)" @click="loginHandle">{{ $t("login.btn1") }}</button>
					<button class="button region-btn" @click="goRegion">{{ $t("region.btn1") }}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomHeader from "@/components/customHeader/customHeader.vue";
import { $request } from "@/utils/request";

export default {
	components: {
		CustomHeader,
	},
	data() {
		return {
			pNumberPerfixIndex: 0, // 手机前缀 角标
			pNumberPerfixArr: ["+86"], // 手机前缀可选数组
			pNumberPerfix: "+86", // 手机前缀
			iStatusBarHeight: 0,
			pwdType: true,
			isMember: true,
			formData: {
				mobile: undefined,
				password: "",
				country_code: "+86", // 手机前缀
			},
		};
	},
	mounted() {
		this.iStatusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		
		// 获取缓存里面的手机号和密码
		this.formData.mobile = uni.getStorageSync('mobile');
		this.formData.password = uni.getStorageSync('password');
	},
	methods: {
		changeRadio(e){
			console.log(e)
		},
		bindPickerChange(e) {
			this.pNumberPerfixIndex = e.detail.value;
			this.formData.country_code = this.pNumberPerfixArr[this.pNumberPerfixIndex];
		},
		openpNumberPicker() {},
		handleEye() {
			this.pwdType = !this.pwdType;
		},
		goRegion() {
			// 去往注册页面
			uni.navigateTo({
				url: "/pages/login/region",
			});
		},
		loginHandle() {
			$request("login", this.formData).then(res => {
				let { data, code, msg } = res.data;
				let { token } = data;

				if (code !== 0) {
					// 登录失败
					uni.showToast({
						title: this.$t("login.error"),
						icon: "error",
					});

					return;
				}

				// 登录成功
				uni.setStorageSync("token", `Bearer ${token}`); // 存储token
				
				// 记住密码
				let {mobile, password} = this.formData;
				uni.setStorageSync("mobile", mobile); // 存储手机号
				this.isMember ? uni.setStorageSync("password", password) : ''; // 存储密码
				uni.showToast({
					title: this.$t("login.seccuss"),
					success: () => {
						uni.reLaunch({
							url: "/pages/index/index",
						});
					},
				});
			});
		},
	},
};
</script>

<style lang="less">
@import "../../static/less/variable.less";

.login-page {
	background: url("../../static/img/bg/gradient.png") no-repeat center center / 100% 100%;

	.login-scroll {
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

						&[disabled] {
							background-color: #585858;
						}
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
