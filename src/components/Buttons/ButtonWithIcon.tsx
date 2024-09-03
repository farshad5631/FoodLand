// import React from 'react';

// interface ButtonProps {
//   text: string;
//   img: string;
// }

const ButtonWithIcon = (props: any) => {
  return (
    <button className="flex flex-row items-center justify-between text-xs rounded-full bg-red-500 hover:bg-red-300 text-white py-1 pl-4 pr-1">
      <span className="mr-6 text-base">{props.children}</span>
      <span className="flex">
        {" "}
        {props.img && (
          <img src={props.img} className="rounded-full p-1 bg-white" />
        )}
        {props.icon && <props.icon />}
      </span>
    </button>
  );
};

export default ButtonWithIcon;
