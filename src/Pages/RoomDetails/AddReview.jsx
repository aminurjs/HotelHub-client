import { Modal } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import useAuth from "../../Hooks/useAuth";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const AddReview = ({ _id, fetchAgain }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();
  const axios = useAxios();

  const getBookedRooms = async () => {
    const res = await axios.get(`/booking/${user.email}`);
    return res.data;
  };

  const { data } = useQuery({
    queryKey: ["bookedByUserFilter"],
    queryFn: getBookedRooms,
  });
  const checkBooking = data?.find((a) => a.id === _id);
  const handleReview = () => {
    if (user) {
      if (!checkBooking) {
        return swal({ title: "Book the room first." });
      }
      if (checkBooking) {
        return setOpenModal(true);
      }
    } else {
      swal({
        title: "Please Login First",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          navigate("/login");
        }
      });
    }
  };
  const handleAddReview = (e) => {
    setLoading(true);
    e.preventDefault();
    const rating = e.target.rating.value;
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
          fetchAgain();
          return swal({ title: "Posted Successfully" });
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setOpenModal(false);
        return swal(error.code);
      });
  };

  return (
    <div>
      <button
        onClick={handleReview}
        className="py-3 px-10 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95"
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
                  <input
                    type="number"
                    placeholder="1-5"
                    id="rating"
                    name="rating"
                    className="py-1 block w-full px-2 border border-gray-300 rounded outline-none"
                    required
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
