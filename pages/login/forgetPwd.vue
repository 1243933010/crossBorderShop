<template>
	<view class="profix-page-container forget-pwd-page">
		<hx-navbar :config="config" />
		<view class="forget-pwd-scroll page-scroll">
			<view class="tab">
				<view class="tab-item" :class="{ active: tabVal === index }" v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
					{{ item }}
					<view class="line-list">
						<view class="long line"></view>
						<view class="sort line"></view>
					</view>
				</view>
			</view>
			<view class="tab-content-list">
				<view class="tab-content left" :class="{ active: tabVal === 0 }">
					<view class="input-box">
						<view class="input-label">
							<view class="text">登录密码</view>
							<view class="eye-icon"></view>
						</view>
						<view class="inp-box">
							<input type="text" placeholder="请输入登录密码" />
						</view>
					</view>

					<view class="save-btn" @click="saveHandle('登录')">保存修改</view>
				</view>
				<view class="tab-content right" :class="{ active: tabVal === 1 }">
					<view class="input-box">
						<view class="input-label">
							<view class="text">交易密码</view>
							<view class="eye-icon"></view>
						</view>
						<view class="inp-box">
							<input type="text" placeholder="请输入登录密码" />
						</view>
					</view>

					<view class="save-btn" @click="saveHandle('交易')">保存修改</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="center" class="save-success">
			<view class="pic">
				<image src="../../static/img/saveSuc.png" mode="widthFix" class="img"></image>
			</view>
			<view class="text">{{ $t("save.popupTips") }}</view>
		</uni-popup>
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
			tabList: ["登录密码", "交易密码"],
			tabVal: 0,
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("forgetPwd.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
	},
	methods: {
		changeTab(index) {
			this.tabVal = index;
		},
		saveHandle(type) {
			if (type === "登录") {
				// 登录密码修改
			} else if ("交易") {
				// 交易密码修改
			}
			
			// 充值成功后的弹窗提示
			this.$refs.popup.open("center");

			let timer = setTimeout(() => {
				this.$refs.popup.close();
				clearTimeout(timer);
			}, 2000);
		},
	},
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
	background-color: #f5f4f9;
}

.forget-pwd-page {
	.forget-pwd-scroll {
		.tab {
			.df(center, space-around);

			.tab-item {
				padding: 40rpx 0 30rpx;
				color: #383838;
				font-weight: bold;

				position: relative;

				.line-list {
					width: 0;
					transition: width 0.35s;

					position: absolute;
					bottom: 0;
					left: 0;
					height: 10rpx;
					z-index: 1;

					.df(center, space-between);

					.line {
						border-radius: 5rpx;
						background-color: #fd7e1f;
						height: 100%;

						&.long {
							width: 66%;
						}

						&.sort {
							width: 16%;
						}
					}
				}

				&.active {
					color: #fd7e1f;

					.line-list {
						width: 100%;
					}
				}
			}
		}

		.tab-content-list {
			display: flex;
			position: relative;

			.tab-content {
				padding-top: 55rpx;
				transition: 0.35s;
				position: absolute;
				top: 0;
				overflow: hidden;

				&.active {
					flex-grow: 1;
					z-index: 1;

					&.left {
						right: 100%;
					}

					&.right {
						left: 100%;
					}
				}

				&.left {
					left: 0;
					right: 0;
				}

				&.right {
					right: 0;
					left: 0;
				}

				.input-box {
					border-radius: 20rpx;
					background-color: #fff;
					width: calc(100vw - 60rpx);

					.input-label {
						border-bottom: 1px solid #f5f4f9;
						padding: 30rpx 35rpx;
						.df(center, space-between);

						.text {
							color: #fd7e1f;
						}

						.eye-icon {
							width: 29rpx;
							height: 22rpx;
							background: url("../../static/img/icon/eye.png") no-repeat center center / 100%;
						}
					}

					.inp-box {
						padding: 50rpx 35rpx;

						input {
							line-height: 1;
							font-size: 26rpx;
						}
					}
				}

				.save-btn {
					margin: 35vh auto 0;
					border-radius: 10rpx;
					padding: 34rpx;
					background-color: #383838;
					width: calc(100vw - 236rpx);
					color: #fff;
					font-size: 24rpx;
					line-height: 1;
					text-align: center;
				}
			}
		}
	}

	.save-success {
		.pic {
			width: 166rpx;
		}

		.text {
			margin-top: 20rpx;
			color: #fff;
			font-size: 30rpx;
			text-align: center;
		}
	}
}
</style>