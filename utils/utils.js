

export  const setTabbar = ($t)=>{
	console.log('111',$t)
	const tabbar = [{
				"text": `${$t('app.home')}`
			
			}, {
				"text": `${$t('app.join')}`
			},{
				"text": `${$t('app.classification')}`
			},{
				"text":`${$t('app.me')}`
			}]
	let index = 4;
	for(let i = 0;i<4;i++){
		uni.setTabBarItem({
		  index: i,
		  text: tabbar[i].text,
		})
	}
	
}