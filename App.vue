<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			let code =  uni.getLocale();
			if(!code){
				uni.setLocale('zh-Hans');
			}
			console.log(code)
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
