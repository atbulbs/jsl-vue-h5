<template>
  <div id="main" class="app-main">
    <jsl-navbar
      v-show="isNavBarShow"
      :title="title"
    />
    <transition>
      <router-view></router-view>
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
      title: ''
    }
  },
  watch: {
    '$route': {
      handler (newValue) {
        console.log('newValue', newValue)
        if (newValue.name && newValue.name !== 'home') {
          this.isNavBarShow = true
          this.title = newValue.meta.title
        } else {
          this.isNavBarShow = false
        }
      },
      immediate: true
    }
  },
  components: {
    JslNavbar
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

</style>

