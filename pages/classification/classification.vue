<template>
	<view style="background: #ffffff; height: 100%">
		<view style="">
			<view style="height: 290rpx;background: red;">
				<customHeader style="z-index: 0" :headerText="$t('app.name')" />
				<customHeader :headerText="$t('app.name')" style="width: 100%; position: fixed; top: 0; z-index: 10" />
				
				<view class="search">
					<view class="flex">
						<image src="../../static/img/icon/icon_search.png" mode="widthFix"></image>
						<input type="text" v-model="keywords" :placeholder="$t('app.search')" style="font-size: 24rpx" confirm-type="search" @confirm="search" />
						<view class=""></view>
					</view>
				</view>
				<view style="position: fixed; top: 0; width: 100%; z-index: 100">
					<customHeader style="z-index: 0" :headerText="$t('app.name')" />
					<customHeader :headerText="$t('app.name')" style="width: 100%; position: fixed; top: 0; z-index: 10" />
				
					<view class="search">
						<view class="flex">
							<image src="../../static/img/icon/icon_search.png" mode="widthFix"></image>
							<input type="text" v-model="keywords" :placeholder="$t('app.search')" style="font-size: 24rpx" confirm-type="search" @confirm="search" />
							<view class=""></view>
						</view>
					</view>
				</view>
			</view>

			<!-- <view class="" style="clear: both;"></view> -->
			<!--  -->
			<view style="display: flex; justify-content: space-between; flex-flow: nowrap">
				<view class="con-left" v-if="tabBool" style="position: fixed; top: 300rpx; height: 100%">
					<view class="item" v-for="(item, index) in conLeftList" :key="index" @click="leftClick(index)">
						<view :class="leftIndex == index ? 'hr' : 'hr1'"></view>
						<view class="item-text">
							{{ item.title }}
						</view>
					</view>
				</view>
				<!-- <view class="" v-if="!tabBool"></view> -->
				<view class=""></view>
				<view class="content"  :style="{ width: tabBool ? '' : '100%' }">
					<view class="tab" :style="{ left: tabBool ? '180rpx' : 0 }">
						<view class="h-tab">
							<view class="h-tab-item h-tab-item-active" @click="activeClick(index)" v-for="(item, index) in tabList" :key="index" :class="active == index ? 'active' : ''">
								{{ item }}
							</view>
						</view>
					</view>
					<view class="con-box">
						<view class="item" v-if="tabBool" v-for="(item, index) in nftList" :key="index" @click="goDetail(item)">
							<view class="img">
								<image :src="item.nft_img" mode="widthFix"></image>
							</view>
							<text>{{ item.nft_name }}</text>
						</view>
						<view class="item1" v-if="!tabBool" v-for="(item, index) in conBox" :key="index" @click="linkDetail(item)">
							<view class="img">
								<image :src="item.nft_img" mode="widthFix"></image>
							</view>
							<view class="item1-text">
								<text class="title">{{ item.nft_name }}</text>
								<text class="price">{{ $t("app.price") }}:{{ item.order_money }}</text>
								<text class="label">{{ item.order_status_txt }}</text>
								<text class="price1">{{ item.rebate_money }}</text>
							</view>
						</view>
						<template v-if="!loading && tabBool && !nftList.length">
							<view class="no-content"><image src="../../static/img/no_icon.png" mode="widthFix"></image></view>
						</template>
						<template v-if="!loading && !tabBool && !conBox.length">
							<view class="no-content"><image src="../../static/img/no_icon.png" mode="widthFix"></image> </view>
						</template>
						<template v-if="loading">
							<view class="no-content"><uni-icons type="waiting"></uni-icons> </view>
						</template>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import customHeader from "@/components/customHeader/customHeader.vue";
import { $request, url as requestUrl } from "@/utils/request";
export default {
	components: {
		customHeader,
	},
	computed: {
		tabList() {
			return [this.$t("app.Product"), this.$t("app.Store"), this.$t("app.Sell")];
		},
	},
	data() {
		return {
			// level_list:[],
			active: 0,
			leftIndex: 0,
			tabBool: true,
			keywords: "",
			nftListPage: {
				page: 1,
				page_size: 10,
			},
			conLeftList: [],
			nftList: [],
			userOrderPage: {
				page: 1,
				page_size: 10,
			},
			conBox: [],
			loading: false,
		};
	},
	mounted() {
		this.getVip();
	},
	onReachBottom() {
		if (this.tabBool) {
			this.nftListPage.page++;
			this.nftListFnc();
		} else {
			this.userOrderPage.page++;
			this.getUserOrder();
		}
	},
	watch: {
		keywords(val, oldValue) {
			console.log(oldValue);
			if (!val && oldValue) {
				this.search();
			}
		},
	},
	methods: {
		async getVip() {
			const res = await $request("vipList");
			const { data, code, msg } = res.data;
			const { level_list, user_info } = data;
			this.conLeftList = [];
			this.conLeftList.push({ id: "", title: "All" });
			this.conLeftList.push(...level_list);
			this.nftListPage.page = 1;
			this.nftListFnc();
		},

		async nftListFnc() {
			this.loading = true;
			let formData = { keywords: this.keywords, ...this.nftListPage, vip_grade: this.conLeftList[this.leftIndex].id };
			let res = await $request("nftList", formData);
			console.log(res);
			this.loading = false;
			if (res.data.code === 0) {
				this.nftList.push(...res.data.data.data);
			}
		},
		search() {
			if (this.tabBool) {
				this.nftListPage.page = 1;
				this.nftList = [];
				this.nftListFnc();
			} else {
				this.userOrderPage.page = 1;
				this.conBox = [];
				this.getUserOrder();
			}
		},
		activeClick(index) {
			console.log(index);
			this.active = index;
			if (index > 0) {
				this.tabBool = false;
			} else {
				this.tabBool = true;
			}
			this.search();
		},
		leftClick(index) {
			this.leftIndex = index;
			this.nftListPage.page = 1;
			this.nftList = [];
			this.nftListFnc();
		},
		goDetail(item) {
			uni.navigateTo({
				url: `/pages/index/productDetail?id=${item.id}`,
			});
		},
		async getUserOrder() {
			this.loading = true;
			let formData = { order_status: this.active, ...this.userOrderPage, keywords: this.keywords };
			let res = await $request("userOrders", formData);
			this.loading = false;
			console.log(res);
			if (res.data.code === 0) {
				this.conBox.push(...res.data.data.data);
			}
		},
		linkDetail(item) {
			uni.navigateTo({
				url: `./detail?id=${item.id}`,
			});
		},
	},
};
</script>

