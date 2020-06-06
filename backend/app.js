// =============    DECLARE VARIABLES   =============
import express from "express";
import connectDB from "./Database/connections";
const app = express();
const port = process.env.PORT || 2355;

// Using stylesheet css in public directory
app.use(express.static(__dirname + "/public"));
//
app.use(express.json());

// Connect to MongoDB Atlas
connectDB();

// ROUTES
app.get("/", (req, res) => {
  res.send("hello express");
});


// Listening to the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
