const jwt = require('jsonwebtoken');

const verifyToken = (token, secret) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        console.error('Error decoding JWT:', err);
        reject(err);
      } else {
        console.log('Decoded JWT:', decoded);
        resolve(decoded);
      }
    });
  });
};

module.exports = verifyToken;
