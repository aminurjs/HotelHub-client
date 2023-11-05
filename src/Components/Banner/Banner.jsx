const Banner = () => {
  return (
    <div className="bg-[url(https://i.ibb.co/6gg2gbL/room.jpg)] bg-cover bg-center">
      <div className="bg-dark-01 bg-opacity-50 py-28">
        <div className="max-w-7xl mx-auto my-10 px-5 lg:px-0">
          <h2 className="text-lg md:text-2xl text-white dark:text-gray-200 font-medium  mb-4">
            Exclusive Hotel Deals
          </h2>
          <h1 className="text-4xl md:text-6xl text-white dark:text-gray-200 font-bold  mb-5">
            Discover Your Dream Destinations
          </h1>
          <p className="text-sm md:text-lg text-gray-100 dark:text-gray-300  max-w-3xl mb-4">
            Experience travel your way. We offer personalized recommendations
            and accommodations to suit your preferences, ensuring every trip is
            uniquely yours.
          </p>
          <h2 className=" text-white dark:text-gray-200 font-medium  mb-8">
            Explore. Book. Experience.
          </h2>
          <div>
            <button className="py-3 px-10 text-white mr-3 bg-dark-03  rounded ">
              Book Now
            </button>
            <button className="py-3 px-10 text-white border-2 border-dark-03  rounded ">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
