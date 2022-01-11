import { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { objectComparison } from '../utils/generalDataStructureManipulation';

const AddToCartWidget = ({ productId, variant }) => {
  const dispatch = useDispatch();
  // const [quantity, setQuantity] = useState(0);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    console.log('wow');
    console.log(cart);
  }, [cart]);

  const incrementHandler = (qty) => {
    dispatch({
      type: 'increment',
      payload: { productId: productId, variant: variant, qty: qty },
    });
  };

  const decrementHandler = (qty) => {
    dispatch({
      type: 'decrement',
      payload: { productId: productId, variant: variant, qty: qty },
    });
  };

  const getCartQuantity = () => {
    if (cart.hasOwnProperty(productId)) {
      for (let i = 0; i < cart[productId].length; i++) {
        if (objectComparison(variant, cart[productId][i].variantObj)) {
          return cart[productId][i].qty;
        }
      }
      return 0;
    }
  };

  return (
    <div>
      {!getCartQuantity() ? (
        <Fragment>
          <button onClick={() => incrementHandler(1)}>Add To Cart</button>
          {/* <p>{cart}</p> */}
        </Fragment>
      ) : (
        <div>
          <button onClick={() => incrementHandler(1)}>+</button>
          <div>{getCartQuantity()}</div>
          <button onClick={() => decrementHandler(1)}>-</button>
        </div>
      )}
    </div>
  );
};

export default AddToCartWidget;
