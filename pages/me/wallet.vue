<template>
	<view class="profix-page-container wallet-page">
		<hx-navbar :config="config" />
		<view class="wallet-scroll page-scroll">
			<view class="total-assets-box">
				<view class="num">1151</view>
				<view class="text">{{ $t("wallet.total") }}</view>
			</view>

			<view class="ratio">
				<view class="tips">
					<view class="circle"></view>
					{{ $t("wallet.tips") }}
				</view>
				<view class="text">1{{ $t("storageLevel.dollar") }}=1{{ $t("storageLevel.dollar") }}</view>
			</view>

			<view class="address-box">
				<view class="tit">{{ $t("storageLevel.dollar") }}T-TEC 20</view>
				<view class="inp-box">
					<input type="text" :placeholder="$t('wallet.placeholder')" />
				</view>
			</view>

			<button class="sub-btn">{{$t("wallet.btnText")}}</button>
		</view>
	</view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.vue";

export default {
	components: { hxNavbar },
	data() {
		return {};
	},
	computed: {
		config() {
			return {
				title: this.$t("wallet.pageTit"),
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

.wallet-page {
	.wallet-scroll {
		.total-assets-box {
			margin-top: 20rpx;
			padding: 56rpx 20rpx 24rpx;
			background: url("../../static/img/bg/wallet.png") no-repeat top left / 100% 100%;

			.df(center, center);
			flex-direction: column;

			.num {
				margin-bottom: 54rpx;
				font-size: 48rpx;
				color: #fffeff;
				font-weight: bold;
			}

			.text {
				color: #fff;
			}
		}

		.ratio {
			margin-top: 52rpx;

			.tips {
				margin-bottom: 22rpx;
				.df(center, flex-start);
				font-size: 24rpx;

				.circle {
					margin-right: 12rpx;
					border-radius: 50%;
					background: linear-gradient(0deg, #fd7e1f 0%, #fd862c 100%);
					width: 20rpx;
					height: 20rpx;
				}
			}

			.text {
				margin-bottom: 56rpx;
				margin-left: 32rpx;
			}
		}

		.address-box {
			border-radius: 20rpx;
			background-color: #fff;

			.tit {
				border-bottom: 1px solid #f5f4f9;
				padding: 30rpx 35rpx;
				color: #fd7e1f;
				font-weight: bold;
			}

			.inp-box {
				padding: 50rpx 35rpx;

				input {
					line-height: 1;
					font-size: 26rpx;
				}
			}
		}

		.sub-btn {
			margin: 200rpx auto 0;
			border-radius: 10rpx;
			padding: 34rpx;
			background-color: #383838;
			width: calc(100vw - 236rpx);
			color: #fff;
			font-size: 24rpx;
			line-height: 1;
		}
	}
}
</style>
