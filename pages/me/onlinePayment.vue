<template>
	<view class="profix-page-container online-payment-page">
		<hx-navbar :config="config" />
		<view class="online-payment-scroll page-scroll">
			<view class="address-box">
				<!-- <view class="tit">{{ network }}</view> -->
				<radio-group @change="radioChange">
					<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in network" :key="index">
						<view class="tit" style="display: flex;flex-direction: row;align-items: center;">
							<radio :value="item" :checked="index === current" />
							<view>{{item}}</view>
						</view>
						
					</label>
				</radio-group>
				<view class="inp-box"> <b>Payment address: </b>{{ account_number }} <text @click="copyHandle">复制</text>
				</view>
			</view>
			<button class="next-btn" @click="goPage">{{ $t("onlinePayment.btnText") }}</button>
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
			hxNavbar,
		},
		data() {
			return {
				recargarNum: 0,
				account_number: "",
				network: [],
				current:0,
				networkStr:''
			};
		},
		mounted() {
			this.recargarNum = this.$route.query.recargarNum;
			this.getRechargeQrCode();
		},
		computed: {
			config() {
				return {
					title: this.$t("onlinePayment.pageTit"),
					color: "#ffffff",
					// backgroundColor: [1, "#24bdab"],
					// 背景图片（array则为滑动切换背景图，string为单一背景图）
					// backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
					backgroundImg: "../../static/img/header_tabber.png",
				};
			},
		},
		methods: {
			radioChange(e){
				console.log(e)
				this.networkStr = e.detail.value;
			},
			copyHandle() {
				uni.setClipboardData({
					data: this.account_number,
					showToast: true,
				});
			},
			goPage() {

				uni.navigateTo({
					url: `/pages/me/payUpdata?recargarNum=${this.recargarNum}&network=${this.networkStr}`,
				});
			},
			async getRechargeQrCode() {
				const res = await $request("getRechargeQrCode");
				const {
					data,
					code,
					msg
				} = res.data;

				if (code !== 0) {
					uni.showToast({
						title: this.$t("onlinePayment.toastText"),
						icon: "error",
					});
				}

				let {
					account_number,
					network
				} = data.usdt;
				this.account_number = BigInt(account_number).toString();
				this.network = network;
				this.networkStr = network[0]
			},
		},
	};
</script>

<style lang="less" scoped>
	@import "../../static/less/variable.less";

	page {
		background-color: #f5f4f9;
	}

	.online-payment-page {
		.online-payment-scroll {
			padding-top: 20rpx;

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
					word-break: break-all;
					line-height: 1.4;

					text {
						vertical-align: unset;
						color: #fd7e1f;
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