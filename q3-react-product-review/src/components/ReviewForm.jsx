import React from "react";

function ReviewForm({
  selectedProduct,
  reviewFormData,
  ratingValue,
  onInputChange,
  onRatingChange,
  onReviewSubmit,
  reviewStatus
}) {
  return (
    <div className="review-form-section">
      <h2>Submit Your Review</h2>

      <form onSubmit={onReviewSubmit} className="review-form">
        <div className="form-group">
          <label>Selected Product</label>
          <input
            type="text"
            value={selectedProduct ? selectedProduct.productName : ""}
            placeholder="No product selected"
            readOnly
          />
        </div>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            name="reviewerName"
            value={reviewFormData.reviewerName}
            onChange={onInputChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="form-group">
          <label>Review Comment</label>
          <textarea
            name="reviewComment"
            value={reviewFormData.reviewComment}
            onChange={onInputChange}
            placeholder="Write your review"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group">
          <label>Rating</label>
          <select value={ratingValue} onChange={onRatingChange}>
            <option value="">Select Rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">
          Submit Review
        </button>

        {reviewStatus && <p className="status-text">{reviewStatus}</p>}
      </form>
    </div>
  );
}

export default ReviewForm;
