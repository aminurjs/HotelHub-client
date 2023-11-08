import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-[url(https://i.ibb.co/m8K3wyj/luxury-hotel-resort.jpg)] bg-fixed bg-cover bg-center">
      <div className="bg-gradient-to-r from-dark-01">
        <div className="bg-dark-01 bg-opacity-30 py-20 md:py-36">
          <div
            data-aos="fade-up"
            data-aos-duration="1500"
            className="max-w-7xl mx-auto my-10 px-5 lg:px-0 text-center"
          >
            <h2 className="text-lg md:text-2xl text-white  font-medium  mb-4">
              Unwind in Style:
            </h2>
            <h1 className="text-4xl md:text-6xl text-white  font-bold  mb-5">
              Your Dream Getaway Awaits at HotelHub
            </h1>
            <p className="text-sm md:text-lg text-gray-100 mx-auto max-w-3xl mb-4">
              At HotelHub, we redefine luxury with personalized service and
              unparalleled attention to detail. Immerse yourself in a world of
              indulgence, whether {"you're"} traveling for business or pleasure.
              Your comfort and satisfaction are our top priorities.
            </p>
            <h2 className=" text-white  font-medium  mb-8">
              Explore. Book. Experience.
            </h2>
            <div>
              <Link to={"/rooms"}>
                <button className="py-2 px-5 md:py-3 md:px-10 text-white mr-3 border-2 border-dark-03 bg-dark-03 hover:bg-transparent duration-500  rounded ">
                  Book Now
                </button>
              </Link>{" "}
              <Link to={"/rooms"}>
                <button className="py-2 px-5 md:py-3 md:px-10 text-white border-2 border-dark-03 hover:bg-dark-03 duration-500  rounded ">
                  Check Availability
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
