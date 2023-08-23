import nodemailer from "nodemailer";
// const nodemailer = require('nodemailer');

const email = process.env.EMAIL_ADDRESS;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service:'gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
