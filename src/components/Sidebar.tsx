import React, { Dispatch, FC, SetStateAction } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { splitTitle, numberFormat } from "../helper/functions";
import { actionCreators } from "../redux/index";
import { State } from "../redux/rootReducer";
import { cartState, Iproduct } from "../types/type";

interface Iprops {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
  showSidebar: boolean;
}
const Sidebar: FC<Iprops> = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { RemoveFromCart, CheckOut, Clear } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const state: any = useSelector((state: State) => state.cart);

  return showSidebar ? (
    <aside
      id="default-sidebar"
      className="fixed top-0 right-0 z-40 w-1/3 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <span
          onClick={() => {
            setShowSidebar(false);
          }}
          className="w-2 h-2 text-3xl cursor-pointer hover:opacity-80"
        >
          &times;
        </span>
        <ul className="space-y-2">
          {state.cartsItem.map((item: Iproduct) => (
            <li key={item.id}>
              <div className="flex justify-between">
                <div className="flex items-center">
                  <img className="w-28 h-28" src={item.image} alt="" />
                  <div className="ml-2">
                    <div className="flex">
                      <span className="text-lg mr-1">
                        {splitTitle(item.title)}
                      </span>
                      <span className="text-sm text-gray-400">
                        x{item.quantity}
                      </span>
                    </div>
                    <span className="text-md text-gray-400">{}</span>
                  </div>
                </div>

                <div className="flex items-center">
                  <h3 className="text-xl text-gray-500 mr-2">
                    {numberFormat(item.price * item.quantity)}
                  </h3>
                  <button
                    onClick={() => RemoveFromCart(item)}
                    className="border py-1 px-3 cursor-pointer hover:opacity-80"
                  >
                    &times;
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {state.cartsItem.length ? (
          <div className="flex items-center justify-around mt-10">
            <button
              onClick={() => CheckOut(state)}
              className="bg-green-400 py-1 px-4 rounded-md text-white cursor-pointer hover:opacity-80 hover:text-black"
            >
              Check out
            </button>
            <button
              onClick={() => Clear(state)}
              className="bg-red-400 py-1 px-4 rounded-md text-white cursor-pointer hover:opacity-80 hover:text-black"
            >
              Clear
            </button>
          </div>
        ) : (
          <p>your cart is empty</p>
        )}
      </div>
    </aside>
  ) : null;
};

export default Sidebar;
