import React from 'react';
import classes from './Product.module.css';
const Product = ({ name, id }) => {
  return (
    <span className={classes.productName}>
      {id}. {name}
    </span>
  );
};

export default Product;
