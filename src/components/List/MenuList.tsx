import MenuItem from "./MenuItem";

const MenuList = () => {
  const menuItems = [
    {
      id: 1,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 2,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 3,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 4,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 5,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 6,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 7,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
    {
      id: 8,
      name: "Alder Grilled Chinook Salmon",
      text: "Toasted French bread topped with romano, cheddar",
      price: 32,
      cal: 560,
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-x-12 gap-y-6 w-4/5 m-10">
      {menuItems.map((m) => (
        <MenuItem key={m.id} {...m} />
      ))}
    </div>
  );
};

export default MenuList;
