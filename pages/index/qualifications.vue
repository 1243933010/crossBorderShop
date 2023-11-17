<template>
  <view class="profix-page-container qualifications-page">
    <hx-navbar :config="config" />
    <view class="qualifications-scroll page-scroll">
      <view class="list">
        <navigator :url="`/pages/index/qualificationsInfo?id=${item.id}`" class="item" v-for="(item,index) in list" :key="index">
          <view class="item-tit">{{ item.title }}</view>
          <view class="arrow-icon"></view>
        </navigator>
      </view>
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
		list:[]
	};
  },
  computed: {
    config() {
      return {
        title: this.$t("qualifications.item1"),
        color: "#ffffff",
        // backgroundColor: [1, "#24bdab"],
        // 背景图片（array则为滑动切换背景图，string为单一背景图）
        // backgroundImg: ['/static/xj.jpg','/static/logo.png'],
        backgroundImg: "../../static/img/header_tabber.png",
      };
    },
  },
  mounted() {
  	this.getCertifications();
  },
  methods:{
	  async getCertifications(){
		  let res = await $request('certifications',{})
		  console.log(res)
		  if(res.data.code===0){
			  this.list = res.data.data;
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

.qualifications-page {
  .qualifications-scroll {
    .list {
      margin-left: -30rpx;
      margin-right: -30rpx;

      .item {
        background-color: #fff;
        margin-bottom: 1px;
        padding: 46rpx 52rpx;

        .df(center, space-between);

        .item-tit {
        }

        .arrow-icon {
          width: 14rpx;
          height: 25rpx;
          background: url("../../static/img/right_arrow.png") no-repeat top left / 100% 100%;
        }
      }
    }
  }
}
</style>
