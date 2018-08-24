<template>
  <div
  ref="btn"
  class="jsl-button-root"
  :class="{ 'jsl-button-active': isActive }"
  @click="handleClick"
  >
    {{ text }}
  </div>
</template>

<script type="text/ecmascript-6">
import { toVw, formatQuery } from 'libs/util'

export default {
  props: {
    text: {
      type: String,
      default: 'btn-scalable-jump'
    },
    bgImg: {
      type: String
    },
    color: {
      type: String,
      default: '#fff'
    },
    fontSize: {
      type: Number,
      default: 14
    },
    bgColor: {
      type: String,
      default: '#517DF7'
    },
    radius: {
      type: Number,
      default: 12
    },
    width: {
      type: Number,
      default: 200
    },
    height: {
      type: Number,
      default: 50
    },
    lineHeight: {
      type: Number,
      default: 50
    },
    top: {
      type: Number,
      default: 50
    },
    left: {
      type: Number,
      default: window.Number((375 / 2).toFixed(5))
    },
    query: {
      type: Object
    },
    toPage: {
    }
  },
  data () {
    return {
      isActive: false,
      timer: null
    }
  },
  methods: {
    handleClick () {
      const toPage = this.toPage
      if (!toPage) {
        return
      }
      const type = typeof toPage
      this.isActive = true
      this.clearTimer()
      this.timer = setTimeout(() => {
        if (type === 'number') {
          this.$router.go(toPage)
        } else {
          let next = toPage
          if (this.query) {
            next += formatQuery(this.query)
          }
          this.$router.push(next)
        }
      }, 500)
    },
    clearTimer () {
      window.clearTimeout(this.timer)
      this.timer = null
    },
    initBtn () {
      const btn = this.$refs.btn
      const style = {
        width: toVw(this.width),
        height: toVw(this.height),
        lineHeight: toVw(this.lineHeight),
        color: this.color,
        fontSize: toVw(this.fontSize),
        backgroundImage: `url(${this.bgImg})`,
        backgroundColor: this.bgColor,
        backgroundSize: toVw(this.width) + ' ' + toVw(this.height),
        borderRadius: toVw(this.radius),
        top: toVw(this.top),
        left: toVw((375 - this.left) / 2),
        marginTop: -toVw(this.height / 2),
        marginLeft: -toVw(this.width / 2)
      }
      Object.keys(style).forEach((item) => {
        btn.style[item] = style[item]
      })
    },
    toVw (num) {
      return toVw(num)
    }
  },
  mounted () {
    this.initBtn()
  },
  beforeDestroy () {
    this.clearTimer()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~styles/mixin'

@keyframes changeScale {
  0% {
    transform scale(0.9)
  }
  50% {
    transform scale(1.1)
  }
  100% {
    transform scale(1)
  }
}
.jsl-button-root
  position absolute
  tac()
  margin 0 auto
.jsl-button-active
  animation .5s changeScale linear
</style>
