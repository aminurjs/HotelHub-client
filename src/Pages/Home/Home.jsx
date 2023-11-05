import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Gallery from "../../Components/Gallery/Gallery";
import Holiday from "../../Components/Holiday/Holiday";
import Offers from "../../Components/Offers/Offers";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Offers />
      <Holiday />
      <Gallery />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
