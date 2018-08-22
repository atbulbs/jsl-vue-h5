<template>
  <div id="main" class="app-main">
    <jsl-navbar
      v-show="isNavBarShow"
      :title="title"
      @click.native="$router.go(-1)"
    />
    <transition :name="transitionName">
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import JslNavbar from 'components/navbar/navbar'

export default {
  name: 'App',
  data () {
    return {
      isNavBarShow: false,
      title: '',
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route': {
      handler (to, from) {
        const toDepth = to.path.split('/').length
        const fromDepth = from.path.split('/').length
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        if (to.name !== 'home') {
          this.isNavBarShow = true
          this.title = to.meta.title
        } else {
          this.isNavBarShow = false
        }
      }
    }
  },
  components: {
    JslNavbar
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

.app-main
  full-screen()
  >.child-view
    position absolute
    width 375px
    transition all .5s linear
  >.slide-left-enter
    transform translateX(375px)
  >.slide-left-enter-to
    transform translateX(0)
  >.slide-left-leave
    transform translateX(0px)
  >.slide-left-leave-to
    transform translateX(-375px)
</style>

