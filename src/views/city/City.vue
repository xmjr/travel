<template>
	<div>
		<city-header></city-header>
		<city-search :cities="cities"></city-search>
		<city-list 
			:cities="cities" 
			:hotCities="hotCities"
			:letter="letter"
		></city-list>
		<city-alphabet 
			:cities="cities" 
			@change="handleLetterchange"
		></city-alphabet>
	</div>
</template>
<script>
	import axios from 'axios'
	import CityHeader from './components/Header.vue'
	import CitySearch from './components/Search.vue'
	import CityList from './components/List.vue'
	import CityAlphabet from './components/Alphabet.vue'

	export default {
		name: 'City',
		components: {
			CityHeader,
			CitySearch,
			CityList,
			CityAlphabet
		},
		data() {
			return {
				cities: {},
				hotCities: [],
				letter: ''
			}
		},
		methods: {
			getCityInfo () {
				axios.get(process.env.VUE_APP_API + '/city.json')
						.then(this.handleGetCityInfoSucc)
			},
			handleGetCityInfoSucc(res) {
				res = res.data
				if (res.ret && res.data) {
					const data = res.data
					this.cities = data.cities
					this.hotCities = data.hotCities
				}
			},
			handleLetterchange (letter) {
				this.letter = letter
			}
		},
		mounted () {
			this.getCityInfo()
		}
	}
</script>
<style>
	
</style>