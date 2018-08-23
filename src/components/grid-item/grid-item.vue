<template>
  <div
    ref="root"
    class="grid-item-root"
    :style="{
      width: toVw($parent.width/$parent.column),
      height: toVw($parent.height/$parent.row),
      lineHeight: toVw($parent.height/$parent.row),
      borderTop: 'none'
    }"
  >
    <slot></slot>
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'libs/util'
import { getNodeIndex } from 'libs/dom'

export default {
  props: {
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    toVw (num) {
      return toVw(num)
    },
    getIndex () {
      const curDom = this.$refs.root
      const curDomPar = curDom.parentNode
      this.index = getNodeIndex(curDomPar, curDom)
      console.log(this.index)
    }
  },
  mounted () {
    this.getIndex()
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.grid-item-root
  tac()
  inline()
  border 5px solid #ccc
</style>
