import Room from "./Room";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const Rooms = () => {
  const axios = useAxios();

  const getRooms = async () => {
    const res = await axios.get("/rooms");
    return res.data;
  };

  const { data: cards } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const handleSort = (e) => {
    const val = e.target.value;
    console.log(val);
    // if (val == "dfl") {
    //   setDfl(!dfl);
    //   console.log(cards);
    // }
    // if (val == "htl") {
    //   setCards(cards.sort((a, b) => b.price - a.price));
    //   console.log(cards);
    // }
    // if (val == "lth") {
    //   setCards(cards.sort((a, b) => b.price - a.price));
    //   console.log(cards);
    // }
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
              onChange={handleSort}
              className="ml-2 py-1 px-2 border border-gray-300 rounded outline-none"
            >
              <option value="dfl">Default</option>
              <option value="htl">Price{"(High - Low)"}</option>
              <option value="lth">Price{"(Low - High)"}</option>
            </select>
          </h2>
        </div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 duration-500">
          {cards?.map((card) => (
            <Room key={card._id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
