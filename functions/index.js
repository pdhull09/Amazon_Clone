const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51IXkR0SGN5eWVR702b4U7nsouQ62DiZ3ctk8Cv6mRHt86RjE9EfgOluE1lqBLQ70IxjGleYMs9SKwb4Vlt0xlWoQ004nPj9Xxm"
);

// API

// - App consfig
const app = express();

// - Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

// - Listen command
exports.api = functions.https.onRequest(app);
