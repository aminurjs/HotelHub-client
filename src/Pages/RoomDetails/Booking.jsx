import { Modal } from "flowbite-react";
import { useState } from "react";
import PropTypes from "prop-types";
import { FaRulerCombined, FaUserFriends } from "react-icons/fa";
import { FiType } from "react-icons/fi";
import { IoMdPricetags } from "react-icons/io";
import swal from "sweetalert";
import "./swal.css";
import { AiOutlineCalendar } from "react-icons/ai";
import useAuth from "../../Hooks/useAuth";
import useAxios from "../../Hooks/useAxios";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Booking = ({ bookingData, fetchAgain }) => {
  const [openModal, setOpenModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [bookingDays, setBookingDays] = useState("");
  const axios = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const { _id, title, type, size, availability, capacity, price, image } = bookingData;
  const [totalPrice, setTotalPrice] = useState(price);
  const getBookedRooms = async () => {
    const res = await axios.get(`/booking/${user.email}`);
    return res.data;
  };

  const { data, refetch } = useQuery({
    queryKey: ["bookedByUserFilter"],
    queryFn: getBookedRooms,
  });
  const checkBooking = data?.find((a) => a.id === _id);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  const handleBooking = () => {
    if (user) {
      if (checkBooking) {
        return swal({
          title: "You have already booked!",
          text: "See Booking Details 'My Booking' page",
        });
      }
      if (!availability) {
        return swal({ title: "This Room is already booked!" });
      }
      if (startDate.length === 0 || endDate.length === 0 || startDate >= endDate) {
        return swal("Please select valid 'Check-in' and 'Check-out' date.");
      }
      if (startDate.length > 0 && endDate.length > 0 && startDate < endDate) {
        const dateStart = new Date(startDate);
        const dateEnd = new Date(endDate);
        const duration = dateEnd.getTime() - dateStart.getTime();
        const bookingDay = duration / (1000 * 3600 * 24);
        setBookingDays(bookingDay);
        setTotalPrice(price * bookingDay);

        setOpenModal(true);
      }
    } else {
      swal({
        title: "Please Login First",
        buttons: true,
        dangerMode: true,
      }).then((isConfirm) => {
        if (isConfirm) {
          navigate("/login", { state: location?.pathname });
        }
      });
    }
  };

  const handleBookingConfirm = () => {
    setLoading(true);
    const bookingPostData = {
      id: _id,
      email: user.email,
      title,
      type,
      size,
      capacity,
      price,
      bookingDays,
      startDate,
      endDate,
      image,
      status: "pending",
    };
    axios
      .post("/booking", bookingPostData)
      .then((response) => {
        console.log(response.data);

        if (response.data.result.acknowledged && response.data.result2.modifiedCount > 0) {
          setLoading(false);
          setOpenModal(false);
          refetch();
          fetchAgain();
          return swal("Successfully Booked", "", "success");
        }
      })
      .catch((error) => {
        setLoading(false);
        setOpenModal(false);
        return swal("Something Error", error, "error");
      });
  };

  return (
    <>
      <div className="border-t border-gray-300 pt-2">
        <div className=" mb-5">
          <div className=" mb-2">
            <label htmlFor="start-date" className="block font-medium text-lg text-dark-01">
              Check-in Date:
            </label>
            <input
              type="date"
              id="start-date"
              name="start-date"
              className="py-1 block w-full px-2 border border-gray-300 rounded outline-none"
              value={startDate}
              onChange={(e) => handleStartDateChange(e.target.value)}
            />
          </div>
          <div className="">
            <label htmlFor="end-date" className="block font-medium text-lg text-dark-01">
              Check-out Date:
            </label>
            <input
              type="date"
              id="end-date"
              name="end-date"
              className="py-1 block w-full px-2 border border-gray-300 rounded outline-none "
              value={endDate}
              onChange={(e) => handleEndDateChange(e.target.value)}
            />
          </div>
        </div>
        <div>
          <div>
            <button
              onClick={handleBooking}
              className="py-3 px-10 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95"
            >
              Booking Room
            </button>
          </div>
          <Modal show={openModal} onClose={() => setOpenModal(false)}>
            <Modal.Header>
              <span className="text-dark-01 font-semibold text-4xl">{title}</span>
            </Modal.Header>
            <Modal.Body>
              <div className="p-5">
                <div className="flex gap-3 flex-wrap">
                  <p className="text-dark-02 mb-2 flex items-center gap-2">
                    <FaUserFriends className="text-xl text-dark-03" />
                    Capacity: {capacity} Guests
                  </p>
                  <p className="text-dark-02 mb-2 flex items-center gap-2">
                    <FaRulerCombined className="text-lg text-dark-03" />
                    Size: {size}
                  </p>
                  <p className="text-dark-02 mb-2 flex items-center gap-2">
                    <FiType className="text-lg text-dark-03" />
                    Type: {type}
                  </p>{" "}
                </div>

                <div>
                  {" "}
                  <p className="text-lg text-dark-01 mb-2 flex items-center gap-2">
                    <AiOutlineCalendar className="text-lg text-dark-03" />
                    Duration: {bookingDays} days
                  </p>
                  <p className="text-lg text-dark-01 mb-2 flex items-center gap-2">
                    <AiOutlineCalendar className="text-lg text-dark-03" />
                    Check-in Date: {startDate}
                  </p>
                  <p className="text-lg text-dark-01 mb-2 flex items-center gap-2">
                    <AiOutlineCalendar className="text-lg text-dark-03" />
                    Check-out Date: {endDate}
                  </p>
                </div>

                <div className="flex gap-2 items-center mt-4">
                  <span className="text-dark-03 text-2xl ">
                    <IoMdPricetags></IoMdPricetags>
                  </span>
                  <p className="text-xl text-dark-01 font-semibold">
                    Total Price : <span className="text-2xl">${totalPrice}</span>
                  </p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <div className="text-right flex justify-end w-full py-3 px-4">
                <button
                  onClick={() => setOpenModal(false)}
                  className="py-2 px-4 md:px-6 text-dark-03 bg-transparent border border-dark-03 rounded uppercase font-medium active:scale-95"
                >
                  Cancel
                </button>
                <button
                  onClick={handleBookingConfirm}
                  className="ml-2 py-2 px-3 md:px-6 text-white bg-dark-03 border border-dark-03 rounded uppercase font-medium active:scale-95"
                >
                  {loading ? (
                    <div className="w-20 md:w-32">
                      <span className="loading loading-dots loading-sm"></span>
                    </div>
                  ) : (
                    "Confirm Booking"
                  )}
                </button>
              </div>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

Booking.propTypes = {
  bookingData: PropTypes.object,
  fetchAgain: PropTypes.func,
};
export default Booking;
