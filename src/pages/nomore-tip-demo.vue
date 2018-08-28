<template>
  <div class="nomore-tip-demo-root">
    <jsl-nomore-tip class="demo" />
    <jsl-nomore-tip
      class="demo"
      text="这是我的底线"
      lineWidth="100"
    />
  </div>
</template>


<script type="text/ecmascript-6">

export default {
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.nomore-tip-demo-root
  width 375px
  min-height 623px
  position absolute
  >.demo
    margin 20px auto
</style>
