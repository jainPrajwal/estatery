import React, { createContext, useReducer } from "react";
import { ACTION } from "../constants/action.types";
import { Property } from "../constants/property.types";

const initialState = {
    properties: Array<Property>,

}

const PropertyContext = createContext<{
    propertyState: typeof initialState,
    propertyDispatch: React.Dispatch<ACTION>
}>({
    propertyState: initialState,
    propertyDispatch: () => { }
});



const propertyReducer = (state: typeof initialState, action: ACTION) => {
    return initialState;
}
const PropertyProvider = ({ children }: { children: React.ReactNode }) => {
    const [propertyState, propertyDispatch] = useReducer(propertyReducer, initialState);
    return <PropertyContext.Provider value={{ propertyState, propertyDispatch }}>
        {children}
    </PropertyContext.Provider>
}

export { PropertyContext, PropertyProvider }