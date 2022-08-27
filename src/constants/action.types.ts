export const FILTER_BY_PROPERTY_TYPE = `FILTER_BY_PROPERTY_TYPE`;

export type ACTION = {
  type: typeof FILTER_BY_PROPERTY_TYPE;
  payload: {
    propertyType: string | null;
  };
};
