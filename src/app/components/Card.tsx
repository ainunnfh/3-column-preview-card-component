import React from "react";

interface ICardProps {
  color: string;
  image: string;
  title: string;
  description: string;
  onClick?: () => void;
}

const Card: React.FC<ICardProps> = (props) => {
  return (
    <div className={`flex flex-col p-7 bg-${props.color}`}>
      <div className="flex flex-col gap-4">
        <div className="">
          <img src={props.image}></img>
        </div>
        <div className="font-bold text-5xl">{props.title}</div>
        <div className="font-normal text-[15px]">{props.description}</div>
      </div>
      <div className="mt-4">
        <a
          href="#"
          className={`bg-white py-3 px-8 text-${props.color} border-collapse rounded-full`}
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default Card;
