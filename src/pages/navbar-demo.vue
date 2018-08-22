<template>
 <div class="navbar-demo-root">
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
.navbar-demo-root
  full-screen()
  position relative
  padding-top 20px
</style>
