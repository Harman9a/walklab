const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: false,
  },

  password: {
    type: String,
    required: false,
  },
});

const User = mongoose.model("Users", UserSchema);

module.exports = User;
