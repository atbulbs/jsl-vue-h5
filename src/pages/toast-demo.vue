<template>
  <div class="toast-demo-root">
    <jsl-button
      class="toast-demo-btn"
      v-for="(item, index) in btnList"
      :text="item.position + ' ' + item.duartion + 'ms'"
      :key="index + 'toast-demo-item'"
      @click.native="$jsl.toast(item.position + ' ' + item.duartion + 'ms', item.position, item.duartion)"
    />
  </div>
</template>


<script type="text/ecmascript-6">

export default {
  data () {
    return {
      btnList: [
        {
          position: 'top',
          duartion: 3500
        },
        {
          position: 'middle',
          duartion: 2500
        },
        {
          position: 'bottom',
          duartion: 1500
        }
      ]
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin"

.toast-demo-root
  width 375px
  min-height 623px
  position absolute
  >.toast-demo-btn
    margin-top 25px
</style>
