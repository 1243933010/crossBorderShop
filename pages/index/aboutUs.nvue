<template>
	<view class="profix-page-container about-us-page">
		<hx-navbar :config="config" />
		<view class="about-us-scroll page-scroll">
			<view class="banner pic">
				<image src="../../static/img/banner/about_us.png" mode="widthFix" class="img"></image>
			</view>
			<view class="about-us-text">{{$t("aboutUs.content")}}</view>
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
		return {
			
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("aboutUs.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			},
		}
	}
};
</script>

<style lang="less">
.about-us-page {
	.about-us-scroll {
		padding-top: 20rpx;
		
		.banner {
			width: 100%;
		}
		
		.about-us-text {
			margin-top: 30rpx;
			color: #666666;
			font-size: 28rpx;
			line-height: 1.21;
		}
	}
}
</style>
