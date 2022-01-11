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
  { id: 2, name: 'Red tshirt' },
  { id: 3, name: 'Green tshirt' },
  { id: 4, name: 'Yellow tshirt' },
];

const AllListings = () => {
  return (
    <div>
      {data.map((product) => (
        <div>{product.product_name}</div>
      ))}
    </div>
  );
};

export default AllListings;
