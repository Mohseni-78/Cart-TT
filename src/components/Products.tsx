import React, { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import Product from "./shared/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      setProducts(await getProducts());
    };
    fetchApi();
  }, []);

  return (
    <>
      <h1 className="text-xl p-5">Store</h1>
      <div className="grid grid-cols-3 gap-4 p-3">{
        products.map((item:object)=>(
            <Product item={item}/>
        ))
      }</div>
    </>
  );
};

export default Products;
