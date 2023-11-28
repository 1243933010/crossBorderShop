<template>
	<view class="profix-page-container pay-updata-page">
		<hx-navbar :config="config" />
		<view class="pay-updata-scroll page-scroll">
			<view class="box">
				<view class="pic" @click="upImg">
					<image :src="payImg" mode="widthFix" class="img"></image>
				</view>
			</view>
			<view class="tips">{{ $t("payUpdata.tips") }}</view>
			<view class="address-box">
				<view class="tit">TXID</view>
				<view class="inp-box">
					<input type="text" v-model="txid" :placeholder="$t('payUpdata.placeholder')" />
				</view>
			</view>
			<button class="next-btn" @click="rechargeCreate">{{ $t("payUpdata.btnText") }}</button>
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
	data() {
		return {
			address: "TDcu8jVJRpJ4hNMTJMKTQzwSMSHKmN1zAF",
			payImg:'../../static/img/updata_img.png',
			transfer_voucher:'',
			onLoadData:{},
			txid:''
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("payUpdata.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
				backgroundImg: "../../static/img/header_tabber.png",
				
			};
		},
	},
	onLoad(e) {
		console.log(e);
		this.onLoadData = e;
	},
	methods: {
		upImg() {
			uni.chooseImage({
				count: 1,
				success: async res => {
					console.log(res.tempFiles[0]);
					uni.uploadFile({
						url: `${requestUrl}/api/file_upload`,
						filePath: res.tempFilePaths[0],
						name: "file",
						formData: {},
						success: async res1 => {
							console.log(res1);
							let avatar = JSON.parse(res1.data);
							if (avatar.code === 0) {
								this.payImg = `${requestUrl}${avatar.data.src}`
								this.transfer_voucher = avatar.data.src;
							}
						},
					});
				},
			});
		},
		async rechargeCreate(){
			let {recargarNum,network} = this.onLoadData;
			let res = await $request('rechargeCreate',{money:recargarNum,transfer_voucher:this.transfer_voucher,network,txid:this.txid});
			console.log(res)
			uni.showToast({
				icon:'none',
				title:res.data.msg
			})
			if(res.data.code===0){
				setTimeout(()=>{uni.navigateBack({delta:3})},1500)
			}
		},
	},
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
	background-color: #f5f4f9;
}

.pay-updata-page {
	.pay-updata-scroll {
		padding-top: 20rpx;

		.box {
			margin-bottom: 42rpx;
			border-radius: 20rpx;
			padding: 20rpx;
			background-color: #fff;
		}
		
		.tips {
			margin-bottom: 52rpx;
			font-size: 24rpx;
			line-height: 1.24;
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

		.next-btn {
			margin: 200rpx auto 0;
			border-radius: 10rpx;
			padding: 34rpx;
			background-color: #383838;
			width: calc(100vw - 236rpx);
			color: #fff;
			font-size: 24rpx;
			line-height: 1;
		}
	}
}
</style>
