<template>
	<div>
		<detail-banner :bannerImg="bannerImg" :sightName="sightName" :gallaryImgs="gallaryImgs"></detail-banner>
		<detail-header></detail-header>
		<detail-list :list="list"></detail-list>
		<div class="content"></div>
	</div>
</template>
<script>
import axios from 'axios' 
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
	name: 'Detail',
	components: {
		DetailBanner,
		DetailHeader,
		DetailList
	},
	data () {
		return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
			list: []
		}
	},
  methods: {
    getDetailInfo () {
      axios.get(process.env.VUE_APP_API + '/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDetailInfoSucc)
    },
    handleGetDetailInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>
<style lang="stylus" scoped>
	.content
		height: 50rem
</style>