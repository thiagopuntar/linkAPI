const logger = require("../logger");

module.exports = function (err, req, res, next) {
  if (err) {
    logger.error(err);
    return res.status(422).send("Something went wrong...");
  }

  next();
};
