import { useContext } from "react";
import { FavouritesContext } from "../contexts/fav-context";

export const useFavourites = () => useContext(FavouritesContext)