import PropTypes from "prop-types";
import "./Room.css";

const Room = ({ card }) => {
  return (
    <div key={card.id} className="bg-white rounded ">
      <div className="room overflow-hidden relative">
        <img
          className="scale-100 hover:scale-100 duration-700 -z-10 cursor-pointer room-image"
          src={card.image}
          alt="Image 3"
        />
        <h2 className="room-title text-lg font-medium text-dark-01 bg-white z-10 absolute left-0 bottom-0 py-2 px-3 duration-700">
          {card.title}
        </h2>

        <div className="p-5 absolute room-content bg-white duration-700 border h-full flex flex-col">
          <h2 className="room-title text-xl font-medium text-dark-01 hover:underline cursor-pointer mb-1">
            {card.title}
          </h2>
          <h2 className="room-title text-sm font-medium text-dark-03 hover:underline cursor-pointer mb-1">
            Couple Room
          </h2>
          <p className="text-dark-02 text-sm mb-1 flex-grow">
            {card?.description?.length > 105
              ? `${card.description.slice(0, 105)} ...`
              : card.description}
          </p>
          <div className="flex justify-between items-center flex-wrap">
            <h2 className=" text-dark-01 mb-2">
              From: <span className="text-lg">${card.price}</span> / Night
            </h2>
            <h3 className="text-dark-01 mb-2"> Reviewed: 0</h3>
          </div>
          <div>
            <button className="py-2 px-5 text-white bg-dark-03 border border-dark-03 rounded active:scale-95">
              Check Availability
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Room.propTypes = {
  card: PropTypes.object,
};

export default Room;
