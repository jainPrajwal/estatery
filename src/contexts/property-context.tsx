import React, { createContext, useReducer } from "react";
import { ACTION } from "../constants/action.types";
import {  ProprtiesInitialState } from "../constants/property.types";
import { propertyReducer } from "../reducers/propertyReducer";


const initialState: ProprtiesInitialState = {
    properties: [],
    filterBy: {
        selectedDate: null,
        selectedLocation: null,
        selectedPriceRange: null,
        selectedPropertyType: null
    },
    searchBy: null
}

const PropertyContext = createContext<{
    propertyState: ProprtiesInitialState,
    propertyDispatch: React.Dispatch<ACTION>
}>({
    propertyState: initialState,
    propertyDispatch: () => { }
});




const PropertyProvider = ({ children }: { children: React.ReactNode }) => {
    const [propertyState, propertyDispatch] = useReducer(propertyReducer, initialState);
    return <PropertyContext.Provider value={{ propertyState, propertyDispatch }}>
        {children}
    </PropertyContext.Provider>
}

export { PropertyContext, PropertyProvider }