import phones from "../../assets/phones.svg";
import "./Cover.css";

const Cover = () => {
  return (
    <div id="cover-component" className="relative">
      <div className="w-full h-auto bg-cover-pattern bg-cover bg-no-repeat text-[white] flex flex-col items-center pt-[73px] pb-[146px] gap-[52px]">
        <span className="font-bold text-[14px] sm:text-[24px]">Food app</span>
        <div className="font-bold text-[20px] sm:text-[40px] lg:text-[58px] text-center max-w-[968px] flex flex-col">
          <span className="">Why stay hungry when</span>
          <span>you can order form Bella Onojie</span>
        </div>
        <span className="text-[14px] sm:text-[24px] font-medium">{`Download the bella onoje’s food app now on`}</span>
        <div className="flex gap-[34px] z-[10]">
          <button className="w-[236px] h-[68px] rounded-[30px] hover:bg-primary hover:outline-0 font-bold text-[24px] outline outline-[1px] outline-[white]">
            Playstore
          </button>
          <button className="w-[236px] h-[68px] rounded-[30px] hover:bg-primary hover:outline-0 bg-transparent font-bold text-[24px] outline outline-[1px] outline-[white]">
            App store
          </button>
        </div>
      </div>
      <div className="relative bg-transpent top-[-280px]">
        <img
          src={phones}
          alt="hero-picture"
          className="mx-auto relative left-[-60px]"
        />
        <div className="w-[80%] border-t-[3px] border-[#E4E4E4] mx-auto"></div>
      </div>
    </div>
  );
};

export default Cover;
