import img1 from "../assets/Images/beef-enchiladas.png";
import img2 from "../assets/Images/Chicken-Pot-Pie.png";
import img3 from "../assets/Images/delish-200305-grilled-green-beans.png";
import img4 from "../assets/Images/thai-tossed-green-salad.png";
import img5 from "../assets/Images/top-view-pepperoni-pizza.png";
import img6 from "../assets/Images/gyro-sandwich1-1650490757 1.png";
import ProductCard from "./Cards/ProductCard";
import TitleCard from "./Cards/TitleCard";

const MenuProducts = () => {
  const heading = {
    heading: "Product",
    title: "Explore Our Menu",
  };
  const products = [
    { id: 1, imgSrc: img1, name: "Enchilade", star: 5.0, price: 28.2 },
    {
      id: 2,
      imgSrc: img2,
      name: "Chicken Pot Pie",
      star: 4.9,
      price: 30.4,
    },
    { id: 3, imgSrc: img3, name: "Green Beans", star: 4.9, price: 29.2 },
    { id: 4, imgSrc: img4, name: "Green Salad", star: 4.9, price: 15.2 },
    { id: 5, imgSrc: img5, name: "Pizza", star: 5.0, price: 20.2 },
    { id: 6, imgSrc: img6, name: "Gyro Sandwhic", star: 5.0, price: 12.2 },
    { id: 7, imgSrc: img1, name: "Enchilade", star: 5.0, price: 28.2 },
    {
      id: 8,
      imgSrc: img2,
      name: "Chicken Pot Pie",
      star: 4.9,
      price: 30.4,
    },
    { id: 9, imgSrc: img3, name: "Green Beans", star: 4.9, price: 29.2 },
    { id: 10, imgSrc: img4, name: "Green Salad", star: 4.9, price: 15.2 },
    { id: 11, imgSrc: img5, name: "Pizza", star: 5.0, price: 20.2 },
    { id: 12, imgSrc: img6, name: "Gyro Sandwhic", star: 5.0, price: 12.2 },
  ];
  return (
    <div className="mb-12">
      <TitleCard title={heading.heading} heading={heading.title} />
      <div className="grid grid-cols-3 gap-10 w-4/5 mx-auto mb-8">
        {products.map((p) => (
          <ProductCard {...p} />
        ))}
      </div>
    </div>
  );
};

export default MenuProducts;
