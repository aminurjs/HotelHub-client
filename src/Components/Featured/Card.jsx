import { FaRulerCombined, FaUserFriends } from "react-icons/fa";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ card }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/room/details/${card._id}`);
  };
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1500"
      className="bg-white rounded "
    >
      <img className="rounded-t" src={card.image} alt="" />
      <div className="p-5">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-dark-01 ">{card.title}</h2>
        </div>
        <h2 className="text-2xl font-semibold text-dark-03  mb-4">
          Price: ${card.price} / Night
        </h2>
        <div className="flex gap-4 flex-wrap">
          <p className="text-dark-02 mb-5 flex items-center gap-2">
            <FaUserFriends className="text-xl text-dark-03" />
            Capacity: {card.capacity}
          </p>
          <p className="text-dark-02 mb-5 flex items-center gap-2">
            <FaRulerCombined className="text-lg text-dark-03" />
            Size: {card.size}
          </p>
        </div>
        <p className="text-dark-02 mb-4">
          {card?.room_description?.length > 120
            ? `${card.room_description.slice(0, 120)} ...`
            : card.room_description}
        </p>
        <button
          onClick={handleDetails}
          className="py-3 px-8 lg:px-10 text-white bg-dark-03 rounded active:scale-95"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
