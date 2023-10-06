const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccountKey = require("./serviceAccountKey.json");
// import stripe from "./routes/stripe"
// --------------------------------------------------------------------------------

// const stripe = require("./routes/stripe");
const express = require("express");
const app = express();

// Body parser for our JSON data
app.use(express.json());

// cross orgin
const cors = require("cors");
app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", '*');
  next();
});


// firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// api endpoints
app.get("/", (req, res) => {
  return res.send("hello word");
});

// app.use("/api/stripe" , stripe);

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);



const Stripe = require("./routes/stripe");
app.use("/api/stripe" , Stripe);
const productRoute = require("./routes/products");
app.use("/api/products", productRoute);

exports.app = functions.https.onRequest(app);
