import React, { useContext, useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ShopContextProvider from "../context/ShopContextProvider";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    const bestProduct = products.filter((item) => {
      return item.bestseller;
    });
    setBestSellers(bestProduct.slice(0, 5));
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title textOne={"Best"} textTwo={"Sellers"} />
      </div>
      {/* products rendering */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 gap-y-6">
        {bestSellers.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
