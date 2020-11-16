<template>
  <v-footer
    absolute
    padless
    color="transparent"
  >
    <v-col
      flat
      class="text-center"
      cols="12"
    >
      {{ date }} - <strong>Daishi Motoyama</strong> 
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