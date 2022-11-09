const { resendEmail } = require('../../services/authServices');

const resendVerificationEmail = async (req, res) => {
  await resendEmail(req.body);
  res.status(200).json({ message: 'Verification email sent' });
};

module.exports = resendVerificationEmail;
