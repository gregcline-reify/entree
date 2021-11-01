export type LoadingStatus = "Loading" | "Loaded";

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type NewMenuItem = {
  name: string;
  description: string;
  price: number | null;
};

