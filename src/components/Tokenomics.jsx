import { useState, useEffect } from "react";
import ApexCharts from "react-apexcharts";
import upperRock from "../assets/new/down-rock-mobile.png";
import upperRockMd from "../assets/new/down-rock-md.png";
import botRock from "../assets/new/bottom-cave.png";
import leftRock from "../assets/new/left-cave.png";
import rightRock from "../assets/new/right-cave.png";
const Tokenomics = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 620;

  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const [options, setOptions] = useState({
    chart: {
      type: "donut",
      width: "100%",
    },
    fill: {
      type: "solid",
    },
    labels: [
      "Liquidity 15%",
      "Presale 25%",
      "Game Rewards 20%",
      "Marketing 10%",
      "Staking 10%",
      "CEX 10%",
      "Partnerships 5%",
      "Teams 4%",
      "Airdrop 1%",
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
  const [series, setSeries] = useState([15, 25, 20, 10, 10, 10, 5, 4, 1]);
  return (
    <section id="tokenomics" className="relative flex items-center justify-center">
      <img
        src={botRock}
        alt="mountain-clif"
        className="w-[500px] h-20  absolute bottom-0 sm:w-[768px]"
      />
      <img
        src={leftRock}
        alt="mountain-clif"
        className="h-[2300px] w-[85px] absolute left-0 lm:w-[180px]"
      />
      <img
        src={rightRock}
        alt="mountain-clif"
        className="h-[2300px] w-[85px]  absolute right-0 lm:w-[180px]"
      />
      <img
        src={upperRock}
        alt="mountain-clif"
        className="w-[500px] sm:hidden absolute -top-52"
      />
      <img
        src={upperRockMd}
        alt="mountain-clif"
        className="hidden sm:block absolute -top-56 lm:w-[1050px] lm:-top-[320px]"
      />

      <div className="flex flex-col px-12 top-44 absolute lm:top-52">
        <h1 className="text-3xl font-bold leading-none text-slate-800 uppercase text-center pt-6">
          DIRTY AI DOGS TOKEN
        </h1>

        <p className="leading-relaxed font-bold text-lg pt-8 pb-1 text-slate-800 lm:max-w-2xl">
          The Dirty AI Dogs Token ($AIDOGS) is the native token of the Dirty AI
          Dogs ecosystem. Some of the Dirty AI Dogs utilities are:
        </p>

        {/* Item #1 */}
        <div className="flex flex-row items-center text-slate-800 pt-8 mx-4">
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
          <p className="text-lg font-bold">Staking</p>
        </div>

        {/* Item #2 */}
        <div className="flex flex-row items-center text-slate-800 pt-4 mx-4">
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
          <p className="text-lg font-bold">NFT Rentals</p>
        </div>

        {/* Item #3 */}
        <div className="flex flex-row items-center text-slate-800 pt-4 mx-4">
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
          <p className="text-lg font-bold">Leaderboard Contest</p>
        </div>

        {/* Item #4 */}
        <div className="flex flex-row items-center text-slate-800 pt-4 mx-4">
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
          <p className="text-lg font-bold">Daily Quest</p>
        </div>

        {/* Item #5 */}
        <div className="flex flex-row items-center text-slate-800 pt-4 mx-4">
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
          <p className="text-lg font-bold">Weekly Quest</p>
        </div>

        {/* Item #6 */}
        <div className="flex flex-row items-center text-slate-800 pt-4 mx-4">
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
          <p className="text-lg font-bold">Tournament Mode</p>
        </div>

        {/* Item #6 */}
        <div className="flex flex-row items-center text-slate-800 pt-4 mx-4">
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
          <p className="text-lg font-bold">Monthly Jackpot Contest</p>
        </div>
      </div>

      {/* TOKENOMICS */}
      <div className="flex flex-col container absolute bottom-20 items-center">
        <h1 className="text-slate-800 text-3xl mb-4 text-center ">TOKENOMICS</h1>
      
        {/* SET 1 */}
        <div className="flex flex-row justify-center mt-12 container">
          {/* ITEM 1 */}
          <div className="mx-8 text-center lm:mx-20">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Token
            </h1>
            <p className="font-bold text-xl text-slate-800 ">Dirty AI Dogs</p>
          </div>
          {/* ITEM 2 */}
          <div className="mx-8 text-center lm:mx-20">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Symbol
            </h1>
            <p className="font-bold text-xl text-slate-800 ">AIDOGS</p>
          </div>
        </div>
        {/* SET 2 */}
        <div className="flex flex-row justify-center mt-12 items-center mb-16 container">
          {/* ITEM 1 */}
          <div className="mx-8 text-center lm:mx-20">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Total Supply
            </h1>
            <p className="font-bold text-xl text-slate-800 ">1,000,000,000</p>
          </div>
          {/* ITEM 2 */}
          <div className="mx-8 text-center lm:mx-20">
            <h1 className="text-lg text-deep-purple-accent-400 mb-2 text-slate-200">
              Blockchain
            </h1>
            <p className="font-bold text-xl text-slate-800 ">BSC</p>
          </div>
        </div>

        <div className="">
          <ApexCharts
            options={options}
            series={series}
            type="donut"
            height={width < breakpoint ? "360" : "480"}
            width={width < breakpoint ? "360" : "480"}
          />
        </div>

        <div className="flex flex-col justify-center mt-12 items-center mb-20 lm:mt-24">
          {/* ITEM 1 */}
          <div className="text-center">
            <h1 className="text-3xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Taxes
            </h1>
            <h1 className="font-bold text-2xl text-slate-800 pt-8">
              BUY TAX 3%
            </h1>
            <p className="font-bold text-md text-slate-800 pt-4">
              (1% Liquidity)
            </p>
            <p className="font-bold text-md text-slate-800 pt-1">
              (1% Jackpot Wallet)
            </p>
            <p className="font-bold text-md text-slate-800 pt-1">
              (1% Marketing)
            </p>
          </div>
          {/* ITEM 2 */}
          <div className="text-center">
            <h1 className="font-bold text-2xl text-slate-800 pt-12">
              Sell TAX 3%
            </h1>
            <p className="font-bold text-md text-slate-800 pt-4">
              (1% Liquidity)
            </p>
            <p className="font-bold text-md text-slate-800 pt-1">
              (1% Jackpot Wallet)
            </p>
            <p className="font-bold text-md text-slate-800 pt-1">
              (1% Marketing)
            </p>
          </div>
        </div>
      </div>

      {/* Token Features */}

      {/* <div  className="sm:hidden lg:flex">
          <ApexCharts
            options={options}
            series={series}
            type="donut"
            width="480"
          />
        </div> */}

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
