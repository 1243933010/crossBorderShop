<template>
	<view>
		<hx-navbar :config="config"/>
		<view class="">
			1111
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				config:{
					title: '这里是新疆',
					color: '#ffffff',
					backgroundColor: [1,'#24bdab'],
					// 背景图片（array则为滑动切换背景图，string为单一背景图）
					// backgroundImg: ['/static/xj.jpg','/static/logo.png'],
					backgroundImg: "../../static/header_tabber.png",
					
				},
			};
		}
	}
</script>

<style lang="less">

</style>
