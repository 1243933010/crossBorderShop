<template>
	<view class="profix-page-container pay-updata-page">
		<hx-navbar :config="config" />
		<view class="pay-updata-scroll page-scroll">
			<view class="box">
				<view class="pic" @click="upImg">
					<image src="../../static/img/updata_img.png" mode="widthFix" class="img"></image>
				</view>
			</view>
			<view class="tips">{{ $t("payUpdata.tips") }}</view>
			<view class="address-box">
				<view class="tit">TXID</view>
				<view class="inp-box">
					<input type="text" :placeholder="$t('payUpdata.placeholder')" />
				</view>
			</view>
			<button class="next-btn" @click="goPage">{{ $t("payUpdata.btnText") }}</button>
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
			address: "TDcu8jVJRpJ4hNMTJMKTQzwSMSHKmN1zAF",
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("payUpdata.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
	},
	methods: {
		upImg() {
			uni.chooseImage({
				count: 1,
				sizeType: ['original'],
				success({tempFilePaths, tempFiles}) {
					// tempFilePaths: 图片的本地文件路径列表
					// tempFiles: 图片的本地文件列表，每一项是一个 File 对象
				},
				fail() {
					// 上传失败
					uni.showToast({
						title: this.$t("payUpdata.toastFail"),
						icon: "error",
					});
				}
			})
		}
	},
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
	background-color: #f5f4f9;
}

.pay-updata-page {
	.pay-updata-scroll {
		padding-top: 20rpx;

		.box {
			margin-bottom: 42rpx;
			border-radius: 20rpx;
			padding: 20rpx;
			background-color: #fff;
		}
		
		.tips {
			margin-bottom: 52rpx;
			font-size: 24rpx;
			line-height: 1.24;
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

		.next-btn {
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
