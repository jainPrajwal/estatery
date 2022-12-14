import {
  ACTION,
  FILTER_BY_PROPERTY_PRICE,
  FILTER_BY_PROPERTY_TYPE,
} from "../constants/action.types";
import { ProprtiesInitialState } from "../constants/property.types";

export const propertyReducer = (
  state: ProprtiesInitialState,
  action: ACTION
) => {
  switch (action.type) {
    case FILTER_BY_PROPERTY_TYPE:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          selectedPropertyType: action.payload.propertyType,
        },
      };

    case FILTER_BY_PROPERTY_PRICE:
      return {
        ...state,
        filterBy: {
          ...state.filterBy,
          selectedPriceRange: action.payload.propertyPrice,
        },
      };

    default:
      console.error(`default case..!`);
  }
  return state;
};
