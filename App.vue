<script>
	import {setTabbar} from '@/utils/utils.js'
export default {
	onLaunch: function () {
		console.log("App Launch");
		let code = uni.getLocale();
		if (!code) {
			uni.setLocale("en");
		}
		console.log(this.$t,'-------')
		setTabbar(this.$t)
		console.log(code);
		let token = uni.getStorageSync('token');
		if(!token){
			uni.reLaunch({
				url:"/pages/login/index"
			})
		}
	},
	onShow: function () {
		console.log("App Show");
	},
	onHide: function () {
		console.log("App Hide");
	},
};
</script>

<style lang="less">
/*每个页面公共css */
uni-page-body {
	height: 100%;
}
input {
	margin: 0;
	bottom: 0;
	outline: none;
	border: none;
}

body {
	background-color: transparent;
	margin: 0;
	padding: 0;
}

.profix-page-container {
	color: #333;
	font-size: 30rpx;
	width: 100vw;
	line-height: 1;

	.page-scroll {
		padding-left: 30rpx;
		padding-right: 30rpx;
		height: 100%;
		
		&.has-tabbar {
			// #ifdef H5
			// 用于处理tabbar
			padding-bottom: 100rpx;
			// #endif
		}
	}

	.pic {
		font-size: 0;

		.img {
			width: 100%;
		}
	}

	.button {
		border-radius: 10rpx;
		border: none;
		padding: 0;
		background-color: transparent;
		line-height: normal;

		&::after {
			content: none;
		}
	}
}
</style>
