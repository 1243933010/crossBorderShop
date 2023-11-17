let requestObj = {
	region: {
		name: "注册",
		url: '/api/register',
		type: 'POST'
	},
	login: {
		name: "登录",
		url: '/api/login',
		type: 'POST'
	},
	vipList: {
		name: "VIP列表",
		url: "/api/level/list",
		type: "POST"
	},
	walletInfo: {
		name: "获取钱包信息",
		url: "/api/bank_accounts/index",
		type: "POST"
	},
	getRechargeQrCode: {
		name: "充值获取收款信息",
		url: "/api/recharge/get_recharge_qr_code",
		type: "POST"
	},

	bankAccounts: {
		url: '/api/bank_accounts/index',
		type: 'POST'
	},
	adverts: {
		url: '/api/adverts',
		type: 'POST'
	},
	notices: {
		url: '/api/notices',
		type: 'POST'
	},
	invitation: {
		url: '/api/user/invitation',
		type: 'POST'
	},
	myTeam: {
		url: '/api/user/my_team',
		type: 'POST'
	},
	getUserInfo: {
		url: '/api/user_info',
		type: 'POST'
	},



	getMailOrderList: {
		url: '/yoursender/api/mailOrder/getMailOrderList',
		type: 'GET'

	},
	addLogisticOrder: {
		url: '/yoursender/api/mailOrder/addLogisticOrder',
		type: 'POST'
	},
	wechatLogin: {
		url: '/yoursender/api/wechat/login',
		type: 'GET',
		otherGet: true
	},
}
export default requestObj;