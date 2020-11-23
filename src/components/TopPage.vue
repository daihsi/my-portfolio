<template>
  <div 
    class="mt-5 top-container-wrap"
  >
    <v-container>
      <v-row
        class="d-flex justify-center"
      >
        <!-- トップページ見出しテキストのラップ開始 -->
        <v-col
          cols="12"
          sm="6"
          class="d-flex align-center justify-sm-end justify-center"
        >
          <div>
            <!-- 名前見出し開始 -->
            <h1 
              class="top-heading-name animate__animated animate__zoomIn"
            >
              <span
                class="heading-name-letter"
              >
              Mo</span>toyama<br/>
              <span
                class="heading-name-letter"
              >da</span>ishi
            </h1>
            <!-- 名前見出し終了 -->
            <!-- サンキュー見出し開始 -->
            <h4
              class="sub-heading-text pt-1"
            >
              <span
                v-for="(subtext, index) in subHeadingText"
                :key="index"
                class="item animate__animated animate__flipInX"
                v-text="subtext"
                :style="{animationDelay: index*100+'ms'}"
              >
              </span>
            </h4>
            <!-- サンキュー見出し終了 -->
          </div>
        </v-col>
        <!-- トップページ見出しテキストのラップ終了 -->
        <!-- トップページ見出し画像のラップ開始 -->
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-sm-start justify-center"
        >
          <div>
            <v-img
              :src="topImage"
              class="top-image animate__animated animate__zoomIn"
              contain
            >
            </v-img>
          </div>
        </v-col>
        <!-- トップページ見出し画像のラップ終了 -->
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data: () => ({
    //見出し画像のURL
    topImage: require("../assets/portfolio_top_image.png"),
    //見出しテキスト
    subHeadingText: "~ Thank you for visiting ~"
  })
}
</script>

<style scoped>
  /* コンテナをラップして背景色を変更 */
  .top-container-wrap {
    background-color: #ecebeb;
  }
  /* 自分の画像のスタイル */
  .top-image {
    width: 100%;
    height: 400px;
    max-width: 400px;
  }
  /* 見出しの自分の名前 */
  .top-heading-name {
    font-size: 45px;
    font-family: "Lato", "Noto Sans JP", sans-serif;
    font-weight: 400;
    line-height: 2.8rem;
  }
  /* 見出しの自分の名前の一部文字 */
  .heading-name-letter {
    color: #4CAF50;
  }
  /* サブ見出しのテキスト */
  .sub-heading-text {
    font-family: "Lato", "Noto Sans JP", sans-serif;
    font-style: italic;
    font-weight: 300;
  }
  /* サブ見出しのアニメーション */
  @keyframes text-in {
    0% {
      transform: translate(0, -20px);
      opacity: 0;
    }
  }
  /* サブ見出しを一文字ずつアニメーションをかける */
  .item {
    display: inline-block;
    min-width: 0.3rem;
    animation: text-in 0.8s cubic-bezier(0.22, 0.15, 0.25, 1.43) 0s backwards;
  }
</style>