const {auth_key} = require("../../../config/vars");

const authorization = (req, res, next) => {
  const authToken = req.headers["authorization"].split(" ")[1];
  try {
    if (auth_key === authToken) {
      return next();
    }
    res.status(401).json({
      success: false,
      message: "Authentication Key Invalid",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: `Authorization Server Error - ${err.message}`,
    });
  }
};

module.exports = authorization;