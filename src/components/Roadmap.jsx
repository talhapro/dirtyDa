import React from 'react'

const Roadmap = () => {
  return (
    <section id="roadMap">
    <div className='flex flex-col items-center'>
{/* <!-- component --> */}
<h1 className="text-3xl text-slate-200 font-bold mb-4 ml-3 p-12">Roadmap</h1>

<ol >
  <li className="border-l-2 border-orange-600">
    <div className="md:flex flex-start">
      <div className="bg-orange-700 w-6 h-6 flex items-center justify-center rounded-full -ml-3.5  text-slate-200 font-bold">
        1
      </div>
      <div className="block p-6 rounded-lg shadow-lg bg-gray-100 max-w-md ml-6 mb-10 lg:w-full md:w-full">
        <div className="flex justify-between mb-4">
          <h2 className="font-bold text-slate-800 text-md">Phase 1</h2>
        </div>
        <div className="text-gray-700  flex flex-col">
            <p>- Release V1 Website </p>
            <p>- Build Core Team</p>
            <p>- Concept Design</p>
            <p>- Release V1 Whitepaper</p>
            <p>- Begin Game Development</p>
            <p>- NFT Development</p>
            <p>- NFT Marketplace Development</p>
            <p>- Community Building</p>
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
          <h2 className="font-bold text-slate-800 text-md">Phase 2</h2>
        </div>
        <div className="text-gray-700  flex flex-col">
            <p>- Deploy Token</p>
            <p>- Smart Contract Audit</p>
            <p>- Team KYC</p>
            <p>- Presale Marketing</p>
            <p>- Pinksale Presale</p>
            <p>- NFTs Sale</p>
            <p>- CMC and CG Fast Tracking</p>
            <p>- Launch on PancakeSwap</p>
            <p>- Game V1 leaderboard Launch</p>
            <p>- Staking Launch</p>
            <p>- Marketplace Launch</p>
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
          <h2 className="font-bold text-slate-800 text-md">Phase 3</h2>
        </div>
        <div className="text-gray-700  flex flex-col">
            <p>- CEX Listing</p>
            <p>- Release V2 Whitepaper </p>
            <p>- Release V2 Website</p>
            <p>- Reach 10k Holder</p>
            <p>- New Game Mode Launch</p>
            <p>- NFT Rental Launch</p>
            <p>- V2 Roadmap Release</p>
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