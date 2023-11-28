<template>
	<view class="profix-page-container wallet-page">
		<hx-navbar :config="config" />
		<view class="wallet-scroll page-scroll">
			<view class="total-assets-box">
				<view class="num">{{ balance }}</view>
				<view class="text">{{ $t("wallet.total") }}</view>
			</view>

			<view class="ratio">
				<view class="tips">
					<view class="circle"></view>
					{{ $t("wallet.tips") }}
				</view>
				<view class="text">1USDT=$1</view>
			</view>


			<view class="forget-pwd-scroll page-scroll">
				<view class="tab">
					<view class="tab-item" :class="{ active: tabVal === index }" v-for="(item, index) in tabList"
						:key="index" @click="changeTab(index)">
						{{ item }}
						<view class="line-list">
							<view class="long line"></view>
							<view class="sort line"></view>
						</view>
					</view>
				</view>
				<view class="tab-content-list">
					<view class="tab-content left" :class="{ active: tabVal === 1 }">
						<!-- <view class="input-box"> -->
							<view class="address-box">
									<!-- <view class="tit">USDT-TRC20</view> -->
									<view class="inp-box">
										<input :disabled="bankBool" v-model="bankObj.realname" type="text" :placeholder="$t('wallet.text1')" />
									</view>
									<view class="inp-box">
										<input  :disabled="bankBool" v-model="bankObj.mobile" type="text" :placeholder="$t('wallet.text2')" />
									</view>
									<view class="inp-box">
										<input  :disabled="bankBool" v-model="bankObj.branch_bank_name" type="text" :placeholder="$t('wallet.text3')" />
									</view>
									<view class="inp-box">
										<input :disabled="bankBool" v-model="bankObj.bank_account" type="text" :placeholder="$t('wallet.text4')" />
									</view>
									<view class="inp-box">
										<input :disabled="bankBool" v-model="bankObj.id_number" type="text" :placeholder="$t('wallet.text5')" />
									</view>
								</view>
								
								<button v-if="!bankBool" class="sub-btn" @click="bindBank">{{ $t("wallet.text6") }}</button>
							<!-- </view> -->

						
					</view>
					<view class="tab-content right" :class="{ active: tabVal === 0 }">
						<view class="address-box">
								<view class="tit">USDT-TRC20</view>
								<view class="inp-box">
									<input :disabled="usdtBool" v-model="account" type="text" :placeholder="$t('wallet.placeholder')" />
								</view>
							</view>
							
							<button v-if="!usdtBool" class="sub-btn" @click="subBtn">{{ $t("wallet.btnText") }}</button>

						<!-- <view class="save-btn" @click="saveHandle('')">{{$t('app.saveChanges')}}</view> -->
					</view>
				</view>
			</view>



			
		</view>
	</view>
</template>

<script>
	
	import hxNavbar from "@/components/hx-navbar.vue";
	import {
		$request
	} from "../../utils/request";

	export default {
		components: {
			hxNavbar
		},
		data() {
			return {
				balance: 0,
				account: '',
				// account_list: {},
				///
				tabVal: 0,
				loginObj:{
					old_password:"",
					password:'',
					password_confirmation:''
				},
				bankObj:{
					realname:'',
					mobile:'',
					branch_bank_name:'',
					bank_account:'',
					id_number:''
				},
				userInfo:{},
				usdtBool:false,
				bankBool:false
			};
		},
		computed: {
			config() {
				return {
					title: this.$t("wallet.pageTit"),
					color: "#ffffff",
					// backgroundColor: [1, "#24bdab"],
					// 背景图片（array则为滑动切换背景图，string为单一背景图）
					// backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
					backgroundImg: "../../static/img/header_tabber.png",
				};
			},
			tabList(){
				return [this.$t('app.bankCard'), 'USDT']
			}
		},
		methods: {
			async bindBank(){
				let res = await $request('bindBank',{...this.bankObj});
				console.log(res)
				if(res.data.code===0){
					this.walletInfo();
				}
				uni.showToast({
					icon:'none',
					title:res.data.msg
				})
			},
			changeTab(index) {
				this.tabVal = index;
			},
			async walletInfo() {
				const res = await $request("walletInfo");
				const {
					code,
					data,
					msg
				} = res.data;

				if (code !== 0) {
					uni.showToast({
						title: "钱包信息获取失败",
						icon: "none",
					});

					return;
				}

				const {
					balance,
					account_list
				} = data;
				this.balance = balance * 1;
				// this.account_list = account_list;
				this.bankObj = account_list.bank;
				console.log(account_list.bank.mobile)
				if(account_list.bank.mobile){
					this.bankBool = true;
				}
				if(account_list.usdt.bank_account){
					this.usdtBool = true;
					this.account = account_list.usdt.bank_account;
				}
			},
			async subBtn() {
				let res = await $request('bindAccount', {
					account: this.account
				})
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
				if (res.data.code === 0) {
					this.walletInfo()
					// setTimeout(() => {
					// 	uni.navigateBack({
					// 		delta: 1
					// 	})
					// }, 1500)
				}
			},
		},
		mounted() {
			this.walletInfo();
		},
	};
