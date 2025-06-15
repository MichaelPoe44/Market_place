"use client";
import Link from "next/link";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Payment.css";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import { NumericFormat } from "react-number-format";
import { getBasketTotal } from "../checkout/Subtotal";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "../axios";



export default function Payment(){
    const {state, basket} = useStateValue();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const router = useRouter();
    
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                //stripe wants total in cents
                url: `/payment/create?totals=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, basket)


    const handleSubmit = async (e) => {
        e.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            router.replace("/orders")
        })
    }

    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }

    return(
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (
                        <Link href="/checkout">{state.basket?.length} items</Link>
                    )
                </h1>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{state.user?.email}</p>
                        <p>123 Street Lane</p>
                        <p>Ruston, LA</p>
                    </div>
                </div>
                
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {state.basket.map((item,i) => (
                            <CheckoutProduct
                                key = {i}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />

                            <div className="payment_priceContainer">
                                <NumericFormat
                                    decimalScale={2}
                                    fixedDecimalScale={true}
                                    value={getBasketTotal(state.basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix="$"
                                
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                                
                                />
                                <button disabled={processing|| disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"} </span>
                                </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                     </div>
                </div> 
                
            </div>
        </div>
    )
}