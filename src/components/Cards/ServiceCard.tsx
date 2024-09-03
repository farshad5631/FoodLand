const ServiceCard = (props: any) => {
  return (
    <div className="flex rounded-3xl flex-col items-center border-2 py-14 px-10 shadow shadow-gray-200">
      <img
        src={props.image}
        alt="Service Image"
        className="rounded-full w-16 h-16 mx-auto mb-4"
      />
      <div className="text-center">
        <h2 className="text-xl font-bold text-black mb-2">{props.title}</h2>
        <p className="text-gray-600">{props.desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
