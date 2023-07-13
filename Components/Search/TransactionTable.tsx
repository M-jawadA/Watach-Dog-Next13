import React from 'react'
import { data } from '@/utils/rawData';

const TransactionTable=()=> {
    const array = Array(20).fill(data[0]);
    const random =Math.floor(Math.random() * 11);
  return (
    <div className='py-10  overflow-scroll bg-[#333639] px-10 m-10 rounded-[30px]'> 
<p className='py-2 text-white font-sans font-bold text-4xl leading-tight tracking-tighter'>NFT Transaction </p>
         <table className="w-full bg-[#333639] px-10 py-10 overflow-scroll">
      <thead >
        <tr className='bg-[#E1E1E1] bg-opacity-60 h-12'>
          <th className="py-2 text-xl text-bold">Txn Hash</th>
          <th className="py-2 text-xl text-bold">Date</th>
          <th className="py-2 text-xl text-bold">From</th>
          <th className="py-2 text-xl text-bold">To</th>
          <th className="py-2 text-xl text-bold">Token ID</th>
          <th className="py-2 text-xl text-bold">Profit Loss</th>
          <th className="py-2 text-xl text-bold">Type</th>
        </tr>
      </thead>
      <tbody>
        {
            array.map((item,index)=>{
                return  <tr key={index} className="border-b border-opacity-25 h-12 border-black">
                <td className="py-2 watch__bg  text-base font-sans font-normal">{item.TxnHash}</td>
                <td className="py-2 watch__bg text-base font-sans font-normal">{item.Date}</td>
                <td className="py-2 text-white text-base font-sans font-normal">{item.From}</td>
                <td className="py-2 text-white text-base font-sans font-normal">{item.To}</td>
                <td className="py-2 watch__bg text-base font-sans font-normal">{Math.floor(Math.random() * 50)}</td>
                <td className={`py-2 text-base font-sans font-normal ${index % 2 === 0 && index % 5 === 0 ? 'text-green-500' : 'text-white'}`}>{'+' + Math.floor(Math.random() * 11) + '.53 ETH'}</td>
                <td className="py-2 text-white text-base font-sans font-normal">{item.Type}</td>
              </tr>
            })
        }
       
      </tbody>
    </table>
    </div>
  )
}
export default TransactionTable;