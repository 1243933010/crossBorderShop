<template>
	<view class="profix-page-container deal-page">
		<hx-navbar :config="config" />
		<view class="deal-scroll page-scroll">
			<scroll-view scroll-y="true" class="tab-view">
				<view class="tab-list">
					<view class="tab-item" :class="{ active: checkTab === index }" v-for="(item, index) in tabList" :key="index" @click="changeTab(item,index)">{{ item.title }}</view>
				</view>
			</scroll-view>

			<view class="deal-list" >
				<view class="list-item" v-for="item in dealList" :key="index">
					<view class="left">
						<view class="top">{{item.network||item.remark}}</view>
						<view class="bottom">{{item.updated_at||item.created_at}}</view>
					</view>
					<view class="right">+{{item.money||item.amount*1}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.vue";
import { $request } from "@/utils/request";
export default {
	components: {
		hxNavbar,
	},
	data() {
		return {
			checkTab: 0,
			dealList: [],
			dealPage:{
				page:1,
				page_size:20
			},
			requestUrl:['userAccount','','','rechargeIndex','']
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
				{title:this.$t("deal.listItem1"),label:''},
				{title:this.$t("deal.listItem2"),label:'rebate'},
				{title:this.$t("deal.listItem3"),label:'buy_vip'},
				{title:this.$t("deal.listItem4"),label:'recharge'},
				{title:this.$t("deal.listItem5"),label:'withdraw'},
			];
		},
	},
	onReachBottom(){
		this.dealPage.page++
		this.requestFnc(this.requestUrl[this.checkTab]);
	},
	mounted(){
		this.requestFnc(this.requestUrl[this.checkTab]);
	},
	methods: {
		changeTab(item,index) {
			this.checkTab = index;
			// if(!this.requestUrl[index]){
			// 	this.dealList = [];
			// 	return
			// }
			this.dealPage.page = 1;
			this.dealList = [];
			this.requestFnc('userAccount',item.label);
		},
		async requestFnc(url,type){
			let res = await $request(url,{...this.dealPage,change_tag:type});
			console.log(res)
			if(res.data.code===0){
				this.dealList.push(...res.data.data.list);
			}
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
