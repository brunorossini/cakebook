const jwt = require("jwt-simple");
const { getTime, addDays } = require("date-fns");

module.exports = (user) => {
  let payload = {
    sub: user.email,
    iat: getTime(new Date()),
    exp: getTime(addDays(new Date(), 30)),
  };

  return jwt.encode(payload, process.env.TOKEN_SECRET);
};
