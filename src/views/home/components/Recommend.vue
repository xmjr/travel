<template>
	<div>
		<div class="title">热销推荐</div>
		<ul>
			<li class="item border-bottom" v-for="item of recommendList" :key="item.id">
				<img class="item-img" :src="item.imgUrl" />
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					<button class="item-button">查看详情</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		name: 'HomeRecommend',
		data() {
			return {
				recommendList: [{
					id: '001',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_200x200_32e22bed.jpg',
					title: '奥林匹克塔',
					desc: '来北京必去的景点，赶快来体验吧'
				}, {
					id: '002',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_200x200_0938a8f2.jpg',
					title: '北京野生动物园',
					desc: '敢于森林之王近距离接触吗？'
				}, {
					id: '003',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
					title: '故宫',
					desc: '世界五大宫之首，穿越与您近在咫尺'
				}, {
					id: '004',
					imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
					title: '北京欢乐谷',
					desc: '亚洲唯一飞行式过山车等你来挑战'
				},]
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/mixins.styl'

	.title
		margin-top: .2rem
		line-height: .8rem
		background: #eee
		text-indent: .2rem
	.item
		overflow:hidden
		display: flex
		height: 1.9rem
		.item-img
			width: 1.7rem
			height: 1.7rem
			padding: .1rem
		.item-info
			flex: 1
			padding: .1rem
			min-width: 0
			.item-title
				line-height: .54rem
				font-size: .32rem
				ellipsis()
			.item-desc
				line-height: .4rem
				color: #ccc
				ellipsis()
			.item-button
				margin-top: .2rem
				background: #ff9300
				padding: .02rem .2rem
				border-radius: .06rem
				color: #fff

</style>