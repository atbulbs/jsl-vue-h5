<template>
  <div
    v-show="isShow"
    class="toast-root"
    :style="{
      top: `${ postionMap[position] }%`
    }"
  >
    {{ text }}
  </div>
</template>


<script type="text/ecmascript-6">
export default {
  props: {
    text: {
      type: String,
      default: 'toast'
    }
  },
  data () {
    return {
      isShow: false,
      position: 'middle',
      postionMap: {
        'middle': 50,
        'top': 15,
        'bottom': 85
      }
    }
  },
  mounted () {
    console.log(this)
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.toast-root
  position absolute
  top 50%
  left 50%
  transform translate(-50%, -50%)
  padding 15px 25px 15px
  background rgba(0,0,0,0.70)
  border-radius 10px
  color #fff
  font-size 14px
  letter-spacing 0
  text-align center
</style>
