import CallToAction from "../components/CallToAction";
import Footer from "../components/footer";
import Hero from "../components/Hero";
import InfoBar from "../components/InfoBar";
import Navbar from "../components/Nav/Navbar";
import Products from "../components/Products";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div className="container pt-20">
      <Navbar />
      <Hero />
      <InfoBar />
      <Products />
      <Service />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
