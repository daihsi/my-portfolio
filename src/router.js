//vue
import Vue from "vue";
//Vueルーティング
import Router from "vue-router";
//各ページのコンポーネント
import TopPage from "./components/TopPage.vue";
import About from "./components/About.vue";
import Contact from "./components/Contact.vue";
import Skils from "./components/Skils.vue";
import Works from "./components/Works.vue";

Vue.use(Router);

export default new Router({
  //URLの#を消す
  mode: "history",
  routes: [
    {
      //トップページ
      path: "/",
      component: TopPage,
    },    
    {
      //自分の紹介ページ
      path: "/about",
      component: About,
    },
    {
      //オリジナルアプリケーション等の紹介ページ
      path: "/works",
      component: Works,
    },
    {
      //学習・スキルページ
      path: "/skils",
      component: Skils,
    },
    {
      //問い合わせページ
      path: "/contact",
      component: Contact,
    }
  ]
});