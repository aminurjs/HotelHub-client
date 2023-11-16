import Room from "./Room";
import useAxios from "../../Hooks/useAxios";
import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";

const Rooms = () => {
  const [sortValue, setSortValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const axios = useAxios();

  useEffect(() => {
    const getRooms = async () => {
      const res = await axios.get(`/rooms?sort=${sortValue}`);
      setCards(res.data);
      setIsLoading(false);
    };
    getRooms();
  }, [axios, sortValue]);

  const handleSortChange = (val) => {
    setSortValue(val);
  };

  return (
    <div>
      <Helmet>
        <title>Rooms - HotelHub</title>
      </Helmet>
      <div className="bg-[url(https://i.ibb.co/2McJBNk/7041389-437-1.jpg)] bg-cover bg-center">
        <div className="bg-gradient-to-r from-dark-01">
          <div className="bg-dark-01 bg-opacity-30 py-24">
            <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0 text-center">
              <h2 className="text-lg md:text-2xl text-white  font-medium  mb-4">
                Exclusive Hotel Deals
              </h2>
              <h1 className="text-4xl md:text-6xl text-white  font-semibold  mb-5">
                Explore Rooms
              </h1>
              <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-28 px-5">
        <div className=" flex justify-between flex-wrap items-center mb-10">
          <div>
            <h2 className="text-2xl text-dark-01 md:text-3xl font-medium mb-2">
              Explore Available Rooms
            </h2>
            <div className="w-20 h-1.5 bg-dark-03 ml-2 mb-3"></div>
          </div>
          <h2 className=" text-dark-01">
            Sort :{" "}
            <select
              onChange={(e) => handleSortChange(e.target.value)}
              className="ml-2 py-1 px-2 border border-gray-300 rounded outline-none"
            >
              <option value="0">Default</option>
              <option value="-1">Price{"(High - Low)"}</option>
              <option value="1">Price{"(Low - High)"}</option>
            </select>
          </h2>
        </div>
        <div>
          {isLoading ? (
            <div>
              <div className="text-center mt-40 mb-80">
                <span className="loading loading-spinner text-dark-03 loading-lg"></span>
              </div>
            </div>
          ) : (
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 duration-500 transition-all">
              {cards?.map((card) => (
                <Room key={card._id} card={card} isLoading={isLoading} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
