import React from "react";
import Profitability from "./Profitability";
import Balance from "./Balance";
function Search() {
  return (
    <div className="flex flex-col">
      <div className="text-white text-center font-inter text-[67px] md:text-4xl font-medium leading-17 mb-10 mt-16 flex flex-col gap-3">
        <p>WatchDogs?</p>
      </div>
      <input
        type="text"
        className=" max-w-[1100px] h-12 w-full border border-[#838080] border-solid bg-black text-[#838080] px-7 font-inter m-auto"
        placeholder="Enter ETH Value"
      />
      <div className="flex flex-col justify-start ">
        <div className="ml-[10%] flex flex-row">
          <p className="text-white text-[30px] ">Address : </p>
          <p className="text-[#B8B6B9] text-[30px] ">
            0x123Hdedhei0001223332dju
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        <Balance />
<Profitability />
      </div>
    </div>
  );
}

export default Search;
