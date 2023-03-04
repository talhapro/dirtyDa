import React from "react";
import bGrass from "../assets/new/bottem-grass.png";
import img from "../assets/dirty-dogs.png";
import AiDog from '../assets/new/jetpack_dog_AI_version-reverse.gif'
const Footer = () => {
  return (
    <section id="footer" className="relative">
      <img
        src={bGrass}
        alt="Bottom Grass Part"
        className="absolute h-auto w-full -top-44"
      />
      <img src={AiDog} alt="mountain-clif-small"  className='w-48 absolute -top-52 right-5'/>
      <div className="flex flex-col absolute items-center top-12 right-12">
        <div className="">
          <img src={img} alt="" className=" w-auto h-32" />
        </div>

        <p className="pt-12 text-slate-200">
          Copyright &copy; 2023. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
