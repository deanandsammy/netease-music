<template>
  <scroll class="listview" :data="data">

  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'base/scroll/scroll'

  export default {
    props: {
      data: {
        type: Array,
        default: []
      }
    },

    components: {
      Scroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
