import { Link, useLoaderData } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillRightCircle,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { IoMdPricetags } from "react-icons/io";
import { BsFillInfoCircleFill, BsInstagram, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import Rating from "react-rating";
import { useEffect } from "react";

const RoomDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const Room = useLoaderData();
  const { image, name, type, price, brand_name, rating, description } = Room;

  return (
    <div className=" py-20 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto flex gap-4 lg:gap-6 p-5 flex-col md:flex-row">
        <div className="md:w-3/5 lg:w-2/3 mb-5">
          <img className="rounded-lg mb-6" src={image} alt="" />
          <p className="leading-normal text-[#7A7A7A] dark:text-gray-300 pb-8 border-b border-gray-300 mb-8">
            {description}
          </p>
          <div className="flex justify-between">
            <div>
              <h4 className="mb-2 text-lg font-semibold dark:text-gray-200 ">
                Shares:
              </h4>
              <div className="text-blue-600 text-2xl flex gap-4">
                <Link>
                  <AiOutlineInstagram></AiOutlineInstagram>
                </Link>
                <Link>
                  <AiFillFacebook></AiFillFacebook>
                </Link>
                <Link>
                  <AiOutlineTwitter></AiOutlineTwitter>
                </Link>
                <Link>
                  <AiFillLinkedin></AiFillLinkedin>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-2/5 lg:w-1/3 p-2 lg:p-5">
          <h3 className="mb-4 font-semibold text-blue-1 dark:text-gray-200 text-xl pb-2 border-b border-gray-300">
            <span>
              <BsFillInfoCircleFill className="inline text-2xl"></BsFillInfoCircleFill>
            </span>{" "}
            Room Info
          </h3>
          <h3 className="font-semibold text-lg mb-2 dark:text-gray-200">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1 dark:text-gray-200"></AiFillRightCircle>
            </span>{" "}
            Name : {name}
          </h3>
          <h3 className="font-medium mb-2 dark:text-gray-200">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1 dark:text-gray-200"></AiFillRightCircle>
            </span>{" "}
            Brand :{" "}
            <span className="uppercase dark:text-gray-200 font-semibold text-sm">
              {brand_name}
            </span>
          </h3>
          <h3 className="font-medium mb-2 dark:text-gray-200">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1 dark:text-gray-200"></AiFillRightCircle>
            </span>{" "}
            Type : {type}
          </h3>
          <h3 className="font-medium mb-2 flex items-center gap-2 dark:text-gray-200">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1 dark:text-gray-200"></AiFillRightCircle>
            </span>{" "}
            Rating :{" "}
            <Rating
              className="mt-1 text-yellow-1"
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
          </h3>
          <h3 className="font-medium mb-2 dark:text-gray-200">
            <span>
              <AiFillRightCircle className="inline text-xl text-blue-1 dark:text-gray-200"></AiFillRightCircle>
            </span>{" "}
            In Stock
          </h3>

          <div className="flex gap-2 items-center my-4">
            <span className="text-[#3378F8] text-2xl ">
              <IoMdPricetags></IoMdPricetags>
            </span>
            <p className="text-xl text-blue-1 dark:text-gray-200">
              Price : {price}
            </p>
          </div>
          <button className="mb-6 bg-blue-1 rounded-sm active:scale-95 px-10 py-2.5 text-white uppercase font-medium duration-300">
            Add To Cart
          </button>
          <h3 className="mb-4 font-semibold text-xl pb-2 border-b border-gray-300 mt-10">
            Find us on
          </h3>
          <div className="border border-gray-200 rounded-md">
            <ul>
              <li className="p-3 border-b border-gray-200">
                <a className="flex gap-2 items-center" href="" target="blank">
                  <div className="p-1.5 text-blue-500 rounded-full text-xl">
                    <FaFacebookF></FaFacebookF>
                  </div>
                  <span className="dark:text-gray-300 font-medium">
                    Facebook
                  </span>
                </a>
              </li>
              <li className="p-3 border-b border-gray-200">
                <a className="flex gap-2 items-center" href="" target="blank">
                  <div className="p-1.5  rounded-full text-xl text-[#58A7DE]">
                    <BsTwitter></BsTwitter>
                  </div>

                  <span className="dark:text-gray-300 font-medium">
                    Twitter
                  </span>
                </a>
              </li>
              <li className="p-3">
                <a className="flex gap-2 items-center" href="" target="blank">
                  <div className="p-1.5  rounded-full text-xl  text-[#D9465E]">
                    <BsInstagram></BsInstagram>
                  </div>
                  <span className="dark:text-gray-300 font-medium">
                    Instagram
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
