import { BiRightArrowAlt } from "react-icons/bi";
const Offers = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
      <div className="py-10 md:col-span-2 lg:col-span-1">
        <h2 className="text-2xl text-dark-01 md:text-3xl font-medium mb-2">
          Exclusive Discount Offers
        </h2>
        <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
        <p className="text-dark-02 mb-2">
          Enjoy exclusive discounts on top hotels. Book now for amazing savings
          on your next stay.
        </p>
        <p className="text-dark-02 mb-8">
          Discover unbeatable hotel discounts that make your travel budget go
          further. With our exclusive offers, you can enjoy luxurious
          accommodations without breaking the bank.
        </p>
        <button className="py-2 px-10 font-medium border text-dark-03 border-dark-03 rounded inline-flex gap-3 items-center">
          More Offers
        </button>
      </div>
      <div className=" bg-[url(https://i.ibb.co/g78VMx5/leisure-beautiful-health-garden-landscape.jpg)] bg-cover bg-center bg-no-repeat pt-80 lg:mx-10 p-5 flex items-end">
        <div className="bg-white p-4 rounded flex justify-between items-end w-full">
          <div>
            <h1 className="text-2xl text-dark-03 font-semibold mb-2">
              45% off
            </h1>
            <h2 className="text-lg font-semibold text-dark-01">
              Weekend Offer
            </h2>
          </div>
          <button className="btn btn-circle text-2xl text-dark-03">
            <BiRightArrowAlt></BiRightArrowAlt>
          </button>
        </div>
      </div>
      <div className=" bg-[url(https://i.ibb.co/hHMpV3d/outdoor.png)] bg-cover bg-no-repeat pt-80 lg:mx-10 p-5 flex items-end">
        <div className="bg-white p-4 rounded flex justify-between items-end w-full">
          <div>
            <h1 className="text-2xl text-dark-03 font-semibold mb-2">
              25% off
            </h1>
            <h2 className="text-lg font-semibold text-dark-01">
              Adventure Tour
            </h2>
          </div>
          <button className="btn btn-circle text-2xl text-dark-03">
            <BiRightArrowAlt></BiRightArrowAlt>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Offers;
