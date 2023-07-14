" use client"
import { data } from "@/utils/rawData";



const TransactionTable = () => {
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
  =
    
      <div className="w-max-full overflow-x-auto overflow-y-scroll content h-[800px] scrollbar-Table">
        <table className="w-full bg-[#333639] px-10 py-10 overflow-x-auto  md:overflow-x-auto ">
          <thead>
            <tr className="bg-[#E1E1E1] bg-opacity-10 h-12">
              <th className="py-2 text-xs md:text-xl text-bold text-white">
                Txn Hash
              </th>
              <th className="py-2 text-xs md:text-xl text-bold text-white text-center w-6 ">
                Date
              </th>
              <th className="py-2 text-xs md:text-xl text-bold text-white">
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
            {array.map((item, index) => {
              return (
                <tr
                  key={index}
                  className="border-b border-opacity-25 h-12 border-black"
                >
                  <td className="py-2  px-5 watch__bg  text-base font-sans font-normal">
                    {item.TxnHash}
                  </td>
                  <td className="py-2  px-0 md:px-5 watch__bg text-base font-sans font-normal w-6 no-wrap">
                    {item.Date}
                  </td>
                  <td className="py-2 px-5  text-white text-base font-sans font-normal">
                    {item.From}
                  </td>
                  <td className="py-2 px-5  text-white text-base font-sans font-normal">
                    {item.To}
                  </td>
                  <td className="py-2 px-5  watch__bg text-base font-sans font-normal">
                    {Math.floor(Math.random() * 50)}
                  </td>
                  <td
                    className={`py-2 px-5  text-base font-sans font-normal ${
                      index % 2 === 0 && index % 5 === 0
                        ? "text-green-500"
                        : "text-white"
                    }`}
                  >
                    {"+" + Math.floor(Math.random() * 11) + ".53 ETH"}
                  </td>
                  <td className="py-2 text-white text-base font-sans font-normal">
                    {item.Type}
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
export default TransactionTable;
