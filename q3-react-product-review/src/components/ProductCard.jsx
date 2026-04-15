import React from "react";
import styles from "./ProductCard.module.css";

function ProductCard({
  productName,
  category,
  price,
  features,
  selectedProduct,
  productData,
  onProductSelect
}) {
  const isSelected =
    selectedProduct && selectedProduct.productName === productName;

  // Inline JavaScript style notation
  const dynamicStyle = {
    border: isSelected ? "2px solid green" : "2px solid transparent"
  };

  return (
    <div className={styles.card} style={dynamicStyle}>
      <h3>{productName}</h3>
      <p><strong>Category:</strong> {category}</p>
      <p><strong>Price:</strong> {price}</p>

      <p><strong>Features:</strong></p>
      <ul>
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <button
        className={styles.button}
        onClick={() => onProductSelect(productData)}
      >
        Select Product
      </button>
    </div>
  );
}

export default ProductCard;
