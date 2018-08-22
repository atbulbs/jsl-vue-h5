<template>
  <div :style="rootStyle" class="loading-root">
    <div :style="imgStyle" class="loading-img">
    </div>
    <p :style="infoStyle" class="info">{{infoContent}}</p>
  </div>
</template>


<script type="text/ecmascript-6">
import { toVw } from 'libs/util'
import loadingImg from './loading.gif'

export default {
  props: {
    rootWidth: {
      type: Number,
      default: 250
    },
    rootHeight: {
      type: Number,
      default: 250
    },
    rootTop: {
      type: Number,
      default: 157
    },
    imgUrl: {
      type: String,
      default: loadingImg
    },
    imgSize: {
      type: Number,
      default: 35
    },
    imgMargin: {
      type: String,
      default: '5vw auto'
    },
    infoContent: {
      type: String,
      default: '正在加载数据...'
    },
    infoColor: {
      type: String,
      default: '#333'
    },
    infoFontSize: {
      type: Number,
      default: 14
    },
    infoHeight: {
      type: Number,
      default: 25
    },
    infoLineHeight: {
      type: Number,
      default: 25
    }
  },
  data () {
    return {
      rootStyle: {
        width: '',
        height: '',
        top: ''
      },
      imgStyle: {
        width: '',
        height: '',
        backgroundImage: '',
        backgroundSize: '',
        margin: ''
      },
      infoStyle: {
        color: '',
        fontSize: '',
        height: '',
        lineHeight: ''
      }
    }
  },
  methods: {
    init () {
      this.initImg()
      this.initRoot()
      this.initInfo()
    },
    initRoot () {
      this.rootStyle.width = toVw(this.rootWidth)
      this.rootStyle.height = toVw(this.rootHeight)
      this.rootStyle.top = toVw(this.rootTop)
    },
    initImg () {
      this.imgStyle.width = toVw(this.imgSize)
      this.imgStyle.height = toVw(this.imgSize)
      this.imgStyle.backgroundImage = `url(${this.imgUrl})`
      this.imgStyle.backgroundSize = 'cover'
      this.imgStyle.margin = this.imgMargin
    },
    initInfo () {
      this.infoStyle.color = this.infoColor
      this.infoStyle.fontSize = toVw(this.infoFontSize)
      this.infoStyle.height = toVw(this.infoHeight)
    }
  },
  created () {
    this.init()
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'
  
.loading-root
  ab-c()
  >.info
    tac()
</style>
