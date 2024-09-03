import TestImage from "../assets/Images/testomonial.png";
import image from "../assets/Images/fast-food-banner-junk-food.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TitleCard from "./Cards/TitleCard";
const Testimonial = () => {
  const heading = {
    heading: "Our Happy Client Says",
    title: "Testimonials",
  };
  return (
    <div className="flex flex-col mb-20 ">
      <TitleCard title={heading.title} heading={heading.heading} />
      <div className="container flex flex-row mx-auto pt-4 justify-center">
        <div className="flex flex-col items-center w-2/5 my-auto mr-8">
          <div className="relative shadow-primary bg-white rounded-3xl px-10 py-14">
            <div className="flex justify-center mb-10 ">
              <img src={TestImage} className="w-16 rounded-full" alt="" />
              <div className="flex-col justify-center">
                <h5 className="text-lg font-bold">Willians Jhone</h5>
                <p className="text-left">CEO & Co-Founder</p>
              </div>
            </div>
            <a href="">
              {" "}
              <FaArrowLeft className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-red-500 rounded-full -mx-7 text-2xl p-1" />
            </a>
            <div className="text-center">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
              nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit
              sed dignissim ac, aliquet. Metus egestas habitant feugiat neque
              ultrices nunc, dolor egestas mus.”
            </div>
            <a href="">
              <FaArrowRight className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-red-500 rounded-full -mx-7 text-2xl p-1" />
            </a>
          </div>
        </div>
        <img src={image} alt="" className="w-2/5" />
      </div>
    </div>
  );
};

export default Testimonial;
