<template>
 <div class="btn-scalable-jump-demo-root">
   <jsl-btn-scalable-jump
    class="btn"
    v-for="(item, index) in btnList"
    :key="index + 'select'"
    :toPage="item.toPage"
    :query="item.query"
    :top="item.top"
    :text="'to'+ ' ' + item.toPage"
   />
 </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      btnList: [
        {
          top: 50,
          toPage: -1
        },
        {
          top: 250,
          toPage: 'grid-demo',
          query: {
            id: '123abc'
          }
        },
        {
          top: 450,
          toPage: 'button-demo'
        }
      ]
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.btn-scalable-jump-demo-root
  width 375px
  min-height 667px
  background linear-gradient(to bottom, #8192F3, #D8FBF0)
  padding-bottom 35px
  position relative
  >.btn
    margin-top 35px
</style>
