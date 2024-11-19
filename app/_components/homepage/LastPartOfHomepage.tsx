export default function LastPartOfHomepage() {
  return (
    <div className="flex flex-col justify-center items-center  w-full bg-blackSecond py-14 md:py-20">
      <div className="max-w-[1800px] w-full mx-auto flex flex-col justify-evenly items-center  ">
        <div className="mt-16 px-10 sm:px-20 md:px-24 md900:px-32 ">
          <h3 className="text-xl sm500:text-2xl md:text-3xl lg:px-28 xl:px-52 text-center text-whiteSecond font-medium tracking-wide ">
            Dołącz do ReadIt i przekonaj się, co możesz zyskać!
          </h3>
        </div>

        <div className="flex flex-row justify-center items-center  gap-x-8 mt-10 sm600:gap-x-12">
          <p className="text-lg border border-whiteSecond/50 px-3 py-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group">
            <i className="bi bi-people transition-colors duration-300 text-current group-hover:text-mainGreenSecond text-white"></i>
          </p>

          <p className="text-lg border border-whiteSecond/50 px-3 py-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group">
            <i className="bi bi-chat-left-heart transition-colors duration-300 text-current group-hover:text-mainGreenSecond text-white"></i>
          </p>

          <p className="text-lg border border-whiteSecond/50 px-3 py-2 rounded-full hover:border-mainGreenSecond transition-colors duration-300 sm600:text-xl group">
            <i className="bi bi-brush transition-colors duration-300 text-current group-hover:text-mainGreenSecond text-white"></i>
          </p>
        </div>
        <div className="mt-4 sm500:px-10 sm600:px-20 md:px-24 md800:px-24 md900:px-36 ">
          <p className="text-center px-8  mt-6 mb-16  text-sm sm600:text-base  tracking-wide  text-whiteSecond/75 lg:px-36 xl:px-56 ">
            Odkryj świat, gdzie Twoja wiedza może przynosić zyski, a inspirujące
            treści czekają na Ciebie na każdym kroku
          </p>
        </div>
      </div>
    </div>
  );
}
