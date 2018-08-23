<template>
  <div
    class="grid-root"
    :style="{
      width: toVw(width),
      height: toVw(height)
    }"
  >
    <slot></slot>
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'libs/util'

export default {
  props: {
    width: {
      type: Number,
      default: 375
    },
    height: {
      type: Number,
      default: 375
    },
    row: {
      type: Number,
      default: 4
    },
    column: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {

    }
  },
  methods: {
    toVw (num) {
      return toVw(num)
    }
  },
  components: {

  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.grid-root
  display flex
  flex-wrap wrap
</style>
