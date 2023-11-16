<template>
	<view>
		<view class="">{{noticesObj.name}}</view>
		<view class="">{{noticesObj.synopsis}}</view>
		<rich-text :nodes="noticesObj.content"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticesObj:{}
			};
		},
		mounted(){
			let noticesObj = uni.getStorageSync('notices');
			console.log(noticesObj)
			this.noticesObj = noticesObj;
		},
	}
</script>

<style lang="less">

</style>
