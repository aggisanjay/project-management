import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port:587,
    auth:{
        user:process.env.SMTP_USER,
        pass:process.env.SMTP_PASS
    }
});

const sendEmail=async({to,subject,body})=>{
  const resposne=  await transporter.sendMail({
    from: process.env.SENDER_EMAIL,
    to,
    subject,
    
    html: body, // HTML body
  });
    return resposne;

}

    

export default sendEmail; 