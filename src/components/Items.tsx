import img1 from "../assets/Images/pizza-png.png";
import img2 from "../assets/Images/Combo-Junk-Food.png";
import img3 from "../assets/Images/burger_sandwich_PNG4135 1.png";
import img4 from "../assets/Images/cake.png";
import ItemCard from "./Cards/ItemCard";

const Items = () => {
  const items = [
    { id: 1, image: img1, title: "Pizza", desc: "Mushroom Sauce", price: 6.15 },
    {
      id: 1,
      image: img2,
      title: "Food Combo",
      desc: "Mushroom Sauce",
      price: 6.15,
    },
    {
      id: 1,
      image: img3,
      title: "Burger",
      desc: "Mushroom Sauce",
      price: 6.15,
    },
    { id: 1, image: img4, title: "Cake", desc: "Mushroom Sauce", price: 6.15 },
  ];
  return (
    <div className="mx-auto grid grid-cols-2">
      {items.map((i) => (
        <ItemCard {...i} />
      ))}
    </div>
  );
};

export default Items;
