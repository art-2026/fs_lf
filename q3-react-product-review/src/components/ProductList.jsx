import React from "react";
import ProductCard from "./ProductCard";

function ProductList({ productData, selectedProduct, onProductSelect }) {
  return (
    <div className="product-list-section">
      <h2>Available Products</h2>

      <div className="product-grid">
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.productName}
            category={product.category}
            price={product.price}
            features={product.features}
            selectedProduct={selectedProduct}
            productData={product}
            onProductSelect={onProductSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
