<template>
	<!-- wrapper是为了防止布局抖动 -->
	<div class="wrapper">
	  <swiper :options="swiperOption" v-if="showSwiper">
	    <swiper-slide v-for="item of swiperList" :key="item.id">
	    	<img class="swiper-img" :src="item.imgUrl" alt="">
	    </swiper-slide>
	    <div class="swiper-pagination"  slot="pagination"></div>
	  </swiper>
	</div>
</template>
<script>
export default {
	name: 'HomeSwiper',
	data () {
		return {
			swiperOption: {
				pagination: {
					// 分页原点
					el: '.swiper-pagination'
				},
				loop: true,  // 开启循环轮播
			},
			swiperList: [{
				id: '0001',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/3ff47fa622d07edad492c2859a5ad32f.jpg_750x200_3df30168.jpg'
			}, {
				id: '002',
				imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/502edc9723264c9dc53d26d2ca9680e0.jpg_750x200_b4981e1c.jpg'
			}]
		}
	},
	computed: {
		// 计算属性，解决数据传递过来时，轮播图显示最后一张
		showSwiper() {
			return this.swiperList.length
		}
	}
}
</script>
<style lang="stylus" scoped>
	// 样式穿透
	.wrapper >>> .swiper-pagination-bullet-active
		background: #fff
	.wrapper
		overflow: hidden
		width:100%
		height: 0
		padding-bottom: 26.7%
		background: #ccc
		.swiper-img
			width: 100%
</style>