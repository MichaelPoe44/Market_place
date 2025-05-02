"use client";
import { useStateValue } from "../StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";


export default function Checkout(){
    const {state, dispatch} = useStateValue();
    

    return(
        <div className="checkout">
            <div className="checkout_left">
               
                <img className="checkout_ad" src="amazon_ad.jpg" />

                <div>
                    <h3>{state.user?.email}</h3>
                    <h2 className="checkout_title">
                        Your Shopping Basket</h2>
                    

                    {state.basket.map((item,i) => (
                        <CheckoutProduct
                            key={i}
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                         />
                    ))}

    
                    
                </div>


            </div>


            <div className="checkout_right">
                <Subtotal />
            </div>
        
        </div>
    );
} 