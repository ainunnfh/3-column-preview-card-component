import React from "react";

interface ICardProps {
  color: "orange" | "teal" | "dark-green";
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}
const colorClasses = {
  orange: "[#e38826]",
  teal: "[#006970]",
  "dark-green": "[#004241]",
};

const Card: React.FC<ICardProps> = (props) => {
  return (
    <div
      className={`flex flex-col p-7 bg-${colorClasses[props.color]} h-screen`}
    >
      <div className={`flex flex-col gap-4`}>
        <div className="">
          <img src={props.image}></img>
        </div>
        <div className="font-bold text-5xl">{props.title}</div>
        <div className="font-normal text-[15px]">{props.description}</div>
      </div>
      <div className="mt-4">
        <a
          href="#"
          className={`bg-white py-3 px-8 border-collapse rounded-full text-${
            colorClasses[props.color]
          }`}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
