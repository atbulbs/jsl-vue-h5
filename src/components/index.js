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


