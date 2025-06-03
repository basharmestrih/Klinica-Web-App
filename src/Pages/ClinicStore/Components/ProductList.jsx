import React from "react";
import ProductCard from "./ProductCard.jsx";
import "../ClinicStore.css"; // Import CSS

const ProductList = ({ products, handleShowDetails }) => {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} handleShowDetails={handleShowDetails} />
      ))}
    </div>
  );
};

export default ProductList;
