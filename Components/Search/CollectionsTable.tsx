"use client"
import { data } from "@/lib/rawData";
import small from "../../public/Images/png/small.png";
import Image from "next/image";
import StarPurple500Icon from "@mui/icons-material/StarPurple500";
import { useState ,useEffect} from "react";
import { Collections } from "@/index";
import { fetchCollections } from "@/lib/requests";


const CollectionsTable = () => {
  const [datas, setData] = useState<Collections[]>();
  useEffect(() => {
    fetchCollections().then((res) => setData(res.data));
  }, []);
  const array = Array(20).fill(data[0]);
  const random = Math.floor(Math.random() * 11);
  let count: number = 1;

  return (
    <div className="py-10 overflow-x-auto bg-[#333639] px-10 m-10 rounded-[30px] ">
      <div className="flex flex-row text-center items-center justify-between gap-3">
        <p className="py-2 text-white font-sans font-bold text-xl md:text-4xl leading-tight tracking-tighter">
          NFT Collections
        </p>
        <p className="text-[10px] md:text-sm text-gray-500 font-normal font-sans">
          Owned by Wallet: 0x123Hdedhei00012htg...
        </p>
      </div>

      <div className="max-w-full w-full overflow-x-auto  overflow-scroll content scrollbar-Table">
        <table className="w-full min-w-[100px] bg-[#333639] px-10 py-10 scrollbar-Table overflow-scroll scrollbar-thin scrollbar-thumb-black scrollbar-track-gray-300">
          <thead>
            <tr className="">
              <th className="py-4 text-[#E2E2E2] text-base w-[45%] text-start">
                Collection
              </th>
              <th className="py-4 text-[#E2E2E2] text-base">Floor Price</th>
              <th className="py-4 text-[#E2E2E2] text-base">Profit</th>
              <th className="py-4 text-[#E2E2E2] text-base">Minted</th>
              <th className="py-4 text-[#E2E2E2] text-base">Total ID</th>
            </tr>
          </thead>
          <tbody>
            {datas?.map((item, index) => {
              console.log(item)
              return (
                <tr
                  key={index}
                  className={`h-12 border-black ${
                    index % 2 === 0 ? "bg-[#E1E1E1] bg-opacity-10" : ""
                  }`}
                >
                  <td className="py-2 px-5 text-white text-base font-sans font-normal">
                    <div className="flex flex-row items-center justify-start ml-2 md:ml-8 gap-2 md:gap-8">
                      <span className="text-sm lg:text-[27px] text-bold">
                       {item.id}
                      </span>
                      <Image src={small} alt="img" />
                      <div className="text-sm lg:text-[27px] font-normal flex gap-2 flex-row text-white font-sans text-center items-center">
                        {index % 2 == 0 ? (
                          <p>{item.name}</p>
                        ) : (
                          <p>{item.name}</p>
                        )}
                        <StarPurple500Icon className="text-[#407FDB] font-xs" />
                      </div>
                    </div>
                  </td>
                  <td className="py-2 px-8 text-base font-sans font-normal">
                    <div className="flex-flex-col text-white items-center gap-1">
                      <p className="text-sm lg:text-[27px] text-bold font-sans">
                       {item.floorprice.price + "ETH"}
                      </p>
                      <p
                        className={`text-sans text-xs md:text-[16px] text-normal  pl-0 sm:pl-14 pt-2 ${
                          index % 2 === 0 ? "text-[#31CF61]" : "text-[#CF3131]"
                        } `}
                      >
                        {item.floorprice.profitLoss}
                      </p>
                    </div>
                  </td>
                  <td className="py-2 px-5 text-sm lg:text-[27px] text-white text-bold font-sans">
                   {item.profit}
                  </td>
                  <td className="py-2 px-5 text-white text-[27px] text-bold text-base font-sans font-normal">
                 {item.minted}
                  </td>
                  <td className="py-2 px-5 text-white text-base text-[27px] text-bold font-sans font-normal">
                   {item.minted}
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
