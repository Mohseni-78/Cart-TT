export interface Iproduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: object;
  quantity: number;
}

export interface IproductProps {
  product: Iproduct;
  products: Iproduct[];
  key: number;
}
export type propsProduct = Omit<IproductProps, "products">;
export type propsProducts = Omit<IproductProps, "product" | "key">;

export type cartState = {
  cartsItem: Iproduct[];
  sumQuantity:number
};

export type cartAction = {
  type: string;
  payload: Iproduct ;
};
