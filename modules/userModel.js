// const mongoose = require("mongoose");


// const userSchema = mongoose.Schema(
//   //user login page
//   {
//     email: { type: String, required: true },
//     // verified: { type: Boolean, required: true }
//   },
//   { timestamps: true }
// );

// const UserModel = mongoose.model("login", userSchema);
// module.exports = UserModel;

// -------------------above working for just message login------------

const mongoose = require("mongoose");


const userSchema = mongoose.Schema(
  //user login page
  {
    email: { type: String, required: true },
    // verified: { type: Boolean, required: true }
  },
  { timestamps: true }
);

const UserModel = mongoose.model("signup", userSchema);
module.exports = UserModel;
