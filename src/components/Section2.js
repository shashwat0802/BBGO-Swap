import React from 'react';
import '../styles/landingPage.css';

export default function Section2() {
  return (
    <section id="section-2">
      <div className="container mx-auto w-[92%] py-8">
        <div className="text-white md:flex justify-around">
          <div className="flex flex-col justify-around items-center">
            <h1 className="font-extrabold text-4xl md:text-5xl">Ecosystem</h1>
            <img src={require('../img/ecosystem.svg').default} alt="" />
          </div>
          <div className="flex flex-col justify-around items-center">
            <div className=" rounded-lg hoverable bg-[#333247] max-w-xl lg:p-6 p-4 my-2">
              <h3 className="text-2xl font-semibold my-4">
                What makes BBGO DEX different?
              </h3>
              <p>
                BBGOSWAP stands out from other DEXs with Cross-Chain Swaps,
                Minimal Slippage, and Fast Transactions
              </p>
            </div>
            <div className=" rounded-lg hoverable bg-[#333247] max-w-xl lg:p-6 p-4 my-2">
              <h3 className="text-2xl font-semibold my-4">
                What makes BBGO DEX different?
              </h3>
              <p>
                BBGOSWAP stands out from other DEXs with Cross-Chain Swaps,
                Minimal Slippage, and Fast Transactions
              </p>
            </div>
            <div className=" rounded-lg hoverable bg-[#333247] max-w-xl lg:p-6 p-4 my-2">
              <h3 className="text-2xl font-semibold my-4">
                What makes BBGO DEX different?
              </h3>
              <p>
                BBGOSWAP stands out from other DEXs with Cross-Chain Swaps,
                Minimal Slippage, and Fast Transactions
              </p>
            </div>
            <div className=" rounded-lg hoverable bg-[#333247] max-w-xl lg:p-6 p-4 my-2">
              <h3 className="text-2xl font-semibold my-4">
                What makes BBGO DEX different?
              </h3>
              <p>
                BBGOSWAP stands out from other DEXs with Cross-Chain Swaps,
                Minimal Slippage, and Fast Transactions
              </p>
            </div>
            <div className=" rounded-lg hoverable bg-[#333247] max-w-xl lg:p-6 p-4 my-2">
              <h3 className="text-2xl font-semibold my-4">
                What makes BBGO DEX different?
              </h3>
              <p>
                BBGOSWAP stands out from other DEXs with Cross-Chain Swaps,
                Minimal Slippage, and Fast Transactions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
