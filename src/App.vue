<template>
  <v-app>
    <!-- ヘッダー開始 -->
    <Header></Header>
    <!-- ヘッダー終了 -->
    <!-- メインコンテンツ開始 -->
    <router-view></router-view>
    <!-- メインコンテンツ終了 -->
    <!-- フッター開始 -->
    <Footer></Footer>
    <!-- フッター終了 -->
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    //ヘッダーコンポーネント
    Header,
    //フッターコンポーネント
    Footer
  },
}
</script>

<style lang="scss">
@import "./css/app.scss";
</style>
