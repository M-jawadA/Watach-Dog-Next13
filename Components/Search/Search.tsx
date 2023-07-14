import Profitability from "./Profitability";
import Balance from "./Balance";
import TransactionTable from "./TransactionTable";
import CollectionsTable from "./CollectionsTable";
import ScatterChart from "./ScatterChart";


function Search() {
  return (
    <div className="flex flex-col m-auto ">
      <div className="text-white text-center font-inter lg:text-[67px] text-4xl font-medium leading-17 mb-10 mt-16 flex flex-col gap-3">
        <p>WatchDogs?</p>
      </div>
      <div className="flex flex-row m-auto w-full justify-center items-center px-4">
        <input
          type="text"
          className=" max-w-[900px] h-12 w-full border border-[#838080] border-solid border-r-0 rounded-tl-lg rounded-bl-lg bg-black text-[#838080] px-7 font-inter "
          placeholder="Enter ETH Value"
        />
        <button className="text-center justify-center items-center w-36 h-12 border border-l-0 border-[#838080] border-solid font-inter rounded-tr-lg rounded-br-lg text-white cursor-pointer ">
          Generate
        </button>
      </div>
      <div className="flex flex-col justify-start mt-20">
        <div className="ml-[3%] flex flex-row my-5  items-center">
          <p className="text-white md:text-[25px] text-[20px] font-sans">
            Address :
          </p>
          <p className="text-[#B8B6B9] md:text-[25px] text-[20] font-sans">
            0x123Hdedhei0001223332dju
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col  mx-4 justify-center  gap-5">
        <Balance />
        <Profitability />
      </div>
      <CollectionsTable />
      <ScatterChart />
      <TransactionTable />
    </div>
  );
}

export default Search;
