import { useEffect, useState } from "react";
import Card from "./Card";

const Featured = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("./feature.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(cards);
  return (
    <div className="bg-base-200 py-20 ">
      <h1 className="text-4xl md:text-6xl text-dark-01 font-bold  mb-3 text-center">
        Featured Rooms
      </h1>
      <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto"></div>
      <h2 className="text-lg md:text-2xl text-center font-medium  mb-12">
        Discover Your Perfect Stay
      </h2>
      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-6">
        {cards?.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
