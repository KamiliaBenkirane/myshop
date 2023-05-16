import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faCartPlus, faCartShopping, faUserSecret, faStar} from '@fortawesome/free-solid-svg-icons'
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faCartShopping, faCartPlus, faStar, farStar)

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(router).use(pinia).mount('#app')

