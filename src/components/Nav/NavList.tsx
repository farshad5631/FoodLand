import { Link } from "react-router-dom";
const NavList = () => {
  return (
    <div className="space-x-8 md:flex flex-row">
      <Link to="/" className="hover:text-red-500">
        Home
      </Link>
      <Link to="/menu" className="hover:text-red-500">
        Menu
      </Link>
      <Link to="/aboutus" className="hover:text-red-500">
        About Us
      </Link>
    </div>
  );
};

export default NavList;
