const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();
const serviceAccountKey = require("./serviceAccountKey.json");

// --------------------------------------------------------------------------------


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



// --------------------------------------------------------------------------------
//    ******* new yt stripe 

// const express = require ("express");
// const app = express();
// const cors = require("cors");


// app.use(express.json());
// app.use(cors());


// app,post("/api/create-checkout-session" , async(req, res) =>{
//   console.log("new working");
// })



// app.listen(7000 , ()=>{
//   console.log("server strated")
// })








// --------------------------------------------------------------------------------

// firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});

// api endpoints
app.get("/", (req, res) => {
  return res.send("hello word");
});

app.get("/routes/products", (req, res) => {
  return res.send("hello sodouehfiufvire");
});

const userRoute = require("./routes/user");
app.use("/api/users", userRoute);

const productRoute = require("./routes/products");
app.use("/api/products", productRoute);

exports.app = functions.https.onRequest(app);
