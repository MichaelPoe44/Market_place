"use client";
import Link from "next/link";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { useStateValue } from "../StateProvider";
import "./Payment.css";




export default function Payment(){
    const {state, basket} = useStateValue();


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
                        {/*stripe*/}
                     </div>
                </div> 
                
            </div>
        </div>
    )
}