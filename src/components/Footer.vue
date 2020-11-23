<template>
  <v-footer
    class="mt-10"
    color="transparent"
  >
    <v-col
      flat
      class="text-center footer-text"
      cols="12"
    >
      {{ date }} - <span>Motoyama Daishi</span> 
    </v-col>
  </v-footer>
</template>

<script>
export default {
  data:() => ({
    //年を取得
    date: new Date().getFullYear(),
  })
}
</script>

<style scoped>
  /* フッターテキスト */
  .footer-text {
    font-family: 'Lato', 'Noto Sans JP', sans-serif;
  }
</style>