import { ADD_PRODUCT } from '../constants/cartConstants';

export const cartReducers = (state = { products: [] }, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { products: [...state.products, action.payload] };
    default:
      return state;
  }
};
