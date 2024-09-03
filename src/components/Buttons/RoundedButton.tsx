const RoundedButton = (props: any) => {
  return (
    <div>
      <button className="flex items-center justify-between mx-auto rounded-full bg-red-500 hover:bg-red-300 text-white font-semibold py-2 px-6">
        <span>{props.children}</span>
        {props.icon && <props.icon />}
      </button>
    </div>
  );
};

export default RoundedButton;
