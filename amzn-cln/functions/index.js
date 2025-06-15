
const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51RKiecPLQSvcEPtGravfbs3wRKgIYlboRgEhx9prMUwChj6K5y46SrYDL3Wf2BCEqNHerOgu4XoQjoXu9921DcGW00j8JsX4oT")


//API

//app config
const app = express();

//midlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/', (request, response) => response.status(200).send("Hello World"));
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment Request Recieved BOOM! for this amount >>>> ",total);
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_sercret,
    })
})
//listenCommand
exports.api = functions.https.onRequest(app);