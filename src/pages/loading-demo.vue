<template>
 <div class="loading-demo-root">
   <jsl-loading/>
 </div>
</template>


<script type="text/ecmascript-6">
import JslLoading from 'components/loading/loading'
export default {
  components: {
    JslLoading
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

.loading-demo-root
  width 375px
  height 623px
  position absolute
</style>
