"use client";

import React from "react";
import TokenSelector from "./TokenSelector";
import { VscSettings } from "react-icons/vsc";
import { IoMdRefresh } from "react-icons/io";

const SwapInterface = () => {
  function handleClick() {
    return;
  }

  return (
    <div className="mt-60 m-5 text-white bg-[#1f1f1f] p-3 max-w-[500px] flex flex-col gap-5 justify-center items-center">

      {/* Tabs for swithing modes, filters and settings */}

      <div className="w-full flex justify-between">
        <div className="w-fit flex justify-start gap-4">
          <button className="bg-[#4b4b4b] cursor-pointer px-2 py-1">Swap</button>
          <button className="bg-[#4b4b4b] cursor-pointer px-2 py-1">Limit</button>
          <button className="bg-[#4b4b4b] cursor-pointer px-2 py-1">Buy</button>
          <button className="bg-[#4b4b4b] cursor-pointer px-2 py-1">Sell</button>
        </div>
        
        <div className="flex gap-2 w-fit text-[24px]">
          <button className="bg-[#4b4b4b] cursor-pointer px-2 py-1"><IoMdRefresh /></button>
          <button className="bg-[#4b4b4b] cursor-pointer px-2 py-1"><VscSettings /></button>
        </div>
      </div>

      <div className="border border-[#4b4b4b] bg-[#0c0c0c] p-2 w-full flex flex-col gap-2">
        <span>You pay</span>
        <div className="w-full flex justify-between">
          <input
            type="text"
            className="bg-[#0c0c0c] text-[#999999] w-[100%] h-full font-Satoshi font-medium placeholder-[#999999] pl-5 placeholder:font-medium text-[36px] focus:outline-none"
            placeholder="0"
          />
          <TokenSelector />
        </div>
        <span>0$</span>
      </div>

      <div className="border border-[#4b4b4b] bg-[#0c0c0c] p-2 w-full flex flex-col gap-2">
        <span>You recieve</span>
        <div className="w-full flex justify-between">
          <input
            type="text"
            className="bg-[#0c0c0c] text-[#999999] w-[100%] h-full font-Satoshi font-medium placeholder-[#999999] pl-5 placeholder:font-medium text-[36px] focus:outline-none"
            placeholder="0"
          />
          <TokenSelector />
        </div>
        <span>0$</span>
      </div>

      <button
        onClick={handleClick}
        className="border w-full flex justify-center items-center py-3 cursor-pointer"
      >
        Connect Wallet
      </button>
    </div>
  );
};

export default SwapInterface;
