"use client";
import React, {createContext, useContext, useReducer} from "react";


//prepares the data layer
export const StateContext = createContext();

// wrap app and provide data layer to all
export const StateProvider = ({ reducer, initialState, children }) => {
    return(

        <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
        </StateContext.Provider>
    );
};

//pull information from the data layer
export const useStateValue = () => useContext(StateContext);