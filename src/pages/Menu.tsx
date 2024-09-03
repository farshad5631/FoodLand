import MenuProducts from "../components/MenuProducts";
import Navbar from "../components/Nav/Navbar";
import Footer from "../components/footer";

const Menu = () => {
  return (
    <div className="container pt-20">
      <Navbar />
      <MenuProducts />
      <Footer />
    </div>
  );
};

export default Menu;
