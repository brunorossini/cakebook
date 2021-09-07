const User = require("../models/user.model");
const tokenize = require("../functions/jwt.create");

module.exports = {
  create: async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "user not found" });

    await user.comparePassword(password, (err, isMatch) => {
      if (!isMatch) {
        return res.status(400).json({ message: "password incorrect" });
      }

      return res.json({
        email,
        token: tokenize(user),
      });
    });
  },
};
