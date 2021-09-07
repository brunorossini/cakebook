const { getTime } = require("date-fns");
const jwt = require("jwt-simple");

module.exports = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ message: "No token provided" });

  let payload;
  try {
    payload = jwt.decode(token.split("Bearer ")[1], process.env.TOKEN_SECRET);
  } catch (error) {
    return res.status(401).send({ message: error.message });
  }

  if (payload.exp < getTime(new Date())) {
    return res.status(401).send({ message: "Token has expired" });
  }

  req.email = payload.sub;
  next();
};
