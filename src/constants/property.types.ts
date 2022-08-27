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
