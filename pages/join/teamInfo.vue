<template>
	<view class="profix-page-container team-info-page">
		<hx-navbar :config="config" />
		<view class="team-info-scroll page-scroll">
			<view class="table">
				<view class="th tr">
					<view class="td mW28">{{ $t("teamInfo.tableTh1") }}</view>
					<view class="td flex1">{{ $t("teamInfo.tableTh2") }}</view>
					<view class="td mW35">{{ $t("teamInfo.tableTh3") }}</view>
				</view>
				<view class="tr"  v-for="(item,index) in list" :key="index">
					<view class="td mW28">{{item.mobile}}</view>
					<view class="td flex1">{{item.vip_level_txt}}</view>
					<view class="td mW35">{{item.created_at}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.vue";
import {$request} from '@/utils/request.js'
export default {
	components: {
		hxNavbar,
	},
	data() {
		return {
			pageing:{
				page:1,
				page_size:20
			},
			list:[],
			id:''
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("teamInfo.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
	},
	onLoad(e) {
		console.log(e)
		this.myTeam(+e.id)
		this.id = e.id;
	},
	onReachBottom(e){
		this.pageing.page++;
		this.myTeam(this.id);
	},
	methods: {
		async myTeam(num){
			let res = await  $request('myTeam',{level:num,...this.pageing})
			console.log(res)
			if(res.data.code===0){
				this.list.push(...res.data.data.list);
				return
			}
			uni.showToast({
				icon:'none',
				title:res.data.msg
			})
		},
		goProductDetail(productId) {
			uni.navigateTo({
				url: `/pages/classification/detail?id=${productId}`,
			});
		},
	},
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
					view{
						width: 33%;
					}
					&.mW28 {
						min-width: 29%;
					}

					&.mW35 {
						min-width: 44%;
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
