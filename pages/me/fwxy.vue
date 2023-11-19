<template>
	<view class="profix-page-container fwxy-page">
		<hx-navbar :config="config" />
		<view class="fwxy-scroll page-scroll">
			<view class="" style="margin-bottom: 40rpx;">
				<rich-text :nodes="richText"></rich-text>
			</view>
			
			<!-- <view style="font-size: 25rpx;color: red;margin-bottom: 20rpx;">请签署协议</view> -->
			<view style="border: 1rpx dashed #555555;" v-if="userInfo.is_sign===2">
				<Signature @input="listenData" ref="sig" v-model="v"></Signature>
				 <!-- <zwp-draw-pad ref="drawPad" @save="listenData" width="500" height="500" /> -->
			</view>
			<view style="border: 1rpx dashed #555555;" v-if="userInfo.is_sign===1">
				<image :src="userInfo.sign_img" mode="widthFix"></image>
			</view>
			<view class="btn-box">
				<view class="exit" @click="startSign">
					<text>{{ $t("fwxy.btn1") }}</text>
				</view>
				<view class="agreement" @click="uploadImgFnc">
					<text>{{ $t("fwxy.btn2") }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import hxNavbar from "@/components/hx-navbar.vue";
	import Signature from '@/components/sin-signature/sin-signature.vue'
	import zwpDrawPad from '@/components/zwp-draw-pad/zwp-draw-pad.vue'
	import {$request,url as requestUrl} from '@/utils/request.js'
	export default {
		components: {
			hxNavbar,
			Signature
		},
		data() {
			return {
				richText: '',
				v: '',
				userInfo:{}
			};
		},
		computed: {
			config() {
				return {
					title: this.$t("fwxy.pageTit"),
					color: "#ffffff",
					// backgroundColor: [1, "#24bdab"],
					// 背景图片（array则为滑动切换背景图，string为单一背景图）
					// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
					backgroundImg: "../../static/img/header_tabber.png",
				};
			},
		},
		mounted(){
			this.getAgreements();
			this.getUserInfo();
		},
		methods: {
			async startSign() {
				// let s = await this.$refs.sig.getSyncSignature();
				// console.log('组件版本', this.$refs.sig.VERSION);
				// console.log('签名数据', s);
				this.uploadImgFnc();
			},
			async getAgreements(){
				let res = await $request('agreements',{})
				console.log(res)
				if(res.data.code===0){
					this.richText = res.data.data.user_service_agreement;
				}
			},
			async getUserInfo() {
				let res = await $request("getUserInfo", {});
				console.log(res);
				if (res.data.code === 0) {
					this.userInfo = res.data.data;
					return;
				}
				uni.showToast({
					icon: "none",
					title: res.data.msg,
				});
			},
			async uploadImgFnc(){
				// let aaa =  await this.$refs.drawPad.save();
				// this.v = aaa.tempFilePath;
				// console.log(await this.$refs.drawPad.save())
				console.log(this.v)
				if(!this.v){
					uni.showToast({
						icon: "none",
						title: this.$t('app.signFirst'),
					});
					return 
				}
				let res = await $request('sign',{sign_img:this.v});
				uni.showToast({
					icon: "none",
					title: res.data.msg
				});
				if(res.data.code===0){
					setTimeout(()=>{
						uni.navigateBack({delta:1})
					},1500)
				}
				
			},
			listenData(data){
				this.v = data;
				// this.v = this.$refs.drawPad.save().tempFilePath;
				// console.log(this.$refs.drawPad.save().tempFilePath)
			},
			

         
		}
	};
</script>

<style lang="less" scoped>
	@import "../../static/less/variable.less";

	page {
		background-color: #f5f4f9;
	}

	.fwxy-page {
		padding-bottom: 200rpx;
		.fwxy-scroll {
			padding-top: 40rpx;

			.btn-box {
				width: calc(100% - 100rpx);

				position: fixed;
				bottom: 2vh;
				left: 50%;
				transform: translateX(-50%);

				.df(center, space-between);

				.exit,
				.agreement {
					border-radius: 10rpx;
					padding: 32rpx 0;
					font-size: 24rpx;
					width: calc(50% - 40rpx);
					text-align: center;
				}

				.exit {
					color: #383838;
					background: #f0e8e8;
				}

				.agreement {
					background: #fd8124;
					color: #fff;
				}
			}
		}
	}
</style>