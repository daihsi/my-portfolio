<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
      <v-flex xs12>
        <v-app-bar
          flat
          app
          color="transparent"
        >
          <v-toolbar-title>
            <v-img
              :src="logo" 
              :alt="alt"
              height="50"
              width="100"
            >

            </v-img>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            text
            v-for="(item, index) in items"
            :key="index"
            :to="item.url"
            class="d-none d-sm-flex"
          >
            <span>{{ item.title }}</span>
          </v-btn>
          <v-menu
            bottom
          >
            <template v-slot:activator="{ on }">
              <v-app-bar-nav-icon
                v-on="on"
                class="d-sm-none d-flex"
              >
              </v-app-bar-nav-icon>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                :to="item.url"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-app-bar>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    logo: require("../assets/portfolio_logo.png"),
    alt: "ポートフォリオのロゴ画像",
    items: [
      {
        title: "top",
        url: "/",
      },
      {
        title: "about",
        url: "/about",
      },
      {
        title: "works",
        url: "/works",
      },
      {
        title: "skils",
        url: "/skils",
      },
      {
        title: "contact",
        url: "/contact",
      },
    ],
  }),
}
</script>