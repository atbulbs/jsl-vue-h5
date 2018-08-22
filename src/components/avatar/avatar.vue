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
import defaultImg from './avatar.jpg'

export default {
  props: {
    img: {
      type: String,
      default: defaultImg
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
