<template>
	<div>
		<router-link tag="div" to="/" class="header-abs" v-show="showAbs">
			<div class="iconfont header-abs-back">&#xe624;</div>
		</router-link>
		<div 
			class="header-fixed" 
			v-show="!showAbs"
			:style="opacityStyle"
		>
			<router-link to="/">
				<div class="iconfont header-fixed-back">&#xe624;</div>
		  </router-link>
			景点详情
		</div>
	</div>
</template>
<script>
	export default {
		name: 'DetailHeader',
		data () {
			return {
				showAbs: true,
				opacityStyle: {
					opacity: 0
				}
			}
		},
		methods: {
			handleScroll () {
				const top = document.documentElement.scrollTop
				// 当滚动距离大于60px时，显示
				if(top > 60) {
					// 滚动距离在60px和140px之间时，出现渐隐渐显效果；超过140px，则opacity值为1，完全显示。
					let opacity = top / 140
					opacity = opacity > 1 ? 1:opacity
					this.opacityStyle = {
						opacity
					}
					this.showAbs = false
				} else {
					this.showAbs = true
				}
			}
		},
		activated () {
			window.addEventListener('scroll', this.handleScroll)
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'

	.header-abs
		position: absolute
		top: .2rem
		left: .2rem
		width: .8rem
		height: .8rem
		line-height: .8rem
		text-align: center
		border-radius: .4rem
		background: rgba(0, 0, 0, .8)
		.header-abs-back
			color: #fff
			font-size: .4rem
	
	.header-fixed
		position: fixed
		top: 0
		left: 0
		right: 0
		height: $headerHeight
		line-height: $headerHeight
		text-align: center
		color: #fff
		font-size: .32rem
		background: $bgColor
		.header-fixed-back
			position: absolute
			top: 0
			left: 0
			width: .64rem
			text-align: center
			font-size: .4rem
			color: #fff
</style>