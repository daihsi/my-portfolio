<template>
  <v-container>
    <v-row
      class="text-center mt-5 mb-10"
    >
      <v-col
        cols="12"
      >
        <h2
          id="page-title"
          class="animate__animated animate__slideInUp"
        >
          {{ title }}
        </h2>
      </v-col>
    </v-row>
    <v-row
      class="d-flex justify-center"
    >
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        lg="6"
        class="mb-10 animate__animated animate__fadeIn"
      >
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="500"
          >
            <v-img
              :aspect-ratio="16/9"
              :src="item.image"
            >
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="transition-fast-in-fast-out 
                        black darken-2 v-card--reveal 
                        display-3 white--text pa-sm-5"
                  style="height: 100%;"
                >
                  <p class="skil-card-description">
                    {{ item.description }}
                  </p>
                </div>
              </v-expand-transition>
            </v-img>
            <v-card-text
              style="position: relative;"
            >
              <v-btn
                absolute
                color="green"
                class="white--text"
                fab
                large
                right
                top
                :href="item.githubUrl"
              >
                <v-fa
                  class="skil-icon-github"
                  :icon="['fab', 'github']" 
                />
              </v-btn>
              <div
                class="font-weight-light grey--text title mb-2"
              >
                {{ item.useTech }}
              </div>
              <h3
                class="display-1 font-weight-light green--text mb-2"
              >
                {{ item.title }}
              </h3>
              <a
                class="font-weight-light title mb-2" 
                :href="item.appUrl"
              >
                {{ item.appUrl }}
              </a>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    title: "works",
    items: [
      //オリジナルアプリケーションの情報
      {
        image: require("../assets/works_nikomal_top.png"),
        description: `nikomalは、動物の笑顔を投稿共有し、癒しの場・動物の魅力の再発見などできるアプリケーションです。
いいね登録などをAjax通信にて非同期で行ったり、投稿一覧の自動スクロール読み込みなど、ユーザーの使いやすさに寄与したUIを意識して作成しました。
またその点を、コンテストの審査員であるエンジニアの方に評価いただき、賞を獲得しました。
またインフラにAWSを用いてデプロイし、品質向上のテストも徹底して行い、CircleCIでテストの自動化も行っております。
GitHubに詳細がございますので、是非ご覧ください。`,
        appUrl: "https://nikomal.com",
        githubUrl: "https://github.com/daihsi/nikomal",
        title: "nikomal",
        useTech: "PHP + Larave + jQuery + AWS + CircleCI"
      },
      //ポートフォリオサイトの情報
      {
        image: require("../assets/fake_image.jpg"),
        description: `現在ご覧いただいているサイトになります。
「フロントエンドにはVue or Reactを用いる」という昨今のトレンドにキャッチアップするためと、
実務ではフロントエンド言語の知識も必要と感じ、転職活動と並行しSPAのポートフォリオサイトを作成しました
Firebaseでホスティングされており、functionを利用したメール送信機能も実装されております。
今回得た知見を元に、次回はLaravel+Vue.jsとさらなるスキルアップをすべく、Dockerも取り入れたアプリケーションを開発する予定です。`,
        appUrl: "#",
        githubUrl: "https://github.com/daihsi/my-portfolio",
        title: "My portfolio",
        useTech: "Vue.js + Vuetify + Firebase"
      },
    ]
  })
}
</script>

<style scoped>
  /* cardのhover時のアニメーションとコンテンツ */
  .v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: 0.5;
    position: absolute;
    width: 100%;
  }
  /* cardのhover時の説明文 */
  .skil-card-description {
    font-size: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.5rem;
  }
  /* card内のgithubのアイコン */
  .skil-icon-github {
    font-size: 40px;
  }
  /* cardのhover時の説明文(500～600) */
  @media (min-width: 500px) and (max-width: 600px) {
    .skil-card-description {
      padding: 15px;
    }
  }
  /* cardのhover時の説明文(430～500) */
  @media (min-width: 430px) and (max-width: 500px) {
    .skil-card-description {
      padding: 8px;
      font-size: 1rem;
      line-height: 1.2rem;
    }
  }
  /* cardのhover時の説明文(360～430) */
  @media (min-width: 360px) and (max-width: 430px) {
    .skil-card-description {
      padding: 5px;
      font-size: 0.7rem;
      line-height: 1.1rem;
    }
  }
  /* cardのhover時の説明文(～360) */
  @media screen and (max-width: 360px) {
    .skil-card-description {
      font-size: 0.8rem;
      line-height: 0.9rem;
    }
  }
</style>