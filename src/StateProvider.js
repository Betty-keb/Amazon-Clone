import React, { createContext, useContext, useReducer } from "react";

// Prepares the dataLayer
export const StateContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// push and Pull information from the data layer
export const useStateValue = () => useContext(StateContext);

/**
 * import React, { createContext, useContext, useReducer } from 'react'

// create the data layer  using createContext()
export const StateContext = createContext();

// provide the datalayer to our app
export function StateProvider({reducer, initialState,children}) {
// const initialState = {
//   basket:[],
// };

// const reducer = (state, action) =>{
//   switch(action.type){
//     case "ADD_TO_BASKET":
//     return {
//       ...state, 
//       basket: [...state.basket, action.item]
//     }
//   }
// }
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
  )
};

// use the data layer push to or pull from the layer using useContet();

export const UseStateValue = ()=> useContext(StateContext);
 */
