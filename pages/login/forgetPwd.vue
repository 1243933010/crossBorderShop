<template>
	<view class="profix-page-container forget-pwd-page">
		<hx-navbar :config="config" />
		<view class="forget-pwd-scroll page-scroll">
			<view class="tab">
				<view class="tab-item" :class="{ active: tabVal === index }" v-for="(item, index) in tabList" :key="index" @click="changeTab(index)">
					{{ item }}
					<view class="line-list">
						<view class="long line"></view>
						<view class="sort line"></view>
					</view>
				</view>
			</view>
			<view class="tab-content-list">
				<view class="tab-content left" :class="{ active: tabVal === 1 }">
					<view class="input-box">
						<view class="input-label">
							<view class="text">{{$t('app.loginPassword')}}</view>
							<view class="eye-icon"></view>
						</view>
						<view class="inp-box">
							<input type="text" v-model="loginObj.old_password" :placeholder="$t('app.password1')" />
						</view>
						<view class="inp-box">
							<input type="text" v-model="loginObj.password" :placeholder="$t('app.password2')" />
						</view>
						<view class="inp-box">
							<input type="text" v-model="loginObj.password_confirmation" :placeholder="$t('app.password3')" />
						</view>
					</view>

					<view class="save-btn" @click="saveHandle('changePassword')">{{$t('app.saveChanges')}}</view>
				</view>
				<view class="tab-content right" :class="{ active: tabVal === 0 }">
					<view class="input-box">
						<view class="input-label">
							<view class="text">{{$t('app.transactionPassword')}}</view>
							<view class="eye-icon"></view>
						</view>
						<view class="inp-box" v-if="userInfo.pay_password">
							<input type="text" v-model="payObj.old_pay_password" :placeholder="$t('app.password1')" />
						</view>
						<view class="inp-box" v-if="userInfo.pay_password">
							<input type="text" v-model="payObj.pay_password" :placeholder="$t('app.password2')" />
						</view>
						<view class="inp-box" v-if="userInfo.pay_password">
							<input type="text" v-model="payObj.pay_password_confirmation"  :placeholder="$t('app.password3')" />
						</view>
						<view class="inp-box" v-if="!userInfo.pay_password">
							<input type="text" v-model="payObj.pay_password1"  :placeholder="$t('app.password4')" />
						</view>
						<view class="inp-box" v-if="!userInfo.pay_password">
							<input type="text" v-model="payObj.pay_password_confirmation1"  :placeholder="$t('app.password3')" />
						</view>
					</view>

					<view class="save-btn" @click="saveHandle('')">{{$t('app.saveChanges')}}</view>
				</view>
			</view>
		</view>

		<uni-popup ref="popup" type="center" class="save-success">
			<view class="pic">
				<image src="../../static/img/saveSuc.png" mode="widthFix" class="img"></image>
			</view>
			<view class="text">{{ $t("save.popupTips") }}</view>
		</uni-popup>
	</view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.vue";
import {
		$request,url as requestUrl
	} from '@/utils/request.js'
export default {
	components: {
		hxNavbar,
	},
	
	data() {
		return {
			tabVal: 0,
			loginObj:{
				old_password:"",
				password:'',
				password_confirmation:''
			},
			payObj:{
				old_pay_password:"",
				pay_password:"",
				pay_password_confirmation:'',
				
				pay_password1:'',
				pay_password_confirmation1:""
			},
			userInfo:{}
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("forgetPwd.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
		tabList(){
			return [this.$t('app.loginPassword'), this.$t('app.transactionPassword')]
		}
	},
	mounted() {
		this.getUserInfo();
	},
	methods: {
		async getUserInfo() {
			let res = await $request('getUserInfo', {})
			console.log(res)
			if (res.data.code === 0) {
				this.userInfo = res.data.data;
				return
			}
			uni.showToast({
				icon: 'none',
				title: res.data.msg
			})
		},
		changeTab(index) {
			this.tabVal = index;
		},
		handleRes(res,num){
			uni.showToast({
				icon:'none',
				title:res.data.msg
			})
			if(res.data.code===0){
				if(num){
					console.log('----------------------')
					// this.getUserInfo()
					uni.setStorageSync("token", `Bearer ${res.data.data.token}`);
				}
				setTimeout(()=>{
					uni.navigateBack({
						delta:1
					})
				},1000)
			}
		},
		async saveHandle(type) {
			console.log(type)
			if(type){
				let res = await $request(type,{...this.loginObj})
				this.handleRes(res,1)
				return
			}
			if(this.userInfo.pay_password){
			let resp = await $request('changePayPassword',{...this.payObj})
			this.handleRes(resp)
			  return	
			}
			
			let respon = await $request('setPayPassword',{pay_password:this.payObj.pay_password1,pay_password_confirmation:this.payObj.pay_password_confirmation1})
			this.handleRes(respon)
			// // 充值成功后的弹窗提示
			// this.$refs.popup.open("center");

			// let timer = setTimeout(() => {
			// 	this.$refs.popup.close();
			// 	clearTimeout(timer);
			// }, 2000);
		},
	},
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
	background-color: #f5f4f9;
}

.forget-pwd-page {
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
}
</style>