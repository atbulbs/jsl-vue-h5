<template>
 <div class="root">
   <jsl-navbar/>
 </div>
</template>


<script type="text/ecmascript-6">
import JslNavbar from 'components/navbar/navbar'
export default {
  components: {
    JslNavbar
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'
.root
  full-screen()
  position relative
</style>
