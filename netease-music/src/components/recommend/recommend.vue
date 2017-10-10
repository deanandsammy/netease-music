<template>
  <div class="recommend" ref="recommend">
    <div class="slider-wrapper" ref="sliderWrapper">
      <slider>
        <div v-for="item in recommends">
          <a :href="item.linkUrl">
            <img class="needsclick" :src="item.picUrl">
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'
  import {getCommend} from 'api/getCommend'

  export default {
    data() {
      return {
        recommends: [],
        discList: []
      }
    },

    created() {
      this._getRecommend()
    },

    methods: {
      _getRecommend() {
        getCommend().then((res) => {})
      }
    },

    components: {
      Slider
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">

</style>
