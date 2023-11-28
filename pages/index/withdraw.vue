<template>
  <view class="profix-page-container withdraw-page">
    <hx-navbar :config="config" />
    <view class="withdraw-scroll page-scroll">
      <view class="title">{{ $t("withdraw.title") }}</view>
      <view class="withdraw-box">
        <view class="way-box">
		<!-- {{ $t("storageLevel.dollar") }}T-TEC 20 -->
		<radio-group @change="radioChange">
			<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in info.withdrawal_network" :key="index">
				<view class="tit" style="display: flex;flex-direction: row;align-items: center;">
					<radio :value="item" :checked="index === current" />
					<view>{{item}}</view>
				</view>
				
			</label>
		</radio-group>
		</view>
		<view class="way-box">
		<!-- {{ $t("storageLevel.dollar") }}T-TEC 20 -->
		<radio-group @change="radioChange1">
			<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in accountList" :key="index">
				<view class="tit" style="display: flex;flex-direction: row;align-items: center;">
					<radio :value="item.value" :checked="index === current1" />
					<view>{{item.label}}</view>
				</view>
				
			</label>
		</radio-group>
		</view>
        <view class="inp-box">
          <input type="number" v-model="money" />
        </view>
        <view class="inp-box">
          <input  v-model="pay_password" :type="type" :placeholder="$t('withdraw.pwdPlaceholder')" />
          <view class="eye-icon" @click="()=>{type=type=='password'?'text':'password'}"></view>
        </view>
      </view>
      <view class="tips">
        <view class="tit">{{ $t("withdraw.tipsTit") }}</view>
        <view class="tips-ul">
          <view class="tips-item">1、{{ $t("app.WithdrawalHandlingFee") }}:{{info.withdraw_fee_ratio}}</view>
          <view class="tips-item">2、{{ $t("app.MinimumWithdrawalAmount") }}:{{info.withdraw_min_amount}}</view>
          <view class="tips-item">3、{{ $t("app.MaximumWithdrawalAmount") }}:{{info.withdraw_max_amount}}</view>
		   <view class="tips-item">4、{{ $t("app.text5") }}{{info.withdraw_date_start_hour}}{{ $t("app.text6") }}{{info.withdraw_date_end_hour}}{{ $t("app.text7") }}</view>
        </view>
      </view>

      <button class="sub-btn" @click="subBtn">{{$t("withdraw.btnText")}}</button>
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
		info:{},
		money:0,
		pay_password:'',
		current:0,
		networkStr:'',
		type:'password',
		withdraw_type:'',
		account_list:{},
		accountList:[],
		current1:0
	};
  },
  computed: {
    config() {
      return {
        title: this.$t("withdraw.pageTit"),
        color: "#ffffff",
        // backgroundColor: [1, "#24bdab"],
        // 背景图片（array则为滑动切换背景图，string为单一背景图）
        // backgroundImg: ['/static/xj.jpg','/static/logo.jpg'],
        backgroundImg: "../../static/img/header_tabber.png",
      };
    },
  },
  mounted(){
	  this.withdrawInfo();
	  this.walletInfo();
  },
  methods:{
	  radioChange(e){
	  	console.log(e)
	  	this.networkStr = e.detail.value;
	  },
	  radioChange1(e){
	  	console.log(e)
	  	this.withdraw_type = e.detail.value;
	  },
	  async withdrawInfo(){
		  let res = await $request('withdrawInfo',{})
		  if(res.data.code===0){
			  this.info = res.data.data;
			  this.networkStr= res.data.data.withdrawal_network[0]
			  return
		  }
		  uni.showToast({
		  	icon:'none',
			title:res.data.msg
		  })
	  },
	  async subBtn(){
		  console.log(this.account_list.bank.bank_account,this.account_list.usdt.bank_account)
		  if(!this.account_list.bank.bank_account&&!this.account_list.usdt.bank_account){
			  uni.showToast({
			  	icon:'none',
				title:this.$t("wallet.text7")
			  })
			  setTimeout(()=>{
				  uni.navigateTo({
				  	url:'/pages/me/wallet'
				  })
			  },1500)
			  return
		  }
		  let res = await $request('withdrawCreate',
		  {money:this.money,
		  pay_password:this.pay_password,
		  withdraw_address:this.networkStr,
		  withdraw_type:this.withdraw_type},
		  )
	      console.log(res)
		  uni.showToast({
		  	icon:'none',
			title:res.data.msg
		  })
		  if(res.data.code===0){
			  setTimeout(()=>{
			  		 uni.navigateBack({delta:1})
			  },1500)
		  }
	  },
	  
	  async walletInfo() {
	  	const res = await $request("walletInfo");
	  	const {
	  		code,
	  		data,
	  		msg
	  	} = res.data;
	  
	  	if (code !== 0) {
	  		uni.showToast({
	  			title: "钱包信息获取失败",
	  			icon: "none",
	  		});
	  
	  		return;
	  	}
	  
	  	const {
	  		balance,
	  		account_list
	  	} = data;
	  	this.account_list = account_list;
		this.accountList = [];
		if(account_list.bank.bank_account){
			this.accountList.push({value:account_list.bank.withdraw_type,label:this.$t("app.bankCard")})
			this.withdraw_type = account_list.bank.withdraw_type
		}
		if(account_list.usdt.bank_account){
			this.accountList.push({value:account_list.usdt.withdraw_type,label:'usdt'})
			if(!this.withdraw_type){
				this.withdraw_type = account_list.usdt.withdraw_type
			}
		}
	  },
  }
};
</script>

<style lang="less" >
@import "../../static/less/variable.less";
uni-page-body {
  height: auto;
}
page {
  // background: linear-gradient(0deg, #ffa563 0%, #fd7e1f 100%);
  // background-color: #fd7f20;
  background: linear-gradient(0deg, #0694B8 0%, #6BBDB4 100%);
}

.withdraw-page {
  .withdraw-scroll {
    padding-bottom: 20rpx;
    color: #fffeff;

    .title {
      margin-top: 110rpx;
      font-size: 36rpx;
      text-align: center;
      margin-bottom: 30rpx;
    }

    .withdraw-box {
      border-radius: 20rpx;
      padding: 42rpx 30rpx 85rpx;
      background-color: #fff;

      .way-box {
        margin-bottom: 36rpx;
        color: #fd7e1f;
      }

      .inp-box {
        margin-bottom: 20rpx;
        border-radius: 10rpx;
        padding: 30rpx 40rpx;
        background-color: #f5f4f9;

        .df(center, space-between);

        input {
          color: @bodyColor;
        }

        .eye-icon {
          width: 29rpx;
          height: 22rpx;
          background: url("../../static/img/icon/eye.png") no-repeat center center / 100%;
        }
      }
    }

    .tips {
      margin-top: 40rpx;

      .tit {
        margin-bottom: 34rpx;
        font-size: @bodySize;
      }

      .tips-ul {
        .tips-item {
          font-size: @descSize;
          line-height: 1.38;
        }
      }
    }

    .sub-btn {
      margin: 100rpx auto 0;
      padding: 10rpx;
      // background-color: #383838;
	  background-color: #EAF9FF;
      color: #0E97B7;
      font-size: @descSize;
      width: calc(100vw - 236rpx);
    }
  }
}
</style>
