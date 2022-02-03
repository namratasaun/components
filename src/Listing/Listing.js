import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AddToCartWidget from '../Cart/AddToCartWidget';
import { data } from './AllListings';

const Listing = () => {
  const [productData, setProductData] = useState();
  const [selectedVariant, setSelectedVariant] = useState({}); //{variant_id: option_id}
  let params = useParams();

  useEffect(() => {
    setProductData(data.find((val) => val.product_id === +params.productId));
  }, [params.productId]);

  const selectVariantHandler = (variant, option) => {
    setSelectedVariant((prevState) => ({ ...prevState, [variant]: option }));
  };

  return (
    <div>
      <p>{productData?.product_name}</p>
      <p>Select an option from variant</p>
      {productData?.variants.map((variant) => (
        <div key={variant.variant_id}>
          <h2>{variant.variant_name}</h2>
          {variant.options.map((option) => (
            <div
              key={option.option_id}
              style={{
                display: 'inline-block',
                backgroundColor:
                  variant.variant_id === +Object.keys(selectedVariant)[0] &&
                  option.option_id === selectedVariant[variant.variant_id]
                    ? 'lightblue'
                    : 'white',
                margin: '10px',
                padding: '10px',
                cursor: 'pointer',
              }}
              onClick={() => selectVariantHandler(variant.variant_id, option.option_id)}
            >
              {option.option_name}
            </div>
          ))}
        </div>
      ))}
      {Object.keys(selectedVariant).length > 0 && (
        <AddToCartWidget productId={+params.productId} variant={selectedVariant} />
      )}
    </div>
  );
};

export default Listing;
