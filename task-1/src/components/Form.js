import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/actions/cartActions';
import classes from './Form.module.css';

const Form = () => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState('');

  const changeHandler = (event) => {
    setProductName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (productName !== '') {
      dispatch(addProduct(productName));
      setProductName('');
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        className={classes.input}
        value={productName}
        onChange={changeHandler}
        placeholder="Type here......"
      />

      <button type="submit" className={classes.button}>
        Add
      </button>
    </form>
  );
};

export default Form;
