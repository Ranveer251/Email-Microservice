const path = require('path');

// import .env variables
require('dotenv').config({
  path: path.join(__dirname, '../../.env')
});

module.exports = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  email: process.env.EMAIL,
  client_id: process.env.CLIENT_ID,
  client_secret: process.env.CLIENT_SECRET,
  refresh_token: process.env.REFRESH_TOKEN,
  redirect_uri: process.env.REDIRECT_URI,
  auth_key: process.env.AUTH_KEY
};
