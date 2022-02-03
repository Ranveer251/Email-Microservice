const transporter = require('../helpers/createTransporter');

/**
 * Send email to the provided email address
 * @param {Object} mail Object containing email address, text, html and subject
 * @returns Success/Failure response along with associated message
 */

const sendEmail = async (mail) => {
    try {
        const {email,text,html,subject} = mail;
        const message = {
            from: `Ranveer Singh <${process.env.EMAIL}>`,
            to: email,
            subject: subject,
            text: text,
            html: html
        };
        await transporter.sendMail(message);
        return {
            success: true,
            message: "Email sent successfully",
        };
    } catch (err) {
        console.log(err);
        return {
            success: false,
            message: "Something went wrong, Email could not be sent!",
            error: err.message
        };
    }
};

module.exports = sendEmail ;