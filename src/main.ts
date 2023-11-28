import * as Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

window.$vueApp = Vue.createApp(App)
window.$vueApp.use(router)
window.$vueApp.mount('#app')
window.$vueApp.config.globalProperties.routerAppend = (path: any, pathToAppend: any) => {
  return path + (path.endsWith('/') ? '' : '/') + pathToAppend
}
window.$vueApp.use(store)
