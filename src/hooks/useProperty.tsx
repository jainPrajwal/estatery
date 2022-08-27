import { useContext } from "react";
import { PropertyContext } from "../contexts/property-context";

export const useProperty = () => useContext(PropertyContext)