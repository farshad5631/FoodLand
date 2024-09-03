const TitleCard = (props: any) => {
  return (
    <div className="flex flex-col items-center mx-auto justify-center py-4 my-4">
      <p className="text-red-500 text-sm">{props.title}</p>
      <p className="font-bold text-2xl">{props.heading}</p>
    </div>
  );
};

export default TitleCard;
