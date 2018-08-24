<template>
  <div
    ref="root"
    class="grid-item-root"
    :style="{
      width: toVw($parent.width/$parent.column),
      height: toVw($parent.height/$parent.row),
      lineHeight: toVw($parent.height/$parent.row),
      color: 'red',
      borderBottom: `${ index >= $parent.column * ($parent.row -1 ) ? '1px solid #ccc' : 'none' }`,
      borderTop: `${'1px solid #ccc'}`,
      borderLeft: `${ index % $parent.column ? '1px solid #ccc' : 'none' }`
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
</style>
