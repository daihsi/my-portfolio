//vue
import Vue from 'vue';
//App.vueをメインとして使用
import App from './App.vue';
//vuetify
import vuetify from './plugins/vuetify';
//vueルーティング
import router from './router';
//fontawesomeライブラリ
import { library } from '@fortawesome/fontawesome-svg-core';
//fontawesome fas
import { fas } from '@fortawesome/free-solid-svg-icons';
//fontawesome far
import { far } from '@fortawesome/free-regular-svg-icons';
//fontawesome fab
import { fab } from '@fortawesome/free-brands-svg-icons';
//fontawesomeをvueで使用するため
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//animate.css
import AnimateCss from 'animate.css';

library.add(fas, far, fab);

Vue.config.productionTip = false
//fontawesomeを"v-fa"としてコンポーネント使用
Vue.component('v-fa', FontAwesomeIcon);
//animate.cssを使用
Vue.use(AnimateCss);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
