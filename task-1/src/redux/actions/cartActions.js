import { ADD_PRODUCT } from '../constants/cartConstants';

export const addProduct = (name) => async (dispatch) => {
  dispatch({ type: ADD_PRODUCT, payload: name });
};
