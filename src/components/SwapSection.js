import React from 'react';
import '../styles/landingPage.css';

export default function SwapSection() {
  const activateCircle = (i) => {
    let circle = document.querySelector(`#circle${i}`);
    if (circle) {
      circle.classList.add('glow-bg');
    }
  };

  const deActivateCircle = (i) => {
    let circle = document.querySelector(`#circle${i}`);
    if (circle) {
      circle.classList.remove('glow-bg');
    }
  };

  return (
    <section id="swap-section">
      <div className="container mx-auto w-[92%] md:p-24 text-white">
        <h1 className="text-lg md:text-2xl md:text-4xl font-semibold text-center my-8">
          How To Setup Swap
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24">
          <div className="flex flex-col  justify-between">
            <div className="flex justify-around items-center my-2">
              <div
                className="bg-[#333247] w-full md:w-4/5 max-w-lg rounded-lg text-white flex justify-between items-center p-4 hoverable"
                onMouseOver={() => {
                  activateCircle(1);
                }}
                onMouseLeave={() => {
                  deActivateCircle(1);
                }}
              >
                <h1 className="font-semibold text-lg md:text-2xl flex items-center">
                  <img
                    src={require('../img/wallet.svg').default}
                    alt=""
                    className="mr-1 md:mr-4"
                  />
                  Connect wallet
                </h1>
                <h2 className="text-[#201F2D] text-2xl md:text-5xl font-extrabold">
                  01
                </h2>
              </div>
              <div className="flex-col  items-center hidden md:flex">
                <div
                  className=" border border-2 border-[#333247] border-dashed rounded-full h-6 w-6 mt-8"
                  id="circle1"
                ></div>
                <div className="border border-[#333247] border-dashed w-px "></div>
              </div>
            </div>
            <div className="flex justify-around items-center my-2">
              <div
                className="bg-[#333247] w-full md:w-4/5 max-w-lg rounded-lg text-white flex justify-between items-center p-4 hoverable"
                onMouseOver={() => {
                  activateCircle(2);
                }}
                onMouseLeave={() => {
                  deActivateCircle(2);
                }}
              >
                <h1 className="font-semibold text-lg md:text-2xl flex items-center">
                  <img
                    src={require('../img/buy.svg').default}
                    alt=""
                    className="mr-1 md:mr-4"
                  />
                  Set Up The Trade
                </h1>
                <h2 className="text-[#201F2D] text-2xl md:text-5xl font-extrabold">
                  02
                </h2>
              </div>
              <div className="flex-col  items-center hidden md:flex">
                <div
                  className=" border border-2 border-[#333247] border-dashed rounded-full h-6 w-6 mt-8"
                  id="circle2"
                ></div>
                <div className="border border-[#333247] border-dashed w-px "></div>
              </div>
            </div>
            <div className="flex justify-around items-center my-2">
              <div
                className="bg-[#333247] w-full md:w-4/5 max-w-lg rounded-lg text-white flex justify-between items-center p-4 hoverable"
                onMouseOver={() => {
                  activateCircle(3);
                }}
                onMouseLeave={() => {
                  deActivateCircle(3);
                }}
              >
                <h1 className="font-semibold text-lg md:text-2xl flex items-center">
                  <img
                    src={require('../img/swap.svg').default}
                    alt=""
                    className="mr-1 md:mr-4"
                  />
                  Swap Tokens
                </h1>
                <h2 className="text-[#201F2D] text-2xl md:text-5xl font-extrabold">
                  03
                </h2>
              </div>
              <div className="flex-col  items-center hidden md:flex">
                <div
                  className=" border border-2 border-[#333247] border-dashed rounded-full h-6 w-6 mt-8"
                  id="circle3"
                ></div>
                <div className="border border-[#333247] border-dashed w-px "></div>
              </div>
            </div>
            <div className="flex justify-around items-center my-2">
              <div
                className="bg-[#333247] w-full md:w-4/5 max-w-lg rounded-lg text-white flex justify-between items-center p-4 hoverable"
                onMouseOver={() => {
                  activateCircle(4);
                }}
                onMouseLeave={() => {
                  deActivateCircle(4);
                }}
              >
                <h1 className="font-semibold text-lg md:text-2xl flex items-center">
                  <img
                    src={require('../img/Completion.svg').default}
                    alt=""
                    className="mr-1 md:mr-4"
                  />
                  Completion
                </h1>
                <h2 className="text-[#201F2D] text-2xl md:text-5xl font-extrabold">
                  04
                </h2>
              </div>
              <div className="flex-col  items-center hidden md:flex">
                <div
                  className=" border border-2 border-[#333247] border-dashed rounded-full h-6 w-6 mt-8"
                  id="circle4"
                ></div>
              </div>
            </div>
          </div>
          <div>
            <img src={require('../img/swap-1.svg').default} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-24 gap-24">
          <h1 className="text-lg md:text-2xl md:text-4xl font-semibold">
            Swap Any Token Easily With BBGOSWAP's Decentralized Exchange
          </h1>
          <p>
            Experience BBGOSWAP, the decentralized exchange for seamless token
            trading on Ethereum, Polygon, and Binance Smart Chain, with fast
            transactions, low fees, and the best prices.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
          <div className="p-6 text-center border rounded-lg bg-transparent hoverable-2 flex flex-col justify-center items-center">
            <img src={require('../img/export.svg').default} alt="" />
            <h3 className="text-xl font-semibold my-4">
              Multi-DEX Trade Execution
            </h3>
            <p>
              BBGOSWAP simplifies multi-exchange trading with AMMs for best
              execution.
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg bg-transparent hoverable-2 flex flex-col justify-center items-center">
            <img src={require('../img/Liquidity.svg').default} alt="" />
            <h3 className="text-xl font-semibold my-4">
              Liquidity Aggregation
            </h3>
            <p>
              BBGOSWAP aggregates liquidity from multiple DEXs and
              blockchainsfor seamless asset trading.
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg bg-transparent hoverable-2 flex flex-col justify-center items-center">
            <img src={require('../img/Cross.svg').default} alt="" />
            <h3 className="text-xl font-semibold my-4">Cross-chain Support</h3>
            <p>
              BBGOSWAP to support AMM on Ethereum, Polygon, and BNB Chain,
              collaborate for interoperability.
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg bg-transparent hoverable-2 flex flex-col justify-center items-center">
            <img src={require('../img/listing.svg').default} alt="" />
            <h3 className="text-xl font-semibold my-4">
              Liquidity Pools & Token Listing
            </h3>
            <p>
              BBGOSWAP utilizes AMMs to establish its own liquidity pools, where
              traders can add and access new trading pairs, while liquidity
              providers earn fees and $BBG tokens.
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg bg-transparent hoverable-2 flex flex-col justify-center items-center">
            <img src={require('../img/web3.svg').default} alt="" />
            <h3 className="text-xl font-semibold my-4">
              Integrated Web3 platform
            </h3>
            <p>
              BBGOSWAP aims to integrate DEX and IDO launchpadsto become a
              comprehensive platform.
            </p>
          </div>
          <div className="p-6 text-center border rounded-lg bg-transparent hoverable-2 flex flex-col justify-center items-center">
            <img src={require('../img/Compatibility.svg').default} alt="" />
            <h3 className="text-xl font-semibold my-4">Compatibility</h3>
            <p>
              BBGOSWAP can communicate with existing Ethereum, Polygon smart
              contracts without modification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
