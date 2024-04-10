const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/userRoutes");


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

//routes
app.use("/", userRoute); //  /login,


//server home page
app.get("/", async (req, res) => {
  try {
    res.status(200).send("Welcome to todo app.");
  } catch (error) {
    res.status(500).send({ message: "Server connection failed.", error });
  }
});

//mongoose server
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongoose database connected successfully.");
    app.listen(PORT, () => {
      console.log(`Serverlistening PORT:${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Server Error.", error);
    res.status(500).send({ message: "Server connection interputed" });
  });
