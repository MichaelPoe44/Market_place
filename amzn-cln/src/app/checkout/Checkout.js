import "./Checkout.css";
import Subtotal from "./Subtotal.js";


export default function Checkout(){
    return(
        <div className="checkout">
            <div className="checkout_left">
               
                <img className="checkout_ad" src="amazon_ad.jpg" />

                <div>
                    <h2 className="checkout_title">
                        Your Shopping Basket</h2>
                        
                </div>


            </div>


            <div className="checkout_right">
                <Subtotal />
            </div>
        
        </div>
    );
} 