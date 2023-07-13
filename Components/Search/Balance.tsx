import React from 'react'
import DonutChart from './DonutChart';
const Balance=()=> {
  return (
    <div className="max-w-[619px] h-[572px] m-auto w-full  bg-[#333639] justify-start md:gap-10: rounded-[24px] flex flex-col">
       <div className="flex flex-row justify-between px-[55px] items-start mb-14">
        <div className="flex flex-col">
          <p className="text-white mt-5 font-sans text-2xl font-medium leading-10 tracking-tight">
           Balance
          </p>
          <p className="text-[#2DE93F] text-shadow font-sans text-2xl md:text-5xl font-medium leading-14 tracking-tighter ">
            + $20,457
          </p>
        </div>
        <p className="text-[#BDBBBB] font-sans text-base  md:text-xs sm:font-medium leading-6 tracking-tight mt-6">
          3M / 6 M / 12M
        </p>
      </div>
   <div className='w-full flex justify-center items-center'>

   <DonutChart />
   </div>
  
  </div>
  )
}
export default Balance;