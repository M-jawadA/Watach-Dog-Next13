"use client"
import { data } from "@/lib/rawData";
import { Transaction } from "@/index";
import { useState,useEffect } from "react";
import { fetchData } from "@/lib/requests";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
const ITEMS_PER_PAGE = 10;

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
const [datas,setData]=useState<Transaction[]>();
useEffect(()=>{
  fetchData().then(res=>setData(res.data))
},[])
const totalPages = Math.ceil(datas?.length  ?? 0 / ITEMS_PER_PAGE) - 14;
console.log(totalPages)
const handleNextPage = () => {
  if (currentPage < totalPages) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrevPage = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

const handleFirstPage = () => {
  setCurrentPage(1);
};

const handleLastPage = () => {
  setCurrentPage(totalPages);
};
const handleClickPage = (page: number) => {
  setCurrentPage(page);
};
const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const endIndex = startIndex + ITEMS_PER_PAGE;

const currentData = datas?.slice(startIndex, endIndex) ?? [];


  const scrollbarStyle: React.CSSProperties = {
    width: '15px',
  };

  const thumbStyle: React.CSSProperties = {
    width: '15px',
    height: '176px',
    backgroundColor: '#D8D8D8',
  };

  const trackStyle: React.CSSProperties = {
    backgroundColor: '#5B5959',
  };

  const array = Array(20).fill(data[0]);
  const random = Math.floor(Math.random() * 11);
  return (
    <div className="py-10  bg-[#333639] px-10 m-10 rounded-[30px]">
    <p className="py-2 text-white font-sans font-bold text-xl md:text-4xl  leading-tight tracking-tighter">
      NFT Transaction
    </p>

    <div className="w-max-full overflow-x-auto overflow-y-scroll content h-[400px] scrollbar-Table">
      <table className="w-full bg-[#333639] px-10 py-10 overflow-x-auto  md:overflow-x-auto ">
        <thead>
          <tr className="bg-[#E1E1E1] bg-opacity-10 h-12">
            <th className="py-2 text-xs md:text-xl text-bold text-white">
              Txn Hash
            </th>
            <th className="py-2 text-xs md:text-xl text-bold text-white text-center w-[15%] ">
              Date
            </th>
            <th className="py-2 text-xs md:text-xl text-bold text-white ">
              From
            </th>
            <th className="py-2 text-xs md:text-xl text-bold text-white">
              To
            </th>
            <th className="py-2 text-xs md:text-xl text-bold text-white">
              Token ID
            </th>
            <th className="py-2 text-xs md:text-xl text-bold text-white">
              Profit Loss
            </th>
            <th className="py-2 text-xs md:text-xl text-bold text-white">
              Type
            </th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => (
            <tr
              key={index}
              className="border-b border-opacity-25 h-12 border-black"
            >
              <td className="py-2 px-5 watch__bg text-base font-sans font-normal">
                {item.TxnHash}
              </td>
              <td className="py-2 px-0 md:px-5 watch__bg text-base font-sans font-normal  ">
                {item.Date}
              </td>
              <td className="py-2 px-5 text-white text-xs sm:text-base font-sans font-normal">
               {item.From}
              </td>
              <td className="py-2 px-5 text-white text-base font-sans font-normal">
                {item.To}
              </td>
              <td className="py-2 px-5 watch__bg text-base font-sans font-normal">
                {Math.floor(Math.random() * 50)}
              </td>
              <td
                className={`py-2 px-5 text-base font-sans font-normal ${
                  index % 2 === 0 && index % 5 === 0
                    ? 'text-green-500'
                    : 'text-white'
                }`}
              >
                {'+' + Math.floor(Math.random() * 11) + '.53 ETH'}
              </td>
              <td className="py-2 text-white text-base font-sans font-normal">
                {item.Type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      {/* Pagination */}
      <div className="flex justify-end mt-4">
        <button
          onClick={handleFirstPage}
          className="px-2 md:px-4 py-2 mx-1 text-sm rounded focus:outline-none bg-gray-500 text-white"
          disabled={currentPage === 1}
        >
          First
        </button>
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 mx-1 text-sm rounded focus:outline-none bg-gray-500 text-white"
          disabled={currentPage === 1}
        >
       <ArrowBackIosNewIcon />
        </button>
        {Array.from({ length: totalPages -14 }).map((_, index) => (
          <button
            key={index}
            onClick={() => handleClickPage(index + 1)}
            className={`px-4 py-2 mx-1 text-sm rounded focus:outline-none text-white ${
              currentPage === index + 1 ? 'bg-gray-300' : 'bg-gray-500'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          className="px-4 py-2 mx-1 text-sm rounded focus:outline-none bg-gray-500 text-white"
          disabled={currentPage === totalPages}
        >
         <KeyboardArrowRightIcon />
        </button>
        <button
          onClick={handleLastPage}
          className="px-2 md:px-4 py-2 mx-1 text-sm rounded focus:outline-none text-white bg-gray-500"
          disabled={currentPage === totalPages}
          
        >
          Last
        </button>
      </div>
      </div>
  );
};
export default TransactionTable;
