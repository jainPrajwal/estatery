export const FILTER_BY_PROPERTY_TYPE = `FILTER_BY_PROPERTY_TYPE`;
export const FILTER_BY_PROPERTY_PRICE = `FILTER_BY_PROPERTY_PRICE`;

export type ACTION =
  | {
      type: typeof FILTER_BY_PROPERTY_TYPE;
      payload: {
        propertyType: string | null;
      };
    }
  | {
      type: typeof FILTER_BY_PROPERTY_PRICE;
      payload: {
        propertyPrice: string | null;
      };
    };
