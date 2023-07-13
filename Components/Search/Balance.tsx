import React from 'react'
const Balance=()=> {
  return (
    <div className="max-w-[619px] max-h-[619px] h-full w-full  bg-[#333639] justify-center rounded-[24px] flex flex-col">
    <div className="flex flex-row justify-between px-[55px] items-start mb-14">
      <div className="flex flex-col">
        <p className="text-white mt-5 font-dm-sans text-2xl font-medium leading-10 tracking-tight">
          Actual Profitability
        </p>
        <p className="text-[#2DE93F] text-shadow font-dm-sans text-5xl font-bold leading-14 tracking-tighter ">
          + $20,457
        </p>
      </div>
      <p className="text-[#BDBBBB] font-dm-sans text-base font-medium leading-6 tracking-tight mt-6">
        3M / 6 M / 12M
      </p>
    </div>
   
   
  
  </div>
  )
}
export default Balance;