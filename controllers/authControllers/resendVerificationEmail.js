const { resendEmail } = require('../../services/authServices');

const resendVerificationEmail = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    res.status(400).json({ message: 'Bad Request' });
  }
  await resendEmail(email);

  res.status(200).json({ message: 'Verification email sent' });
};

module.exports = resendVerificationEmail;
