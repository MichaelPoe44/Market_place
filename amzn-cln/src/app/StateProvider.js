"use client";
import React, {createContext, useContext, useReducer, useEffect} from "react";



//2,15,03
//prepares the data layer
const StateContext = createContext();

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