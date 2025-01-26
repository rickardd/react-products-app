interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    category: string;
    available: boolean;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <tr key={product.id}>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>{product.category}</td>
      <td>{product.available ? "Available" : "Out of Stock"}</td>
    </tr>
  );
};

export default ProductCard;
