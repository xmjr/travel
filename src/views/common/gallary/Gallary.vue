<template>
	<div class="container" @click="handleGallaryClick">
		<div class="wrapper">
		  <swiper :options="swiperOption">
		    <swiper-slide v-for="(item,index) in imgs" :key="index">
		    	<img class="gallary-img" :src="item" alt="">
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>

		</div>
	</div>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	name: 'CommonGallary',
	components: {
		swiper,
		swiperSlide
	},
	props: {
		imgs: {
			type: Array,
			default () {
				return []
			}
		}
	},
	data () {
		return {
			swiperOption: {
				// 分页原点
				pagination: {
					el: '.swiper-pagination',
					type: 'fraction'
				},
				initialSlide: 0,
				loop: true,  // 开启循环轮播
				autoplay: true,  // 自动轮播,
				observeParents: true,
				observer: true
			}
		}
	},
	methods: {
		handleGallaryClick () {
			this.$emit('close')
		}
	}
}
</script>
<style lang="stylus" scoped>
	.container >>> .swiper-container
		overflow: inherit
	.container
		display: flex
		flex-direction: column
		justify-content: center
		z-index: 99
		position: fixed
		left: 0
		right: 0
		top: 0
		bottom: 0
		background: #000
		.wrapper
			height: 0
			width: 100%
			padding-bottom: 100%
			.gallary-img
				width: 100%
			.swiper-pagination
				color: #fff
				bottom: -1rem
				
</style>