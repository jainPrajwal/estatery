import React, { createContext, useState } from "react";
import { Property } from "../constants/property.types";

export const FavouritesContext = createContext<{
    favouritesData: { items: Array<Property> },
    setFavouritesData: React.Dispatch<React.SetStateAction<{
        items: Array<Property>;
    }>>
}>({
    favouritesData: {
        items: []
    },
    setFavouritesData: () => { }
});

export const FavouritesProvider = ({ children }: { children: React.ReactNode }) => {
    const [favouritesData, setFavouritesData] = useState<{
        items: Array<Property>
    }>({
        items: []
    })
    return <FavouritesContext.Provider value={{ favouritesData, setFavouritesData }} >
        {children}
    </FavouritesContext.Provider>
}