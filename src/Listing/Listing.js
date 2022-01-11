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
  }, []);

  useEffect(() => {
    console.log(selectedVariant);
  }, [selectedVariant]);

  const selectVariantHandler = (variant, option) => {
    setSelectedVariant((prevState) => ({ ...prevState, [variant]: option }));
  };

  return (
    <div>
      <p>{productData?.product_name}</p>
      {productData?.variants.map((variant) => (
        <div>
          <h2>{variant.variant_name}</h2>
          {variant.options.map((option) => (
            <div onClick={() => selectVariantHandler(variant.variant_id, option.option_id)}>
              {option.option_name}
            </div>
          ))}
        </div>
      ))}
      <AddToCartWidget productId={+params.productId} variant={selectedVariant} />
    </div>
  );
};

export default Listing;
