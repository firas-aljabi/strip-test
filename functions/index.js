const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51JcZErFpQdKr0M8BoQZFh537tK0x0QzdV2X535xoTB6c1G5Nbh1dRfdFYL4WKCbBZMEZAu4aetrD5SuYe3BEQZeq00BpVbJcqS",
);
const app = express();
app.use(cors({origin: true}));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

