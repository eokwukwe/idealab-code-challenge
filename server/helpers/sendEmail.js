import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const { EMAIL_NAME, EMAIL_PASS } = process.env;
const isTest = process.env.NODE_ENV === 'test';

const sendEmail = async (to, subject, message) => {
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
    html: message
  };

  const mail = isTest ? Promise.resolve('Email sent') : await transporter.sendMail(mailOptions);
  return mail;
};

export default sendEmail;
