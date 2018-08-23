<template>
 <div class="grid-demo-root">
   <jsl-grid
   >
    <jsl-grid-item
      v-for="(item, index) in list"
      :key="index + 'grid-demo-item'"
    >
      <div>{{ index }}</div>
    </jsl-grid-item>
   </jsl-grid>
 </div>
</template>


<script type="text/ecmascript-6">
import JslGrid from 'components/grid/grid'
import JslGridItem from 'components/grid-item/grid-item'

export default {
  data () {
    return {
      list: Array(20)
    }
  },
  components: {
    JslGrid,
    JslGridItem
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

.grid-demo-root
  width 375px
  height 623px
  position absolute
  padding-top 35px
</style>
