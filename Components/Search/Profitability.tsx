import screenShot from "../../public/Images/png/screenShot.png";
import Image from "next/image";


const Profitability = () => {
  return (
    <div className="md:max-w-[48%] max-w-[90%] max-h-max m-auto md:m-0 h-full w-full  bg-[#333639] justify-center rounded-[24px] flex flex-col">
      <div className="flex flex-row justify-between px-7 md:px-[55px] items-start mb-14">
        <div className="flex flex-col">
          <p className="text-white mt-5 font-sans text-2xl font-medium leading-10 tracking-tight">
            Actual Profitability
          </p>
          <p className="text-[#2DE93F] text-shadow font-sans text-2xl md:text-5xl font-medium leading-14 tracking-tighter ">
            + $20,457
          </p>
        </div>
        <p className="text-[#BDBBBB] font-sans text-base  font-xs sm:font-medium leading-6 tracking-tight mt-6">
          3M / 6 M / 12M
        </p>
      </div>
      <div className="flex flex-col gap-3 mb-20 overflow-y-scroll content scrollbar-Table">
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-row justify-evenly sm:justify-between items-center pl-2"
            >
              <div className="w-1/2 flex flex-row justify-around items-center ">
                <Image
                  src={screenShot}
                  alt="poster"
                  className="h-11/12 mr-4 sm:mr-0"
                />
                <div className="flex flex-col">
                  <p className="text-[20px] text-white font-sans font-bold">
                    Clone X #10098
                  </p>
                  <p className="text-[#F19C44] font-bold font-sans">
                    12 hours ago
                  </p>
                </div>
              </div>
              <p className="text-[20px] text-white font-bold  pr-[10%] font-sans">
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
