require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");

const app = express();
const PORT = process.env.PORT || 3000;
const uri = process.env.MONGO_URL;

app.use(cors());
app.use(bodyParser.json());

/* ---------- HOLDINGS ---------- */
app.get("/allHoldings", async (req, res) => {
  const allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

/* ---------- POSITIONS ---------- */
app.get("/allPositions", async (req, res) => {
  const allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

/* ---------- SIGNUP ---------- */
app.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    return res.status(400).send("User already exists");
  }

  const user = new UserModel({ email, password });
  await user.save();

  res.send("Signup successful");
});

/* ---------- LOGIN (IMPORTANT) ---------- */
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await UserModel.findOne({ email, password });
  if (!user) {
    return res.status(401).send("Invalid credentials");
  }

  res.json({ message: "Login successful", user });
});

/* ---------- NEW ORDER ---------- */
app.post("/newOrder", async (req, res) => {
  const newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  await newOrder.save();
  res.send("Order saved");
});

/* ---------- SERVER ---------- */
app.listen(PORT, () => {
  console.log(`App started on port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB connected!");
});
