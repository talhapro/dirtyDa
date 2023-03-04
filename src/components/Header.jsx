import React, { useState } from "react";
import img from "../assets/dirty-dogs.png";
import bDp1 from '../assets/new/top-sky.png';
// import { ethers } from "ethers";
import truncateEthAddress from "truncate-eth-address";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenHandler = () => {
    setIsOpen((current) => !current);
  };

  const scrollToRoadmap = () => {
    const element = document.getElementById("roadMap");

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [walletAddress, setWalletAddress] = useState("");

  async function requestAccount() {
    //If the browser has metamask
    if (window.ethereum) {
      try {
        const account = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setWalletAddress(account);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Please Intall Metamask!");
    }
  }

  // async function connectAccount() {
  //   //If the browser has metamask
  //   if (window.ethereum) {
  //     try {
  //       const allAccounts = await window.ethereum.request({
  //         method: "eth_requestAccounts",
  //       });
  //       console.log(allAccounts);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   } else {
  //     console.log("Please Install Metamask!");
  //   }
  // }
 
  return (
    <>
      {/* //   <!-- Nav Container --> */}
      {/* <div id="mainMenu" className="relative bg-no-repeat object-fill bg-slate-400 h-52" style={{backgroundImage: `url(${bDp1})`}}> */}
      <div id="mainMenu" className="">
        <nav className="relative container mx-auto py-6">
          {/* <!-- Flex Container For All Items --> */}
          <div className="flex items-center justify-between">
            {/* <!-- Flex Container For Logo/Menu --> */}
            <div className="flex items-center ml-6 space-x-20">
              {/* <!-- Logo --> */}
              <img src={img} alt="" className=" w-auto h-28" />
              {/* <!-- Left Menu --> */}
              <div className="hidden space-x-8 font-bold lg:flex items-center md:hidden">
                <a
                  href="/#"
                  className="text-grayishViolet hover:text-slate-800 px-3"
                >
                  <button className="flex flex-col items-center group">
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-controller"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fillRule="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                      <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Play Game
                    </span>
                  </button>
                </a>
                <a
                  href="/#"
                  className="text-grayishViolet hover:text-green-800 px-3"
                >
                  <button className="flex flex-col items-center group">
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-newspaper"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                      <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Whitepaper
                    </span>
                  </button>
                </a>
                <p className="text-grayishViolet hover:text-green-800 px-3">
                  <button
                    className="flex flex-col items-center group"
                    onClick={scrollToRoadmap}
                  >
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-map"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                      />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Roadmap
                    </span>
                  </button>
                </p>
                <a
                  href="/#"
                  className="text-grayishViolet hover:green-800 px-3"
                >
                  <button className="flex flex-col items-center group">
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-wallet"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Wallet
                    </span>
                  </button>
                </a>
                <a
                  href="/#"
                  className="text-grayishViolet hover:text-green-800 px-3"
                >
                  <button className="flex flex-col items-center group">
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-shop-window"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Marketplace
                    </span>
                  </button>
                </a>
                <p className=" px-3">
                  <button className="flex flex-col items-center group">
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-coin"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Staking
                    </span>
                  </button>
                </p>
                <a
                  href="/#"
                  className="text-grayishViolet hover:text-slate-700 px-3"
                >
                  <button className="flex flex-col items-center group">
                    <svg
                      className="fill-slate-800 group-hover:fill-green-800 mb-1 bi bi-share-fill"
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="21"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                    </svg>
                    <span className="text-slate-800 group-hover:text-green-800">
                      Social
                    </span>
                  </button>
                </a>
              </div>
            </div>

            {/* <!-- Right Buttons Menu --> */}
            <button
              className="hidden pr-5 items-center font-bold lg:flex lg:overflow-clip "
              onClick={requestAccount}
            >
              <p className="px-8 py-3 font-bold text-white bg-amber-800 rounded-full hover:bg-green-800 hover:text-white">
                {walletAddress.length === 0
                  ? "Connect Wallet"
                  : truncateEthAddress(String(walletAddress))}
              </p>
            </button>

            {/* <!-- Hamburger Button --> */}
            <button
              id="menu-btn"
              className={`px-6 z-40 block hamburger lg:hidden focus:outline-none ${
                isOpen ? "open" : ""
              }`}
              type="button"
              onClick={toggleOpenHandler}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>

          {/* <!-- Mobile Menu --> */}
          <div
            id="menu"
            className={`p-6 rounded-lg border border-green-800 bg-sky-300 mt-2 left-6 right-6 top-20 z-40 ${
              isOpen ? "absolute" : "hidden"
            }`}
          >
            <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded-sm">
              <a
                href="/#"
                className="text-grayishViolet hover:text-slate-700 px-3 py-1"
              >
                <button className="flex items-center group">
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-controller"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
                    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Play Game
                  </span>
                </button>
              </a>
              <a
                href="/#"
                className="text-grayishViolet hover:text-slate-700 px-3 py-1"
              >
                <button className="flex items-center group">
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-newspaper"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5v-11zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5H12z" />
                    <path d="M2 3h10v2H2V3zm0 3h4v3H2V6zm0 4h4v1H2v-1zm0 2h4v1H2v-1zm5-6h2v1H7V6zm3 0h2v1h-2V6zM7 8h2v1H7V8zm3 0h2v1h-2V8zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1zm-3 2h2v1H7v-1zm3 0h2v1h-2v-1z" />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Whitepaper
                  </span>
                </button>
              </a>
              <p className="text-grayishViolet hover:text-slate-700 px-3 py-1">
                <button
                  className="flex items-center group"
                  onClick={scrollToRoadmap}
                >
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-map"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
                    />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Roadmap
                  </span>
                </button>
              </p>
              <a
                href="/#"
                className="text-grayishViolet hover:text-slate-700 px-3 py-1"
              >
                <button className="flex items-center group">
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-wallet"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 3a2 2 0 0 1 2-2h13.5a.5.5 0 0 1 0 1H15v2a1 1 0 0 1 1 1v8.5a1.5 1.5 0 0 1-1.5 1.5h-12A2.5 2.5 0 0 1 0 12.5V3zm1 1.732V12.5A1.5 1.5 0 0 0 2.5 14h12a.5.5 0 0 0 .5-.5V5H2a1.99 1.99 0 0 1-1-.268zM1 3a1 1 0 0 0 1 1h12V2H2a1 1 0 0 0-1 1z" />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Wallet
                  </span>
                </button>
              </a>
              <a
                href="/#"
                className="text-grayishViolet hover:text-slate-700 px-3 py-1"
              >
                <button className="flex items-center group">
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-shop-window"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z" />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Marketplace
                  </span>
                </button>
              </a>
              <a
                href="/#"
                className="text-grayishViolet hover:text-slate-700 px-3 py-1"
              >
                <button className="flex items-center group">
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-coin"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z" />
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Staking
                  </span>
                </button>
              </a>
              <a
                href="/#"
                className="text-grayishViolet hover:text-slate-700 px-3 py-1"
              >
                <button className="flex items-center group">
                  <svg
                    className="fill-green-800 group-hover:fill-amber-800 mx-2 bi bi-share-fill"
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
                  </svg>
                  <span className="text-green-800 group-hover:text-amber-800">
                    Social
                  </span>
                </button>
              </a>
              <a
                href="/#"
                className="w-full py-3 text-center rounded-full bg-amber-800 hover:bg-green-800 hover:text-white"
              >
                Connect Wallet
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
