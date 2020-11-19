import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import AnimateCss from 'animate.css';

library.add(fas, far, fab);

Vue.config.productionTip = false
Vue.component('v-fa', FontAwesomeIcon);
Vue.use(AnimateCss);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
