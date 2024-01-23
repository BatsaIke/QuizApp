const bcrypt = require('bcrypt');

async function encryptPassword(password) {
  const saltRounds = 10;
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (err) {
    console.error('Error hashing password:', err);
    return null;
  }
}

module.exports= encryptPassword