import React from "react";

const PortfolioProject = ({
  id,
  name,
  description,
  imageUrl,
  href,
  number,
}) => {
  return (
    <div
      className={"h-screen relative"}
      style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover" }}
    >
      <div className={"absolute w-1/2 h-full bg-black opacity-75"}></div>
      <div
        className={
          "flex flex-col justify-center font-mono pt-[50%] sm:pl-8 sm:pt-32 md:pl-12 md:pt-[10%] max-w-7xl w-9/12 mx-auto xl:pt-[10%]"
        }
      >
        <h1 className={"text-7xl md:text-8xl text-[#808080] mb-4"}>{number}</h1>
        <h2 className={"text-white font-bold text-3xl z-40 mb-16 md:text-4xl"}>
          {name}
        </h2>
        <p
          className={
            "text-[#7A7A7A] text-[14px] max-w-[50%] mb-10 md:mb-16 z-40 sm:text-base md:text-xl"
          }
        >
          {description}
        </p>
        <a href={href} className={"text-white z-40 text-xl"}>
          View project
        </a>
      </div>
    </div>
  );
};
export default PortfolioProject;
