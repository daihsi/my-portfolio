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
    <!-- ページ補足情報開始 -->
    <v-layout
      class="d-flex justify-center"
    >
      <div>
        <p
          class="contact-supplement animate__animated animate__fadeInUp"
        >
          {{ contactSupplement[0] }}<br/>
          <a :href="wantedlyUrl">{{ wantedly }}</a>
          ,
          <a :href="twitterUrl">{{ twitter }}</a>
          {{ contactSupplement[1] }}
        </p>
      </div>
    </v-layout>
    <!-- ページ補足情報終了 -->
    <!-- コンタクトフォームゾーン開始 -->
    <v-row
      class="d-flex justify-center mt-5"
    >
      <v-col
        cols="12"
        sm="10"
        md="9"
        lg="8"
      >
        <v-card
          class="contact-form-card animate__animated animate__fadeIn"
        >
          <v-form
            ref="form"
            lazy-validation
            v-model="contactFormValidation.valid"
          >
            <!-- 名前入力ゾーン開始 -->
            <v-text-field
              label="Name"
              color="success"
              v-model="contactForm.name"
              :rules="contactFormValidation.nameRules"
              required
            >
            </v-text-field>
            <!-- 名前入力ゾーン終了 -->
            <!-- メールアドレス入力ゾーン開始 -->
            <v-text-field
              label="E-mail"
              color="success"
              v-model="contactForm.email"
              :rules="contactFormValidation.emailRules"
              required
            >
            </v-text-field>
            <!-- メールアドレス入力ゾーン終了 -->
            <!-- 本文入力ゾーン開始 -->
            <v-textarea
              label="Content"
              color="success"
              v-model="contactForm.content"
              :rules="contactFormValidation.contentRules"
              required
            >
            </v-textarea>
            <!-- 本文入力ゾーン終了 -->
            <!-- 送信ボタン開始 -->
            <v-btn
              :loading="contactForm.loading"
              :disabled="!contactFormValidation.valid"
              @click="sendMail"
              block
              color="success"
            >
              send
            </v-btn>
            <!-- 送信ボタン終了 -->
          </v-form>
        </v-card>
        <!-- 問い合わせ後のメッセージ開始 -->
        <v-snackbar
          v-model="snackBar.show"
          :color="snackBar.color"
          bottom
          right
          :timeout="6000"
        >
          {{ snackBar.message }}
        </v-snackbar>
        <!-- 問い合わせ後のメッセージ終了 -->
      </v-col>
    </v-row>
    <!-- コンタクトフォームゾーン終了 -->
  </v-container>
</template>

<script>
import { functions } from "../plugins/firebase"

export default {
  data: () => ({
    //ページタイトル
    title: "contact",
    //Wantedlyリンクネーム
    wantedly: "Wantedly",
    //Twitterリンクネーム
    twitter: "Twitter",
    //WantedlyリンクURL
    wantedlyUrl: "https://www.wantedly.com/users/136172456",
    //TwitterリンクURL
    twitterUrl: "https://twitter.com/ws6yp",
    //ページの補足紹介分（配列で2つ用意）
    contactSupplement: [
`現在転職活動中です。自分に出来ることがあれば何でもさせていただきます。
ご興味持っていただけましたら、ご連絡いただけますと幸いです。`,
`でのDMでも返信可能です。24時間以内に返信させて頂きます。`
    ],
    //フォーム内の初期値
    contactForm: {
      name: "",
      email: "",
      content: "",
      loading: false
    },
    //フォームのバリデーションルール
    contactFormValidation: {
      valid: false,
      nameRules: [v => !!v || "名前は必須項目です"],
      emailRules: [v => !!v || "メールアドレスは必須項目です"],
      contentRules: [v => !!v || "内容は必須項目です"]
    },
    //送信後のメッセージ
    snackBar: {
      show: false,
      color: "",
      message: ""
    }
  }),
  methods: {
    //送信ボタンを押したら、下記関数を実行
    sendMail: function () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true;
        const mailer = functions.httpsCallable("sendMail");
        mailer(this.contactForm)
        .then(() => {
          this.formReset();
          this.showSnackBar(
            "success",
            "お問い合わせありがとうございます。送信完了しました"
          );
          this.contactForm.loading = false;
        });
      }
    },
    //問い合わせ後のメッセージ表示の関数
    showSnackBar: function (color, message) {
      this.snackBar.message = message;
      this.snackBar.color = color;
      this.snackBar.show = true;
    },
    //問い合わせ後のメッセージをリセットする関数
    formReset: function () {
      this.$refs.form.reset();
    }
  }
}
</script>

<style scoped>
  /* ページ補足情報 */
  .contact-supplement {
    white-space: pre-wrap;
    word-wrap: break-word;
    line-height: 1.6rem;
    letter-spacing: 0.08em;
    color: grey;
  }
  /* フォームを囲むカード */
  .contact-form-card {
    padding: 20px;
  }
</style>