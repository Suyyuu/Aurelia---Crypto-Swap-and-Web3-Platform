import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { CgMenuRight } from "react-icons/cg";
import { IoWallet } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className='w-full h-full bg-black'>
      <div className='w-[95%] flex justify-between items-center mx-auto py-10 px-2'>
        <Image 
          src="/aureliaCenterLogo.png" 
          width={60}
          height={50}
          layout="intrinsic"
        //   className="w-[3rem] h-[3.8rem] md:w-[5rem] md:h-[6.3rem]" 
          alt='Aurelia Logo' />

        <ul className='hidden md:flex justify-between items-center gap-5 py-2 px-5 menuContainer'>
          <li>HOME</li>
          <li>PORTFOLIO</li>
          <li>CRYPTO LIST</li>
          <li>DeFi</li>
          <li>OPEN APP</li>
        </ul>

        <CgMenuRight className='text-[28px] font-bold text-[#fdffff] md:hidden' />

        <Link className='text-[#fdffff] text-[16px] md:flex items-center gap-2 p-2 hidden' href="/"><IoWallet className='text-[24px] font-bold' /> <p>CONNECT WALLET</p></Link>
      </div>
    </div>
  )
}

export default Navbar