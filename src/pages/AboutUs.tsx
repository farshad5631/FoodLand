import About from "../components/About";
import Footer from "../components/footer";
import Navbar from "../components/Nav/Navbar";

const AboutUs = () => {
  return (
    <div className="container pt-20">
      <Navbar />
      <About />
      <Footer />
    </div>
  );
};

export default AboutUs;
