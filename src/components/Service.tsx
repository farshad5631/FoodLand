import image from "../assets/Images/Ellipse 10.png";
import ServiceCard from "./Cards/ServiceCard";
import TitleCard from "./Cards/TitleCard";
const Service = () => {
  const heading = {
    heading: "Services",
    title: "Why Choose Our Favorite Food",
  };
  const services = [
    {
      id: 1,
      image: image,
      title: "Qualityfull Food",
      desc: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.",
    },
    {
      id: 2,
      image: image,
      title: "Qualityfull Food",
      desc: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.",
    },
    {
      id: 3,
      image: image,
      title: "Qualityfull Food",
      desc: "But I must explain to you how all this mistaken idea of denouncing pleasur and prasising pain was bron.",
    },
  ];

  return (
    <div className="pb-12">
      <TitleCard title={heading.heading} heading={heading.title} />
      <div className="flex mx-72 gap-10">
        {services.map((s) => (
          <ServiceCard {...s} />
        ))}
      </div>
    </div>
  );
};

export default Service;
