import requestObj from '@/utils/requestObj.js'
export let url = 'http://shop.2302.goldval.top'
export const $request = (requestName,params,headerType=0)=>{
	let reqObj = requestObj[requestName];
	let token = uni.getStorageSync('token');
	let language = uni.getLocale();
	console.log(language)
	let languageObj = {'zh-Hans':'zh-CN','en':'en'}
	let headerObj = [
		{
			"Content-Type":"application/json",
			"Authorization":token?`${token}`:'',
			"Accept":"application/json",
			"Accept-Language":languageObj[language]
		},
		{
			"Content-Type": "application/x-www-form-urlencoded",
			"Authorization":token?`${token}`:'',
			"Accept":"application/json",
			"Accept-Language":languageObj[language]
		}
	]
	
	let reqUrl = reqObj.otherGet?`${url}${reqObj.url}/${params}`:`${url}${reqObj.url}`
	let data = reqObj.otherGet?{}:params;
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: reqUrl, 
			method:requestObj[requestName].type,
		    data,
		    header: headerObj[headerType],
		    success: (res) => {
				// console.log(res,'=====================')
				if(res.data.code==401){
					uni.clearStorageSync();
					uni.reLaunch({
						url:'/pages/login/index'
					})
					return
				}
		        resolve(res)
		    },
			fail: (err) => {
				// console.log(err,'-------------')
				reject(err)
			}
		});

	})
}