</script>

<style lang="less" scoped>
	@import "../../static/less/variable.less";

	page {
		background-color: #f5f4f9;
	}

	.wallet-page {
		.wallet-scroll {
			.total-assets-box {
				margin-top: 20rpx;
				padding: 56rpx 20rpx 24rpx;
				background: url("../../static/img/bg/wallet.png") no-repeat top left / 100% 100%;

				.df(center, center);
				flex-direction: column;

				.num {
					margin-bottom: 54rpx;
					font-size: 48rpx;
					color: #fffeff;
					font-weight: bold;
				}

				.text {
					color: #fff;
				}
			}

			.ratio {
				margin-top: 52rpx;

				.tips {
					margin-bottom: 22rpx;
					.df(center, flex-start);
					font-size: 24rpx;

					.circle {
						margin-right: 12rpx;
						border-radius: 50%;
						background: linear-gradient(0deg, #fd7e1f 0%, #fd862c 100%);
						width: 20rpx;
						height: 20rpx;
					}
				}

				.text {
					margin-bottom: 56rpx;
					margin-left: 32rpx;
				}
			}

			.address-box {
				border-radius: 20rpx;
				background-color: #fff;

				.tit {
					border-bottom: 1px solid #f5f4f9;
					padding: 30rpx 35rpx;
					color: #fd7e1f;
					font-weight: bold;
				}

				.inp-box {
					padding: 50rpx 35rpx;

					input {
						line-height: 1;
						font-size: 26rpx;
					}
				}
			}

			.sub-btn {
				margin: 200rpx auto 0;
				border-radius: 10rpx;
				padding: 34rpx;
				// background-color: #383838;
				background: linear-gradient(0deg, #0694B8 0%, #6BBDB4 100%);
				width: calc(100vw - 236rpx);
				color: #fff;
				font-size: 24rpx;
				line-height: 1;
			}
		}
	}
	
	
		.forget-pwd-scroll {
			.tab {
				.df(center, space-around);
	
				.tab-item {
					padding: 40rpx 0 30rpx;
					color: #383838;
					font-weight: bold;
	
					position: relative;
	
					.line-list {
						width: 0;
						transition: width 0.35s;
	
						position: absolute;
						bottom: 0;
						left: 0;
						height: 10rpx;
						z-index: 1;
	
						.df(center, space-between);
	
						.line {
							border-radius: 5rpx;
							background-color: #fd7e1f;
							height: 100%;
	
							&.long {
								width: 66%;
							}
	
							&.sort {
								width: 16%;
							}
						}
					}
	
					&.active {
						color: #fd7e1f;
	
						.line-list {
							width: 100%;
						}
					}
				}
			}
	
			.tab-content-list {
				display: flex;
				position: relative;
	
				.tab-content {
					padding-top: 55rpx;
					transition: 0.35s;
					position: absolute;
					top: 0;
					overflow: hidden;
	
					&.active {
						flex-grow: 1;
						z-index: 1;
	
						&.left {
							right: 100%;
						}
	
						&.right {
							left: 100%;
						}
					}
	
					&.left {
						left: 0;
						right: 0;
					}
	
					&.right {
						right: 0;
						left: 0;
					}
	
					.input-box {
						border-radius: 20rpx;
						background-color: #fff;
						width: calc(100vw - 60rpx);
	
						.input-label {
							border-bottom: 1px solid #f5f4f9;
							padding: 30rpx 35rpx;
							.df(center, space-between);
	
							.text {
								color: #fd7e1f;
							}
	
							.eye-icon {
								width: 29rpx;
								height: 22rpx;
								background: url("../../static/img/icon/eye.png") no-repeat center center / 100%;
							}
						}
	
						.inp-box {
							padding: 50rpx 35rpx;
	
							input {
								line-height: 1;
								font-size: 26rpx;
							}
						}
					}
	
					.save-btn {
						margin: 35vh auto 0;
						border-radius: 10rpx;
						padding: 34rpx;
						// background-color: #383838;
						background: linear-gradient(60deg, #0694B8 0%, #6BBDB4 100%);
						width: calc(100vw - 236rpx);
						color: #fff;
						font-size: 24rpx;
						line-height: 1;
						text-align: center;
					}
				}
			}
		}
	
		.save-success {
			.pic {
				width: 166rpx;
			}
	
			.text {
				margin-top: 20rpx;
				color: #fff;
				font-size: 30rpx;
				text-align: center;
			}
		}
	
</style>