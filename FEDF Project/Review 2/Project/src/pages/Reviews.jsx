import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./styles.css";

function Reviews() {

  const location = useLocation();

  const roomName =
    location.state?.roomName || "Workspace";

  const [reviews, setReviews] = useState([
    {
      text: "Excellent service!",
      rating: 5,
    },
    {
      text: "Amazing experience!",
      rating: 4,
    },
    {
      text: "Worth visiting again!",
      rating: 5,
    },
  ]);

  const [newReview, setNewReview] =
    useState("");

  const [rating, setRating] =
    useState(5);

  const handleAddReview = () => {

    if (!newReview.trim()) return;

    setReviews([
      ...reviews,
      {
        text: newReview,
        rating,
      },
    ]);

    setNewReview("");
    setRating(5);
  };

  const averageRating =
    (
      reviews.reduce(
        (sum, review) =>
          sum + review.rating,
        0
      ) / reviews.length
    ).toFixed(1);

  return (
    <div className="reviews-page">

      <div className="reviews-container">

        <h1>
          ⭐ {roomName} Reviews
        </h1>

        <div className="rating-summary">

          <h2>
            Overall Rating :
            ⭐ {averageRating}/5
          </h2>

        </div>

        {reviews.map((review, index) => (

          <div
            key={index}
            className="review-card"
          >

            <div className="review-rating">

              {"⭐".repeat(
                review.rating
              )}

            </div>

            <p>{review.text}</p>

          </div>

        ))}

        <div className="review-form">

          <h3>
            Add Your Review
          </h3>

          <select
            value={rating}
            onChange={(e) =>
              setRating(
                Number(
                  e.target.value
                )
              )
            }
          >
            <option value="5">
              ⭐⭐⭐⭐⭐ (5)
            </option>
            <option value="4">
              ⭐⭐⭐⭐ (4)
            </option>
            <option value="3">
              ⭐⭐⭐ (3)
            </option>
            <option value="2">
              ⭐⭐ (2)
            </option>
            <option value="1">
              ⭐ (1)
            </option>
          </select>

          <textarea
            placeholder="Write your review..."
            value={newReview}
            onChange={(e) =>
              setNewReview(
                e.target.value
              )
            }
          />

          <button
            className="review-submit-btn"
            onClick={
              handleAddReview
            }
          >
            Add Review
          </button>

        </div>

      </div>

    </div>
  );
}

export default Reviews;