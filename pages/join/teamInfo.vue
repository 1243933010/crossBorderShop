<template>
	<view class="profix-page-container team-info-page">
		<hx-navbar :config="config" />
		<view class="team-info-scroll page-scroll">
			<view class="table">
				<view class="th tr">
					<view class="td mW28">电话</view>
					<view class="td flex1">数量</view>
					<view class="td mW35">报名时间</view>
				</view>
				<view class="tr" @click="goProductDetail(1)">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
				<view class="tr">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
				<view class="tr">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
				<view class="tr">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
				<view class="tr">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
				<view class="tr">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
				<view class="tr">
					<view class="td mW28">188****5468</view>
					<view class="td flex1">28</view>
					<view class="td mW35">2023.11.12 15:32</view>
				</view>
			</view>
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
		return {};
	},
	computed: {
		config() {
			return {
				title: this.$t("teamInfo.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
	},
	methods: {
		goProductDetail(productId) {
			// uni.navigateTo({
			// 	url: `/pages/join/orderDetail?id=${productId}`,
			// })
		}
	}
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";

page {
	background-color: #f5f4f9;
}

.team-info-page {
	height: calc(100% - 190rpx);
	// #ifdef H5
	height: calc(100% - 150rpx);
	// #endif

	.team-info-scroll {
		margin-left: -10rpx;
		margin-right: -10rpx;
		padding-top: 20rpx;

		display: flex;
		flex-direction: column;

		.table {
			border-radius: 10rpx;
			padding: 0 10px;
			background-color: #fff;
			flex-grow: 1;

			.tr {
				background-color: #f5f4f9;
				display: flex;
				align-items: center;
				flex-wrap: nowrap;
				justify-content: space-between;

				&.th {
					background-color: #fff;
					border-bottom: 1px solid #f5f4f9;
				}

				.td {
					padding: 38rpx 18rpx;
					text-align: center;

					&.mW28 {
						min-width: 28%;
					}

					&.mW35 {
						min-width: 35%;
					}

					&.flex1 {
						flex-grow: 1;
					}
				}

				&:nth-child(2n) {
					background-color: #fff;
				}
			}
		}
	}
}
</style>
