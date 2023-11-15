<script>
export default {
	onLaunch: function () {
		console.log("App Launch");
		let code = uni.getLocale();
		if (!code) {
			uni.setLocale("zh-Hans");
		}
		console.log(code);
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
