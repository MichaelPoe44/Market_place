"use client";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import { useEffect, useReducer } from "react";
import reducer, { initialState } from "./reducer.js";



export default function Product({ id, title, image, price, rating}){
    const  {state , dispatch} = useStateValue();
    
    //console.log("this is the state >>>>>", state);
    const addToBasket = () => {
        
        //dispatch item into data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
        
    };
    
    
    return(
        <div className="product">
            
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
            
                    {Array(rating).fill().map((_, i) => (
                        <p key={i}>⭐️</p>
                    ))}
                
                    
                    
                </div>

            </div>


            <img src={image} alt="" />

            <button onClick={addToBasket}>Add to Basket</button>


        </div>
    )
}
