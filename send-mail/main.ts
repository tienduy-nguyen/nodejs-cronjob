import cron from 'node-cron'
import express from 'express'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import sgTransport from 'nodemailer-sendgrid-transport'

dotenv.config()

const app = express()

const mailer = nodemailer.createTransport(sgTransport({
  auth: {api_key: process.env.SENDGRID_API_KEY}
}))

// Sending emails every Wednesday.
cron.schedule('0 0 * * 3', function () {
  console.log('---------------------');
  console.log('Running Cron Job');
  let messageOptions = {
    from: 'your_demo_email_address@example.com',
    to: 'user@example.com',
    subject: 'Scheduled Email',
    text: 'Hi there. This email was automatically sent by us.'
  };
  mailer.sendMail(messageOptions, function (error, info) {
    if (error) {
      throw error;
    } else {
      console.log('Email successfully sent!');
    }
  });
});

app.listen(3111, () => console.log('App is running on port 3111'))
