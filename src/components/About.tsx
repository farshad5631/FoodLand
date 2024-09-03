import RoundButton from "../components/Buttons/RoundedButton";
import Student from "../assets/icons/Student";
import about1 from "../assets/Images/about 1.png";
import about2 from "../assets/Images/about 2.png";
import about3 from "../assets/Images/about 3.png";
import about4 from "../assets/Images/about4.png";
import { Icon } from "@iconify/react";
import MenuList from "./List/MenuList";

const About = () => {
  return (
    <div>
      <div className="container flex flex-row  w-4/5 mx-auto ">
        <div className="flex flex-row items-center pl-12">
          <div className=" flex flex-col items-center mr-6 -mt-24 ">
            <img className=" h-auto " src={about1} alt="Image1" />
          </div>
          <div className="flex flex-col gap-6 pt-28">
            <img src={about2} alt="" />
            <img src={about3} alt="" />
          </div>
        </div>
        <div className="text-left justify-start w-1/2 pl-28 pt-36 pr-28">
          <h1 className="font-bold text-3xl mt-10">
            Food is an important part Of a balanced Diet
          </h1>
          <p className=" my-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
            velit in consequat.
          </p>
          <div className="flex flex-row space-x-6 place-items-center">
            <a>
              <RoundButton>Show more</RoundButton>
            </a>
            <button className="flex flex-row justify-between place-items-center space-x-4">
              <Icon
                className="bg-white text-red-500 rounded-full text-5xl shadow-primary"
                icon="fa-play-circle"
              />
              <span className="font-semibold">Watch Video</span>
            </button>
          </div>
        </div>
      </div>
      <div className="container flex flex-col mt-24 mx-auto w-4/5 justify-center items-center ">
        <div className="flex flex-col mx-auto justify-center items-center w-2/5 space-y-8 mb-10">
          <h2 className="text-black text-5xl font-bold">Why Choose Us</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.{" "}
          </p>
        </div>
        <div>
          <img src={about4} alt="image4" />
        </div>
        <div className="flex flex-row justify-between mt-16 space-x-28">
          <div className="flex flex-col justify-center items-center space-y-6">
            {/* <Icon
              className="text-black text-7xl"
              icon="heroicons:academic-cap"
            /> */}
            <Student />
            <h2 className="text-3xl font-bold">Best Chef</h2>
            <p className="flex justify-center text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <Icon className="text-black text-7xl" icon="fa-regular:user" />
            <h2 className="text-3xl font-bold">Clean Environment</h2>
            <p className="flex justify-center text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-6">
            <Icon className="text-black text-7xl" icon="fa-solid:coffee" />
            <h2 className="text-3xl font-bold">120 Item food</h2>
            <p className="flex justify-center text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="container flex flex-col my-24 mx-auto w-4/5 justify-center items-center">
        <div className="flex flex-col mx-auto justify-center items-center w-2/5 space-y-8 mb-10">
          <h2 className="text-black text-5xl font-bold">Our Food Menu</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue{" "}
          </p>
        </div>
        <div className="space-x-12 md:flex flex-row pb-8">
          <a href="#" className="hover:text-red-500">
            Breakfast
          </a>
          <a href="#" className="hover:text-red-500">
            Lunch
          </a>
          <a href="#" className="hover:text-red-500">
            Dinner
          </a>
          <a href="#" className="hover:text-red-500">
            Dessert
          </a>
          <a href="#" className="hover:text-red-500">
            Drink
          </a>
          <a href="#" className="hover:text-red-500">
            Snack
          </a>
        </div>
        <hr className="text-gray-700 w-4/5 block" />
        <MenuList />
        <RoundButton>contact</RoundButton>
      </div>
    </div>
  );
};

export default About;
