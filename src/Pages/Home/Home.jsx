import About from "../../Components/About/About";
import Banner from "../../Components/Banner/Banner";
import Subscribe from "../../Components/Subscribe/Subscribe";
import Testimonials from "../../Components/Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Testimonials />
      <Subscribe />
    </div>
  );
};

export default Home;
