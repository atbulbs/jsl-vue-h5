<template>
  <div
    class="avatar-root"
    ref="root"
    :style="{
      backgroundImage: `url(${img})`,
      width: toVw(size),
      height: toVw(size)
    }">
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'libs/util'

export default {
  props: {
    img: {
      type: String,
      default: 'https://avatars2.githubusercontent.com/u/31515577?s=460&v=4'
    },
    size: {
      default: 25
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
.avatar-root
  display inline-block
  avatar(30px)
</style>
