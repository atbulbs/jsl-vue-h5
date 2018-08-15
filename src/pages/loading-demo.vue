<template>
 <div class="root">
   <jsl-loading/>
 </div>
</template>

<script type="text/ecmascript-6">
import JslLoading from 'components/loading/loading'
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  components: {
    JslLoading
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/pages/mixin'
.root
  full-screen()
  position relative
  position relative
</style>
