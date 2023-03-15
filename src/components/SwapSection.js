import React from 'react';
import '../styles/landingPage.css';

export default function SwapSection() {
  return (
    <section id="swap-section">
      <div className="container mx-auto w-[92%] p-12 md:p-24 text-white">
        <h1 className="text-2xl md:text-4xl font-semibold text-center mb-8">
          How To Setup Swap
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div></div>
          <div>
            <img src={require('../img/swap-1.svg').default} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 my-24 gap-24">
          <h1 className="text-2xl md:text-4xl font-semibold">
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
