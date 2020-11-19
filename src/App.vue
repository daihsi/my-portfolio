<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
@import "./css/app.scss";
</style>
