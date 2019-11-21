import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import emailTemplate from './emailTemplate';

dotenv.config();
const { EMAIL_NAME, EMAIL_PASS } = process.env;
const isTest = process.env.NODE_ENV === 'test';

const sendEmail = async (to, subject, url) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: EMAIL_NAME,
      pass: EMAIL_PASS
    }
  });
  const mailOptions = {
    from: 'IdeaLab Technologies',
    to,
    subject,
    html: emailTemplate(url)
  };

  const mail = isTest ? Promise.resolve('Email sent') : await transporter.sendMail(mailOptions);
  return mail;
};

export default sendEmail;
