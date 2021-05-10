//const express = require('express');
//const mongoose = require('mongoose');
//const requireDir = require('require-dir');
//const cors = require('cors');
//var http = require('http');
//const path = require("path");

require('dotenv').config()




export default function (req, res) {
  
  
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
      console.log(info)
      res.send('success')
  })

  //console.log(req.body)
  
}