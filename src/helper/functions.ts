import { cartState, Iproduct } from "../types/type";

export const splitTitle: Function = (title: string): string => {
  const split = title.split(" ");
  const newTitle = `${split[0]} ${split[1]}`;
  return newTitle;
};

export const numberFormat: Function = (number: number) => {
  const f = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(number);
  return f;
};

export const quntityCount: Function = (state: cartState, product: Iproduct) => {
  const index = state.cartsItem?.findIndex((item) => item.id === product.id);
  if (index === -1) {
    return false;
  } else {
    return state.cartsItem[index].quantity;
  }
};
