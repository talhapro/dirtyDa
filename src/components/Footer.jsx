import React from 'react'
import img from "../assets/dirty-dogs.png";
const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="flex justify-center text-teal-600 sm:justify-start">
      <img src={img} alt="" className=" w-auto h-24" />
      </div>

      <p className="mt-4 font-bold text-center text-sm text-slate-800 lg:mt-0 lg:text-right">
        Copyright &copy; 2023. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  )
}

export default Footer