<template>
 <div class="grid-demo-root">
    <jsl-grid
      class="grid"
      :row="3"
      :column="3"
    >
      <jsl-grid-item
        v-for="(item, index) in list9"
        :key="index + 'grid-demo-item'"
      >
        <div>{{ index }}</div>
      </jsl-grid-item>
    </jsl-grid>
    <jsl-grid
      class="grid"
    >
      <jsl-grid-item
        v-for="(item, index) in list20"
        :key="index + 'grid-demo-item'"
      >
        <div>{{ index }}</div>
      </jsl-grid-item>
    </jsl-grid>
 </div>
</template>


<script type="text/ecmascript-6">

export default {
  data () {
    return {
      list9: Array(9),
      list20: Array(20)
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

.grid-demo-root
  width 375px
  min-height 623px
  position absolute
  padding-bottom 35px
  >.grid
    margin-top 35px
</style>
