import JslToast from './toast'

const ToastPlugin = {
  install (Vue, options = {}) {
    const ToastConstructor = Vue.extend(JslToast)
    const toastInstance = new ToastConstructor()
    const dom = window.document
    let timer = null

    toastInstance.$mount(dom.createElement('div'))
    dom.body.appendChild(toastInstance.$el)

    const toast = (text, position = 'middle', duration = 2500) => {
      toastInstance.isShow = true
      toastInstance.text = text
      toastInstance.position = position
      toastInstance.duration = duration
      timer = setTimeout(() => {
        toastInstance.isShow = false
        window.clearTimeout(timer)
        timer = null
      }, duration)
    }

    if (Vue.prototype.$jsl) {
      Vue.prototype.$jsl.toast = toast
    } else {
      Vue.prototype.$jsl = { toast }
    }
  }
}

export default ToastPlugin
