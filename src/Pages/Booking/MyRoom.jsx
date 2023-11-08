import PropTypes from "prop-types";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRulerCombined, FaUserFriends } from "react-icons/fa";
import { FiType } from "react-icons/fi";
import { Link } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import { useState } from "react";
import { Modal } from "flowbite-react";
import moment from "moment/moment";

const MyRoom = ({ room, fetchAgain }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState("");
  const axios = useAxios();
  const {
    _id,
    id,
    title,
    bookingDays,
    startDate,
    endDate,
    type,
    size,
    capacity,
    price,
    image,
  } = room;

  const [updatedStartDate, setUpdatedStartDate] = useState(startDate);
  const [updatedEndDate, setUpdatedEndDate] = useState(endDate);
  const handleStartDateChange = (date) => {
    setUpdatedStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setUpdatedEndDate(date);
  };

  const handleUpdateDate = () => {
    setLoading(true);
    setAlert("");

    if (updatedStartDate >= updatedEndDate) {
      setAlert("Please provide valid Date");
      return setLoading(false);
    }
    const dateStart = new Date(updatedStartDate);
    const dateEnd = new Date(updatedEndDate);
    const durationS = dateEnd.getTime() - dateStart.getTime();
    const duration = durationS / (1000 * 3600 * 24);
    const updatedDate = {
      updatedStartDate,
      updatedEndDate,
      duration,
    };
    console.log(updatedDate);
    axios
      .patch(`/booking/updatedate/${_id}`, updatedDate)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          setLoading(false);
          setOpenModal(false);
          fetchAgain();
          return swal("Successfully Booked", "", "success");
        }
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setOpenModal(false);
        return swal(error.code, error.message, "error");
      });
  };
  const handleCancelBooking = () => {
    const currentDate = moment().format("MM-DD-YYYY");
    const dateStart = new Date(startDate);
    const dateCurrent = new Date(currentDate);
    const duration = dateStart.getTime() - dateCurrent.getTime();
    const pending = duration / (1000 * 3600 * 24);
    console.log(pending);
    if (pending >= 1) {
      swal({
        title: "Are you sure?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .delete(`/booking/delete?_id=${_id}&id=${id}`)
            .then((response) => {
              if (
                response.data.result.deletedCount > 0 &&
                response.data.result2.modifiedCount > 0
              ) {
                swal("Booking Canceled", "", "success");
                fetchAgain();
              }
            })
            .catch((error) => {
              return swal("Something Error", error, "error");
            });
        }
      });
    } else {
      return swal("Sorry!", "You Can't Cancel Now", "error");
    }
  };

  return (
    <div className="flex items-center gap-6 mb-5 pb-10 border-b border-gray-200">
      <img className="md:w-1/4 rounded" src={image} alt="" />
      <div className="md:w-2/4">
        <h3 className="font-semibold text-dark-01 text-xl lg:text-2xl mb-2 hover:underline">
          <Link to={`/room/details/${id}`}>{title}</Link>
        </h3>
        <div className="flex flex-wrap">
          <p className="text-dark-02 text-sm lg:text-base mb-2 mr-2 flex items-center gap-2">
            <FaUserFriends className=" text-dark-03" />
            Capacity: {capacity} Guests
          </p>
          <p className="text-dark-02 text-sm lg:text-base mb-2 mr-2 flex items-center gap-2">
            <FaRulerCombined className=" text-dark-03" />
            Size: {size}
          </p>
          <p className="text-dark-02 text-sm lg:text-base mb-2 mr-2 flex items-center gap-2">
            <FiType className=" text-dark-03" />
            Type: {type}
          </p>{" "}
        </div>
        <p className=" text-dark-01 text-sm lg:text-base mb-2 flex items-center gap-2">
          <AiOutlineCalendar className=" text-dark-03" />
          Duration: {bookingDays} days
        </p>
        <p className=" text-dark-01 text-sm lg:text-base mb-2 flex items-center gap-2">
          <AiOutlineCalendar className=" text-dark-03" />
          Check-in Date: {startDate}
        </p>
        <p className=" text-dark-01 text-sm lg:text-base mb-2 flex items-center gap-2">
          <AiOutlineCalendar className=" text-dark-03" />
          Check-out Date: {endDate}
        </p>
      </div>
      <div className="md:w-1/4 space-y-2">
        <div className="flex gap-2 items-center mt-4 mr-3 mb-4">
          <p className="text-xl text-dark-01 font-semibold">
            Price : <span className="text-2xl">${price * bookingDays}</span>
          </p>
        </div>
        <div>
          <button
            onClick={() => setOpenModal(true)}
            className="mb-1 bg-dark-03 rounded-sm active:scale-95 px-3 py-1 text-white text-sm lg:text-base font-medium duration-300"
          >
            Update Date
          </button>
          <div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>
                <span className="text-dark-01 font-semibold text-4xl">
                  Update Your Booking Date
                </span>
              </Modal.Header>
              <Modal.Body>
                <div className="p-5">
                  <div className=" mb-2">
                    <div className=" mb-2">
                      <label
                        htmlFor="start-date"
                        className="block font-medium text-lg text-dark-01"
                      >
                        Check-in Date:
                      </label>
                      <input
                        type="date"
                        id="start-date"
                        name="start-date"
                        className="py-1 block w-full px-2 border border-gray-300 rounded outline-none"
                        value={updatedStartDate}
                        onChange={(e) => handleStartDateChange(e.target.value)}
                      />
                    </div>
                    <div className="">
                      <label
                        htmlFor="end-date"
                        className="block font-medium text-lg text-dark-01"
                      >
                        Check-out Date:
                      </label>
                      <input
                        type="date"
                        id="end-date"
                        name="end-date"
                        className="py-1 block w-full px-2 border border-gray-300 rounded outline-none "
                        value={updatedEndDate}
                        onChange={(e) => handleEndDateChange(e.target.value)}
                      />
                    </div>
                  </div>
                  <p className="text-orange-500 ">{alert}</p>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <div className="text-right flex justify-end w-full py-2 px-5">
                  <button
                    onClick={() => setOpenModal(false)}
                    className="py-2 px-4 md:px-6 text-dark-03 bg-transparent border border-dark-03 rounded uppercase font-medium active:scale-95"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleUpdateDate}
                    className="ml-2 py-2 px-3 md:px-6 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95"
                  >
                    {loading ? (
                      <div className="w-16 md:w-20">
                        <span className="loading loading-dots loading-sm"></span>
                      </div>
                    ) : (
                      "update"
                    )}
                  </button>
                </div>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
        <div>
          <button
            onClick={handleCancelBooking}
            title="You can only cancel up to one day before check-in date."
            className=" bg-red-500 rounded-sm active:scale-95 px-3 py-1 text-white text-sm lg:text-base font-medium duration-300"
          >
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};
MyRoom.propTypes = {
  room: PropTypes.object,
  fetchAgain: PropTypes.func,
};
export default MyRoom;
