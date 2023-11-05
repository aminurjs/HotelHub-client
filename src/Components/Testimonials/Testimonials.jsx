import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Rating from "react-rating";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  const { rating, review, photo, name, designation } = {
    id: 101,
    review:
      "My stay was absolutely fantastic! The room was impeccably clean and incredibly comfortable, and the staff was exceptionally friendly and attentive. I felt right at home from the moment I arrived. I can't wait to come back and experience the hotel's hospitality again.",
    rating: 5,
    name: "Alice Johnson",
    designation: "Business Traveler",
    travel_date: "July 15, 2023",
    photo: "https://i.ibb.co/2WCngSs/1-1.jpg",
  };
  return (
    <div className="max-w-7xl mx-auto bg-dark-03 p-1 my-20">
      <div className=" bg-white p-10 flex items-center gap-10">
        <div className="w-1/3">
          <h3 className="text-dark-03 tracking-[5px] mb-3">TESTIMONIALS</h3>
          <h2 className="text-dark-01 text-4xl font-medium mb-2">
            Our Clients Reviews
          </h2>
          <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
          <p className="text-dark-02">
            Real Stories, Memorable Stays: Hear What Our Guests Have to Say
            About Their Unforgettable Hotel Experiences
          </p>
        </div>

        <div className="w-2/3">
          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={true}
          >
            <SwiperSlide>
              <div className="p-5 mr-2 relative mb-6">
                <div className="flex justify-between items-end">
                  <FaQuoteRight className="text-5xl text-dark-03" />
                  <Rating
                    className="mt-1 text-yellow-500"
                    initialRating={rating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    readonly
                  />
                </div>
                <p className="text-dark-02 my-3 text-justify">{review}</p>
                <div className="flex gap-3 items-center">
                  <img className="w-16 rounded-full" src={photo} alt="" />
                  <div>
                    <h3 className="text-dark-01 text-lg font-semibold">
                      {name}
                    </h3>
                    <h4 className="text-dark-02 text-sm">{designation}</h4>
                  </div>
                </div>
                <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mr-2 relative mb-6">
                <div className="flex justify-between items-end">
                  <FaQuoteRight className="text-5xl text-dark-03" />
                  <Rating
                    className="mt-1 text-yellow-500"
                    initialRating={rating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    readonly
                  />
                </div>
                <p className="text-dark-02 my-3 text-justify">{review}</p>
                <div className="flex gap-3 items-center">
                  <img className="w-16 rounded-full" src={photo} alt="" />
                  <div>
                    <h3 className="text-dark-01 text-lg font-semibold">
                      {name}
                    </h3>
                    <h4 className="text-dark-02 text-sm">{designation}</h4>
                  </div>
                </div>
                <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mr-2 relative mb-6">
                <div className="flex justify-between items-end">
                  <FaQuoteRight className="text-5xl text-dark-03" />
                  <Rating
                    className="mt-1 text-yellow-500"
                    initialRating={rating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    readonly
                  />
                </div>
                <p className="text-dark-02 my-3 text-justify">{review}</p>
                <div className="flex gap-3 items-center">
                  <img className="w-16 rounded-full" src={photo} alt="" />
                  <div>
                    <h3 className="text-dark-01 text-lg font-semibold">
                      {name}
                    </h3>
                    <h4 className="text-dark-02 text-sm">{designation}</h4>
                  </div>
                </div>
                <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mr-2 relative mb-6">
                <div className="flex justify-between items-end">
                  <FaQuoteRight className="text-5xl text-dark-03" />
                  <Rating
                    className="mt-1 text-yellow-500"
                    initialRating={rating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    readonly
                  />
                </div>
                <p className="text-dark-02 my-3 text-justify">{review}</p>
                <div className="flex gap-3 items-center">
                  <img className="w-16 rounded-full" src={photo} alt="" />
                  <div>
                    <h3 className="text-dark-01 text-lg font-semibold">
                      {name}
                    </h3>
                    <h4 className="text-dark-02 text-sm">{designation}</h4>
                  </div>
                </div>
                <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mr-2 relative mb-6">
                <div className="flex justify-between items-end">
                  <FaQuoteRight className="text-5xl text-dark-03" />
                  <Rating
                    className="mt-1 text-yellow-500"
                    initialRating={rating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    readonly
                  />
                </div>
                <p className="text-dark-02 my-3 text-justify">{review}</p>
                <div className="flex gap-3 items-center">
                  <img className="w-16 rounded-full" src={photo} alt="" />
                  <div>
                    <h3 className="text-dark-01 text-lg font-semibold">
                      {name}
                    </h3>
                    <h4 className="text-dark-02 text-sm">{designation}</h4>
                  </div>
                </div>
                <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="p-5 mr-2 relative mb-6">
                <div className="flex justify-between items-end">
                  <FaQuoteRight className="text-5xl text-dark-03" />
                  <Rating
                    className="mt-1 text-yellow-500"
                    initialRating={rating}
                    emptySymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    }
                    fullSymbol={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clipRule="evenodd"
                        />
                      </svg>
                    }
                    readonly
                  />
                </div>
                <p className="text-dark-02 my-3 text-justify">{review}</p>
                <div className="flex gap-3 items-center">
                  <img className="w-16 rounded-full" src={photo} alt="" />
                  <div>
                    <h3 className="text-dark-01 text-lg font-semibold">
                      {name}
                    </h3>
                    <h4 className="text-dark-02 text-sm">{designation}</h4>
                  </div>
                </div>
                <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
