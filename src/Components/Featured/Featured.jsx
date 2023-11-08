import Card from "./Card";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Featured = () => {
  const axios = useAxios();

  const getFeatured = async () => {
    const res = await axios.get("/featured");
    return res.data;
  };

  const { data: cards } = useQuery({
    queryKey: ["featured"],
    queryFn: getFeatured,
  });
  return (
    <div className="bg-base-200 py-20 px-5">
      <h1 className="text-4xl md:text-6xl text-dark-01 font-bold  mb-3 text-center">
        Featured Rooms
      </h1>
      <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto"></div>
      <h2 className="text-lg md:text-2xl text-center font-medium  mb-12">
        Discover Your Perfect Stay
      </h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards?.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Featured;
