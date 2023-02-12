import React, { Dispatch, FC, SetStateAction, useState } from "react";
import { State } from "../redux/rootReducer";
import { useSelector } from "react-redux";

interface Iprops {
  setShowSidebar: Dispatch<SetStateAction<boolean>>;
}
const Navbar: FC<Iprops> = ({ setShowSidebar }) => {
  const state: any = useSelector((state: State) => state.cart);
  // console.log(state.sumQuantity);

  const [cartShow, setCartShow] = useState<boolean>(true);
  const NAVBAR: JSX.Element = (
    <div className="flex justify-around p-5 bg-white shadow-md">
      <ul className="flex">
        <li className="hover:opacity-80 hover:cursor-pointer">Home</li>
        <li className="mx-5 hover:opacity-80 hover:cursor-pointer">Store</li>
        <li className="hover:opacity-80 hover:cursor-pointer">About</li>
      </ul>
      <div
        onClick={() =>
          setShowSidebar((prev: boolean) => {
            return !prev;
          })
        }
        className="relative hover:opacity-80 hover:cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-7 h-7  ${!cartShow ? "hidden" : "block"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
        <span className="absolute right-0 bottom-0 rounded-full bg-red-600 w-4 h-4  text-white  text-sm  leading-tight text-center">
          {state.sumQuantity}
        </span>
      </div>
    </div>
  );
  return <>{NAVBAR}</>;
};

export default Navbar;
