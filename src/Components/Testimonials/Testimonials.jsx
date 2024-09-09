import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

import { FaQuoteRight } from "react-icons/fa";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const axios = useAxios();
  useEffect(() => {
    Aos.init();
  }, []);

  const getTestimonials = async () => {
    const res = await axios.get("/testimonials");
    return res.data;
  };

  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
  });

  return (
    <>
      <div className="py-20 px-5 hidden md:block max-w-7xl mx-auto">
        <div className="container mx-auto bg-dark-03 p-1">
          <div className=" bg-white p-10 flex items-center flex-col md:flex-row gap-10">
            <div
              data-aos="fade-up"
              data-aos-duration="1500"
              className="md:w-1/2 lg:w-1/3"
            >
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

            <div
              data-aos="fade-up"
              data-aos-duration="1700"
              className="w-2/3 hidden lg:block"
            >
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={2}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                {testimonials?.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <div className="p-5 flex flex-col mr-4 relative mb-6">
                      <div className="flex justify-between items-end">
                        <FaQuoteRight className="text-5xl text-dark-03" />
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={testimonial.rating}
                          readOnly
                        />
                      </div>
                      <p className="text-dark-02 my-3 text-justify flex-grow">
                        {testimonial.review}
                      </p>
                      <div className="flex gap-3 items-center">
                        <img
                          className="w-12 h-11 rounded-full"
                          src={testimonial.photo}
                          alt=""
                        />
                        <div>
                          <h3 className="text-dark-01 text-lg font-semibold">
                            {testimonial.name}
                          </h3>
                          <h4 className="text-dark-02 text-sm">
                            {testimonial.designation}
                          </h4>
                        </div>
                      </div>
                      <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-3 top-10"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div
              data-aos="fade-up"
              data-aos-duration="1700"
              className="w-[400px] sm:w-full md:w-1/2 block lg:hidden"
            >
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                {testimonials?.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <div className="p-5 flex flex-col mr-2 relative mb-6">
                      <div className="flex justify-between items-end">
                        <FaQuoteRight className="text-5xl text-dark-03" />
                        <Rating
                          style={{ maxWidth: 100 }}
                          value={testimonial.rating}
                          readOnly
                        />
                      </div>
                      <p className="text-dark-02 my-3 text-justify flex-grow">
                        {testimonial.review}
                      </p>
                      <div className="flex gap-3 items-center">
                        <img
                          className="w-12 h-11 rounded-full"
                          src={testimonial.photo}
                          alt=""
                        />
                        <div>
                          <h3 className="text-dark-01 text-lg font-semibold">
                            {testimonial.name}
                          </h3>
                          <h4 className="text-dark-02 text-sm">
                            {testimonial.designation}
                          </h4>
                        </div>
                      </div>
                      <div className="absolute w-2 bg-base-300 rounded-lg h-4/5 -right-7 top-10"></div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="py-20 px-5 block md:hidden">
        <div className="cont mx-auto bg-dark-03 p-1 container">
          <div className=" bg-white p-10">
            <div className="text-center">
              <h3 className="text-dark-03 tracking-[5px] mb-3">TESTIMONIALS</h3>
              <h2 className="text-dark-01 text-4xl font-medium mb-2">
                Our Clients Reviews
              </h2>
               <p className="text-dark-02 max-w-2xl mx-auto mb-2">
              Real Stories, Memorable Stays: Hear What Our Guests Have to Say
              About Their Unforgettable Hotel Experiences
            </p> 
              <div className="w-20 h-1.5 bg-dark-03 mb-5 mx-auto"></div>
            </div>

            <div className=" max-w-2xl sm:max-w-3xl mx-auto">
              <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                autoplay={true}
              >
                {testimonials?.map((testimonial) => (
                  <SwiperSlide key={testimonial._id}>
                    <div className="p-5 mb-6">
                      <div className="flex justify-center items-end">
                        <FaQuoteRight className="text-5xl text-dark-03" />
                      </div>
                      <p className="text-dark-02 my-3 flex-grow text-center">
                        {testimonial.review}
                      </p>
                      <div className="flex gap-3 justify-center items-center">
                        <img
                          className="w-12 h-11 rounded-full"
                          src={testimonial.photo}
                          alt=""
                        />
                        <div>
                          <h3 className="text-dark-01 text-lg font-semibold">
                            {testimonial.name}
                          </h3>
                          <h4 className="text-dark-02 text-sm">
                            {testimonial.designation}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Testimonials;
