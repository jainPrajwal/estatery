export type Property = {
  id: string;
  name: string;
  image: string;
  isPopular: boolean;
  rent: {
    amount: string;
    per: `month` | `year`;
  };
  address: string;
  description: {
    beds: number;
    bathrooms: number;
  };
  dimensions: {
    length: number;
    breadth: number;
  };
  type: `houses` | `condos` | `townhomes`;
};

export type ProprtiesInitialState = {
  properties: Array<Property>,
  filterBy: {
      selectedLocation: string | null,
      selectedDate: string | null,
      selectedPropertyType: string | null;
      selectedPriceRange: string | null;

  },
  searchBy: string | null;
}
