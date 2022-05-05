import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

const userSchema = new mongoose.Schema({
  rasse: String,
  farbe: String,
  alter: Number,
  gender: String,
  ort: String,
  preis: Number,
  name:String
});

const User = mongoose.model("User", userSchema);



app.get("/users", async (req, res) => {
  try {
    const users = await User.find().exec();
    return res.json(users);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.post("/addUsers", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    return res.json(newUser);
  } catch (error) {
    return res.json({ error: error.message });
  }
});

app.delete("/users/:dog", async (req, res) => {
  try {
    const dog = req.params.dog;
    console.log(dog);
    await User.findOneAndDelete({rasse:dog})
    const users = await User.find().exec();
    return res.json(users);
  } catch (error) {
    return res.json({ error: error.message });
  }
});






mongoose.connect(process.env.REMOTE_CONNECTION).then(() => {
  app.listen(port, () => {
    console.log(`appExample app listening on port ${port}`);
  });
});