<style lang="less" scoped>
page {
	height: 100% !important;
}
.no-content {
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 50rpx;
	image {
		width: 200rpx;
	}
}
.scroll-Y {
	height: calc(100% - 20rpx);
}

.active {
	background: linear-gradient(0deg, #535262 0%, #1d1b1d 100%) !important;
	color: #ffffff !important;
}

.hr {
	width: 10rpx;
	height: 54rpx;
	background: #fd641f;
	border-radius: 5rpx;
	position: absolute;
	left: 10rpx;
}

.hr1 {
	width: 10rpx;
	height: 54rpx;
	// background: #FD641F;
	border-radius: 5rpx;
	position: absolute;
	left: 10rpx;
}

.flex {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
}

.search {
	padding: 20rpx 30rpx;
	background-color: #fff;

	.flex {
		padding: 33rpx 30rpx;
		color: #93959c;
		font-size: 24rpx;
		background-color: #f2f2f2;

		image {
			width: 30rpx;
		}
	}
}

.con-left {
	width: 180rpx;
	// height: calc(100% - 260rpx);
	background: #f7f7f7;
	font-size: 25rpx;
	color: #504f5e;
	text-align: center;

	.item {
		margin: 45rpx 0;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-direction: row;
		position: relative;

		.item-text {
			width: 150rpx;
			text-align: center;
		}
	}
}

.tab {
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 30rpx;
	margin-top: 20rpx;
	// position: fixed;
	// top: 0;
	// left: 180rpx;
	// right: 0;
	// z-index: 100;
	background-color: #fff;

	.h-tab {
		width: 100%;
		display: flex;
		flex-direction: row;
		// justify-content: center;
		justify-content: space-around;
		align-items: center;
		font-size: 24rpx;

		.h-tab-item-active {
			width: 140rpx;
			height: 64rpx;
			background: #f7f7f7;
			text-align: center;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 32rpx;
			font-size: 24rpx;
			color: #504f5e;
			font-weight: 800;
		}
	}
}

.content {
	width: calc(100% - 180rpx);
	// height: calc(100% - 200rpx);
	// background: red;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	.con-box {
		width: calc(100% - 156rpx);
		/* #ifdef H5 */
		padding-bottom: 100rpx;
		/* #endif */
		margin: 0 auto;
		padding-top: 100rpx;
		.item {
			margin: 30rpx 0;
			display: flex;
			flex-direction: column;

			// align-items: center;
			// text-align:center;
			.img {
				background-color: #f7f7f7;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 5rpx;
				padding: 20rpx 0 13rpx 0;

				image {
					width: 175rpx;
				}
			}

			text {
				font-size: 24rpx;
				color: #535262;
			}
		}
		.item1 {
			margin: 30rpx 0;
			display: flex;
			flex-direction: row;

			// align-items: center;
			// text-align:center;
			.img {
				// background-color: #F7F7F7;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-bottom: 5rpx;
				padding: 0rpx 0 13rpx 0;

				image {
					width: 145rpx;
					margin-right: 30rpx;
				}
			}

			text {
				font-size: 24rpx;
				color: #535262;
			}
			.item1-text {
				width: auto;
				// display: flex;
				// flex-direction: column;
				.title {
					font-size: 28rpx;
					color: #535262;
					font-weight: 800;
					line-height: 36rpx;
					display: block;
				}
				.price {
					display: block;
					font-size: 24rpx;
					color: #a6a39f;
					line-height: 36rpx;
				}
				.label {
					display: block;
					// width: 80rpx;
					border-radius: 6rpx;
					text-align: center;
					padding: 5rpx 8rpx;
					background: #19be6b;
					color: white;
					display: inline;
					margin: 5rpx 0;
				}
				.price1 {
					display: block;
					color: #fd641f;
					font-size: 30rpx;
					font-weight: 600;
				}
			}
		}
	}
}
</style>
