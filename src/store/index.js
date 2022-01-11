import { createStore } from 'redux';
import { objectComparison } from '../utils/generalDataStructureManipulation';

const cartReducer = (state = { cart: {}, check: 'hello' }, action) => {
  if (action.type === 'increment') {
    let tempCart = { ...state.cart };
    if (tempCart.hasOwnProperty(action.payload.productId)) {
      let i;
      for (i = 0; i < tempCart[action.payload.productId].length; i++) {
        if (
          objectComparison(
            action.payload.variant,
            tempCart[action.payload.productId][i]['variantObj']
          )
        ) {
          tempCart[action.payload.productId][i].qty =
            tempCart[action.payload.productId][i].qty + action.payload.qty;
          break;
        }
      }
      if (i === tempCart[action.payload.productId].length) {
        tempCart[action.payload.productId].push({
          variantObj: { ...action.payload.variant },
          qty: action.payload.qty,
        });
      }
    } else {
      tempCart[action.payload.productId] = [
        { variantObj: { ...action.payload.variant }, qty: action.payload.qty },
      ];
    }
    return {
      cart: { ...tempCart },
      check: state.check,
    };
  } else if (action.type === 'decrement') {
    let tempCart = { ...state.cart };
    for (let i = 0; i < tempCart[action.payload.productId].length; i++) {
      if (
        objectComparison(
          action.payload.variant,
          tempCart[action.payload.productId][i]['variantObj']
        )
      ) {
        tempCart[action.payload.productId][i].qty =
          tempCart[action.payload.productId][i].qty - action.payload.qty;
        break;
      }
    }
    return {
      cart: { ...tempCart },
      check: state.check,
    };
  }

  return state;
};

const store = createStore(cartReducer);

export default store;
