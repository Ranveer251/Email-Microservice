const sendEmail = require('../services/sendEmail')

const send = async (req, res, next) => {
    try {
        const result = await sendEmail(req.body);
        return res.status(result.success===true ? 200 : 500).json(result);
    } catch (err) {
        return next(err);
    }
}

module.exports = {
    send,
};