import React from "react";
import bDp7 from "../assets/background-dp-7.png";
import bGrass from "../assets/new/bottem-grass.png";
import img from "../assets/dirty-dogs.png";
const Footer = () => {
  return (
    <section id="footer" className="relative">
      <img
        src={bGrass}
        alt="Bottom Grass Part"
        className="absolute h-auto w-full -top-44"
      />
      <div className="flex flex-col absolute items-center right-12">
        <div className="">
          <img src={img} alt="" className=" w-auto h-44" />
        </div>

        <p className="pt-12 text-slate-200">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
