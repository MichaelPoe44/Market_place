'use server';
export async function getInitialState(){
    return{
        basket: [],
    };
}

export default async function reducer(state, action){
    switch(action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            }
    }
}



