import { cartAction, cartState, Iproduct } from "../../types/type";
import { ActionTypes } from "./actionTypes";

const initialState: cartState = {
  cartsItem: [],
  sumQuantity: 0,
};
const sumQuantity = (state: Iproduct[]) => {
  const sumQuantity = state.reduce(
    (total: number, curr: Iproduct) => total + curr.quantity,
    0
  );
  return { sumQuantity };
};

const cartsReducer = (state: cartState = initialState, action: cartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      if (!state.cartsItem.find((item) => item.id === action.payload?.id)) {
        state.cartsItem.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        cartsItem: [...state.cartsItem],
        ...sumQuantity(state.cartsItem),
      };

    case ActionTypes.INCREASE:
      const indexI = state.cartsItem.findIndex(
        (item) => item.id === action.payload?.id
      );
      state.cartsItem[indexI].quantity++;
      return {
        ...state,
        ...sumQuantity(state.cartsItem),
      };
    case ActionTypes.DECREASE:
      const indexD = state.cartsItem.findIndex(
        (item) => item.id === action.payload?.id
      );
      if (state.cartsItem[indexD].quantity <= 1) {
        state.cartsItem.splice(indexD, 1);
        return {
          ...state,
          ...sumQuantity(state.cartsItem),
        };
      } else {
        state.cartsItem[indexD].quantity--;
        return {
          ...state,
          ...sumQuantity(state.cartsItem),
        };
      }

    case ActionTypes.REMOVE_FROM_CART:
      const newItem = state.cartsItem.filter(
        (item) => item.id !== action.payload?.id
      );

      return {
        cartsItem: [...newItem],
        ...sumQuantity(newItem),
      };

    case ActionTypes.CHECK_OUT:
      return {
        cartsItem: [],
        sumQuantity: 0,
      };
    case ActionTypes.CLEAR:
      return {
        cartsItem: [],
        sumQuantity: 0,
      };
    default:
      return state;
  }
};
export default cartsReducer;
