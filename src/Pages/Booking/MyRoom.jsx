import PropTypes from "prop-types";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaRulerCombined, FaUserFriends } from "react-icons/fa";
import { FiType } from "react-icons/fi";
import { Link } from "react-router-dom";

const MyRoom = ({ room }) => {
  const {
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
  return (
    <div className="flex items-center gap-6 mb-5 pb-10 border-b border-gray-200">
      <img className="md:w-1/4 rounded" src={image} alt="" />
      <div className="md:w-2/4">
        <h3 className="font-semibold text-dark-01 text-xl lg:text-2xl mb-2">
          {title}
        </h3>
        <div className="flex flex-wrap">
          <p className="text-dark-02 text-sm mb-2 mr-2 flex items-center gap-2">
            <FaUserFriends className=" text-dark-03" />
            Capacity: {capacity} Guests
          </p>
          <p className="text-dark-02 text-sm mb-2 mr-2 flex items-center gap-2">
            <FaRulerCombined className=" text-dark-03" />
            Size: {size}
          </p>
          <p className="text-dark-02 text-sm mb-2 mr-2 flex items-center gap-2">
            <FiType className=" text-dark-03" />
            Type: {type}
          </p>{" "}
        </div>
        <p className=" text-dark-01 text-sm mb-2 flex items-center gap-2">
          <AiOutlineCalendar className=" text-dark-03" />
          Duration: {bookingDays} days
        </p>
        <p className=" text-dark-01 text-sm mb-2 flex items-center gap-2">
          <AiOutlineCalendar className=" text-dark-03" />
          Check-in Date: {startDate}
        </p>
        <p className=" text-dark-01 text-sm mb-2 flex items-center gap-2">
          <AiOutlineCalendar className=" text-dark-03" />
          Check-out Date: {endDate}
        </p>
      </div>
      <div className="md:w-1/4 space-y-2">
        <div className="flex gap-2 items-center mt-4 mr-3">
          <p className="text-xl text-dark-01 font-semibold">
            Price : <span className="text-2xl">${price * bookingDays}</span>
          </p>
        </div>
        <div>
          <button className=" bg-dark-03 rounded-sm active:scale-95 px-3 py-1 text-white text-sm font-medium duration-300">
            Date Update
          </button>
        </div>
        <div>
          <Link to={`/room/details/${id}`}>
            <button className="  mr-3 bg-dark-03 rounded-sm active:scale-95 px-3 py-1 text-white text-sm font-medium duration-300">
              View Details
            </button>
          </Link>
        </div>
        <div>
          <button className=" bg-red-500 rounded-sm active:scale-95 px-3 py-1 text-white text-sm font-medium duration-300">
            Cancel Booking
          </button>
        </div>
      </div>
    </div>
  );
};
MyRoom.propTypes = {
  room: PropTypes.object,
};
export default MyRoom;
