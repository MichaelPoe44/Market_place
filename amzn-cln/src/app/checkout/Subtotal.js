"use client";
import "./Subtotal.css";

import { NumericFormat } from "react-number-format";





export default function Subtotal(){
    let itemCount = 0;
    let amount = 10000;
    return(

        <div className="subtotal">
            <NumericFormat
                decimalScale={2}
                fixedDecimalScale={true}
                value={amount}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"

                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({itemCount} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </div>
                )}
                
            />
            
            <button>Proceed to Checkout</button>
        </div>

    );
}