import React from 'react'
import BMountain from '../assets/new/cliff-part-background.png';
import SMountain from '../assets/new/small-cliff.png';
import PugDog from '../assets/new/dog_1_pug.gif';
import MMountain from '../assets/new/down-ground-cave-4.png';
import AiDog from '../assets/new/jetpack_dog_AI_version-reverse.gif'


const NftTokenDetails = () => {
  return (
    <>
    {/* NFT FEATURE */}

    <section id="tokenDetail" className='relative flex items-center justify-center'>
    <img src={BMountain} alt="mountain-clif"  className='w-[500px]  absolute -top-40 -left-5 sm:-top-80 sm:w-auto lm:w-[500px] lm:-top-[660px] xll:w-[870px]'/>
    <img src={PugDog} alt="Pug Dog Gif" className='absolute w-44 -top-64 left-20 sm:-top-[420px] sm:w-56 lm:-top-[790px] xll:-top-[710px] xll:left-40'/>
    <img src={SMountain} alt="mountain-clif-small"  className='w-[120px]  absolute top-[260px] right-12 sm:w-[160px] sm:right-16 sm:top-64 lm:-top-48 lm:right-32 xll:w-[250px] xll:right-48'/>
    <img src={MMountain} alt="mountain-clif-small"  className='w-[480px]  absolute -bottom-2 sm:right-0 lm:w-[1050px] xll:w-[1300px]'/>
    <img src={AiDog} alt="mountain-clif-small"  className='absolute w-40 bottom-28 right-0 sm:bottom-36 sm:right-2 sm:w-52 lm:bottom-[350px] lm:right-36 lm:w-60 xll:bottom-[450px]'/>
    <div className="flex flex-col px-5 mt-36 absolute top-[340px] text-center lm:-top-14">
          <h1 className="text-4xl font-bold leading-none text-slate-800 uppercase text-center lgg:text-5xl">
            NFTs
          </h1>

          <p className="mt-4 text-slate-800 font-bold text-lg text-left tracking-wider sm:max-w-2xl sm:text-center lgg:text-xl">
            Dirty AI Dogs NFTs are the only way to earn $AIDOGS Tokens! The full
            collection of 5,555 NFTs will be released soon. You’ll be able mint
            Dirty AI Dogs NFTs to have access to the play to earn games:
            tournaments, leaderboard Contest, monthly jackpot, daily and weekly quest.
          </p>
        </div>
  </section>

  {/* DDOG TOKEN INTRO */}
  </>
  )
}

export default NftTokenDetails