<template>
  <div class="recommend" ref="recommend">
    <div class="slider-wrapper" ref="sliderWrapper">
      <slider>
        <div>
          <a>
            <img>
          </a>
        </div>
      </slider>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Slider from 'base/slider/slider'

  export default {
    data() {
      return {
        recommends: [],
        discList: []
      }
    },

    components: {
      Slider
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus">

</style>
