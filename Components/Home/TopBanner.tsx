import banner from "../../public//Images/png/banner.png";
import Image from "next/image";


const TopBanner = () => {
  return (
    <div className="m-auto relative mb-36">
      <div className="flex flex-row m-auto mt-40 md:mt-60 text-center w-full justify-center">
        <p className="text-center font-space text-5xl sm:text-8xl  font-bold leading-tight uppercase watch__bg ">
          Watch
        </p>
        <p className="text-center font-space text-5xl sm:text-8xl font-bold leading-tight uppercase text-white ">
          Dogs
        </p>
      </div>
      <p className="text-white text-center font-inter text-[32px] font-normal leading-10">
        We know what you do in the dark..{" "}
      </p>
      <Image src={banner} alt="banner" className="m-auto mt-20" />
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[180px] flex flex-row w-full max-w-[1150px] px-10 lg:px-3">
        <input
          type="text"
          className=" max-w-[1100px] h-12 w-full border border-[#838080] border-solid bg-black text-[#838080] px-7 font-inter"
          placeholder="Enter ETH Value"
        />
        <button className="text-center justify-center items-center w-36 h-12 border border-[#838080] border-solid font-inter text-white cursor-pointer">
          Generate
        </button>
      </div>
    </div>
  );
};
export default TopBanner;
