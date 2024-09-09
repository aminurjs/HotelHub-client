import { useState } from "react";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import useAxios from "../../Hooks/useAxios";
import swal from "sweetalert";
import Cookies from "js-cookie";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { googleLogin, login } = useAuth();
  const location = useLocation();
  const axios = useAxios();

  const handleRegister = async (e) => {
    e.preventDefault();

    const toastId = toast.loading("Logging in ...");
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error(" Password should have at least  6 characters", {
        id: toastId,
      });
      return;
    }

    login(email, password)
      .then((result) => {
        console.log(result.user.email);
        const user = { email: result.user.email };
        axios
          .post(`/auth/access-token`, user)
          .then((response) => {
            console.log(response.data);
            Cookies.set("token", response.data.token);
          })
          .catch((error) => {
            return swal(error.code);
          });
        toast.success("Successfully Logged in!!", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message, { id: toastId });
      });
  };

  const handleGoogleLogin = () => {
    const toastId = toast.loading("Logging in ...");
    googleLogin()
      .then((result) => {
        const user = { email: result.user.email };
        axios
          .post(`/auth/access-token`, user)
          .then((response) => {
            console.log(response.data);
            Cookies.set("token", response.data.token);
          })
          .catch((error) => {
            return swal(error.code);
          });
        toast.success("Successfully Logged in!", { id: toastId });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message, { id: toastId });
      });
  };

  return (
    <>
      <Helmet>
        <title>Login - HotelHub</title>
      </Helmet>
      <div className="bg-transparent ">
        <div className="max-w-7xl mx-auto p-10">
          <div className="bg-white  rounded shadow p-10 flex items-center border border-gray-200">
            <div className="w-1/2 hidden md:block pr-10">
              <h2 className="text-3xl text-dark-01  font-semibold mb-8 border-l-8 border-dark-03 pl-3">
                Welcome to HotelHub
              </h2>
              <img src="https://i.ibb.co/Z2VMjFJ/Frame-1.png" alt="" />
            </div>
            <div className=" w-full md:w-1/2 md:pl-10 md:border-l border-gray-300">
              <h1 className="text-2xl text-dark-01  font-semibold text-center mb-2">Login user</h1>
              <p className="text-center text-sm text-gray-600  mb-3">
                Already have an account?
                <Link className="text-dark-03 ml-2" to={"/register"}>
                  Go Register!
                </Link>
              </p>
              <form onSubmit={handleRegister} className="mt-8">
                <input
                  className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full mb-4"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
                <div className="relative">
                  <input
                    className="px-5 py-2 outline-none border border-gray-200 text-dark-01  bg-slate-100   rounded-md w-full mb-2"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="text-lg absolute top-3 right-4 text-stone-600"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                  </span>
                </div>
                <div className="w-4/5 lg:w-3/5 mx-auto">
                  <button className="w-full mt-6 mb-10  bg-dark-03 rounded p-3 text-white uppercase font-medium duration-300">
                    Login in with email
                  </button>
                </div>
              </form>
              <p className="text-center -mb-3.5">
                <span className="bg-white  z-10 inline-block px-2">Or login</span>
              </p>
              <div className="w-full h-[1px] bg-stone-300"></div>
              <div className="text-center mt-8 w-4/5 lg:w-3/5 mx-auto">
                <button
                  onClick={handleGoogleLogin}
                  className="block w-full p-2 border-2 border-dark-03  text-dark-03 font-medium rounded-lg mb-5"
                >
                  <FcGoogle className="inline text-2xl mr-2"></FcGoogle>
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
