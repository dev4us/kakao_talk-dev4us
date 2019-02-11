import nodemailer from "nodemailer";

const sendEmail = async ({ to, userId, verificationCode }) => {
  const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.GMAIL_USER_ID,
      pass: process.env.GMAIL_USER_PASSWORD
    }
  });

  const mailOptions = {
    from: "public.dev4us@gmail.com",
    to,
    subject: "다 왔어요. 😚 이제 마지막 단계입니다.",
    html: `안녕하세요. 카카오 입니다.<br>카카오계정 사용을 위해 이메일 주소 인증이 필요합니다.<br>아래 버튼을 클릭하여 이메일 주소 인증을 완료하면 해당 이메일 주소를 카카오계정으로 사용할 수 있습니다.<br>만일 카카오 계정을 등록하지 않았는데 본 메일을 받았다면 아래 버튼을 클릭하지 마세요.<br><br><br>    <a href="http://localhost:3000/emailVerification/${userId}/${verificationCode}" target="_blank" style="text-decoration:none"><div style="color: #0D0D0D; background-color: #fee835; border-radius: 4px; -webkit-border-radius: 4px; -moz-border-radius: 4px; max-width: 224px; width: 194px;width: auto; border-top: 0px solid transparent; border-right: 0px solid transparent; border-bottom: 0px solid transparent; border-left: 0px solid transparent; padding-top: 15px; padding-right: 15px; padding-bottom: 15px; padding-left: 15px; font-family: 'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif; text-align: center; mso-border-alt: none;">
      <span style="cursor:pointer; font-family:'Montserrat', 'Trebuchet MS', 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', Tahoma, sans-serif;font-size:16px;line-height:32px;">이메일 주소를 인증합니다.</span>
    </div></a>`
  };

  await smtpTransport.sendMail(mailOptions, (error, responses) => {
    if (error) {
      return false;
      console.log(responses, error);
    } else {
      return true;
    }
    smtpTransport.close();
  });
};

export default sendEmail;
