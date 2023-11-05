import { FaPaperPlane } from "react-icons/fa";

const Subscribe = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 my-20 flex gap-6 items-center shadow-md rounded-lg border border-gray-200">
      <div className="w-1/2">
        <h2 className="text-dark-01 font-semibold text-3xl md:text-4xl mb-6">
          Subscribe now
        </h2>
        <p className="text-dark-02 text-lg mb-5">
          Get latest updates, deals, and exclusive offers Every time.
        </p>
        <form>
          <input
            className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
            type="text"
            name="name"
            placeholder="Your Name"
            id=""
          />
          <input
            className="py-3 px-5 bg-gray-100 border border-gray-200 w-full rounded outline-none mb-4"
            type="email"
            name="email"
            placeholder="Your Email"
            id=""
          />
          <button
            className="py-3 px-10 text-white bg-dark-03 mr-5 rounded inline-flex gap-3 items-center"
            type="submit"
          >
            Subscribe <FaPaperPlane></FaPaperPlane>
          </button>
        </form>
      </div>
      <div className="w-1/2 p-10">
        <img src="https://i.ibb.co/C8K3MX4/News.png" alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
