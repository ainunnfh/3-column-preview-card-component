import React from "react";

const Card = () => {
  return (
    <div className="flex flex-col p-7 bg-[#e38826]">
      <div className="flex flex-col gap-4">
        <div className="">
          <img src="/icon-sedans.svg"></img>
        </div>
        <div className="font-bold text-5xl">Title</div>
        <div className="font-normal text-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores
          illum obcaecati natus fugit perferendis doloremque dolorum
          dignissimos, debitis exercitationem inventore autem alias saepe
          corporis repudiandae. Beatae eligendi quibusdam molestiae voluptas.
        </div>
      </div>
      <div className="mt-4">
        <button className="bg-white py-3 px-8 text-[#e38826] border-collapse rounded-full">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Card;
