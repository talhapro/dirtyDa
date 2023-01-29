import React from 'react'

const greyBg = require('../assets/backgroundNf.png');

const NftTokenDetails = () => {
  return (
    <>
    {/* NFT FEATURE */}
    <section className="bg-center bg-cover relative -z-20 bg-no-repeat" style={{ backgroundImage: `url(${greyBg})` }}>
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
          <img
            alt="Party"
            src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>

        <div className="lg:py-24 lg:text-left text-center">
          <h2 className="text-3xl font-bold sm:text-4xl text-white">
            NFTs
          </h2>

          <p className="mt-4 text-gray-200">
            Dirty Dog NFTs are the only way to earn $DDOG! The full
            collection of 4,900 will be released soon. You’ll be able mint
            Dirty Dog NFTs to have access to the play to earn games:
            tournaments, leaderboard Contest, daily and weekly quest.
          </p>
        </div>
      </div>
    </div>
    <div className="container px-5 py-24 mx-auto">
      <div className="p-5 flex items-center mx-auto border-b  mb-10 border-gray-200 rounded-lg sm:flex-row flex-col">
        <div className="sm:w-32 sm:h-32 h-20 w-20 sm:mr-10 inline-flex items-center justify-center flex-shrink-0">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/thecaffeinecode.appspot.com/o/Tcc_img%2Flogo.png?alt=media&token=5e5738c4-8ffd-44f9-b47a-57d07e0b7939"
          />
        </div>
        <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0">
          <h1 className="text-slate-800 text-2xl title-font font-bold mb-2">
            DIRTY DOG TOKEN
          </h1>
          <p className="leading-relaxed text-base">
            The Dirty Dog Token ($DDOG) is the native token of the Dirty Dog
            ecosystem. Some of the Dirty Dog utilities are:
          </p>
          <div className="flex flex-col mt-4">
            {/* Item 1 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-1">
                <svg
                  className="text-slate-800 w-6 h-6 mr-2 flex-shrink-0 "
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
                <p className="title-font font-medium">Staking</p>
              </div>
            </div>
            {/* Item 2 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-1">
                <svg
                  className="text-slate-800 w-6 h-6 mr-2 flex-shrink-0 "
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
                <p className="title-font font-medium">NFT Staking</p>
              </div>
            </div>
            {/* Item 3 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-1">
                <svg
                  className="text-slate-800 w-6 h-6 mr-2 flex-shrink-0 "
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
                <p className="title-font font-medium">Daily Quest</p>
              </div>
            </div>
            {/* Item 4 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-1">
                <svg
                  className="text-slate-800 w-6 h-6 mr-2 flex-shrink-0 "
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
                <p className="title-font font-medium">Weekly Quest</p>
              </div>
            </div>
            {/* Item 5 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-1">
                <svg
                  className="text-slate-800 w-6 h-6 mr-2 flex-shrink-0 "
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
                <p className="title-font font-medium">Leaderboard Contest</p>
              </div>
            </div>
            {/* Item 5 */}
            <div className=" inline-block">
              <div className="flex pr-2 h-full items-center mb-1">
                <svg
                  className="text-slate-800 w-6 h-6 mr-2 flex-shrink-0 "
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
                <p className="title-font font-medium">Tournament Mode</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* DDOG TOKEN INTRO */}

  <section className="text-gray-600 body-font">

  </section>
  </>
  )
}

export default NftTokenDetails