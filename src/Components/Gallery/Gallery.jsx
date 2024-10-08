import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="mx-auto max-w-7xl py-20 px-5">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-2xl text-dark-01 md:text-3xl font-medium mb-2">
            Photos of our rooms
          </h2>
          <div className="w-20 h-1.5 bg-dark-03 mb-5 ml-2"></div>
        </div>
        <button className="py-2 px-5 md:py-3 md:px-10 mb-2 text-white bg-dark-03 rounded active:scale-95">
          See More
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-5">
        <div data-aos="fade-up" data-aos-duration="1500" className="row-span-2 overflow-hidden">
          <img
            className="hover:scale-125 duration-1000"
            src="/assets/jason-briscoe-UV81-E0o-XXWQ-unsplash-1-6-768x1085.jpg"
            alt="Image 1"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className=" overflow-hidden">
          <img
            className="hover:scale-125 duration-1000"
            src="/assets/sidekix-media-Xq-KBKOc-BRD4-unsplash-1-768x512.jpg"
            alt="Image 2"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className="row-span-2 overflow-hidden">
          <img
            className="hover:scale-125 duration-1000"
            src="/assets/minh-pham-7p-CFUyb-P-P8-unsplash-1-6-768x1085.jpg"
            alt="Image 4"
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className=" overflow-hidden">
          <img
            className="hover:scale-125 duration-1000"
            src="/assets/sidekix-media-g51-F6-WYzy-U-unsplash-1-768x512.jpg"
            alt="Image 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
