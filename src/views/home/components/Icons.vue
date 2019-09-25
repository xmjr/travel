<template>
	<div class="icons">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="icon" v-for="item of page" :key="item.id">
					<div class="icon-img">
						<img class="icon-img-content" :src="item.imgUrl">
					</div>
					<p class="icon-desc">{{item.desc}}</p>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>
<script>
	export default {
		name: 'HomeIcons',
		props: {
			list: Array
		},
		data() {
			return {
				swiperOption: {
					autoplay: false,
					pagination: {
						// 分页原点
						el: '.swiper-pagination'
					}
				}
			}
		},
		computed: {
			// 根据数据项目的不同，自动构建icons多页切换功能
			pages() {
				const pages = []
				this.list.forEach((item, index) => {
					// 将iconList中index小于等于8的项放入到pages数组的第0项中，以此类推
					const page = Math.floor(index / 8)
					if (!pages[page]) {
						pages[page] = []
					}
					pages[page].push(item)
				})
				return pages
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'
	@import '~@/assets/styles/mixins.styl'

	.icons >>> swiper
		overflow: hidden
		width:100%
		height: 0
		padding-bottom: 55%
	.icons >>> .swiper-slide 
		padding-bottom: 0.5rem
	.icons >>> .swiper-pagination-bullet
		width: 0.12rem
		height: 0.12rem
	.icons >>> .swiper-pagination-bullet-active
		background: rgba(0,175,190,.8)
	.icons
		margin-top: .2rem
		.icon 
			position: relative
			overflow: hidden
			float: left
			width: 25%
			height: 0
			padding-bottom: 25%
			.icon-img
				position: absolute
				top: 0
				left: 0
				right: 0
				bottom: .44rem
				box-sizing: border-box
				padding: .1rem
				.icon-img-content
					display: block
					margin: 0 auto
					height: 100%
			.icon-desc
				position: absolute
				left: 0
				right: 0
				bottom: 0
				height: .44rem
				line-height: .44rem
				text-align: center
				color: $darkTextColor
				ellipsis()

</style>