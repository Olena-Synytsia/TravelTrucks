import { useSelector } from "react-redux";
import { BsFillStarFill } from "react-icons/bs";
import s from "./ReviewsWrap.module.css";

const ReviewsWrap = () => {
  const camper = useSelector((state) => state.campers.camper);

  if (!camper || !camper.reviews || camper.reviews.length === 0) {
    return <p>No reviews yet.</p>;
  }

  return (
    <div className={s.container}>
      {camper.reviews.map((review, index) => (
        <div key={review.reviewer_name + index} className={s.reviewCard}>
          <div className={s.reviewCardEl}>
            <div className={s.reviewerIcon}>
              {review.reviewer_name[0].toUpperCase()}
            </div>
            <div className={s.reviewCardEl2}>
              <p className={s.reviewerName}>{review.reviewer_name}</p>
              <div className={s.rating}>
                {Array.from({ length: review.reviewer_rating }).map((_, i) => (
                  <BsFillStarFill key={i} style={{ fill: "#ffc531" }} />
                ))}
                {Array.from({ length: 5 - review.reviewer_rating }).map(
                  (_, i) => (
                    <BsFillStarFill
                      key={i + review.reviewer_rating}
                      style={{ fill: "#f2f4f7" }}
                    />
                  )
                )}
              </div>
            </div>
          </div>
          <p className={s.reviewText}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewsWrap;
