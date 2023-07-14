

 const Description=()=> {
  return (
    <div className="description_bg w-[100vw] min-h-[100vh] flex  flex-col justify-start items-center pb-32">
      <div className="text-white text-center font-inter text-2xl md:text-4xl font-medium leading-17 mb-10 mt-16 flex flex-col gap-3">
        <p>
          What is <br />
        </p>
        <p>WatchDogs?</p>
      </div>

      <div className="max-w-[1140px] max-h-[1430px] bg-black lg:px-28 relative lg:py-40 md:py-20 md:px-14 sm:px-10 px-5 py-10 m-4 rounded-[40px]">
        <p className="text-white  font-inter lg:text-4xl sm:text-3xl text-2xl font-medium leading-17 absolute left-[5%] lg:top-[10%] md:top-[6%] sm:top-[4%] top[2%] ">
          Transperancy
        </p>

        <div className="text-white font-inter text-[16px] sm:text-[20px] md:text-[25px] lg:text-[30px] font-medium leading-10 tracking-tight max-w-[913px] py-10">
          <p>
            DALL·E is an AI system developed by OpenAI that can create original,
            realistic images and art from a short text description. <br />
          </p>
          <p>
         
            It can make realistic and context-aware edits, including inserting,
            removing, or retouching specific sections of an image from a natural
            language description. It can also take an image and make novel and
            creative variations of it inspired by the original. <br />
          </p>
          <p>
           
            How DALL·E Works <br />
          </p>
          <li>
            DALL·E was trained by learning the relationship between images and
            the text used to describe them. <br />
          </li>
          <li>
            It uses a process called diffusion, which starts with a pattern of
            random dots and gradually alters that pattern towards a final
            output.
          </li>
          DALL·E Credits <br />
          <li>
            A credit can be used for one DALL·E request: generating images
            through a text prompt, an edit request, or a variation request.
            <br />
          </li>
          <li>
            You get 50 free credits your first month, and 15 free credits will
            refill every month after that. Free credits don’t roll over, so
            they’ll expire a month after they were granted. <br />
          </li>
          <li>
            You can purchase additional credits through your account page.
          </li>
        </div>
      </div>
    </div>
  );
}
export default Description;