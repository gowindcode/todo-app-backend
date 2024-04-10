
const mongoose = require("mongoose");


const loginSchema = mongoose.Schema(
  //user login page
  {
    email: { type: String, required: true },
    token: { type: String, required: true}
    // verified: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const LoginModel = mongoose.model("login", userSchema);
module.exports = LoginModel;