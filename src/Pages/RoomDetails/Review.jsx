import PropTypes from "prop-types";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Review = ({ review }) => {
  return (
    <div className="py-5">
      <div className="flex gap-5 items-start">
        <img
          className="w-12 rounded-full"
          src={
            review?.photo
              ? review.photo
              : `https://i.ibb.co/ncRWzwm/Profile.png`
          }
          alt=""
        />

        <div>
          <h3 className="text-dark-01 text-xl font-semibold mb-2">
            {review?.name}
          </h3>

          <Rating style={{ maxWidth: 100 }} value={review?.rating} readOnly />
          <p className="text-dark-02 mt-1">{review?.description}</p>
        </div>
      </div>
    </div>
  );
};
Review.propTypes = {
  review: PropTypes.object,
};
export default Review;
