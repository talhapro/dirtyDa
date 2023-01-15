import React from "react";
import DoughnutChart from "./Chart3D";

import Header from "./Header";
import Roadmap from "./Roadmap";
import TokenData from "./TokenData";

const Home = () => {
  return (
    <>
      <Header />
     <DoughnutChart />
     <TokenData />
     <Roadmap />
    </>
  );
};

export default Home;
