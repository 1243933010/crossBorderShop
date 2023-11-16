let requestObj = {
	region:{
		url:'/api/register',
		type:'POST'
	},
	bankAccounts:{
		url:'/api/bank_accounts/index',
		type:'POST'
	},
	
	getMailOrderList:{
		url:'/yoursender/api/mailOrder/getMailOrderList',
		type:'GET'
		
	},
	addLogisticOrder:{
		url:'/yoursender/api/mailOrder/addLogisticOrder',
		type:'POST'
	},
	wechatLogin:{
		url:'/yoursender/api/wechat/login',
		type:'GET',
		otherGet:true
	},
}
export default requestObj;