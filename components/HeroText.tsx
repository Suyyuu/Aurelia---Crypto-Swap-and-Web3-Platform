import Link from "next/link";
import React from "react";
import ReadMoreButton from "./HeroButton";
import HeroAnimatedButton from "./HeroButton";

const HeroText = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] mx-auto gap-2 mt-[100px]">
        <h6 className="text-[16px] font-Expletus text-[#e46767]">
          We are <span className="font-semibold">Aurelia&#x2122;</span>
        </h6>
        <h1 className="text-[54px] font-WorkSans text-[#ffffff] max-w-[600px] tracking-normal leading-snug">
          <span className="text-[#e46767]">Frictionless </span>Crypto Swaps With
          Touch Of Elegance And Speed
        </h1>
        <div className="w-full flex flex-col text-[16px] text-[#ffffff] font-WorkSans items-end">
          <p className="font-normal">Based in India.</p>
          <p className="font-semibold">Available Worldwide.</p>
        </div>

        {/* <Link className="w-fit" href={"/"}>
          <button className="text-[16px] font-WorkSans text-[#ffffff] bg-[#e46767] px-[2.5rem] py-[1.5rem] heroButton w-full cursor-pointer">
            Enter The Shift
          </button>
        </Link> */}

        <Link href="/" className="group w-fit heroButton">
          <button className="relative text-[16px] font-WorkSans text-[#ffffff] bg-[#e46767] px-[2.5rem] py-[1.5rem] w-full cursor-pointer overflow-hidden">
            {/* Current Text */}
            <span className="transition-transform duration-300 ease-in-out group-hover:translate-y-[-100%]">
              Enter The Shift
            </span>

            {/* Hover Text */}
            <span className="absolute inset-0 flex items-center justify-center text-[#e46767] font-WorkSans text-[16px] translate-y-[100%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 z-10">
              Enter The Shift
            </span>

            {/* Background Slide */}
            <span className="absolute inset-0 bg-[#ffffff] transition-all duration-300 ease-in-out transform translate-y-[100%] group-hover:translate-y-0 z-0" />
          </button>
        </Link>

      </div>
    </>
  );
};

export default HeroText;
