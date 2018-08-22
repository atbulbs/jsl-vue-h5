<template>
  <div class="nomore-tip-root">
    <div
      class="line"
      :style="{
        width: toVw(lineWidth)
      }"
    >
    </div>
    <span class="text">
      {{ text }}
    </span>
    <div
      class="line"
      :style="{
        width: toVw(lineWidth)
      }"
    >
    </div>
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'libs/util'

export default {
  props: {
    text: {
      type: String,
      default: '亲，我们是有底线的哦～'
    },
    lineWidth: {
      default: 34
    }
  },
  methods: {
    toVw (num) {
      return toVw(num)
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.nomore-tip-root
  margin-top 25px
  height 22px
  width 375px
  overflow hidden
  tac()
  .line
    stroke-line(34px, -5px)
    display inline-block
</style>
