import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { NumericFormat } from "react-number-format";
import { useRouter } from "next/navigation";

//6 05 38
export function getBasketTotal(basket){
    let itemCount = basket.length;
    let amount = 0;
    for (let i=0; i<itemCount; i++){
        amount += basket[i]?.price;
    }
    return amount;
}


export default function Subtotal(){
    const router = useRouter();
    const {state, dispatch} = useStateValue();
    let itemCount = state.basket?.length;
    
    
    
    return(

        <div className="subtotal">
            <NumericFormat
                decimalScale={2}
                fixedDecimalScale={true}
                value={getBasketTotal(state.basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix="$"

                renderText={(value) => (
                    <div>
                        <p>
                            Subtotal ({state.basket.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </div>
                )}
                
            />
            
            <button onClick={e => router.push("/payment")}>Proceed to Checkout</button>
        </div>

    );
}