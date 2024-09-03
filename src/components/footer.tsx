import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white  ">
      <div className="grid grid-cols-3 p-4 mx-auto px-40 py-28 ">
        <div className="px-24 space-y-4">
          <h3 className="text-lg font-bold">FoodLand</h3>
          <p
            className="text-black
          "
          >
            Subscribe our newsletter and get discount 25%off
          </p>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2  rounded-l-md focus:outline-none"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-r-md hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300">
              <FaTelegram />
            </button>
          </div>
          <div className="flex justify-center space-x-4 text-red-500 text-2xl">
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaPinterest />
            </a>
            <a href="">
              <FaTwitter />
            </a>
            <a href="">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div className=" flex flex-col px-14 space-y-4">
          <h3 className="text-lg font-bold">Contact us</h3>
          <p className="text-black">London England, 3rd Floor, Office 45</p>
          <p className="text-black">00965 - 96659986</p>
          <p className="text-black">M.Alyaqout@4house.Co</p>
          <p
            className="text-black
          "
          >
            Sun - Sat / 10:00 AM - 8:00 PM
          </p>
        </div>

        <div className="px-24 flex flex-col space-y-4">
          <h3 className="text-lg font-bold">Links</h3>
          <a href="">About us</a>
          <a href="">Contact Us</a>
          <a href="">Our Menu</a>
          <a href="">Our Team</a>
          <a href="">FAQ</a>
        </div>
      </div>

      <div className="bg-red-500 text-white flex text-sm py-3">
        <div className="flex items-center mx-auto w-1/2 justify-center">
          <p>Copyright © 2024 Shawon3 Themes. All rights reserved</p>
        </div>
        <div className="flex flex-row mx-auto w-1/2 justify-center space-x-8">
          <a href="">Privacy Policy</a>
          <a href="">Term of Use</a>
          <a href="">Partner</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
