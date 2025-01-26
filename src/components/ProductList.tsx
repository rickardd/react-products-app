// src/components/ProductList.tsx
import React, { useEffect } from "react";
import { useStore } from "../store/useStore";
import ProductCard from "./ProductCard";
import { Filter } from "./Filters";
import SearchBar from "./SearchBar";

const ProductList: React.FC = () => {
  const { filteredProducts, loading, error, fetchProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <SearchBar />
      <Filter />
      <div className="product-grid">
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Availability</th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
