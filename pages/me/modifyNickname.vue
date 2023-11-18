<template>
	<view class="profix-page-container modify-nickname-page">
		<hx-navbar :config="config" />
		<view class="modify-nickname-scroll page-scroll">
			<view class="nickname-inp">
				<input type="text" v-model="userInfo.nickname" :placeholder="$t('modifyNickname.placeholder')" />
			</view>
			<button class="save-btn" @click="saveBtn">{{$t("modifyNickname.btnText")}}</button>
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
			userInfo:{
				nickname:''
			}
		};
	},
	computed: {
		config() {
			return {
				title: this.$t("teamInfo.pageTit"),
				color: "#ffffff",
				// backgroundColor: [1, "#24bdab"],
				// 背景图片（array则为滑动切换背景图，string为单一背景图）
				// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
				backgroundImg: "../../static/img/header_tabber.png",
			};
		},
	},
	mounted(){
		this.getUserInfo();
	},
	methods:{
		async getUserInfo(){
			let res =  await $request('getUserInfo',{})
			console.log(res)
			if(res.data.code===0){
				this.userInfo = res.data.data;
				return
			}
			uni.showToast({
				icon:'none',
				title:res.data.msg
			})
		},
		async saveBtn(){
			let resp = await $request('userSave',{nickname:this.userInfo.nickname});
			uni.showToast({
				icon: 'none',
				title: resp.data.msg
			})
			if(resp.data.code===0){
				setTimeout(()=>{uni.navigateBack({delta:1})},1500)
			}
		},
	}
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
	background-color: #f5f4f9;
}

.modify-nickname-page {
	.modify-nickname-scroll {
		padding-top: 30rpx;
		margin-left: -10rpx;
		margin-right: -10rpx;

		.nickname-inp {
			border-radius: 10rpx;
			padding: 36rpx;
			background-color: #fff;
		}

		.save-btn {
			margin: 440rpx auto 0;
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
