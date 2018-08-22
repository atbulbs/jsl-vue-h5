<template>
 <div class="jsl-navbar-root">
   <div class="back"></div>
   <div class="title">{{ title }}</div>
 </div>
</template>


<script type="text/ecmascript-6">
export default {
  props: {
    title: {
      type: String,
      default: '导航条'
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/components/theme"
@import "~styles/mixin"

.jsl-navbar-root
  width 375px
  text-align center
  text-line(44px, 18px)
  position relative
  background-color $color-theme
  >.back
    with-bg(9px, 17px, './back-arrow.png')
    ab-l(18px)
    extend-click()
  >.title
    color #fff
    letter-spacing -0.43px
    font-size 18px
    font-weight 600
</style>

