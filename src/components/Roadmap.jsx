import React from 'react'
import rBottomGreen from '../assets/new/rock-bottom-mobile.png';
import rBottomGreenMd from '../assets/new/rock-bottom-md.png';
import rBottomGreenDesk from '../assets/new/rock-bottom-desktop.png';
import cloud1 from '../assets/new/cloud-1.png';
import cloud2 from '../assets/new/cloud-2.png';
import cloud3 from '../assets/new/cloud-3.png';

const Roadmap = () => {
  return (
    <section id="roadMap" className='relative flex items-center justify-center'>
    <img
        src={rBottomGreen}
        alt="Green Bottom"
        className="w-[500px] absolute -top-20 sm:hidden"
      />
      <img
        src={rBottomGreenMd}
        alt="Green Bottom"
        className="w-[800px] absolute -top-52 hidden sm:block lm:hidden"
      />
      <img
        src={cloud1}
        alt="Cloud"
        className="w-[250px] absolute top-80 left-20 hidden lm:block"
      />
      <img
        src={cloud2}
        alt="Cloud"
        className="w-[250px] absolute bottom-96 left-20 hidden lm:block"
      />
      <img
        src={cloud3}
        alt="Cloud"
        className="w-[250px] absolute top-[730px] right-32 hidden lm:block lgm:hidden"
      />
      <img
        src={cloud2}
        alt="Cloud"
        className="w-[250px] absolute top-[730px] right-32 hidden lm:block"
      />
      <img
        src={rBottomGreenDesk}
        alt="Green Bottom"
        className="w-[1050px] absolute -top-40 hidden lm:block lgg:w-[1440px] lg:-top-52 xll:w-full xll:-top-80"
      />
     

    <div className='flex flex-col items-center absolute container top-28 sm:top-52 lgg:top-80'>
{/* <!-- component --> */}
<h1 className="text-3xl text-slate-800 font-bold mb-4 ml-3 p-12 sm:text-4xl xll:text-5xl">Roadmap</h1>

<ol >
  <li className="border-l-2 border-orange-600">
    <div className="md:flex flex-start">
      <div className="bg-orange-700 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5  text-slate-200 font-bold">
        1
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 lg:w-full md:w-full">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-md xll:text-2xl">Quarter 4 2022</h2>
        </div>
        <div className="text-gray-700  flex flex-col xll:text-xl">
            <p>- Release V1 Website </p>
            <p>- Build Core Team</p>
            <p>- Concept Design</p>
            <p>- Release V1 Whitepaper</p>
            <p>- Begin Game Development</p>
            <p>- NFT Development</p>
            <p>- Staking Development</p>
            <p>- NFT Marketplace Development</p>
        </div>
      </div>
    </div>
  </li>
  <li className="border-l-2 border-orange-700">
    <div className="md:flex flex-start">
      <div className="bg-orange-700 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 text-slate-200 font-bold">
        2
      </div>
      <div className="pt-6 pl-6 pb-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 lg:w-full md:w-full">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-md xll:text-2xl">Quarter 1 2023</h2>
        </div>
        <div className="text-gray-700  flex flex-col xll:text-xl">
            <p>- Launch Socials</p>
            <p>- Deploy Token</p>
            <p>- Smart Contract Audit</p>
            <p>- Team KYC</p>
            <p>- Presale Marketing</p>
            <p>- Pinksale Fairlaunch (BNB)</p>
            <p>- Pinksale Fairlaunch (Arbitrum)</p>
            <p>- Launch NFTs</p>
            <p>- CMC and CG Fast Track</p>
            <p>- Launch on Pcs</p>
            <p>- Game V1 launch on iOs & Android</p>
            <p>- Staking Launch</p>
            <p>- NFT Marketplace Launch</p>
            <p>- Partnership Expansion</p>
        </div>
      </div>
    </div>
  </li>
  <li className="border-l-2 border-orange-700">
    <div className="md:flex flex-start">
      <div className="bg-orange-700 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 text-slate-200 font-bold">
        3
      </div>
      <div className="block pt-6 pl-6 pb-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 lg:w-full md:w-full">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-md xll:text-2xl">Quarter 2 2023</h2>
        </div>
        <div className="text-gray-700  flex flex-col xll:text-xl">
            <p>- CEX Listing</p>
            <p>- Release V2 Whitepaper </p>
            <p>- Release V2 Website</p>
            <p>- Release V2 Game Mode</p>
            <p>- NFT Rental Launch</p>
            <p>- Release Game Boost</p>
        </div>
      </div>
    </div>
  </li>
  <li className="border-l-2 border-orange-700">
    <div className="md:flex flex-start">
      <div className="bg-orange-700 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5 text-slate-200 font-bold">
        4
      </div>
      <div className="block pt-6 pl-6 pb-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 lg:w-full md:w-full">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-md xll:text-2xl">Quarter 3 2023</h2>
        </div>
        <div className="text-gray-700  flex flex-col xll:text-xl">
            <p>- Release V3 Game Mode</p>
            <p>- Launch breeding option</p>
            <p>- Monetize app store ad revenue</p>
        </div>
      </div>
    </div>
  </li>
</ol>
</div>
</section>
  )
}

export default Roadmap