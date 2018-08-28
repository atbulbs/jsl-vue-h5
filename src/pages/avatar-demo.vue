<template>
  <div class="avatar-demo-root">
    <jsl-avatar class="avatar" />
    <jsl-avatar class="avatar" size="55" />
  </div>
</template>


<script type="text/ecmascript-6">

export default {
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.avatar-demo-root
  width 375px
  min-height 623px
  position absolute
  >.avatar
    display block
    margin 20px auto
</style>
