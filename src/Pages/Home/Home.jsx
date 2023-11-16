import { Helmet } from "react-helmet";
import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Featured from "../../Components/Featured/Featured";
import Gallery from "../../Components/Gallery/Gallery";
import Offers from "../../Components/Offers/Offers";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Holiday from "../../Components/Holiday/Holiday";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - HotelHub</title>
      </Helmet>
      <Banner />
      <About />
      <Featured />
      <Offers />
      <Holiday />
      <Gallery />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
