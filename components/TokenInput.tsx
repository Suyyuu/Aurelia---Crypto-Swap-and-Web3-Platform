import React from "react";
import TokenSelector from "./TokenSelector";

const TokenInput = () => {
  // const [error, setError] = useState("");

  //   const handleSubmit = (event) => {
  //     const email = document.getElementById('email');
  //     setError("");
  
  //     if (!email.validity.valid || email.value.trim() === "") {
  //       setError("Please enter a valid email address.");
  //       email.focus();
  //       event.preventDefault();
  //     }
  //   };
  return (
    <div className="border border-[#fff] m-5 text-white p-3 max-w-[500px]">
      <h5>Sell</h5>
      <div className="flex">
        <input type="text" placeholder="amount" className="text-[18px]" /> <TokenSelector />
      </div>

      <div className='inputBox flex w-[50%] h-[64px] py-2 pl-2 pr-2 flex-col items-start gap-[10px] bg-[#0c0c0c] border-[1px] rounded-[10px] border-[#1a1a1a] mobiles:w-[90%] mobiles:h-full mobiles:p-1 '>
                <form  className='innerBox w-[100%] h-full flex items-center mobiles:flex-col mobiles:gap-3 '>
                    <input id="email" type='email' className='bg-[#0c0c0c] text-[#999999] w-[100%] mobiles:p-2 mobiles:border-[1px] mobiles:border-[#1a1a1a] mobiles:rounded-[10px] h-full font-Satoshi placeholder-[#999999] pl-5 placeholder:font-light text-[14px] focus:outline-none' placeholder='Enter Your Email' />
                    
                    <button type="submit" className='text-[#ffffff] font-semibold bg-[#6353ff] px-8 py-3 rounded-[10px] mobiles:w-full hover:bg-[#333333d9] transition-all duration-300'>
                        Subscribe
                    </button>
                    
                </form>
                {/* {error && <p className="text-red-500 text-sm mt-1">{error}</p>} */}
            </div>


      <h5>0$</h5>
    </div>
  );
};

export default TokenInput;
