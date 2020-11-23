<template>
  <v-container>
    <!-- ページタイトル開始 -->
    <h2
      id="page-title"
      class="text-center mt-5 mb-10 animate__animated animate__slideInUp"
    >
      {{ title }}
    </h2>
    <!-- ページタイトル終了 -->
    <v-row
      class="d-flex justify-center"
    >
      <!-- 制作作品表示開始 -->
      <v-col
        v-for="(item, index) in items"
        :key="index"
        cols="12"
        lg="6"
        class="mb-10 animate__animated animate__fadeIn"
      >
        <!-- 作品カード開始 -->
        <v-hover v-slot:default="{ hover }">
          <v-card
            class="mx-auto"
            color="grey lighten-4"
            max-width="500"
          >
            <!-- 作品のイメージ画像開始 -->
            <v-img
              :aspect-ratio="16/9"
              :src="item.image"
            >
              <!-- ホバー時の作品説明分開始 -->
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
              <!-- ホバー時の作品説明分終了 -->
            <!-- 作品のイメージ画像終了 -->
            </v-img>
            <!-- カードテキスト開始 -->
            <v-card-text
              style="position: relative;"
            >
              <!-- githubのアイコンボタン開始 -->
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
              <!-- githubのアイコンボタン終了 -->
              <!-- 主要技術テキスト開始 -->
              <h4
                class="work-technology font-weight-light grey--text mb-3"
              >
                {{ item.useTech }}
              </h4>
              <!-- 主要技術テキスト終了 -->
              <!-- 作品タイトル開始 -->
              <h3
                class="work-title font-weight-light green--text mb-3"
              >
                {{ item.title }}
              </h3>
              <!-- 作品タイトル終了 -->
              <!-- 作品URL開始 -->
              <a
                class="work-anker font-weight-light mb-3" 
                :href="item.appUrl"
              >
                {{ item.appUrl }}
              </a>
              <!-- 作品URL終了 -->
            </v-card-text>
            <!-- カードテキスト終了 -->
          </v-card>
        </v-hover>
        <!-- 作品カード終了 -->
      </v-col>
      <!-- 制作作品表示終了 -->
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    //ページタイトル
    title: "works",
    items: [
      //オリジナルアプリケーションの情報
      {
        image: require("../assets/nikomal_image.png"),
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
        image: require("../assets/moda_portfolio_image.png"),
        description: `現在ご覧いただいているサイトになります。
「フロントエンドにはVue or Reactを用いる」という昨今のトレンドにキャッチアップするためと、
実務ではフロントエンド言語の知識も必要と感じ、転職活動と並行しSPAのポートフォリオサイトを作成しました
Firebaseでホスティングされており、functionを利用したメール送信機能も実装されております。
今回得た知見を元に、次回はLaravel+Vue.jsとさらなるスキルアップをすべく、Dockerも取り入れたアプリケーションを開発する予定です。`,
        appUrl: "#",
        githubUrl: "https://github.com/daihsi/my-portfolio",
        title: "Moda ~ my portfolio ~",
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
  /* カード内の作品タイトル */
  .work-title {
    font-size: 24px;
  }
  /* カード内の使用技術とURL */
  .work-technology, .work-anker {
    font-size: 13px;
  }
</style>