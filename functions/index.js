const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51MdRo3Jz10ODqQsTuZCXLY7hStyEF4IaUHB4kGvegTOW3O7wc2UaFCPXyu5VJGFeJhp71WpUqyZ9EXbBszxZQk7w00pmodtXgQ" // secrete key
);
// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved for this amount >>> ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // submits of the currency
    currency: "usd",
  });
  // console.log(paymentIntent);
  // OK created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// Listen command
exports.api = functions.https.onRequest(app);

// http://127.0.0.1:5001/clone-d7b92/us-central1/api

// const functions = require("firebase-functions");
// const express = require("express");
// const cors = require("cors");
// const stripe = require("stripe")("");

// // App config
// const app = express();

// // Middlewares
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => res.status(200).send("hello World"));
// app.post("/payments/create", async (req, res) => {
//   const total = req.query.total;
//   console.log("Payment Request Recieved for this amount >>> ", total);

//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: total,
//     currency: "usd",
//   });
//   console.log(paymentIntent);
//   //201 status Ok- created
//   res.status(201).send({
//     clientSecret: paymentIntent.client_secret,
//   });
// });

// // Listen command
// exports.api = functions.https.onRequest(app);
