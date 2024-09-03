// import { FaClock, FaLocationArrow, FaPhone } from "react-icons/fa";
import { Icon } from "@iconify/react";

const InfoBar = () => {
  return (
    <div className="flex items-center text-center my-10 p-4 w-4/5 mx-auto shadow-primary rounded-lg mb-4">
      <div className="flex-1 items-center text-center pb-6 border-r pr-4">
        <span className="text-center flex items-center py-2">
          {/* <FaClock className="text-red-500 mx-auto text-3xl" /> */}
          <Icon
            className="text-white bg-red-500 mx-auto text-3xl rounded-full"
            icon="fa-clock-o"
          />
        </span>
        <h3 className="font-bold">Today 10:00am - 10:00pm</h3>
        <p className="text-sm">Working time</p>
      </div>

      <div className="flex-1 items-center text-center border-r pr-4">
        <span className="text-center flex items-center py-2">
          {/* <FaLocationArrow className="text-red-500 mx-auto text-3xl" /> */}
          <Icon
            className="text-red-500 mx-auto text-3xl"
            icon="fa-location-arrow"
          />
        </span>
        <h3 className="font-bold">Washington, D.C., DC,USA</h3>
        <p>Our Location</p>
      </div>

      <div className="flex-1 items-center text-center">
        <span className="text-center flex items-center py-2">
          <Icon className="text-red-500 mx-auto text-3xl" icon="fa-phone" />
        </span>
        <h3 className="font-bold">+0123 456 7891</h3>
        <p>Phone Number</p>
      </div>
    </div>
  );
};

export default InfoBar;
