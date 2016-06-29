import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

let router = new VueRouter()

router.map({
  '/yes': {
    component: App
  },
  '/no': {
    component: {
      template: 'HELLO'
    }
  }
})

export default router
