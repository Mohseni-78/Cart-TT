import { cartAction, cartState, Iproduct } from "../../types/type";
import { ActionTypes } from "./actionTypes";

const initialState: cartState = {
  cartsItem: [],
  sumQuantity: 0,
};
const sumQuantity = (state: any) => {
  const sumQuantity = state.cartsItem.reduce(
    (total: number, curr: any) => total + curr.quantity,
    0
  );
  return { sumQuantity };
};

const cartsReducer = (state: cartState = initialState, action: cartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      if (!state.cartsItem.find((item) => item.id === action.payload?.id)) {
        state.cartsItem.push({ ...action.payload, quantity: 1 });
      }
      return {
        ...state,
        cartsItem: [...state.cartsItem],
        ...sumQuantity(state),
      };

    case ActionTypes.INCREASE:
      const indexI = state.cartsItem.findIndex(
        (item) => item.id === action.payload?.id
      );
      state.cartsItem[indexI].quantity++;
      return {
        ...state,
        ...sumQuantity(state),
      };
    case ActionTypes.DECREASE:
      const indexD = state.cartsItem.findIndex(
        (item) => item.id === action.payload?.id
      );
      if (state.cartsItem[indexD].quantity <= 1) {
        state.cartsItem.splice(indexD, 1);
        return {
          ...state,
          ...sumQuantity(state),
        };
      } else {
        state.cartsItem[indexD].quantity--;
        return {
          ...state,
          ...sumQuantity(state),
        };
      }

    case ActionTypes.REMOVE_FROM_CART:
      const newItem = state.cartsItem.filter(
        (item) => item.id !== action.payload?.id
      );
      return {
        ...state,
        cartsItem: [...newItem],
        ...sumQuantity(state),
      };
    default:
      return state;
  }
};
export default cartsReducer;
