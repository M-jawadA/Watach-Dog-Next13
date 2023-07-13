import React from "react";
import screenShot from "../../public/Images/png/screenShot.png";
import Image from "next/image";
const Profitability = () => {
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
      <div className="flex flex-col gap-3 pb-4">
        {[1, 2, 3].map((item) => {
          return (
            <div className="flex flex-row justify-between items-center">
              <div className="w-1/2 flex flex-row justify-around items-center ">
                <Image src={screenShot} alt="poster"  className="h-11/12"/>
                <div className="flex flex-col">
                  <p className="text-[20px] text-white font-medium">
                    Clone X #10098
                  </p>
                  <p className="text-[#F19C44]">12 hours ago</p>
                </div>
              </div>
              <p className="text-[20px] text-white font-medium pr-[10%]">
          
                6.9 ETH
              </p>
            </div>
          );
        })}
      </div>
    
    </div>
  );
};
export default Profitability;
