import { Link } from "react-router-dom";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-[#222935] pt-20">
      <div className="max-w-7xl mx-auto px-5">
        <div className="max-w-7xl mx-auto">
          <div className="px-5 lg:px-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b pb-6 border-gray-600">
            <div className="col-span-2 md:col-span-3 lg:col-span-2">
              <Link
                to={"/"}
                className="flex text-white gap-3 text-3xl font-bold items-center"
              >
                <img
                  className="w-10"
                  src="https://i.ibb.co/8DkV3v1/logo-h.png"
                  alt=""
                />
                HotelHub
              </Link>
              <p className=" text-[#FFFFFFB2] mt-4">
                Where Wanderlust Meets Convenience: Your All-in-One Solution for
                Effortless Hotel Reservations, Inspiring Travel Planning, and
                Memorable Stays Across the Globe
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-8">
                Useful Links
              </h3>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Content</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Services</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Explore</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Terms & Services</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-white mb-8">Support</h3>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Resources</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Faqs </p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Privacy Policy</p>
              <p className="text-[#FFFFFFB2] mb-2 text-sm">Careers</p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-8">
                Our Contact
              </h3>
              <a
                href=""
                className="text-[#FFFFFFB2] mb-6 text-sm flex items-center gap-2"
              >
                <FaLocationDot className="text-xl text-dark-03" />
                {"Cox's"} Bazar City in Bangladesh
              </a>
              <a
                href=""
                className="text-[#FFFFFFB2] mb-6 text-sm flex items-center gap-2"
              >
                <BsFillEnvelopeAtFill className="text-lg text-dark-03" />
                noreply@aminur.com
              </a>
            </div>
          </div>
          <div className="py-6 flex justify-between px-5 lg:px-0">
            <p className="text-[#FFFFFFB2] text-center">
              Copyright © 2023 HotelHub. All Rights Reserved.
            </p>
            <div className="text-[#FFFFFFB2] text-2xl hidden md:flex gap-4">
              <Link>
                <AiOutlineInstagram />
              </Link>
              <Link>
                <AiFillFacebook />
              </Link>
              <Link>
                <AiOutlineTwitter />
              </Link>
              <Link>
                <AiFillLinkedin />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
