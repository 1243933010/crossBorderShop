<template>
	<canvas
		canvas-id="myCanvas"
		disable-scroll
		:style="drawPadStyles"
		@touchstart="onTouchStart"
		@touchmove="onTouchMove"
		@touchend="onTouchEnd"
	/>
</template>

<script>
/**
 * zwp-draw-pad 手写板
 * @property {Number} *width 组件宽度
 * @property {Number} *height 组件高度
 * @property {String} color stroke画笔的颜色
 * @property {Number} size stroke画笔的尺寸
 * @property {Boolean} disabled 是否禁用
 */

/**
 * 在父级页面中使用ref获取到组件实例，可调用的几个方法：
 * init 清空画板的当前内容
 * back 在当前画板内容中回退到上一笔
 * save 保存当前内容为图片
 * saveCache 保存当前内容到缓存
 * restoreCache 从缓存中恢复画板内容
 * clearCache 清空缓存（不会清空当前画板内容）
 * drawByData 一般是用不到，这是给其他几个方法用的。根据传入的点数据绘制图形，格式为三级数组
 * 		像这样：data = [ [ [x, y], [x, y] ], [ [x, y], [x, y] ] ]
 * 		data[i]表示第i笔， data[i][j]表示第i笔的第j个点
 */

/**
 * 深拷贝
 * @param {Object | Array} data 要复制的内容
 */
function deepClone(data) {
	return JSON.parse(JSON.stringify(data))
}

export default {
	props: {
		width: {
			type: Number,
			required: true
		},
		height: {
			type: Number,
			required: true
		},
		color: {
			type: String,
			default: '#000'
		},
		size: {
			type: Number,
			default: 3
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},

	computed: {
		drawPadStyles({ width, height }) {
			return `width: ${width}px; height: ${height}px`
		}
	},

	methods: {
		onTouchStart(e) {
			const { disabled, points, originData } = this
			if (disabled) return
			const { x, y } = e.changedTouches[0]
			points.push([x, y])
			originData.push([[x, y]])
		},
		onTouchMove(e) {
			const { disabled, points, originData, draw } = this
			if (disabled) return
			const { x, y } = e.changedTouches[0]
			points.push([x, y])
			originData[originData.length - 1].push([x, y])
			draw()
		},
		onTouchEnd() {
			this.points = []
		},
		draw() {
			const { ctx, points } = this
			if (points.length < 2) return
			ctx.moveTo(...points.shift())
			ctx.lineTo(...points[0])
			ctx.stroke()
			ctx.draw(true)
		},
		/**
		 * 清空画布
		 */
		init() {
			const { ctx, width, height } = this
			ctx.clearRect(0, 0, width, height)
			ctx.draw()
			this.originData = []
		},
		/**
		 * 回退到上一笔
		 */
		back() {
			const { originData, drawByData } = this
			originData.pop()
			drawByData(originData)
		},
		/**
		 * 根据传入的数据绘制
		 * @param {Array} data
		 */
		drawByData(data) {
			const { init, ctx } = this
			if (!data || !data.length) return init()
			const tempData = deepClone(data)
			while (!!tempData.length) {
				const lineData = tempData.shift()
				ctx.moveTo(...lineData.shift())
				while (!!lineData.length) ctx.lineTo(...lineData.shift())
			}
			ctx.stroke()
			ctx.draw()
		},
		/**
		 * 临时保存画布上的数据
		 * @param {Any} key 用于访问的key
		 * @param {Boolean} isInit 保存完毕后是否清空画布，默认为true
		 */
		saveCache(key, isInit = true) {
			const { cache, originData, init } = this
			const temp = deepClone(originData)
			cache.set(key, temp)
			if (isInit) init()
		},
		/**
		 * 用缓存的key恢复画布
		 * @param {Any} key 用于访问的key
		 */
		restoreCache(key) {
			const { drawByData, cache } = this
			this.originData = cache.get(key)
			drawByData(this.originData)
		},
		/**
		 * 清空缓存数据
		 */
		clearCache() {
			this.cache.clear()
		},
		save(options) {
			return new Promise((success, fail) => {
				const { width, height, canvasId } = this
				uni.canvasToTempFilePath(
					{
						x: 0,
						y: 0,
						width,
						height,
						...options,
						canvasId: 'myCanvas',
						success,
						fail
					},
					this
				)
			})
		}
	},

	created() {
		const { color, size } = this
		const ctx = uni.createCanvasContext('myCanvas', this)
		ctx.setStrokeStyle(color)
		ctx.setLineWidth(size)
		ctx.setLineCap('round')
		ctx.setLineJoin('round')
		this.ctx = ctx
		this.points = []
		this.originData = []
		this.cache = new Map()
	}
}
</script>
