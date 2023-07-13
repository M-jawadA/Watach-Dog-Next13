import React from "react";
import Profitability from "./Profitability";
import Balance from "./Balance";
import TransactionTable from "./TransactionTable";
import CollectionsTable from "./CollectionsTable";
function Search() {
  return (
    <div className="flex flex-col ">
      <div className="text-white text-center font-inter text-[67px] md:text-4xl font-medium leading-17 mb-10 mt-16 flex flex-col gap-3">
        <p>WatchDogs?</p>
      </div>
      <div className="flex flex-row m-auto w-full justify-center items-center">
        <input
          type="text"
          className=" max-w-[1100px] h-12 w-full border border-[#838080] border-solid bg-black text-[#838080] px-7 font-inter "
          placeholder="Enter ETH Value"
        />
        <button className="text-center justify-center items-center w-36 h-12 border border-[#838080] border-solid font-inter text-white cursor-pointer ">
          Generate
        </button>
      </div>
      <div className="flex flex-col justify-start mt-20">
        <div className="ml-[3%] flex flex-row my-5">
          <p className="text-white md:text-[25px] text-[20px] font-sans">
            Address :{" "}
          </p>
          <p className="text-[#B8B6B9] md:text-[25px] text-[20] font-sans">
            0x123Hdedhei0001223332dju
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col  mx-4 mb-10 gap-10 lg:gap-0">
        <Balance />
        <Profitability />
      </div>
      <CollectionsTable />
      <TransactionTable />
    </div>
  );
}

export default Search;
