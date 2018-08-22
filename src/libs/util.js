export function toVw (num) {
  return ((window.Number(num).toFixed(5) / 375) * 100).toFixed(5) + 'vw'
}

export function getLocal (str) {
  return JSON.parse(window.localStorage.getItem(str))
}

export function setLocal (str, data) {
  window.localStorage.setItem(str, JSON.stringify(data))
}

export function formatQuery (obj) {
  let result = '?'
  Object.keys(obj).forEach((key) => {
    result += key + '=' + obj[key]
  })
  return result
}

export function createVuePlugin (vuePugingName, vuePulugin) {
  return {
    install: function (Vue) {
      if (typeof window !== 'undefined' && window.Vue) {
        Vue = window.Vue
      }
      Vue.component(vuePugingName, vuePulugin)
    }
  }
}
