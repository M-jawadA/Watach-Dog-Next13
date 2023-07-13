import React from "react";
import { data } from "@/utils/rawData";
import small from "../../public/Images/png/small.png";
import Image from "next/image";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";

const CollectionsTable = () => {
  const array = Array(20).fill(data[0]);
  const random = Math.floor(Math.random() * 11);
  let count = 0;
  return (
    <div className="py-10 overflow-x-auto bg-[#333639] px-10 m-10 rounded-[30px]">
      <div className="flex flex-row text-center items-center justify-between">
        <p className="py-2 text-white font-sans font-bold text-4xl leading-tight tracking-tighter">
          NFT Collections
        </p>
        <p className="font-sm text-gray-500 font-normal font-sans">
          Owned by Wallet: 0x123Hdedhei00012htg...
        </p>
      </div>

      <div className="max-w-full overflow-scroll">
        <table className="w-full bg-[#333639] px-10 py-10">
          <thead>
            <tr>
              <th className="py-2 text-white text-base w-[45%] text-start">Collection</th>
              <th className="py-2 text-white text-base">Floor Price</th>
              <th className="py-2 text-white text-base">Profit</th>
              <th className="py-2 text-white text-base">Minted</th>
              <th className="py-2 text-white text-base">Total ID</th>
            </tr>
          </thead>
          <tbody>
            {[1, 2, 3, 4].map((item, index) => {
              return (
                <tr
                  key={index}
                  className={`h-12 border-black ${
                    index % 2 === 0 ? "bg-[#E1E1E1] bg-opacity-10" : ""
                  }`}
                >
                  <td className="py-2 text-white text-base font-sans font-normal">
                    <div className="flex flex-row items-center justify-start ml-8 gap-8">
                      <span>{count++}</span>
                      <Image src={small} alt="img" />
                      <div className="text-[27px] font-normal flex gap-2 flex-row text-white font-sans text-center items-center">
                        <p>Clone X</p>
                        <StarPurple500Icon className="text-[#407FDB] font-xs" />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 text-base font-sans font-normal">
                    <div className="flex-flex-col text-white items-center gap-1">
                      <p className="text-[27px] text-bold font-sans">
                        10.3 ETH
                      </p>
                      <p
                        className={`text-sans text-[16px] text-normal pl-14 pt-2 ${
                          index % 2 === 0 ? "text-[#31CF61]" : "text-[#CF3131]"
                        } `}
                      >
                        +3.86
                      </p>
                    </div>
                  </td>
                  <td className="py-2 text-[27px] text-white text-bold font-sans">
                    10.3 ETH
                  </td>
                  <td className="py-2 text-white text-[27px] text-bold text-base font-sans font-normal">
                    {Math.floor(Math.random() * 11)}
                  </td>
                  <td className="py-2 text-white text-base text-[27px] text-bold font-sans font-normal">
                    {Math.floor(Math.random() * 39)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CollectionsTable;
