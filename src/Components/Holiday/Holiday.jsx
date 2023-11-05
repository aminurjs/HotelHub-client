import { AiOutlineArrowDown } from "react-icons/ai";

const Holiday = () => {
  return (
    <div className="my-20 bg-[url(https://i.ibb.co/88sg16r/beautiful-umbrella-chair-around-swimming-pool-hotel-resort.jpg)] bg-fixed bg-cover bg-center">
      <div className="bg-gradient-to-r from-dark-01 text-center">
        <div className="bg-dark-01 bg-opacity-30 py-32">
          <h1 className="text-4xl md:text-6xl text-white dark:text-gray-200 font-bold  mb-3 max-w-4xl mx-auto">
            Relax & Enjoy your holidays with Our Luxury Hotel
          </h1>
          <div className="w-20 h-1.5 bg-dark-03 mb-10 mx-auto"></div>
          <button className="btn btn-circle bg-dark-03 text-white border-none hover:text-dark-03 text-2xl">
            <AiOutlineArrowDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Holiday;
