import React from "react";
import Tokenomics from "./Tokenomics";

import Header from "./Header";
import Roadmap from "./Roadmap";
import TokenData from "./TokenData";
import HeroSection from "./HeroSection";
import NftTokenDetails from "./NftTokenDetails";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NftTokenDetails />
      <Tokenomics />
      <TokenData />
      <Roadmap />
      <Footer />
    </>
  );
};

export default Home;
