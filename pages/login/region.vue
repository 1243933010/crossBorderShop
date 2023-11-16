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
							<view class="number-prefix">{{ pNumberPerfix }}</view>
						</picker>
						<view class="arrow"></view>
					</view>
					<view class="inp">
						<input type="number" :placeholder="$t('login.phonePlaceholder')" />
					</view>
				</view>

				<view class="input-con password">
					<view class="image-icon"></view>
					<view class="inp">
						<input type="text" :password="pwdType" :placeholder="$t('login.pwdPlaceholder')" />
					</view>
					<view class="eye-icon" :class="{close: pwdType}" @click="handleEye"></view>
				</view>

				<view class="input-con invite-code">
					<view class="image-icon"></view>
					<view class="inp">
						<input type="number" :placeholder="$t('region.invitePlaceholder')" />
					</view>
					<view class="eye-icon"></view>
				</view>

				<view class="btn-list">
					<button class="button login-btn">{{ $t("region.btn1") }}</button>
					<button class="button region-btn">{{ $t("region.btn2") }}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import CustomHeader from "@/components/customHeader/customHeader.vue";

export default {
	components: {
		CustomHeader,
	},
	data() {
		return {
			pNumberPerfixIndex: 0, // 手机前缀 角标
			pNumberPerfixArr: ["+1", "+2", "+3"], // 手机前缀可选数组
			pNumberPerfix: "+1", // 手机前缀
			pwdType: true
		};
	},
	methods: {
		bindPickerChange(e) {
			this.pNumberPerfixIndex = e.detail.value;
			this.pNumberPerfix = this.pNumberPerfixArr[this.pNumberPerfixIndex];
		},
		openpNumberPicker() {},
		handleEye() {
			this.pwdType = !this.pwdType;
		}
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
