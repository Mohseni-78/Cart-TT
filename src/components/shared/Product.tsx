import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { numberFormat, splitTitle } from "../../helper/functions";
import { propsProduct } from "../../types/type";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../redux/index";
import { State } from "../../redux/rootReducer";
import { quntityCount } from "../../helper/functions";
import { ActionTypes } from "../../redux/carts/actionTypes";

const Product: FC<propsProduct> = ({ product }) => {
  const dispatch = useDispatch();
  const { AddToCart, increase, decrease, RemoveFromCart } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state = useSelector((state: State) => state.cart);
  

  const PRODUCT: JSX.Element = (
    <div className="m-auto borde rounded-sm border-2 p-8">
      <img
        alt={product.title}
        src={product.image}
        className="w-52 h-52 rounded bg-black"
      />
      <div className="flex justify-between mt-5">
        <h3 className="text-lg font-bold">{splitTitle(product.title)}</h3>
        <span className="text-gray-400">{numberFormat(product.price)}</span>
      </div>
      {!quntityCount(state, product) ? (
        <button
          onClick={() => AddToCart(product)}
          className="bg-blue-700 text-white py-1 px-5 rounded-lg w-full mt-8 hover:opacity-75"
        >
          + Add To Cart
        </button>
      ) : (
        <div className="text-center">
          <div className="flex justify-around  text-center mt-4">
            <button
              onClick={() => increase(product)}
              className="bg-blue-700 text-white py-1 px-5 rounded-full "
            >
              +
            </button>
            <span>{quntityCount(state, product)} in cart</span>
            <button
              onClick={() => decrease(product)}
              className="bg-blue-700 text-white py-1 px-5 rounded-full "
            >
              -
            </button>
          </div>
          <button
            onClick={() => RemoveFromCart(product)}
            className="bg-red-800 text-white py-1 px-5 rounded-full text-sm mt-4"
          >
            remove
          </button>
        </div>
      )}
    </div>
  );
  return <>{PRODUCT}</>;
};

export default Product;
