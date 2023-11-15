

export  const setTabbar = ()=>{
	console.log('111')
	const tabbar = [{
				"pagePath": "pages/index/index",
				"iconPath": "static/img/tabbar/home.png",
				"selectedIconPath": "static/img/tabbar/home_select.png",
				"text": `${this.$t('app.home')}`
			
			}, {
				"pagePath": "pages/join/join",
				"iconPath": "static/img/tabbar/join.png",
				"selectedIconPath": "static/img/tabbar/join_select.png",
				"text": `${this.$t('app.join')}`
			},{
				"pagePath": "pages/classification/classification",
				"iconPath": "static/img/tabbar/classification.png",
				"selectedIconPath": "static/img/tabbar/classification_select.png",
				"text": `${this.$t('app.classification_select')}`
			},{
				"pagePath": "pages/me/me",
				"iconPath": "static/img/tabbar/me.png",
				"selectedIconPath": "static/img/tabbar/me_select.png",
				"text":`${this.$t('app.me')}`
			}]
	let index = 4;
	// for(let i = 0;i<4;i++){
	// 	uni.setTabBarItem({
	// 	  index: i,
	// 	  pagePath:tabbar[i].pagePath,
	// 	  text: tabbar[i].text,
	// 	  iconPath: tabbar[i].iconPath,
	// 	  selectedIconPath: tabbar[i].selectedIconPath
	// 	})
	// }
	uni.setTabBarItem({
	  index: 1,
	  pagePath:"pages/index/index",
	  text: "xxx",
	  iconPath: 'static/img/tabbar/home.png',
	  selectedIconPath: "static/img/tabbar/join_select.png",
	  success: (res) => {
	  	console.log(res,'======')
	  },fail: (fail) => {
	  	console.log(fail,'------}}')
	  }
	},)
}