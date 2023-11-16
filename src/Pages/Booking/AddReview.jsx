import { Modal } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
import { Rating } from "@smastrom/react-rating";

const AddReview = ({ _id }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const axios = useAxios();

  const [rating, setRating] = useState(0);
  const handleAddReview = (e) => {
    setLoading(true);
    e.preventDefault();
    const comment = e.target.comment.value;
    const review = {
      rating,
      description: comment,
      name: user.displayName,
      photo: user.photoURL,
    };
    axios
      .patch(`/review/${_id}`, review)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setLoading(false);
          setOpenModal(false);
          setRating(0);
          return swal({ title: "Posted Successfully" });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setOpenModal(false);
        setRating(0);
        return swal(error.code);
      });
  };

  return (
    <div>
      <button
        onClick={() => setOpenModal(true)}
        className="mb-1 bg-dark-03 rounded-sm active:scale-95 px-3 py-1 text-white text-sm lg:text-base font-medium duration-300"
      >
        Add a review
      </button>
      <div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>
            <span className="text-dark-01 font-semibold text-4xl">
              Write a review
            </span>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleAddReview} className="p-5">
              <div className=" mb-2">
                <div className=" mb-2">
                  <label
                    htmlFor="rating"
                    className="block font-medium text-lg text-dark-01"
                  >
                    Rating:
                  </label>
                  <Rating
                    style={{ maxWidth: 180 }}
                    value={rating}
                    onChange={setRating}
                    isRequired
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="comment"
                    className="block font-medium text-lg text-dark-01"
                  >
                    Comment:
                  </label>
                  <textarea
                    className="py-1 block w-full px-2 border border-gray-300 rounded outline-none"
                    name="comment"
                    id="comment"
                    cols="3"
                    rows=""
                    placeholder="Write about your hotel experience"
                    required
                  ></textarea>
                </div>
              </div>
              <div className="text-right flex justify-end w-full mt-5">
                <button
                  onClick={() => setOpenModal(false)}
                  className="py-2 px-4 md:px-6 text-dark-03 bg-transparent border border-dark-03 rounded uppercase font-medium active:scale-95"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="ml-2 py-2 px-3 md:px-6 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95"
                >
                  {loading ? (
                    <div className="w-16 md:w-20">
                      <span className="loading loading-dots loading-sm"></span>
                    </div>
                  ) : (
                    "Comment"
                  )}
                </button>
              </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
};
AddReview.propTypes = {
  _id: PropTypes.string,
  fetchAgain: PropTypes.func,
};
export default AddReview;
