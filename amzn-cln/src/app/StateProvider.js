"use client";
import React, {createContext, useContext, useReducer} from "react";



//2,15,03
//prepares the data layer
const StateContext = createContext();

// wrap app and provide data layer to all
export const StateProvider = ({ reducer, initialState, children }) => {
    //console.log("init state: ",initialState);
    const [state, dispatch] = useReducer(reducer, initialState);
    return( 
        
        <StateContext.Provider value={{ state, dispatch }}>
            {children}
        </StateContext.Provider>
    );
};

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);