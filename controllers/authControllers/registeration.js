const { v4: uuidv4 } = require('uuid');
const { signUpUser } = require('../../services/authServices');
const { sendEmail } = require('../../utils');

const registeration = async (req, res, next) => {
  const { email, password } = req.body;

  const verificationToken = uuidv4();

  try {
    const result = await signUpUser({
      email,
      password,
      verificationToken,
    });

    await sendEmail({
      to: email,
      subject: 'Confirm your Email address',
      text: 'Hello, thank you for registration!',
      html: `<h1>Hello, thank you for registration!</h1> <a href ="http://localhost:3000/api/users/verify/${verificationToken}">Click here to confimed your Email</a>`,
    });

    res.status(201).json({ status: 'Succsess', user: result });
  } catch (error) {
    next(error);
  }
};

module.exports = registeration;
