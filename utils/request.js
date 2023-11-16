import requestObj from '@/utils/requestObj.js'

export const $request = (requestName,params,headerType=0)=>{
	let reqObj = requestObj[requestName];
	let token = uni.getStorageSync('token');
	let headerObj = [
		{
			"Content-Type":"application/json",
			"Authorization":token?`${token}`:''
		},
		{
			'Content-Type': 'application/x-www-form-urlencoded',
			"Authorization":token?`${token}`:''
		}
	]
	let url = 'http://shop.2302.goldval.top'
	let reqUrl = reqObj.otherGet?`${url}${reqObj.url}/${params}`:`${url}${reqObj.url}`
	let data = reqObj.otherGet?{}:params;
	return new Promise((resolve,reject)=>{
		uni.request({
		    url: reqUrl, 
			method:requestObj[requestName].type,
		    data,
		    header: headerObj[headerType],
		    success: (res) => {
				console.log(res,'=====================')
		        resolve(res)
		    },
			fail: (err) => {
				console.log(err,'-------------')
				reject(err)
			}
		});

	})
}