import { Icon } from "@iconify/react";
// type props = {
//   imageSrc: string;
//   name: string;
//   star: string;
//   price: any;
// };
const ProductCard = (props: any) => {
  return (
    <div
      className="bg-white container  flex flex-col rounded-3xl shadow-primary "
    >
      <img
        src={props.imgSrc}
        alt=""
        className="w-full h-2/3 object-cover rounded-t-3xl "
      />
      <div className="p-4">
        <div className="flex items-center mt-2 justify-between place-items-center">
          <h3 className="text-xl font-bold">{props.name}</h3>
          <div className="flex flex-row space-x-2 align-middle">
            <Icon className="text-red-500 " icon="fa-star" />
            <span className="text-gray-500">{props.star}</span>
          </div>
        </div>
        <p className="flex ml-2 justify-end">${props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
