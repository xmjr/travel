<template>
	<div>
		<div class="search">
			<input 
				class="search-input" 
				type="text" 
				placeholder="输入城市名或拼音"
				v-model="keyword"
			>
		</div>
		<div 
			class="search-content" 
			ref="search"
			v-show="keyword"
		>
			<ul>
				<li 
					class="search-item border-bottom" 
					v-for="item of list"
					:key = "item.id"
					@click="handleCityClick(item.name)"
				>	{{item.name}}
				</li>
				<li 
					class="search-item border-bottom"
					v-show="hasNoData">没有搜索到相应的景点</li>
			</ul>
		</div>		
	</div>
</template>
<script>
	import Bscroll from 'better-scroll'
	import { mapMutations } from 'vuex'

	export default {
		name: 'CitySearch',
		props: {
			cities: Object
		},
		data () {
			return {
				keyword: '',
				list: [],
				timer: null
			}
		},
		computed: {
			hasNoData() {
				return !this.list.length
			}
		},
		watch: {
			keyword () {
				if(this.timer) {
					clearTimeout(this.timer)
				}
				if (!this.keyword) {
					this.list = []
					return 
				}

				this.timer = setTimeout(() => {
					const result = []
					for (let i in this.cities) {
						this.cities[i].forEach((value) => {
							if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
								result.push(value)
							}
						})
					}
					this.list = result
				}, 100)
			}
		},
		methods: {
			handleCityClick (city) {
				this.changeCity(city)
				this.$router.push('/')
			},
			...mapMutations(['changeCity'])
		},
		mounted () {
			this.scroll = new Bscroll(this.$refs.search, {
				click:true
			})
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'

	.search
		position: relative
		z-index: 10
		height: .72rem
		padding: 0 .1rem
		background: $bgColor
		.search-input
			box-sizing: border-box
			width: 100%
			height: .62rem
			padding: 0 .1rem
			line-height: .62rem
			text-align: center
			color: #666
			border-radius: .06rem
	.search-content
		z-index: 1
		overflow: hidden
		position: absolute
		top: 1.58rem
		left: 0
		right: 0
		bottom: 0
		background: #eee
		.search-item 
			line-height: .62rem
			padding-left: .2rem
			color: #666
			background: #fff
</style>