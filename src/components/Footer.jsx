import React from 'react'
import bDp7 from '../assets/background-dp-7.png';
import img from "../assets/dirty-dogs.png";
const Footer = () => {
  return (
    <footer id="footer" aria-label="Site Footer" className='w-full h-[700px] bg-cover bg-no-repeat' style={{backgroundImage: `url(${bDp7})`}}>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between 2xl:mt-[500px]">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <img src={img} alt="" className=" w-auto h-24" />
      </div>

      <p className="mt-4 font-bold text-center text-sm text-slate-200 lg:mt-0 lg:text-right">
        Copyright &copy; 2023. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer