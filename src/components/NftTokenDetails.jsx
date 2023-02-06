import React from 'react'
import bDp3 from '../assets/background-dp-3.png';
import bDp4 from '../assets/background-dp-4.png';
import pixelToken from '../assets/pixel-token.png'


const NftTokenDetails = () => {
  return (
    <>
    {/* NFT FEATURE */}
  <section id="tokenDetail1" className='w-full h-[750px] bg-cover bg-no-repeat' style={{backgroundImage: `url(${bDp3})`}}>
    <div className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="flex flex-col justify-center lg:py-24 max-w-xl ml-auto mr-28 mt-16">
          <h1 className="text-5xl font-bold leading-none text-slate-800 uppercase">
            NFTs
          </h1>

          <p className="mt-4 text-slate-800 font-bold text-lg">
            Dirty Dog NFTs are the only way to earn $DDOG! The full
            collection of 4,900 will be released soon. You’ll be able mint
            Dirty Dog NFTs to have access to the play to earn games:
            tournaments, leaderboard Contest, daily and weekly quest.
          </p>
        </div>
    </div>
  </section>
    <section id="tokenDetail2" className='w-full h-[1300px] bg-cover bg-no-repeat' style={{backgroundImage: `url(${bDp4})`}}>
    <div className="container px-5 py-24 mx-auto">
      <div className="p-5 flex items-center mx-auto   mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
          <img
            alt=""
            src={pixelToken}
            className="w-48"
          />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 max-w-lg">
          <h1 className="text-slate-800 text-5xl title-font font-bold mb-2">
            DIRTY DOG TOKEN
          </h1>
          <p className="leading-relaxed font-bold text-lg pt-6 pb-6">
            The Dirty Dog Token ($DDOG) is the native token of the Dirty Dog
            ecosystem. Some of the Dirty Dog utilities are:
          </p>
          <div className="flex flex-col mt-6">
            {/* Item 1 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-3">
                <svg
                  className="text-slate-800 w-6 h-6 mr-3 flex-shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p className="title-font font-bold">Staking</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-3">
                <svg
                  className="text-slate-800 w-6 h-6 mr-3 flex-shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p className="title-font font-bold">NFT Staking</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-3">
                <svg
                  className="text-slate-800 w-6 h-6 mr-3 flex-shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p className="title-font font-bold">Daily Quest</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-3">
                <svg
                  className="text-slate-800 w-6 h-6 mr-3 flex-shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p className="title-font font-bold">Weekly Quest</p>
              </div>
            </div>
            {/* Item 5 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-3">
                <svg
                  className="text-slate-800 w-6 h-6 mr-3 flex-shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p className="title-font font-bold">Leaderboard Contest</p>
              </div>
            </div>
            {/* Item 5 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-3">
                <svg
                  className="text-slate-800 w-6 h-6 mr-3 flex-shrink-0 "
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  ></path>
                </svg>
                <p className="title-font font-bold">Tournament Mode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* DDOG TOKEN INTRO */}
  </>
  )
}

export default NftTokenDetails