<template>
  <div class="list-root">
    <jsl-button
      class="demo-list"
      v-for="(item, index) in demoList"
      :key="index + 'demo'"
      :text="item"
      @click.native="$router.push({ name: item })"
    />
  </div>
</template>


<script type="text/ecmascript-6">
import JslButton from 'components/button/button'

export default {
  data () {
    return {
      demoList: [
        'btn-scalable-jump-demo',
        'grid-demo',
        'avatar-demo',
        'button-demo',
        'close-demo',
        'loading-demo',
        'navbar-demo',
        'nomore-tip-demo'
      ]
    }
  },
  components: {
    JslButton
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.list-root
  full-screen()
  position relative
  >.demo-list
    margin-top 20px
</style>
