import { Dispatch } from "redux";
import { cartAction, Iproduct } from "../../types/type";
import { ActionTypes } from "./actionTypes";

export const AddToCart = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.ADD_TO_CART,
      payload: product,
    });
  };
};

export const increase = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.INCREASE,
      payload: product,
    });
  };
};

export const decrease = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.DECREASE,
      payload: product,
    });
  };
};

export const RemoveFromCart = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.REMOVE_FROM_CART,
      payload: product,
    });
  };
};

