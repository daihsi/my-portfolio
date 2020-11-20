<template>
  <v-app>
    <v-container>
      <h2
        id="page-title"
        class="text-center mt-5 mb-10 animate__animated animate__slideInUp"
      >
        {{ title }}
      </h2>
      <v-row>
        <!-- プロフィール画像のゾーン開始 -->
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-sm-end justify-center pr-md-10 pr-sm-5"
        >
          <v-img
            :src="image.url"
            :alt="image.alt"
            class="avatar animate__animated animate__slideInLeft"
          >
          </v-img>
        </v-col>
        <!-- プロフィール画像のゾーン終了 -->
        <!-- プロフィールのゾーン開始 -->
        <v-col
          cols="12"
          sm="6"
          class="d-flex justify-sm-start justify-center align-center pl-md-5"
        >
          <v-simple-table
            class="animate__animated animate__slideInRight"
          >
            <template v-slot:default> 
              <tbody>
                <tr
                  v-for="(item, index) in items"
                  :key="index"
                >
                  <td>{{ item.title }}</td>
                  <td>{{ item.content }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-col>
        <!-- プロフィール画像のゾーン終了 -->
      </v-row>
      <!-- 自己紹介のゾーン開始 -->
      <v-row
        class="d-flex justify-center mt-5"
      >
        <v-col
          cols="12"
          sm="10"
        >
          <p
            class="self-introduction animate__animated animate__fadeInUp"
          >
            {{ selfIntroductions[0].content }}
          </p>
          <p
            class="self-introduction animate__animated animate__fadeInUp"
          >
            {{ selfIntroductions[1].content }}
          </p>
          <p
            class="self-introduction animate__animated animate__fadeInUp mb-10"
          >
            {{ selfIntroductions[2].content }}
          </p>
        </v-col>
      </v-row>
      <!-- 自己紹介のゾーン終了 -->
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    title: "about",
    image: {
      url: require("../assets/profile_avatar.jpg"),
      alt: "プロフィール画像"
    },
    items: [
      {
        title: "名前",
        content: "本山 大志"
      },
      {
        title: "生年月日",
        content: "1994年9月26日"
      },
      {
        title: "出身地",
        content: "広島県"
      },
      {
        title: "趣味",
        content: "ソフトボール / 読書 / サーフィン"
      }
    ],
    selfIntroductions: [
      {
        content: `一貫して建設業界に携わり、高速道路補修工事や個人宅に関する工事など、幅広く工事に従事。
資格取得等も行い、積極的に技術研鑽に取り組んできました。施工管理でチームマネジメントやチームリーダーも経験。
技術研修会を主導したり、管理データの効率化などを行い管理体制の構築など、チームの底上げを行いました。
結果工程の早期終了を継続的に実現、発注者から工事成績を評価いただき他事務所への応援依頼を受けるなど、事業に貢献。`
      },
      {
        content: `前職で怪我を負い、完治はしたが現場復帰は難しく、直接自分の手でモノづくりへ携われない悔しさを抱えて別業務を担当。
その中で、ITツールを活用した緊急事案に対応する体制構築、管理データの効率化を行い、IT技術による当たり前のことが変化していくこと、可能性に感銘を受ける。
自らの手でモノづくりを行い人や社会に価値提供し貢献したいという想いは、現場を退いてからも強くあり、今度は技術でシステムなどのモノづくりを手掛ける、エンジニアに興味が湧くように。
もっとITに詳しくなりたいと思い、サイバー大学に入学。(現在第2学年)
大学内でJavaScriptやPHPに触れ、ますます技術向上の意欲や当たり前を変えるITの可能性を再認識し、エンジニアへの転職を決意。`
      },
      {
        content: `PHP/Laravelでオリジナルwebアプリケーションを作成し、現在就職活動中。
就職活動と並行でVueを勉強し、アウトプットとして自己紹介用のポートフォリオサイト作成。`
      }
    ]
  })
}
</script>

<style scoped>
  .avatar {
    border-radius: 50%;
    box-shadow: 0 0 5px grey;
    max-width: 250px;
    max-height: 250px;
    text-align: center;
  }
  .self-introduction {
    white-space: pre-wrap;
    word-wrap: break-word;
    color: grey;
    line-height: 1.6rem;
    letter-spacing: 0.07em;
  }
</style>