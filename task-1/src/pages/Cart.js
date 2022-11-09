import React from 'react';
import Form from '../components/Form';
import ProductList from '../components/ProductList';
import classes from './Cart.module.css';
const Cart = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>My Shopping List</h2>

      <Form />
      <ProductList />
    </div>
  );
};

export default Cart;
