"use client"

import React, {useState} from 'react'
import Modal from './Modal';
import { IoSearch } from "react-icons/io5";

const TokenSelector = () => {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    console.log("i got clicked");
    setIsOpen(true);
  }

  return (
    <>
      <button onClick={handleClick} className="text-white border border-[#4b4b4b] cursor-pointer">Token Selector</button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 className="text-xl font-semibold text-white ">Select a token</h2>
        
        <div className='w-full flex justify-between items-center gap-2 bg-[#1f1f1f] py-3 px-4 rounded-[50px]'>
          <IoSearch className='text-3xl text-[#ffffffa6]' />
          <input className='w-full text-[18px] focus:outline-none' type="text" placeholder='Search Tokens' />
          <select className='text-[#999999] focus:outline-none' name="Networks" id="1">
            <option value="Etherium">Etherium</option>
            <option value="Etherium">Etherium</option>
            <option value="Etherium">Etherium</option>
            <option value="Etherium">Etherium</option>
          </select>
        </div>

        <div>Popular Tokens</div>

        <div>Tokens by 24h Volume</div>
      </Modal>
    </>
  )
}

export default TokenSelector