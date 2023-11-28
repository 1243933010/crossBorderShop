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
	logout: {
		url: '/api/logout',
		type: 'POST'
	},
	userSave: {
		url: '/api/user/save',
		type: 'POST'
	},
	fileUpload: {
		name: "上传接口",
		url: '/api/file_upload',
		type: 'POST'
	},
	getUserInfo: {
		url: '/api/user_info',
		type: 'POST'
	},
	changePassword: {
		url: '/api/change_password',
		type: 'POST'
	},
	setPayPassword: {
		url: '/api/set_pay_password',
		type: 'POST'
	},
	changePayPassword: {
		url: '/api/change_pay_password',
		type: 'POST'
	},
    certifications: {
		url: '/api/certifications',
		type: 'POST'
	},
	
	rechargeCreate: {
		url: '/api/recharge/create',
		type: 'POST'
	},
	withdrawInfo: {
		url: '/api/user/withdraw_info',
		type: 'POST'
	},
	withdrawCreate: {
		url: '/api/user_withdraw_applies/create',
		type: 'POST'
	},
	rechargeIndex: {
		url: '/api/recharge/index',
		type: 'POST'
	},
	userAccount: {
		url: '/api/user/account',
		type: 'POST'
	},
	nftList: {
		url: '/api/nft/list',
		type: 'POST'
	},
	nftDeail: {
		url: '/api/nft/info',
		type: 'POST'
	},
	ordersRequest: {
		url: '/api/orders',
		type: 'POST'
	},
	userOrders: {
		url: '/api/user/order',
		type: 'POST'
	},
	userOrderDetail: {
		url: '/api/orders/info',
		type: 'POST'
	},
	levelBuy: {
		url: '/api/level/buy',
		type: 'POST'
	},
	bindAccount: {
		url: '/api/bank_accounts/bind_account',
		type: 'POST'
	},
	agreements: {
		url: '/api/agreements',
		type: 'GET'
	},
	sign: {
		url: '/api/user/sign',
		type: 'POST'
	},
	msgCount: {
		url:'/api/msg/count',
		type: 'POST',
	},
	msgList: {
		url:'/api/msg/list',
		type: 'POST',
	},
	bindBank: {
		url:'/api/bank_accounts/bind_bank',
		type: 'POST',
	},
}
export default requestObj;