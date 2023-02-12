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

export const Increase = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.INCREASE,
      payload: product,
    });
  };
};

export const Decrease = (product: Iproduct) => {
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
export const CheckOut = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.CHECK_OUT,
      payload: product,
    });
  };
};
export const Clear = (product: Iproduct) => {
  return (dispatch: Dispatch<cartAction>) => {
    dispatch({
      type: ActionTypes.CLEAR,
      payload: product,
    });
  };
};
