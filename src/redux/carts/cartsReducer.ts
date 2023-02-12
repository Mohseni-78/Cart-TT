import { cartAction, cartState, Iproduct } from "../../types/type";
import { ActionTypes } from "./actionTypes";

const initialState: cartState = {
  cartsItem: [],
};

const cartsReducer = (state: cartState = initialState, action: cartAction) => {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        cartsItem: [...state.cartsItem, { ...action.payload, quantity: 1 }],
      };
    case ActionTypes.INCREASE:
      const indexI = state.cartsItem.findIndex(
        (item) => item.id === action.payload?.id
      );
      state.cartsItem[indexI].quantity++;
      return {
        ...state,
      };
    case ActionTypes.DECREASE:
      const indexD = state.cartsItem.findIndex(
        (item) => item.id === action.payload?.id
      );

      if (state.cartsItem[indexD].quantity === 1) {
        const newItem = state.cartsItem.filter((item) => {
          return item.id !== action.payload?.id;
        });
        return {
          cartsItem: [...newItem],
        };
      } else {
        state.cartsItem[indexD].quantity--;
        return {
          ...state,
        };
      }

    case ActionTypes.REMOVE_FROM_CART:
      const newItem = state.cartsItem.filter((item) => {
        return item.id !== action.payload?.id;
      });
      return {
        cartsItem: [...newItem],
      };
    default:
      return state;
  }
};
export default cartsReducer;
