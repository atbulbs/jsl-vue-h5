# a JasonLiao project: jsl-vue-h5
> 自己纯手工打造的一些轮子:ferris_wheel:,一个vue的H5插件库, 按照375px宽度的UI图构建, 会转换为vw, 可按需引入,welcome npm install and happy hacking ~:relaxed:

> npm site: [https://www.npmjs.com/package/jsl-vue-h5](https://www.npmjs.com/package/jsl-vue-h5)

> demo online: [https://atbulbs.github.io/jsl-vue-h5-demo-online/](https://8bulbs.github.io/jsl-vue-h5-demo-online/)

> code demo: [https://github.com/8bulbs/jsl-vue-h5-demo](https://github.com/8bulbs/jsl-vue-h5-demo)

## install
```bash
$ npm install jsl-vue-h5 --save
```

## import and use it
```javascript
// main.js
import {
  JslAvatar,
  JslBtnScalableJump,
  JslButton,
  JslClose,
  JslGrid,
  JslGridItem,
  JslLoading,
  JslNavBar,
  JslNomoreTip,
  JslToast
} from 'jsl-vue-h5'
import 'jsl-vue-h5/dist/jsl-vue-h5.min.css'

Vue.use(JslAvatar)
Vue.use(JslBtnScalableJump)
Vue.use(JslButton)
Vue.use(JslClose)
Vue.use(JslGrid)
Vue.use(JslGridItem)
Vue.use(JslLoading)
Vue.use(JslNavBar)
Vue.use(JslNomoreTip)
Vue.use(JslToast)

// jsl-loading-demo.vue
<template>
 <div class="root">
   <jsl-loading />
 </div>
</template>
```

## documentation

### jsl-toast

```javascript
this.$jsl.toast(text, position, duaration)
```

| params | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| text |  String | toast内容 | 'toast' |
| position |  String | toast位置, 可选  'top', 'middle', 'bottom' | 'middle' |
| duartion |  Number | toast展示的毫秒数 | 2500 |

```javascript
<template>
  <div class="toast-demo-root">
    <jsl-button
      class="toast-demo-btn"
      v-for="(item, index) in btnList"
      :text="item.position + ' ' + item.duartion + 'ms'"
      :key="index + 'toast-demo-item'"
      @click.native="$jsl.toast(item.position + ' ' + item.duartion + 'ms', item.position, item.duartion)"
    />
  </div>
</template>


<script type="text/ecmascript-6">

export default {
  data () {
    return {
      btnList: [
        {
          position: 'top',
          duartion: 3500
        },
        {
          position: 'middle',
          duartion: 2500
        },
        {
          position: 'bottom',
          duartion: 1500
        }
      ]
    }
  }
}
</script>
```

### jsl-grid
> API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| width |  Number | 栅格组件的宽 | 375 |
| height |  Number | 栅格组件的高 | 375 |
| row |  Number | 栅格组件的行数 | 4 |
| column |  Number | 栅格组件的列数 | 5 |

> demo code

```javascript
<template>
 <div class="grid-demo-root">
    <jsl-grid
      class="grid"
      :row="3"
      :column="3"
    >
      <jsl-grid-item
        v-for="(item, index) in list9"
        :key="index + 'grid-demo-item-1'"
      >
        <div>{{ index }}</div>
      </jsl-grid-item>
    </jsl-grid>
    <jsl-grid
      class="grid"
    >
      <jsl-grid-item
        v-for="(item, index) in list20"
        :key="index + 'grid-demo-item-2'"
      >
        <div>{{ index }}</div>
      </jsl-grid-item>
    </jsl-grid>
 </div>
</template>


<script type="text/ecmascript-6">

export default {
  data () {
    return {
      list9: Array(9),
      list20: Array(20)
    }
  }
}
</script>
```

### jsl-btn-scalable-jump

>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| toPage |  undefined | 若为Number, 则go(num), 若为String, 则push此路由 | 375 |
| query |  Object | 路由跳转携带的参数对象, 会拼接为查询字符串 | undefined |
| text | String | 按钮的文字 | 'btn-scalable-jump' |
| fontSize | Number | 按钮的文字大小 | 14 |
| color | String | 按钮的文字颜色 | 14 |
| bgImg | String | 按钮的背景图 | undefined |
| bgColor | String | 按钮的背景颜色 | '#517DF7' |
| radius | Number | 按钮的边框倒角弧度 | 12 |
| width | Number | 按钮的宽度 | 200 |
| height | Number | 按钮的高度 | 50 |
| lineHeight | Number | 按钮的文字行度 | 50 |
| top | Number | 按钮绝对定位的top值 | 50 |
| left | Number | 按钮绝对定位的lef值 | window.Number((375 / 2).toFixed(5)) |


>demo code

```javascript
<template>
 <div class="btn-scalable-jump-demo-root">
   <jsl-btn-scalable-jump
    class="btn"
    v-for="(item, index) in btnList"
    :key="index + 'select'"
    :toPage="item.toPage"
    :query="item.query"
    :top="item.top"
    :text="'to'+ ' ' + item.toPage"
   />
 </div>
</template>

<script type="text/ecmascript-6">

export default {
  data () {
    return {
      btnList: [
        {
          top: 50,
          toPage: -1
        },
        {
          top: 250,
          toPage: 'grid-demo',
          query: {
            id: '123abc'
          }
        },
        {
          top: 450,
          toPage: 'button-demo'
        }
      ]
    }
  }
}
</script>
```

### jsl-avatar

>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| size |  Number | 头像的尺寸 | 25 |
| img |  String | 头像的图片链接 | 'https://avatars2.githubusercontent.com/u/31515577?s=460&v=4' |
>demo code
```javascript
<template>
  <div class="avatar-demo-root">
    <jsl-avatar class="avatar" />
    <jsl-avatar class="avatar" size="55" />
  </div>
</template>
```
### jsl-button
>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| width |  Number | 按钮宽度 | 375 |
| height |  Number | 按钮高度 | 57 |
| radius |  Number | 按钮边框倒角弧度 | 30 |
| text |  String | 按钮文字 | '按钮' |
| color |  String | 按钮文字颜色 | '#FCFCFC' |
| fontSize |  Number | 按钮文字大小 | 16 |
| bgColor |  String | 按钮背景颜色 | '#517DF7' |


>demo code
```javascript
<template>
  <div class="button-demo-root">
    <jsl-button
      class="btn"
      text="button"
    />
    <jsl-button
      class="btn"
      color="red"
      bgColor="green"
    />
    <jsl-button
      class="btn"
      color="#000"
      bgColor="#f00"
      radius="10"
      height="37"
    />
  </div>
</template>
```
### jsl-close
>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| size |  Number | 关闭图标尺寸 | 15 |
| circle |  Boolean | 关闭图标是否带圆圈 | false |

>demo code
```javascript
<template>
  <div class="close-demo-root">
    <jsl-close class="close" />
    <jsl-close
      class="close"
      circle
      size="55"
    />
  </div>
</template>
```
### jsl-loading
>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| rootWidth |  Number | 组件的宽度 | 250 |
| rootHeight |  Number | 组件的高度 | 250 |
| rootTop |  Number | 组件相对已定位父级的top | 157 |
| imgUrl |  String | 图片资源 | 经典的菊花图 |
| imgSize |  Number | 图片的高宽 | 35 |
| imgMargin |  String | 图片的margin | '5vw auto' |
| infoContent |  String | 文字信息 | '正在加载数据...' |
| infoColor |  String | 文字颜色 | '#333' |
| infoFontSize |  Number | 文字大小 | 14 |
| infoHeight |  Number | 文字高度 | 25 |
| infoLineHeight |  Number | 文字行高 | 25 |

>demo code
```javascript

<template>
 <div class="loading-demo-root">
   <jsl-loading imgSize="25"/>
 </div>
</template>
```
### jsl-nav-bar
>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| title |  String | 导航条的标题 | '导航条' |

>demo code
```javascript
<template>
 <div class="navbar-demo-root">
   <jsl-nav-bar/>
 </div>
</template>
```

### jsl-nomore-tip
>API

| props | type | remark | default value |
|:-----:|:----:|:------:|:-------------:|
| text |  String | 文字内容 | '亲，我们是有底线的哦～' |
| lineWidth |  Number | 细线的长度 | 34 |

>demo code
```javascript
<template>
  <div class="nomore-tip-demo-root">
    <jsl-nomore-tip class="demo" />
    <jsl-nomore-tip
      class="demo"
      text="这是我的底线"
      lineWidth="100"
    />
  </div>
</template>
```

## 开发与发布的爬坑姿势

生产时入口文件 src/components/index.js
```javascript
import 'styles/components/index'

import loadingComponent from './loading/loading'

export const JslLoading = {
  install: function (Vue) {
    if (typeof window !== 'undefined' && window.Vue) {
      Vue = window.Vue
    }
    Vue.component('JslLoading', loadingComponent)
  }
}

export default {
  JslLoading
}
```

webpack prod entry config
```javascript
const entryConfig = {
  app: resolve('src/components/index.js')
}
```

webpack prod output config
```javascript
const outputConfig = {
  path: resolve('dist'),
  publicPath: '',
  filename: 'jsl-vue-h5.min.js',
  library: 'JslVueH5',
  libraryTarget: 'umd',
  umdNamedDefine: true
}
```

webpack prod externals config
```javascript
const externals = {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}
```

webpack prod plugin config
```javascript
const prodPlugins = [
  new MiniCssExtractPlugin({
    filename: 'jsl-vue-h5.min.css'
  })
]
```

package.json配置如下
```javascript
{
  "name": "jsl-vue-h5",
  "version": "0.0.8",
  "description": "some Vue.js components and plugins for mobile H5 development",
  "author": "8bulbs <atbulbs@gmail.com>",
  "private": false,
  "main": "dist/jsl-vue-h5.min.js",
    "repository": {
    "type": "git",
    "url": "git+https://github.com/8bulbs/jsl-vue-h5.git"
  },
  "files": [
    "dist",
    "src"
  ],
  "keywords": [
    "vue",
    "h5",
    "mobile",
    "wechat",
    "loading"
  ],
  "license": "MIT",
  "homepage": "https://github.com/8bulbs/jsl-vue-h5.git#readme",
  // "scripts": { ... },
  // "dependencies": { ... },
  // "devDependencies": { ... }
}
```
本地开发完成后
```bash
# 打包
$ npm run build
# 生成 .tgz 文件
$ npm pack
```
若npm源为淘宝镜像, 需要切换源为 https://registry.npmjs.org/
```bash
# 查看npm源
$ npm config list

# 若为淘宝镜像
$ npm config rm registry
```
需要先注册登录npm, 再发布
```bash
# 登录, 填写用户名, 密码, 邮箱
$ npm login

# 发布
$ npm publish
```
每次发布时, 需要使用新的版本号, 修改package.json里的version, 或者删除之前的版本号再发布

## tip: webpack config
```javascript
// dev config > module > rules
// rules: [
// ...
  {
    test: /\.css$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
        // options: {
        //   modules: false
        // }
      }
    ]
  }
// ...
// ]
```

