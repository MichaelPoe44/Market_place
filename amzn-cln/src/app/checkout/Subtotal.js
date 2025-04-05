import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { NumericFormat } from "react-number-format";





export default function Subtotal(){
    const {state, dispatch} = useStateValue();
    let itemCount = state.basket?.length;
    let amount = 0;
    
    for (let i=0; i<itemCount; i++){
        amount += state.basket[i]?.price;
    }
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