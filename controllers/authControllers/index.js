const registeration = require('./registeration');
const login = require('./login');
const getCurrent = require('./getCurrent');
const logout = require('./logout');
const patchAvatar = require('./patchAvatar');
const verifyEmail = require('./verifyEmail');
const resendVerificationEmail = require('./resendVerificationEmail');

module.exports = {
  login,
  registeration,
  getCurrent,
  logout,
  patchAvatar,
  verifyEmail,
  resendVerificationEmail,
};
