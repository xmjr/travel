<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont icon-fanhui"></div>
		</div>
		<router-link to="/city" class="header-input">
			<span class="iconfont icon-sousuo"></span>
			输入城市/景点/游玩主题</router-link>
		<router-link to="/city">
			<div class="header-right">
				{{this.city}}
				<span class="iconfont icon-jiantou"></span>
			</div>
		</router-link>
	</div>
</template>
<script>
	import { mapState } from 'vuex'

	export default {
		name: 'HomeHeader',
		computed: {
			...mapState(['city'])
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header 
		display: flex
		line-height: $headerHeight
		color: #fff
		background: $bgColor
		.header-left
			width: .64rem
			float: left
			.icon-fanhui
				text-align: center
				font-size: .4rem
		.header-right
			min-width: 1.04rem
			padding: 0 .1rem
			float: right
			text-align: center
			color: #fff
			.icon-jiantou
				margin-left: -.04rem
				font-size: .24rem
		.header-input
			flex: 1
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .12rem
			padding-left: .2rem
			color: #ccc
			background: #fff
			border-radius: .1rem


</style>