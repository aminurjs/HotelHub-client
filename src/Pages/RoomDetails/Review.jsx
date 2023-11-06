import PropTypes from "prop-types";

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
          <h3 className="text-dark-01 text-xl font-semibold">{review?.name}</h3>
          <p className="text-dark-02 text-sm my-1">Rating: {review?.rating}</p>
          <p className="text-dark-02">{review?.description}</p>
        </div>
      </div>
    </div>
  );
};
Review.propTypes = {
  review: PropTypes.object,
};
export default Review;
