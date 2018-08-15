# a JasonLiao project: jsl-vue-h5
> 一个vue的H5组件与插件库, 按照375px宽度的UI图构建, 会转换为vw, 可按需引入

> npm site: [https://www.npmjs.com/package/jsl-vue-h5](https://www.npmjs.com/package/jsl-vue-h5)

## install
```bash
$ npm install jsl-vue-h5 --save
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



