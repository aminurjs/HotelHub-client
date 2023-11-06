import { useEffect, useState } from "react";
import Card from "../../Components/Featured/Card";
import Room from "./Room";

const Rooms = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./feature.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div>
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
      <div className="max-w-7xl mx-auto py-28">
        <div className=" flex justify-between items-center mb-5">
          <div>
            <h2 className="text-2xl text-dark-01 md:text-3xl font-medium mb-2">
              Explore Available Rooms
            </h2>
            <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
          </div>
          <button className="py-3 px-10 text-white bg-dark-03 rounded active:scale-95">
            See More
          </button>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6 duration-500">
          {cards?.map((card) => (
            <Room key={card.id} card={card} />
          ))}
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
          {cards?.map((card) => (
            <Card key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
