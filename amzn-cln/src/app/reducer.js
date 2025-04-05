"use client";



//wanting to press button to add item to basket along with all old items in basket
//
export const initialState = {
    basket: [],
};


export default function reducer(state, action){
    
    switch(action.type){

        case "ADD_TO_BASKET":
            
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            //get index of first item with wanted id
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            //copy basket
            let newBasket = [...state.basket];

            //if item with that id found
            if (index >=0){
                //remove the one item at index
                newBasket.splice(index, 1);
            }
            else{
                console.warn(
                    `Cant remove product (id: ${action.id} as its not in basket.`
                );
            }

            return{
                ...state,
                basket: newBasket
            }

        default:
            return state;
    }
}



