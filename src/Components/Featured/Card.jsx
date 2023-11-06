import { FaRulerCombined, FaUserFriends } from "react-icons/fa";
import PropTypes from "prop-types";

const Card = ({ card }) => {
  return (
    <div key={card.id} className="bg-white rounded ">
      <img className="rounded-t" src={card.image} alt="" />
      <div className="p-5">
        <div className="pb-3 mb-4 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-dark-01 ">{card.title}</h2>
        </div>
        <h2 className="text-2xl font-semibold text-dark-03  mb-4">
          Price: ${card.price} / Night
        </h2>
        <div className="flex justify-between flex-wrap">
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
          {card?.description?.length > 120
            ? `${card.description.slice(0, 120)} ...`
            : card.description}
        </p>
        <button className="py-3 px-10 text-white bg-dark-03 rounded active:scale-95">
          Book Now
        </button>
        <button className="py-3 px-10 text-dark-03 font-medium ml-2 bg-transparent border border-dark-03 rounded active:scale-95">
          View Details
        </button>
      </div>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object,
};

export default Card;
