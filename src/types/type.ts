export interface Iproduct {
  id: number;
  title: string;
  price: string;
  image: string;
}

export interface IproductProps {
  product: Iproduct;
  products: Iproduct[];
  key: number;
}
export type propsProduct = Omit<IproductProps, "products">;
export type propsProducts = Omit<IproductProps, "product" | "key">;
