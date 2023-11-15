<template>
	<view>
		<view class="bk">
			<view class="userinfo">
				<view class="logo">
					<image src="../../static/img/logo.png" mode="widthFix"></image>
				</view>
				<view class="msg">
					<view class="name">
						<text class="name-text">{{userInfo.name}}</text>
						<view class="vip">VIP{{userInfo.vip}}</view>
					</view>
					<view class="id">
						<text>{{userInfo.id}}</text>
					</view>
				</view>
				
			</view>
			<view class="number">
				<view class="item">
					<view class="num">
						<text>1</text>
					</view>
					<view class="text">
						<text>平衡 (U)</text>
					</view>
				</view>
				<view class="item">
					<view class="num">
						<text>1</text>
					</view>
					<view class="text">
						<text>总收入 (U)</text>
					</view>
				</view>
				<view class="item">
					<view class="num">
						<text>1</text>
					</view>
					<view class="text">
						<text>存款 (U)</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="list">
			<view class="item" v-for="(item,index) in linkList" :key="index">
				<view class="left">
					<image :src="item.src" mode="widthFix"></image>
					<view class="text"><text>{{item.title}}</text> </view>
				</view>
				<view class="right">
					<image src="../../static/img/right_arrow.png" mode="widthFix"></image>
				</view>
			</view>
		</view>
		
		<view class="btn-box">
			<view class="box">
				<view class="exit">
					<text>退出登陆</text>
				</view>
				<view class="agreement">
					<text>服务协议</text>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				userInfo:{
					name:'昵称',
					id:'111111',
					vip:1,
					num1:1,
					num2:1,
					num3:1
				},
				
			};
		},
		computed:{
			linkList(){
				return [
				{url:'',title:this.$t('app.myWallet'),src:'../../static/img/lc.png'},
				{url:'',title:this.$t('app.financial'),src:'../../static/img/cw.png'},
				{url:'',title:this.$t('app.securityCenter'),src:'../../static/img/ws.png'},
				{url:'',title:this.$t('app.recharge'),src:'../../static/img/cz.png'},
				{url:'',title:this.$t('app.withdraw'),src:'../../static/img/tx.png'},
				{url:'',title:this.$t('app.basicFunctions'),src:'../../static/img/jz.png'},
			]
			}
		}
	}
</script>

<style lang="scss" scoped>
	.bk{
		background-image: url('../../static/img/bgcb7c2c77.png');
		width: 100%;
		height: 486rpx;
		.userinfo{
			width: 100%;
			padding: 120rpx 0 96rpx 87rpx;
			display: flex;
			flex-direction: row;
			align-items: center;
			.logo{
				width: 115rpx;
				margin-right:46rpx;
				image{
					width: 100%;
				}
			}
			.msg{
				display: flex;
				flex-direction: column;
				.name{
					font-size: 36rpx;
					line-height: 18rpx;
					color: white;
					font-weight: 600;
					display: flex;
					flex-direction: row;
					align-items: center;
					margin-bottom: 27rpx;
					.name-text{
						margin-right: 21rpx;
					}
					.vip{
						background-color: #FFB47C;
						font-size: 24rpx;
						font-weight: 100;
						padding: 7rpx 10rpx;
						border-radius: 5rpx;
					}
				}
				.id{
					color: #FFCF84;
					font-size: 30rpx;
					font-weight: 600;
				}
			}
		}
		.number{
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			.item{
				display: flex;
				align-items: center;
				flex-direction: column;
				color: white;
				.num{
					
					font-size: 48rpx;
					font-weight: 600;
					line-height: 18rpx;
					margin-bottom: 23rpx;
				}
				.text{
					font-size: 24rpx;
				}
			}
		}
	}
	.list{
		display: flex;
		flex-direction: column;
		width: calc(100% - 68rpx);
		margin: 53rpx auto;
		.item{
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 60rpx;
			.left{
				display: flex;
				flex-direction: row;
				align-items: center;
				image{
					width: 50rpx;
					margin-right: 20rpx;
				}
				.text{
					font-size: 28rpx;
					color: #333333;
					line-height: 18rpx;
					font-weight: 600;
				}
			}
			.right{
				image{
					width: 12rpx;
				}
			}
		}
	}
	.btn-box{
		width: calc(100% - 100rpx);
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.box{
			.exit,.agreement{
				width: 284rpx;
				height: 89rpx;
				border-radius: 10rpx;
				background: #F0E8E8;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}
		
	}
</style>
