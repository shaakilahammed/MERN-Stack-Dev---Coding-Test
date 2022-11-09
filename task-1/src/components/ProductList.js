import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import classes from './ProductList.module.css';
const ProductList = () => {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className={classes.container}>
      {products.length === 0 ? (
        <span>Empty List</span>
      ) : (
        products.map((name, index) => (
          <Product key={index} name={name} id={index + 1} />
        ))
      )}
    </div>
  );
};

export default ProductList;
