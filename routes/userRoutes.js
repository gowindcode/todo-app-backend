// const express = require("express");
// const router = express.Router();
// const UserModel = require("../modules/userModel");


// //user-login

// router.post("/login", async (req, res) => {
//   try {
//     console.log("user-login:", req.body);

//     const { email } = req.body;

//     // Find the user based on the provided email
//     const loginRequest = await UserModel.updateOne({ email });

//     // If user doesn't exist or password is incorrect, return an error
//     if (!loginRequest ) {
//       console.log("Invalid email ");
//       return res.status(401).json({ message: "Invalid email" });
//     } else {
//       const user = new UserModel({ ...req.body, verified: true });
//       await user.save();
//       res.status(200).json({ message: "Login successful", user });
//       // console.log("Login user details.", user);
//     }

//     // If user exists and password is correct, return a success message "Login successful"
//   } catch (error) {
//     console.error("User login failed", error);
//     res.status(500).json({ message: "Server error" });
//   }
// });

// module.exports = router;

// ------------normal working route--------------

const express = require("express");
const router = express.Router();
const UserModel = require("../modules/userModel");

// Route for user registration
router.post("/signin", async (req, res) => {
  try {
    const { email } = req.body;

    // Check if the email is provided
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    // Create a new user instance
    const newUser = new UserModel({ email });

    // Save the new user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("User registration failed", error);
    res.status(500).json({ message: "Server error" });
  }
});

//login
router.post("/login", async (req, res) => {
    try {
      const { email, token } = req.body;
  
      // Check if email and token are provided
      if (!email || !token) {
        return res.status(400).json({ message: "Email and token are required" });
      }
  
      // Find the user by email
      const user = await UserModel.findOne({ email });
      
      if (!user) {
        return res.status(401).json({ message: "User not found" });
      }
  
      // Check if the provided token matches the user's _id
      if (user._id.toString() === token) {
        return res.status(200).json({ message: "Login successful" });
      } else {
        return res.status(401).json({ message: "Invalid credentials" });
      }
    } catch (error) {
      console.error("User login failed", error);
      res.status(500).json({ message: "Server error" });
    }
  });
  

module.exports = router;


