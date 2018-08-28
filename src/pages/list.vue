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

export default {
  data () {
    return {
      demoList: [
        'toast-demo',
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
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
.list-root
  full-screen()
  position relative
  padding-bottom 20px
  >.demo-list
    margin-top 20px
</style>
