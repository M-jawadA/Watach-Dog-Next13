import dogImage from "../../public/Images/png/dogImage.png";
import Image from "next/image";


const PopUp = () => {
  return (
    <div className="max-w-[492px] max-h-[539px] bg-white rounded-[30px] flex flex-col items-center justify-center z-10">
      <Image src={dogImage} alt="dog_image" />
      <div>
        <p className="max-w-[411px] text-textGray text-center font-inter lg:text-3xl sm:2xl xl font-medium leading-7 py-4 px-2">
          Get a full breakdown of the top weekly NFT trades every Sunday!{" "}
        </p>
        <input
          type="text"
          className="max-w-[353px] w-full mb-4 h-[55px] border border-[#8F8C8C] border-solid bg-white text-textGray m-auto rounded-[10px] px-3 mx-4"
          placeholder="Enter Your Email"
        />
        <button className="max-w-[353px]  w-full  rounded-[10px] h-[55px] bg_button text-lg text-white font-inter m-auto mb-4 mx-4">
          Continue
        </button>
      </div>
    </div>
  );
};
export default PopUp;
