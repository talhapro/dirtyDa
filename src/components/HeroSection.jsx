import React from 'react'
import dog1 from "../assets/dog_1_pug.gif";

const backgroundSky = require('../assets/background-sky-1.png');

const HeroSection = () => {
  return (
    <>
    {/* HERO SECTION */}
    <section className="bg-center relative" style={{ backgroundImage: `url(${backgroundSky})` }}>
      <img className='absolute lg:h-40 sm:h-40 lg:bottom-10 lg:left-20 sm:bottom-16 sm:left-8' src={dog1} alt="coverImage"></img>
    <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32">
  
      <h1 className="text-5xl font-bold leading-none text-slate-800 uppercase">
        Get in early on the DDOG pre-sale.
      </h1>
      <p className="px-8 mt-6 mb-8 text-lg">
        DDOG is the ultimate memecoin Play-to-Earn platform, and the
        pre-sale has now sold out.
      </p>
      <p className="lg:text-xl font-extrabold mb-6 sm:text-lg">
        USDT Raised: $15,852,002.96 / $20,000,000.00
      </p>
      <div className="flex flex-wrap justify-center">
        <button className="px-24 py-3 mb-2 text-lg font-semibold rounded-md bg-orange-700 text-white hover:opacity-80">
          Buy Now
        </button>
      </div>
      <h1 className="lg:text-2xl font-extrabold mt-6 mb-6 sm:text-xl text-slate-800">
        USDT Raised: $15,852,002.96
      </h1>
      <div className="mt-4 flex flex-wrap justify-center gap-4">
        <a
          className="block tracking-widestrounded px-20 lg:px-20 py-3 text-md border-4 border-slate-800 text-slate-800 hover:bg-orange-700 sm:w-auto"
          href="/get-started"
        >
          <h1>HOW TO BUY</h1>
        </a>

        <a
          className="block tracking-widest rounded px-20 lg:px-20 py-3 text-md border-4 border-slate-800 text-slate-800 hover:bg-orange-700 sm:w-auto"
          href="/about"
        >
          <h1>WIN $100K</h1>
        </a>
      </div>
    </div>
  </section>
  </>
  )
}

export default HeroSection