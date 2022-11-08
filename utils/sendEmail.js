const sgMail = require('@sendgrid/mail');
// const SENDGRID_API_KEY = process.env;
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async massage => {
  console.log(process.env.SENDGRID_API_KEY);
  const msg = { ...massage, from: 'andreykrasnonos123@gmail.com' };
  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendEmail;
