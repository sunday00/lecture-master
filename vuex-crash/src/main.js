import { createApp } from 'vue'
import store from '@/store/index';
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faShoppingCart, faCartPlus, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { currency } from '@/libs/currency'

library.add(
  faShoppingCart,
  faCartPlus,
)

const app = createApp(App)
  .use(store)
  .component('font-awesome-icon', FontAwesomeIcon)

app.config.globalProperties.$filters = {
  currency
}

app.mount('#app')