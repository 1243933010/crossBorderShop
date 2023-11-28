<template>
  <view class="profix-page-container qualifications-info-page">
    <hx-navbar :config="config" />
    <view class="qualifications-info-scroll page-scroll">

     <rich-text :nodes="dataObj.content"></rich-text>
      
    </view>
  </view>
</template>

<script>
import hxNavbar from "@/components/hx-navbar.vue";
import { $request } from "@/utils/request";
export default {
  components: {
    hxNavbar,
  },
  data() {
    return {
		dataObj:{content:''},
		id:''
	};
  },
  computed: {
    config() {
      return {
        title: this.$t("qualifications.item1"),
        color: "#ffffff",
        // backgroundColor: [1, "#24bdab"],
        // 背景图片（array则为滑动切换背景图，string为单一背景图）
        // backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
        backgroundImg: "../../static/img/header_tabber.png",
      };
    },
  },
  onLoad(e) {
  	console.log(e)
	this.id = +e.id
  },
 mounted() {
  	this.getCertifications();
  },
  methods:{
	  async getCertifications(){
		  let res = await $request('certifications',{})
		  console.log(res)
		  if(res.data.code===0){
			  res.data.data.forEach((val)=>{
				  if(val.id == this.id){
					  this.dataObj = val;
				  }
			  })
		  }
	  }
	  
  }
};
</script>

<style lang="less" scoped>
@import "../../static/less/variable.less";
page {
  background-color: #f5f4f9;
}

.qualifications-info-page {
  .qualifications-info-scroll {
    .pic {
      margin-right: -30rpx;
      margin-left: -30rpx;
    }
  }
}
</style>
