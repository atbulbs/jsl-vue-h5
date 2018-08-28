<template>
  <div class="close-demo-root">
    <jsl-close class="close" />
    <jsl-close
      class="close"
      circle
      size="55"
    />
  </div>
</template>


<script type="text/ecmascript-6">

export default {
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.close-demo-root
  width 375px
  min-height 623px
  position absolute
  bgc(#bbb)
  .close
    margin 20px auto
</style>
