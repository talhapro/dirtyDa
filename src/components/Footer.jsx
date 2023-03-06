import React from "react";
import bGrass from "../assets/new/bottem-grass-md.png";
import bGrassmb from "../assets/new/bottem-grass.png";
import bGrassDesk from "../assets/new/bottem-grass-desktop.png";
import img from "../assets/dirty-dogs.png";
import AiDog from '../assets/new/jetpack_dog_AI_version-reverse.gif'
const Footer = () => {
  return (
    <section id="footer" className="relative flex flex-col items-center justify-center">
      <img
        src={bGrassmb}
        alt="Bottom Grass Part"
        className="absolute h-auto w-full -top-44 sm:hidden"
      />
      <img
        src={bGrass}
        alt="Bottom Grass Part"
        className="absolute h-auto w-full -top-44 hidden sm:block md:hidden"
      />
      <img
        src={bGrassDesk}
        alt="Bottom Grass Part"
        className="absolute h-auto w-full -top-44 hidden md:block xll:-top-72"
      />
      <img src={AiDog} alt="mountain-clif-small"  className='w-48 absolute -top-52 right-5 sm:w-56 lm:right-32 xll:w-72 xll:right-48 xll:-top-72'/>
      <div className="flex flex-col absolute items-center justify-center lm:flex-row lm:justify-between lm:w-full lgg:top-24 xll:top-52">
        <div className="">
          <img src={img} alt="" className=" w-auto h-32 sm:h-48 lm:ml-6 xll:ml-20" />
        </div>

        <p className="pt-12 text-slate-200 lm:mr-6 xll:mr-20 xll:text-xl">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
