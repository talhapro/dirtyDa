import { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import upperRock from '../assets/new/down-rock-mobile.png';
import leftRock from '../assets/new/left-cave.png';
import rightRock from '../assets/new/right-cave.png';
const Tokenomics = () => {


  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);


  const [options, setOptions] = useState({
    chart: {
      type: "donut",
      width: '100%'
    },
    fill: {
      type: "solid",
    },
    labels: [
      "Liquidity 15%",
      "Presale 25%",
      "In-Game Rewards 25%",
      "Marketing 10%",
      "Staking 10%",
      "CEX 10%",
      "Partnerships 5%",
    ],

    stroke: {
      show: false,
    },

    legend: {
      show: true,
      position: "bottom",
      horizontalAlign: "center",
      floating: false,
      fontSize: "12.5px",
      fontFamily: "Poppins",
      fontWeight: 500,
      height: undefined,
      labels: {
        colors: ["#FFF"],
        useSeriesColors: true,
      },

      itemMargin: {
        horizontal: 6,
        vertical: 3.5,
      },
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%",
          background: "transparent",
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: "15px",
              fontFamily: "Poppins",
              fontWeight: 600,
              offsetY: -10,
            },
            value: {
              show: true,
              fontSize: "16px",
              fontFamily: "Poppins",
              fontWeight: 400,
              color: "#FFF",
              offsetY: 16,
            },
          },
        },
      },
    },
  });
  const [series, setSeries] = useState([15, 25, 25, 10, 10, 10, 5]);
  return (
    <section id="tokenomics" className='relative'>
    <img src={leftRock} alt="mountain-clif"  className='h-[2000px] w-[100px] sm:hidden absolute left-0 '/>
     <img src={upperRock} alt="mountain-clif"  className='w-[500px] sm:hidden absolute -top-52'/>
     
     {/* <img src={rightRock} alt="mountain-clif"  className='w-[500px] sm:hidden absolute -top-52'/> */}
     
      <div className=" container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-0 lg:px-32 absolute -top-20">

      {/* Token Features */}

      <div className="p-5 flex mb-10 sm:flex-row flex-col">
        <div className="">
          <h1 className="text-slate-800 text-3xl font-bold mb-2">
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

        <div>
          <h1 className="text-slate-800 text-4xl mb-4 mt-48">TOKENOMICS</h1>
        </div>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 mt-8 mb-8 gap-10">
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Token
            </h1>
            <p className="font-bold text-xl text-slate-800 ">Dirty Dog</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Symbol
            </h1>
            <p className="font-bold text-xl text-slate-800 ">DDOG</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Total Supply
            </h1>
            <p className=" font-bold text-xl text-slate-800 ">1,000,000,000</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
            Blockchain
            </h1>
            <p className=" font-bold text-xl text-slate-800 ">BSC</p>
          </div>
        </div>
        <div className="flex">
          <ApexCharts
            options={options}
            series={series}
            type="donut"
            height= {width < breakpoint ? '370' : '480'}
            width= {width < breakpoint ? '370' : '480'}
          />
        </div>
        {/* <div  className="sm:hidden lg:flex">
          <ApexCharts
            options={options}
            series={series}
            type="donut"
            width="480"
          />
        </div> */}
        <div>
          <h1 className="mt-12 text-slate-800 text-3xl">TAXES</h1>
          <div className="flex mt-10 items-center justify-center">
            <h1 className="mx-4 text-xl text-slate-200">Buy Tax:</h1>
            <p className="mx-4 font-semibold text-slate-200">3%</p>
            <p className="mx-4 font-semibold text-slate-200">(2% Marketing)</p>
            <p className="mx-4 font-semibold text-slate-200">(1% Liquidity)</p>
          </div>
          <div className="flex mt-8 items-center justify-center">
            <h1 className="mx-4 text-xl text-slate-200">Sell Tax:</h1>
            <p className="mx-4 font-semibold text-slate-200">3%</p>
            <p className="mx-4 font-semibold text-slate-200">(2% Marketing)</p>
            <p className="mx-4 font-semibold text-slate-200">(1% Liquidity)</p>
          </div>
        </div>
      </div>

      {/* <div className="container max-w-3xl px-4 mx-auto sm:px-8">
      <div className="py-8">
        <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    AMOUNT
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    TOKEN RELEASE SCHEDULE
                  </th>
                  <th
                    scope="col"
                    className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                  >
                    TGE
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          STAKING
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">100,000,000</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">10% MONTHLY</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">20%</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          CEX
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">100,000,000</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">20% MONTHLY</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">20%</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          PARTNERSHIP
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">50,000,000</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">20% MONTHLY</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">40%</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          MARKETING
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">100,000,000</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">20% MONTHLY</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">20%</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <div className="flex items-center">
                      <div className="ml-3">
                        <p className="text-gray-900 whitespace-no-wrap">
                          IN-GAME REWARDS
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">250,000,000</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <p className="text-gray-900 whitespace-no-wrap">10% MONTHLY</p>
                  </td>
                  <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200 rounded-full opacity-50"
                      ></span>
                      <span className="relative">30%</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */}
    </section>
  );
};

export default Tokenomics;
