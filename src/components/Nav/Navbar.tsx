import logo from "../../assets/Images/FoodLand.png";
import { PlayCircleIcon } from "@heroicons/react/16/solid";
import NavList from "./NavList";
import RoundedButton from "../Buttons/RoundedButton";
const Navbar = () => {
  return (
    <nav className="container px-44 py-4 fixed bg-white top-0 z-10 mx-auto">
      <div className="flex items-center justify-between">
        <a className="pt-2 cursor-pointer">
          <img src={logo} alt="Logo" />
        </a>
        <NavList />
        <RoundedButton icon={PlayCircleIcon}>contact</RoundedButton>
      </div>
    </nav>
  );
};

export default Navbar;
