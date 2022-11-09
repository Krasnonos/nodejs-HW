const { User } = require('../../models/auth');
const { createReject } = require('../../utils');
const { sendEmail } = require('../../utils');

const resendEmail = async ({ email }) => {
  const user = await User.findOne({ email });

  if (!user || user.verify) {
    throw createReject(400, 'Bad Request');
  }
  await sendEmail({
    to: user.email,
    subject: 'Confirm your Email address',
    text: 'Hello, thank you for registration!',
    html: `<h1>Hello, thank you for registration!</h1> <a href ="http://localhost:3000/api/users/verify/${user.verificationToken}">Click here to confimed your Email</a>`,
  });
};

module.exports = resendEmail;
