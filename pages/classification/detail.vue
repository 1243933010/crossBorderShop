<template>
	<view>
		<hx-navbar :config="config" />
		<view class="order">
			<view class="img">
				<image src="../../static/img/cn.png" mode="widthFix"></image>
			</view>
			<view class="name">
				<text>Fire TV Stick 4K Max with Alexa VoiceRemote Pro</text>
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
		      // backgroundImg: ['/static/xj.jpg','/static/logo.png'],
		      backgroundImg: "../../static/img/header_tabber.png",
		    };
		  },
		  detailList(){
			  return [
				  {title:this.$t('app.costPrice'),num:'1111',label:'$',color:'#FF690C'},
				  {title:this.$t('app.profit'),num:'11',label:'$',color:'#FF690C'},
				  {title:this.$t('app.quantity'),num:'23',label:'$',color:'#FF690C'},
				  {title:this.$t('app.totalPrice'),num:'1321545',label:'$',color:'#FF690C'},
				  {title:this.$t('app.orderNumber'),num:'202311120204558244',label:'$',color:''},
				  {title:this.$t('app.PaymentTime'),num:'2023-11-04 11:23:31',label:'$',color:''},
				  {title:this.$t('app.orderTime'),num:'2023-11-04 11:22:31',label:'$',color:''},
			  ]
		  }
		},
		data() {
			return {
				
			};
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
