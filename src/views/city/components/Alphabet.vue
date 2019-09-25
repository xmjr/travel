<template>
	<ul class="list">
		<li 
			class="item" 
			v-for="item of letters" 
			:key="item"
			:ref="item"
			@touchstart="handleTouchStart"
			@touchmove="handleTouchMove"
			@touchend="handleTouchEnd"
			@click="handleLetterClick"
		>
			{{item}}
		</li>
	</ul>
</template>
<script>
	export default {
		name: 'CityAlphabet',
		props: {
			cities: Object
		},
		data () {
			return {
				touchStatus: false,
				startY: 0,
				timer: null
			}
		},
		updated () {
			// A字母距离header区域下沿的高度
			this.startY = this.$refs['A'][0].offsetTop
		},
		computed: {
			letters () {
				const letters = []
				for (let i in this.cities) {
					letters.push(i)
				}
				return letters;   // ['A', 'B', 'C']
			}
		},
		methods: {
			handleLetterClick (e) {
				this.$emit('change', e.target.innerText)
			},
			handleTouchStart () {
				this.touchStatus = true
			},
			handleTouchMove (e) {
				if (this.touchStatus) {
					if (this.timer) {
						clearTimeout(this.timer)
					}
					this.timer = setTimeout(() => {
						// 手指距离header区域下沿的高度（79px为header区域的高度）
						const touchY = e.touches[0].clientY -79
						// 当前字母下标，20px为每个字母的高度
						const index = Math.floor((touchY - this.startY) / 20)

						if (index >= 0 && index < this.letters.length) {
							this.$emit('change', this.letters[index])
						}
					}, 16)
				}
			},
			handleTouchEnd () {
				this.touchStatus = false
			}
		}
	}
</script>
<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles.styl'

	.list
		display: flex
		flex-direction: column
		justify-content: center
		position: absolute
		top: 1.58rem
		right: 0
		bottom: 0
		width: .4rem
		.item
			line-height: .4rem
			text-align: center
			color: $bgColor
</style>