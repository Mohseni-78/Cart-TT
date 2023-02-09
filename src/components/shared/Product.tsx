import React, { FC } from "react";
import { splitTitle } from "../../helper/functions";
import { propsProduct } from "../../types/type";

const Product: FC<propsProduct> = ({ product }) => {
  const PRODUCT: JSX.Element = (
    <div className="m-auto borde rounded-sm border-2 p-8">
      <img
        alt={product.title}
        src={product.image}
        className="w-52 h-52 rounded bg-black"
      />
      <div className="flex justify-between mt-5">
        <h3 className="text-lg font-bold">{splitTitle(product.title)}</h3>
        <span className="text-gray-400">${product.price}</span>
      </div>
      <button className="bg-blue-700 text-white py-1 px-5 rounded-lg w-full mt-8 hover:opacity-75">
        + Add To Cart
      </button>
    </div>
  );
  return <>{PRODUCT}</>;
};

export default Product;
