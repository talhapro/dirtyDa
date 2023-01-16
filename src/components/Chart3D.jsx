import { useState } from "react";
import ApexCharts from "react-apexcharts";

const DoughnutChart = () => {
  const [options, setOptions] = useState({
    chart: {
      type: "donut",
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
      width: 450,
      height: undefined,
      labels: {
        colors: ["#FFF"],
        useSeriesColors: true,
      },

      itemMargin: {
        horizontal: 4,
        vertical: 5,
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
    <section className="bg-slate-800">
      <div className="mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-0 lg:px-32">
        <div>
          <h1 className="-mt-4 text-white text-3xl mb-4">TOKENOMICS</h1>
        </div>
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 mt-8 mb-8 gap-10">
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Token
            </h1>
            <p className="font-bold text-xl text-slate-200">Dirty Dog</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Symbol
            </h1>
            <p className="text-xl text-slate-200">DDOG</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
              Total Supply
            </h1>
            <p className="text-xl text-slate-200">1,000,000,000</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl text-deep-purple-accent-400 mb-2 text-slate-200">
            Blockchain
            </h1>
            <p className="text-xl text-slate-200">BSC</p>
          </div>
        </div>
        <div className="flex">
          <ApexCharts
            options={options}
            series={series}
            type="donut"
            width="480"
          />
        </div>
        <div>
          <h1 className="mt-12 text-white text-3xl">TAXES</h1>
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
    </section>
  );
};

export default DoughnutChart;
