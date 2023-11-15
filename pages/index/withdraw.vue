<template>
	<view class="profix-page-container withdraw-page">
		<hx-navbar :config="config" />
		<view class="withdraw-scroll page-scroll">
			<view class="title">{{ $t("withdraw.title") }}</view>
			<view class="withdraw-box">
				<view class="way-box">{{ $t("storageLevel.dollar") }}T-TEC 20</view>
				<view class="inp-box">
					<input type="number" value="0" />
				</view>
				<view class="inp-box">
					<input type="text" password :placeholder="$t('withdraw.pwdPlaceholder')" />
					<view class="eye-icon"></view>
				</view>
			</view>
			<view class="tips">
				<view class="tit">{{ $t("withdraw.tipsTit") }}</view>
				<view class="tips-ul">
					<view class="tips-item">{{ $t("withdraw.tips1") }}</view>
					<view class="tips-item">{{ $t("withdraw.tips2") }}</view>
					<view class="tips-item">{{ $t("withdraw.tips3") }}</view>
				</view>
			</view>

			<button class="sub-btn">申请提现</button>
		</view>
	</view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.nvue";

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
				title: this.$t("withdraw.pageTit"),
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
uni-page-body {
	height: auto;
}
page {
	background: linear-gradient(0deg, #ffa563 0%, #fd7e1f 100%);
}

.withdraw-page {
	.withdraw-scroll {
		padding-bottom: 20rpx;
		color: #fffeff;

		.title {
			margin-top: 110rpx;
			font-size: 36rpx;
			text-align: center;
			margin-bottom: 30rpx;
		}

		.withdraw-box {
			border-radius: 20rpx;
			padding: 42rpx 30rpx 85rpx;
			background-color: #fff;

			.way-box {
				margin-bottom: 36rpx;
				color: #fd7e1f;
			}

			.inp-box {
				margin-bottom: 20rpx;
				border-radius: 10rpx;
				padding: 30rpx 40rpx;
				background-color: #f5f4f9;

				.df(center, space-between);

				input {
					color: @bodyColor;
				}

				.eye-icon {
					width: 29rpx;
					height: 22rpx;
					background: url("../../static/img/icon/eye.png") no-repeat center center / 100%;
				}
			}
		}

		.tips {
			margin-top: 40rpx;

			.tit {
				margin-bottom: 34rpx;
				font-size: @bodySize;
			}

			.tips-ul {
				.tips-item {
					font-size: @descSize;
					line-height: 1.38;
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