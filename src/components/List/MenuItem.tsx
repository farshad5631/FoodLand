const MenuItem = (props: any) => {
  return (
    <div className="flex flex-col border-dotted">
      <div className="flex mt-2 justify-between">
        <h1 className="text-2xl text-red-500 font-bold">{props.name}</h1>
        <span className="flex ml-2 justify-end text-red-500 font-bold">
          ${props.price}
        </span>
      </div>
      <p className="text-start">{props.text}</p>
      <span>{props.cal} CAL</span>
      <div className="border-t-2 border-dotted border-gray-300 my-4"></div>
    </div>
  );
};

export default MenuItem;
