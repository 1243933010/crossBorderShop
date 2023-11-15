<template>
	<view>
		<customHeader style="z-index: 0;"/>
		<view style="position: absolute;top: 0;width: 100%;">
			<customHeader />
		</view>
		<uni-easyinput prefixIcon="search" v-model="value" placeholder="左侧图标" @iconClick="iconClick">
					</uni-easyinput>
	</view>
</template>

<script>
	import customHeader from '@/components/customHeader/customHeader.nvue'
	export default {
		components:{customHeader},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">

</style>
