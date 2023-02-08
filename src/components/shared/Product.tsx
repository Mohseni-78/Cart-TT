import React from "react";
import { splitTitle } from "../../helper/functions";

const Product = (props: any) => {
  const { title, price, image } = props.item;
  // console.log(title);

  return (
    <div className="m-auto borde rounded-sm border-2 p-8">
      <img alt={title} src={image} className="w-52 h-52 rounded bg-black" />
      <div className="flex justify-between mt-5">
        <h3 className="text-lg font-bold">{splitTitle(title)}</h3>
        <span className="text-gray-400">${price}</span>
      </div>
      <button className="bg-blue-700 text-white py-1 px-5 rounded-lg w-full mt-8 hover:opacity-75">
        + Add To Cart
      </button>
    </div>
  );
};

export default Product;
