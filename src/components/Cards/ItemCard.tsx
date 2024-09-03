const ItemCard = (props: any) => {
  return (
    <div className="flex rounded-3xl flex-col items-center pb-3 shadow-primary m-4">
      <img className="-mt-12" src={props.image} alt="" />
      <h3 className="font-bold">{props.title}</h3>
      <p>{props.desc}</p>
      <span>
        <span className="text-red-500">$</span>
        {props.price}
      </span>
    </div>
  );
};

export default ItemCard;
