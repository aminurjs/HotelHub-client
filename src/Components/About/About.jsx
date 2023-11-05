import { BsGraphUpArrow } from "react-icons/bs";
import { RiHotelFill } from "react-icons/ri";

const About = () => {
  return (
    <div className="max-w-7xl mx-auto mt-20 mb-28 flex gap-12">
      <div className="border border-dark-03 p-3 relative lg:w-1/2 mr-3">
        <img src="https://i.ibb.co/9gzVfBt/over-water-villas.jpg" alt="" />
        <div className="absolute -bottom-10 -right-10 w-80 p-3 bg-white">
          <img src="https://i.ibb.co/G0jbBjv/exteriors-view.jpg" alt="" />
        </div>
      </div>
      <div className="w-full lg:w-1/2 mt-6">
        <h3 className="text-dark-03 tracking-[5px] mb-3">
          WELCOME TO HOTELHUB
        </h3>
        <h2 className="text-2xl text-dark-01 md:text-4xl font-medium mb-2">
          A Luxury Vacation Rentals Worldwide
        </h2>
        <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
        <p className="text-dark-02 mb-8">
          {"We're"} your go-to destination for effortless hotel bookings.
          Explore top accommodations, unlock exclusive deals, and start your
          journey with us today. Your perfect stay is just a click away!
        </p>
        <div className="flex gap-6 md:gap-2 justify-between items-center mb-5 flex-col md:flex-row">
          <div className="flex gap-4 items-center">
            <div className="text-[#5CE1E6] text-4xl">
              <BsGraphUpArrow></BsGraphUpArrow>
            </div>
            <div>
              <h4 className=" text-dark-01 font-medium mb-1">
                20 Years of Experience
              </h4>
              <p className="text-dark-02 text-sm">
                Elevating Standards Innovation.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="text-[#5CE1E6] text-5xl">
              <RiHotelFill></RiHotelFill>
            </div>
            <div>
              <h4 className=" text-dark-01 font-medium mb-1">
                180+ Destinations
              </h4>
              <p className="text-dark-02 text-sm">
                Elevating Standards Innovation.
              </p>
            </div>
          </div>
        </div>
        <button className="py-3 px-10 text-white bg-dark-03 rounded active:scale-95">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default About;
