import React, { FC } from "react";
import { propsProducts } from "../types/type";
import Product from "./shared/Product";

const Products: FC<propsProducts> = ({ products }) => {
  const productData: JSX.Element[] = products.map((item) => (
    <Product key={item.id} product={item} />
  ));
  return (
    <>
      <h1 className="text-xl p-5">Store</h1>
      <div className="grid grid-cols-3 gap-2 p-3">{productData}</div>
    </>
  );
};

export default Products;
