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

<style lang="less">
/*每个页面公共css */
input {
  margin: 0;
  bottom: 0;
  outline: none;
  border: none;
}

.profi-page-container {
  padding-left: 15rpx;
  padding-right: 15rpx;
  box-sizing: border-box;
  color: #333;
  font-size: 30rpx;

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
