import React from 'react'
import BMountain from '../assets/new/cliff-part-background.png';
import SMountain from '../assets/new/small-cliff.png';
import PugDog from '../assets/new/dog_1_pug.gif';
import LMountain from '../assets/new/down-ground-cave-4.png'
import pixelToken from '../assets/pixel-token.png'


const NftTokenDetails = () => {
  return (
    <>
    {/* NFT FEATURE */}

    <section id="tokenDetail" className='relative'>
    <img src={BMountain} alt="mountain-clif"  className='w-[500px] sm:hidden absolute -top-40 -left-5'/>
    <img src={PugDog} alt="Pug Dog Gif" className='absolute w-44 -top-60 left-20'/>
    <img src={SMountain} alt="mountain-clif-small"  className='w-[120px] sm:hidden absolute top-[420px] right-12'/>
    <img src={LMountain} alt="mountain-clif-small"  className='w-[800px] sm:hidden absolute -bottom-20'/>
    <div className="flex flex-col px-5 mt-36 absolute top-[500px]">
          <h1 className="text-4xl font-bold leading-none text-slate-800 uppercase text-center">
            NFTs
          </h1>

          <p className="mt-4 text-slate-800 font-bold text-md text-left tracking-wider">
            Dirty AI Dogs NFTs are the only way to earn $AIDOGS Tokens! The full
            collection of 5,555 NFTs will be released soon. You’ll be able mint
            Dirty AI Dogs NFTs to have access to the play to earn games:
            tournaments, leaderboard Contest, daily and weekly quest.
          </p>
        </div>
  </section>

  {/* DDOG TOKEN INTRO */}
  </>
  )
}

export default NftTokenDetails