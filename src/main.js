import App from './App'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
import router from './router'

sync(store, router)

let conf = {
  store,
  components: { App }
}

router.start(conf, '#app')
