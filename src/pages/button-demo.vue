<template>
  <div class="button-demo-root">
    <jsl-button
      class="btn"
      text="button"
    />
    <jsl-button
      class="btn"
      color="red"
      bgColor="green"
    />
    <jsl-button
      class="btn"
      color="#000"
      bgColor="#f00"
      radius="10"
      height="37"
    />
  </div>
</template>


<script type="text/ecmascript-6">

export default {
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.button-demo-root
  width 375px
  min-height 623px
  position absolute
  >.btn
    margin-top 20px
</style>
