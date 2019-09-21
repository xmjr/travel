<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont icon-fanhui"></div>
		</div>
		<div class="header-input">
			<span class="iconfont icon-sousuo"></span>
			输入城市/景点/游玩主题</div>
		<div class="header-right">
			城市
			<span class="iconfont icon-jiantou"></span>
		</div>
	</div>
</template>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	.header 
		display: flex
		line-height: .86rem
		color: #fff
		background: $bgColor
		.header-left
			width: .64rem
			float: left
			.icon-fanhui
				text-align: center
				font-size: .4rem
		.header-right
			width: 1.24rem
			float: right
			text-align: center
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
<script>
	export default {
		name: 'HomeHeader'
	}
</script>