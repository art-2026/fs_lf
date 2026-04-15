import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import ProductList from "./components/ProductList";
import ReviewForm from "./components/ReviewForm";
import ReviewSection from "./components/ReviewSection";
import FooterInfo from "./components/FooterInfo";
import "./App.css";

function App() {
  // Product data stored in state
  const [productList] = useState([
    {
      id: 1,
      productName: "Wireless Headphones",
      category: "Electronics",
      price: "₹2999",
      features: ["Bluetooth 5.0", "Noise Cancellation", "20 Hours Battery"]
    },
    {
      id: 2,
      productName: "Smart Watch",
      category: "Wearable",
      price: "₹4999",
      features: ["Heart Rate Monitor", "Step Counter", "Water Resistant"]
    },
    {
      id: 3,
      productName: "Gaming Mouse",
      category: "Accessories",
      price: "₹1499",
      features: ["RGB Lighting", "Adjustable DPI", "Ergonomic Design"]
    }
  ]);

  // Selected product state
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Review form state
  const [reviewFormData, setReviewFormData] = useState({
    reviewerName: "",
    reviewComment: ""
  });

  // Rating value state
  const [ratingValue, setRatingValue] = useState("");

  // Review submission status
  const [reviewStatus, setReviewStatus] = useState("");

  // Submitted review state
  const [submittedReview, setSubmittedReview] = useState(null);

  // Handle product selection
  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    setReviewStatus("");
    setSubmittedReview(null);
  };

  // Handle text input change
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReviewFormData({
      ...reviewFormData,
      [name]: value
    });
  };

  // Handle rating selection
  const handleRatingChange = (event) => {
    setRatingValue(event.target.value);
  };

  // Handle review form submit
  const handleReviewSubmit = (event) => {
    event.preventDefault();

    if (!selectedProduct) {
      setReviewStatus("Please select a product first.");
      return;
    }

    if (
      reviewFormData.reviewerName.trim() === "" ||
      reviewFormData.reviewComment.trim() === "" ||
      ratingValue === ""
    ) {
      setReviewStatus("Please fill all fields.");
      return;
    }

    const reviewObject = {
      productName: selectedProduct.productName,
      reviewerName: reviewFormData.reviewerName,
      reviewComment: reviewFormData.reviewComment,
      ratingValue: ratingValue
    };

    setSubmittedReview(reviewObject);
    setReviewStatus("Review submitted successfully!");

    setReviewFormData({
      reviewerName: "",
      reviewComment: ""
    });
    setRatingValue("");
  };

  return (
    <div className="app-container">
      <DashboardHeader />

      <ProductList
        productData={productList}
        selectedProduct={selectedProduct}
        onProductSelect={handleProductSelect}
      />

      <ReviewForm
        selectedProduct={selectedProduct}
        reviewFormData={reviewFormData}
        ratingValue={ratingValue}
        onInputChange={handleInputChange}
        onRatingChange={handleRatingChange}
        onReviewSubmit={handleReviewSubmit}
        reviewStatus={reviewStatus}
      />

      <ReviewSection submittedReview={submittedReview} />

      <FooterInfo />
    </div>
  );
}

export default App;
