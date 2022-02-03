const {google} = require('googleapis')
const nodemailer = require('nodemailer')

const {email, client_id, client_secret, refresh_token, redirect_uri} = require('../../../config/vars');

const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uri
);
oauth2Client.setCredentials({ refresh_token: refresh_token });
  
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: email,
        clientId: client_id,
        clientSecret: client_secret,
        refreshToken: refresh_token
    },
    tls: {
        rejectUnauthorized: false
    }
});

module.exports = transporter;
