const User = require("../models/user.model");

module.exports = {
  index: (req, res) => {
    res.json({ message: "ola mundo" });
  },
  create: async (req, res) => {
    const user = new User(req.body);

    await user.save();

    res.json({ user });
  },
};
