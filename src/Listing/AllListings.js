import { Link } from 'react-router-dom';

export const data = [
  {
    product_id: 1,
    product_name: 'Blue tshirt',
    variants: [
      {
        variant_id: 1,
        variant_name: 'Size',
        options: [
          { option_id: 1, option_name: 'XS', quantity: 20 },
          { option_id: 2, option_name: 'S', quantity: 4 },
          { option_id: 3, option_name: 'M', quantity: 23 },
          { option_id: 4, option_name: 'L', quantity: 9 },
          { option_id: 5, option_name: 'XL', quantity: 2 },
        ],
      },
    ],
  },
  {
    product_id: 2,
    product_name: 'Red tshirt',
    variants: [
      {
        variant_id: 1,
        variant_name: 'Size',
        options: [
          { option_id: 1, option_name: 'XS', quantity: 20 },
          { option_id: 2, option_name: 'S', quantity: 4 },
          { option_id: 3, option_name: 'M', quantity: 23 },
          { option_id: 4, option_name: 'L', quantity: 9 },
          { option_id: 5, option_name: 'XL', quantity: 2 },
        ],
      },
    ],
  },
  // { product_id: 3, product_name: 'Green tshirt' },
  // { product_id: 4, product_name: 'Yellow tshirt' },
];

const AllListings = () => {
  return (
    <div>
      {data.map((product) => (
        <div key={product.product_id}>
          <h2>{product.product_name}</h2>
          <Link to={`/product/${product.product_id}`}>Explore</Link>
        </div>
      ))}
    </div>
  );
};

export default AllListings;
