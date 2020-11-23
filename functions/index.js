const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
//gmailの送信メールサーバーアドレス
const gmailEmail = functions.config().gmail.email;
//gmailの送信メールサーバーパスワード
const gmailPassword = functions.config().gmail.password;
//送信先メールアドレス
const adminEmail = functions.config().admin.email;

//gmailメールサーバーに関する設定
const mailTransport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: gmailEmail,
    password: gmailPassword
  }
});

//メールテンプレート
const adminContents = data => {
  return `以下内容でホームページよりお問い合わせを受けました。

お名前：
${data.name}

メールアドレス：
${data.email}

内容：
${data.content}
`;
}

exports.sendMail = functions.https.onCall(async (data, context) => {
  //メール設定
  let adminMail = {
    from: gmailEmail,
    to: adminEmail,
    subject: "ホームページお問い合わせ",
    text: adminContents(data)
  }

  //管理者へのメール送信
  try {
    await mailTransport.sendMail(adminMail);
  } catch(e) {
    console.error(`send failed.${e}`);
    throw new functions.https.HttpsError("internal", "send failed");
  }
});

