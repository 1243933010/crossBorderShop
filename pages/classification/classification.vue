<template>
	<view style="background: #FFFFFF;height: 100%;">
		<view style="height: 100%;">

			<customHeader style="z-index: 0;" :headerText="$t('app.name')" />
			<customHeader :headerText="$t('app.name')" style="width: 100%;position: fixed;top: 0;z-index: 10;" />

			<view class="search">
				<view class="flex">
					<image src="../../static/img/icon/icon_search.png" mode="widthFix"></image>
					<input type="text" :placeholder="$t('app.search')" style="font-size: 24rpx;" confirm-type="search"
						@confirm="search" />
					<view class=""></view>
				</view>
			</view>
			<view style="display: flex;justify-content: space-between; flex-flow: nowrap;">
				<view class="con-left" v-if="tabBool">
					<view  class="item" v-for="(item,index) in conLeftList" :key="index" @click="leftClick(index)">
						<view :class="leftIndex==index?'hr':'hr1'"></view>
						<view class="item-text">
							{{item.title}}
						</view>
					</view>
				</view>
				<view class="content"  :style="{width:tabBool?'':'100%'}">
					<view class="tab">
						<view class="h-tab">
							<view class="h-tab-item h-tab-item-active" @click="activeClick(index)"
								v-for="(item,index) in tabList" :key="index" :class="active==index?'active':''">
								{{item}}
							</view>

						</view>
					</view>
					<view class="con-box">
						<scroll-view style="height: 1150rpx;" scroll-y="true" class="scroll-Y" @scrolltoupper="upper"
							@scrolltolower="lower" @scroll="scroll">
							<view class="item" v-if="tabBool" v-for="(item,index) in conBox" :key="index" @click="goDetail">
								<view class="img" >
									<image :src="item.src" mode="widthFix"></image>
								</view>
								<text>{{item.title}}</text>
							</view>
							<view class="item1" v-if="!tabBool" v-for="(item,index) in conBox" :key="index">
								<view class="img" >
									<image :src="item.src" mode="widthFix"></image>
								</view>
								<view class="item1-text">
									<text class="title">{{item.title}}</text>
									<text class="price">{{$t('app.price')}}:{{item.price}}</text>
									<text class="label">{{item.label}}</text>
									<text class="price1">{{item.price}}</text>
								</view>
							</view>
						</scroll-view>

					</view>
				</view>
			</view>


		</view>
	</view>
</template>

<script>
	import customHeader from '@/components/customHeader/customHeader.vue'
	export default {
		components: {
			customHeader
		},
		computed:{
			tabList(){
				return	[this.$t('app.Product'), this.$t('app.Store'), this.$t('app.Sell')]
			}
		},
		data() {
			return {
				active: 0,
				leftIndex: 0,
				tabBool:true,
				conLeftList: [{
						title: 'All'
					}, {
						title: 'lv1'
					},
					{
						title: 'lv2'
					},
				],
				conBox: [{
					src: '../../static/img/logo.png',
					title: 'New Balance Mens 411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},{
					src: '../../static/img/logo.png',
					title: 'New Balance Mens 411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},{
					src: '../../static/img/logo.png',
					title: 'New Balance Mens 411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},{
					src: '../../static/img/logo.png',
					title: 'New Balance Mens 411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},{
					src: '../../static/img/logo.png',
					title: 'New Balance Mens 411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},{
					src: '../../static/img/logo.png',
					title: 'New Balance Mens 411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},{
					src: '../../static/img/logo.png',
					title: 'New   411 V1 Training S..',
					price:'55',
					price1:'1',
					label:'促销'
				},]
			};
		},
		mounted() {},
		methods: {
			search() {},
			activeClick(index) {
				console.log(index)
				this.active = index;
				if(index>0){
					this.tabBool = false;
				}else{
					this.tabBool = true;
				}
			},
			leftClick(index) {
				this.leftIndex = index;
			},
			goDetail(){
				uni.navigateTo({
					url:'./detail'
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	page {
		height: 100% !important;
	}

	.scroll-Y {
		height: calc(100%-20rpx);
	}

	.active {
		background: linear-gradient(0deg, #535262 0%, #1D1B1D 100%) !important;
		color: #FFFFFF !important;
	}

	.hr {
		width: 10rpx;
		height: 54rpx;
		background: #FD641F;
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
		width: calc(100% - 60rpx);
		margin: 20rpx auto;
		background: #F2F2F2;

		.flex {
			padding: 33rpx 30rpx;
			color: #93959C;
			font-size: 24rpx;

			image {
				width: 30rpx;
			}
		}
	}

	.con-left {
		width: 180rpx;
		height: calc(100% - 260rpx);
		background: #F7F7F7;
		font-size: 25rpx;
		color: #504F5E;
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
		padding: 0 30rpx;



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
				background: #F7F7F7;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				border-radius: 32rpx;
				font-size: 24rpx;
				color: #504F5E;
				font-weight: 800;
			}
		}
	}

	.content {
		width: calc(100% - 180rpx);
		height: calc(100% - 260rpx);
		display: flex;
		flex-direction: column;
		justify-content: space-between;

		.con-box {
			width: cale(100% - 26rpx);
			margin: 0 auto;

			.item {

				margin: 30rpx 0;
				display: flex;
				flex-direction: column;

				// align-items: center;
				// text-align:center;
				.img {
					background-color: #F7F7F7;
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
				.item1-text{
					width: auto;
					// display: flex;
					// flex-direction: column;
					.title{
						font-size: 28rpx;
						color: #535262;
						font-weight: 800;
						line-height: 36rpx;
						display: block;
					}
					.price{
						display: block;
						font-size: 24rpx;
						color: #A6A39F;
						line-height: 36rpx;
					}
					.label{
						display: block;
						// width: 80rpx;
						border-radius: 6rpx;
						text-align: center;
						padding: 5rpx 8rpx;
						background: #19BE6B;
						color: white;
						display: inline;
						margin: 5rpx 0;
					}
					.price1{
						display: block;
						color: #FD641F;
						font-size: 30rpx;
						font-weight: 600;
					}
				}
			}
		}
	}
</style>