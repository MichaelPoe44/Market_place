"use client";


//wanting to press button to add item to basket along with all old items in basket
//
export const initialState = {
    basket: [],
};


export default function reducer(state, action){
    //console.log(action);
    
    switch(action.type){

        case "ADD_TO_BASKET":
            
            
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
            
        default:
            return state;
    }
}



