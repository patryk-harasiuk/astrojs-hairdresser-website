export const SuperHeader = () => (
  <div className="w-full flex justify-center bg-black font-fsrome z-10">
    <div className="flex border border-white mt-4 relative">
      <a
        href="/"
        className="flex gap-x-2 sm:gap-x-3 tracking-widest no-underline capitalize text-white font-normal text-2xl sm:text-4xl sm:p-6 p-4"
      >
        <span>estetic</span> <span>hair</span>
        <span> studio </span>
      </a>

      <div className="-mb-[10px] bottom-0 left-1/2 transform -translate-x-1/2 px-2 bg-black absolute">
        <p className="uppercase w-full text-white text-sm font-sans sm:tracking-[0.3em]">
          klaudia skubis
        </p>
      </div>
    </div>
  </div>
);
