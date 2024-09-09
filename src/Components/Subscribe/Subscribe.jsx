import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { FaPaperPlane } from "react-icons/fa";
import swal from "sweetalert";

const Subscribe = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const handleSubscribe = (e) => {
    e.preventDefault();
    swal("Thanks For Subscribe Us", "", "success");
  };

  return (
    <div className="px-5">
      <div className="max-w-7xl mx-auto p-10 my-20 flex flex-col-reverse md:flex-row gap-6 items-center justify-center shadow-md rounded-lg border border-gray-200">
        <div data-aos="fade-up" data-aos-duration="1500" className="md:w-1/2">
          <h2 className="text-dark-01 font-semibold text-3xl md:text-4xl mb-2 text-center">
            Subscribe now
          </h2>
          <div className="w-20 h-1.5 bg-dark-03 mb-5  mx-auto"></div>
          <p className="text-dark-02 text-lg mb-5 text-center">
            Get latest updates, deals, and exclusive offers Every time.
          </p>
          <form onSubmit={handleSubscribe}>
            <input
              className="py-3 px-5 bg-gray-100 border border-gray-200 focus:border-dark-03 w-full rounded outline-none mb-4"
              type="text"
              name="name"
              placeholder="Your Name"
              id=""
            />
            <input
              className="py-3 px-5 bg-gray-100 border border-gray-200 focus:border-dark-03 w-full rounded outline-none mb-4"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <div className="text-center">
              <button
                className="py-3 px-10 text-white bg-dark-03 rounded inline-flex gap-3 items-center"
                type="submit"
              >
                Subscribe <FaPaperPlane></FaPaperPlane>
              </button>
            </div>
          </form>
        </div>
        {/* <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="md:w-1/2 p-10"
        >
          <img src="https://i.ibb.co/C8K3MX4/News.png" alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default Subscribe;
