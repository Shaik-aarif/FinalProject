const express = require("express");
const cors = require("cors");
const stripe = require("./routes/stripe");


const app = express();
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.use("/api/stripe" , stripe);


const port  = 5000 ;

app.listen(port , ()=>{
    console.log(`server running on port : ${port}...`)
})