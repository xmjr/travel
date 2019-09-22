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
<script>
	export default {
		name: 'HomeIcons',
		data() {
			return {
				swiperOption: {
					pagination: {
						// 分页原点
						el: '.swiper-pagination'
					}
				},
				iconList: [{
					id: '001',
					desc: '景点门票',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'
				}, {
					id: '002',
					desc: '故宫',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png'
				}, {
					id: '003',
					desc: '北京必游',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png'
				}, {
					id: '004',
					desc: '水上乐园',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png'
				}, {
					id: '005',
					desc: '一日游',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png'
				}, {
					id: '006',
					desc: '古北水镇',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/67/9a1678221b8e0e02.png'
				}, {
					id: '007',
					desc: '动植物园',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png'
				}, {
					id: '008',
					desc: '奥林匹克塔',
					imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png'
				}, {
					id: '009',
					desc: '北京世园会',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b4511345827006994aa1980a3886f0ac.png'
				}, {
					id: '010',
					desc: '优惠券',
					imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/bf88c62458044ca2ef9d733690eef3fc.png'
				}]
			}
		},
		computed: {
			pages() {
				const pages = []
				this.iconList.forEach((item, index) => {
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