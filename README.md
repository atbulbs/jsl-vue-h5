# a JasonLiao project: jsl-vue-h5
> 一个vue的H5组件与插件库, 按照375px宽度的UI图构建, 会转换为vw, 可按需引入

> npm site: [https://www.npmjs.com/package/jsl-vue-h5](https://www.npmjs.com/package/jsl-vue-h5)

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

## install
```bash
$ npm install jsl-vue-h5 --save
```
## webpack config
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
## example
```javascript
// main.js
import Vue from 'vue'
import { JslLoading } from 'jsl-vue-h5'
import 'jsl-vue-h5/dist/jsl-vue-h5.min.css'

Vue.use(JslLoading)

// jsl-loading-demo.vue
<template>
 <div class="root">
   <jsl-loading />
 </div>
</template>
```

## documentation
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



