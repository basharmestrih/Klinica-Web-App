import React from "react";

const ProductDetails = ({ selectedProduct, handleCloseDetails }) => {
  if (!selectedProduct) return null;

  return (
    <div className="product-detail-card">
      <div className="product-detail-header"></div>
      <img src={selectedProduct.image} alt={selectedProduct.title} />
      <div className="product-title">{selectedProduct.title}</div>
      <div className="product-price">{selectedProduct.price}$</div>
      <div className="product-desc">{selectedProduct.description}</div>
      <div className="button-row">
        <button className="add-to-cart-btn">Go to store</button>
        <button className="add-to-cart-btn" onClick={handleCloseDetails}>Cancel</button>
      </div>
    </div>
  );
};

export default ProductDetails;
