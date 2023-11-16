<template>
	<view class="profix-page-container deal-page">
		<hx-navbar :config="config" />
		<view class="deal-scroll page-scroll">
			<scroll-view scroll-y="true" class="tab-view">
				<view class="tab-list">
					<view class="tab-item" :class="{ active: checkTab === index }" v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">{{ item }}</view>
				</view>
			</scroll-view>

			<view class="deal-list">
				<view class="list-item" v-for="item in dealList" :key="item.id">
					<view class="left">
						<view class="top">{{item.tit}}</view>
						<view class="bottom">{{item.time}}</view>
					</view>
					<view class="right">+{{item.num}}</view>
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
		return {
			checkTab: 0,
			dealList: [
				{
					id: 1,
					tit: '商店收入1',
					time: '2023-11-04 11:24:00',
					num: '32.32'
				},
				{
					id: 2,
					tit: '商店收入2',
					time: '2023-11-04 11:24:00',
					num: '2'
				},
				{
					id: 3,
					tit: '商店收入3',
					time: '2023-11-04 11:24:00',
					num: '54'
				},
				{
					id: 4,
					tit: '商店收入4',
					time: '2023-11-04 11:24:00',
					num: '68'
				}
			]
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("deal.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
		tabList() {
			return [
				this.$t("deal.listItem1"),
				this.$t("deal.listItem2"),
				this.$t("deal.listItem3"),
				this.$t("deal.listItem4"),
				this.$t("deal.listItem5"),
			];
		},
	},
	methods: {
		changeTab(index) {
			this.checkTab = index;
		},
	},
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";

page {
	background-color: #fff;
}

.deal-page {
	background-color: #fff;

	.deal-scroll {
		.tab-view {
			position: fixed;
			left: 0;
			width: 24%;
			height: calc(100vh - 138rpx);
			// #ifdef H5
			height: calc(100vh - 88rpx);
			// #endif
			background-color: #f7f7f7;
			text-align: center;

			.tab-item {
				padding: 32rpx 0;
				font-size: 24rpx;

				&.active {
					background-color: #fff;
				}
			}
		}

		.deal-list {
			margin-left: 26%;
			padding-top: 30rpx;
			padding-bottom: 1rpx;

			.list-item {
				margin-bottom: 20rpx;
				border-radius: 10rpx;
				padding: 30rpx 34rpx;
				border: 1px solid #fd7e1f;

				.df(center, space-between);

				.left {
					margin-right: 20rpx;
					color: #504f5e;
					
					.top {
						margin-bottom: 38rpx;
						font-size: 28rpx;
						font-weight: bold;
					}

					.bottom {
						font-size: 24rpx;
					}
				}

				.right {
					font-size: 36rpx;
					color: #FD852B;
					font-weight: bold;
				}
			}
		}
	}
}
</style>
