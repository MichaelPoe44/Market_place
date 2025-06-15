"use client";
import "../globals.css";
import Payment from "./Payment"
import Header from "../Header"
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51RKiecPLQSvcEPtGuN9LdhETZO2bXFV0wI3lvmFij6kWyMZsQlPd2cD27Dce0hLP9YMp0k3mKllSNEHmqDAIkhVZ00dFJKWtIR"
);


export default function Page(){


    return(
        <div>
            <Header />
            <Elements stripe={promise}>
                <Payment />
            </Elements>
        </div>
    )
}