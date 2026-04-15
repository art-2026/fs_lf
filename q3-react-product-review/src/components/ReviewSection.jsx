import React from "react";

function ReviewSection({ submittedReview }) {
  return (
    <div className="review-section">
      <h2>Submitted Review</h2>

      {submittedReview ? (
        <div className="review-card">
          <p><strong>Product:</strong> {submittedReview.productName}</p>
          <p><strong>Reviewer:</strong> {submittedReview.reviewerName}</p>
          <p><strong>Comment:</strong> {submittedReview.reviewComment}</p>
          <p><strong>Rating:</strong> {submittedReview.ratingValue} / 5</p>
        </div>
      ) : (
        <p>No review submitted yet.</p>
      )}
    </div>
  );
}

export default ReviewSection;
