## 手写板、签字板、画板
___
### 示例代码
```html
<template>
	<view>
		<zwp-draw-pad width="500" height="500" />
	</view>
</template>
```

### 使用说明

| 名称        | 类型   |  默认值  | 描述 |
| --------   | -----:  | :----:  | :----:  |
| width | Number   |   -  |组件宽度，必填|
| height  |  Number  |  - |组件高度，必填|
| color| String |  #000 |画笔颜色|
| size | Number |  3 |画笔粗细|
| disabled | Boolean |  false  |是否禁用|

### 内部方法

| 名称        | 描述   | 返回值 |
| --------   | -----:  | :-----:  | 
| init | 清空画板的当前内容  | - |
| back | 在当前画板内容中回退到上一笔  | - |
| save | 保存当前内容为图片  | Promise |
| saveCache | 保存当前内容到缓存  | - |
| restoreCache | 从缓存中恢复画板内容  | - |
| clearCache | 清空缓存（不会清空当前画板内容）  | - |
| drawByData | 根据传入的点数据绘制图形  | - |

### ** 注意事项 **
1. `init`方法仅清空当前画板的内容，不会清除缓存数据
2. `save`方法的参数是options对象: 详情参考uniapp官方文档
   
   ```js
	const options = {
		x,
		y,
		width,
		height,
		destWidth,
		destHeight,
		fileType,
		quality
	} // 就这几个属性，其他的不要传；这些属性都有默认值，所以一般不用传options参数,直接调save()就可以了
	this.$refs.drawPad.save(options).then(res => {
		console.log('保存图片的地址', res.tempFilePath)
	})
	```
3. `saveCache`方法的第一个参数为key，之后需要恢复画布内容就会用到对应的key；方法使用ES6的Map来实现，所以key的类型可以随便定义无所谓；第二个参数为保存后是否清空画布，默认为true；
   
   ```js
	const globalKey = Symbol('画布第一页的内容')
	this.$refs.drawPad.saveCache(globalKey)
	```
4. `restoreCache`方法使用key来恢复画布内容
   
   ```js
	this.$refs.drawPad.restoreCache(globalKey) // globalKey是上一步保存用的key
	```
5. `clearCache`清空缓存中的数据，不会清空当前画布内容，和`init`刚好相反
6. `drawByData`这个方法一般是用不到，这是给其他几个方法用的。根据传入的点数据绘制图形，格式为三级数组
   
	 ```js
	data = [
		[[x, y], [x, y]],
		[[x, y], [x, y]],
		[[x, y], [x, y]],
		...
	] // data[i]表示第i笔， data[i][j]表示第i笔的第j个点
	```
7. 具体用法请下载示例项目查看