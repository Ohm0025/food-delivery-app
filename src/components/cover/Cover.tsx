const Cover = () => {
  return (
    <div className="w-full h-[619px] bg-cover-pattern text-[white] flex flex-col justify-center items-center">
      <span className="font-bold text-[14px] sm:text-[24px]">Food app</span>
      <div className="font-bold text-[20px] sm:text-[40px] lg:text-[58px] text-center max-w-[968px] flex flex-col">
        <span className="">Why stay hungry when</span>
        <span>you can order form Bella Onojie</span>
      </div>
      <span className="text-[14px] sm:text-[24px] font-medium">{`Download the bella onoje’s food app now on`}</span>
      <div className="flex gap-[34px]">
        <button className="w-[236px] h-[68px] rounded-[30px] bg-primary font-bold text-[24px]">
          Playstore
        </button>
        <button className="w-[236px] h-[68px] rounded-[30px] bg-transparent font-bold text-[24px] border border-[white]">
          App store
        </button>
      </div>
    </div>
  );
};

export default Cover;
