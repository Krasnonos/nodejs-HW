const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(
  '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'
);
// sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendEmail = async massage => {
  const msg = { ...massage, from: 'andreykrasnonos123@gmail.com' };
  try {
    await sgMail.send(msg);
    console.log('Email sent');
  } catch (error) {
    console.error(error);
  }
};

module.exports = sendEmail;
