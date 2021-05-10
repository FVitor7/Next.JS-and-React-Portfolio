export default function (req, res) {
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.EMAIL_PORTFOLIO,
      pass: process.env.PASS_EMAIL_PORTFOLIO,
    },
    secure: true,
  })

  const mailData = {
    from: process.env.EMAIL_PORTFOLIO,
    to: process.env.EMAIL_USER,
    subject: `Mensagem de ${req.body.name}`,
    text: req.body.message + " | Enviado por: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Enviado por: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err)
      console.log(err)
    else
      console.log(info);
  })

  console.log(req.body)
  res.send('success')
}