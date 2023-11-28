<template>
	<view>
		<hx-navbar :config="config" />
		<view class="order">
			<view class="img">
				<image :src="info.nft_img" mode="widthFix"></image>
			</view>
			<view class="name">
				<text>{{info.nft_name}}</text>
			</view>
			<view class="hr"></view>
			<view class="box">
				<view class="item" v-for="(item,index) in detailList" :key="index">
					<view class="left">
						<text>{{item.title}}</text>
					</view>
					<view class="right" :style="{color:item.color?item.color:''}">
						<text>{{item.num}}</text>
						<text>{{item.label}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import hxNavbar from "@/components/hx-navbar.vue";
	import { $request,url as requestUrl } from "@/utils/request";
	export default {
		components: {
		  hxNavbar,
		},
		computed: {
		  config() {
		    return {
		      title: this.$t("app.orderDetail"),
		      color: "#ffffff",
		      // backgroundColor: [1, "#24bdab"],
		      // 背景图片（array则为滑动切换背景图，string为单一背景图）
		      // backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
		      backgroundImg: "../../static/img/header_tabber.png",
		    };
		  },
		  detailList(){
			  return [
				  {title:this.$t('app.costPrice'),num:this.info.cost_price,label:'$',color:'#FF690C'},
				  {title:this.$t('app.profit'),num:this.info.rebate_money,label:'$',color:'#FF690C'},
				  // {title:this.$t('app.quantity'),num:'23',label:'$',color:'#FF690C'},
				  {title:this.$t('app.totalPrice'),num:this.info.order_money,label:'$',color:'#FF690C'},
				  {title:this.$t('app.orderNumber'),num:this.info.order_no,label:'',color:''},
				  {title:this.$t('app.PaymentTime'),num:this.info.created_at,label:'',color:''},
				  {title:this.$t('app.orderTime'),num:this.info.sell_success_time,label:'',color:''},
			  ]
		  }
		},
		data() {
			return {
				info:{cost_price:'',profit:'',order_money:'',order_no:'',created_at:'',sell_success_time:''}
			};
		},
		onLoad(e) {
			this.getDetail(e.id)
		},
		methods:{
			async getDetail(id){
				let res = await $request('userOrderDetail',{order_id:id});
				console.log(res)
				if(res.data.code===0){
					this.info = res.data.data;
					// let [cost_price,profit,order_money,order_no,created_at,sell_success_time] = res.data.data;
					// let resp = res.data.data;
					// let arr = [resp.cost_price,resp.profit,resp.order_money,resp.order_no,resp.created_at,resp.sell_success_time];
					// let data = JSON.parse(JSON.stringify(this.detailList))
					// arr.forEach((val,index)=>{
					// 	data[index].num = val;
					// })
					// console.log(data)
					// this.detailList[0] = data[0];
					// this.$forceUpdate()
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.order{
		width: 100%;
		padding-top: 5rpx;
		.img{
			width: 100%;
			margin-bottom: 49rpx;
			image{
				width: 100%;
			}
		}
		.name{
			width: calc(100% - 30rpx);
			margin: 0 auto;
			color: #383838;
			font-size: 36rpx;
			line-height: 48rpx;
			font-weight: 600;
		}
		.hr{
			width: 100%;
			height: 1px;
			border-top: 1px dashed #ECEAF3;
			// background: #ECEAF3;
			margin-top: 39rpx;
			margin-bottom: 44rpx;
		}
		.box{
			padding-bottom: 100rpx;
			width: calc(100% - 30rpx);
			margin: 0 auto;
			.item{
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-right: 10rpx;
				margin-bottom: 34rpx;
				.left{
					color: #383838;
					font-size: 28rpx;
				}
				.right{
					color: #383838;
					font-size: 28rpx;
				}
			}
		}
	}
</style>
