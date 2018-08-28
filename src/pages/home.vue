<template>
<div class="home-root">
  <div class="avatar">
  </div>
  <p class="welcome title">
    welcome to jsl-vue-h5
  </p>
  <p class="welcome">
    a vue.js components/plugins library for h5 devlopment
  </p>
  <jsl-button
    text="click to demo list page"
    @click.native="$router.push({ name: 'list' })"
  />
 </div>
</template>


<script type="text/ecmascript-6">

export default {
  methods: {
    handleClick () {
      this.$router.push({
        name: 'list'
      })
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

.home-root
  >.avatar
    with-bg(150px, 170px, '../assets/images/avatar.jpg')
    margin 10px auto
  >.title
    font-weight bold
  >.welcome
    tac()
  >.to-list
    margin 10px auto
    tac()
    width 375px
    height 35px
    line-height 35px
    background linear-gradient(#CD3333 0%, #CD3700 50%, #CD3333 100%)
    border-radius 7px
    color #fff
</style>
