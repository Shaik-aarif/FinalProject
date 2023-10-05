
const express = require("express");
require("dotenv").config();
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);

const router = express.Router()


// // cross orgin
const cors = require("cors");

app.use(cors({ origin: true }));
app.use((req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
});





router.post('/create-checkout-session', async (req, res) => {

    console.log("stripe active")
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: '{{PRICE_ID}}',
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${YOUR_DOMAIN}/cancel.html`,
    });
  
    res.send({url: session.url});
  });
  

module.exports = router;


