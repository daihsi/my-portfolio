<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <v-app-bar
          flat
          color="transparent"
          prominent
          class="header-nav mx-auto"
        >
          <v-toolbar-title>
            <img
              :src="logo" 
              :alt="logoalt"
              class="header-nav-logo"
            />
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn
            icon
            :href="twitterUrl"
          >
            <v-fa
              class="nav-twitter-icon"
              :icon="['fab', 'twitter']"
            />
          </v-btn>
          <v-btn
            icon
            :href="wantedlyUrl"
          >
            <img
              class="nav-wantedly-icon"
              :src="wantedlyImage"
              :alt="wantedlyAlt"
            />
          </v-btn>
          <template
            v-slot:extension
          >
            <v-tabs
              right
              class="header-nav-tabs"
              color="grey"
            >
              <v-tab
                v-for="(item, index) in items"
                :key="index"
                :to="item.url"
                class="d-none d-sm-flex"
              >
                {{ item.title }}
              </v-tab>
            </v-tabs>
            <v-menu
              bottom
              origin="center center"
              transition="scale-transition"
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  text
                  v-on="on"
                  class="d-sm-none d-flex"
                  color="grey"
                >
                  menu
                </v-btn>
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
          </template>
        </v-app-bar>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //サイトロゴ画像
    logo: require("../assets/portfolio_logo.png"),
    //サイトロゴ画像alt
    logoalt: "ポートフォリオのロゴ画像",
    //Wantedlyアイコン画像
    wantedlyImage: require("../assets/wantedly_mark.png"),
    //Wantedlyアイコン画像alt
    wantedlyAlt: "wantedlyのアイコン画像",
    //WantedlyリンクURL
    wantedlyUrl: "https://www.wantedly.com/users/136172456",
    //TwitterリンクURL
    twitterUrl: "https://twitter.com/ws6yp",
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

<style scoped>
  /* ヘッダーの横幅 */
  .header-nav {
    max-width: 950px;
  }
  /* ヘッダーのサイトロゴ画像 */
  .header-nav-logo {
    height: 50px;
    width: 150px;
  }
  /* twitterのリンクアイコン */
  .nav-twitter-icon {
    color: #1da1f2;
    font-size: 23px;
  }
  /* wantedlyのリンクアイコン */
  .nav-wantedly-icon {
    width: 30px;
    height: 30px;
  }
  /* メニュータブ */
  .header-nav-tabs {
    font-family: 'Lato', 'Noto Sans JP', sans-serif;
  }
</style>