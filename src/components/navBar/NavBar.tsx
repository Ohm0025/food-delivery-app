import logoWeb from "../../assets/logo.svg";

type Props = {};

const NavBar = (props: Props) => {
  return (
    <div className="w-full bg-[white] h-[156px]">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <div className="flex-1 pl-4">
          <img src={logoWeb} alt="logo-web" className="w-[206px] h-auto" />
        </div>

        <div className="flex justify-between flex-1 px-[40px] py-[55px]">
          <button className="text-secondary hover:text-primary">
            <span className="font-semibold text-[16px]">Home</span>
          </button>

          <button className="text-secondary hover:text-primary">
            <span className="font-semibold text-[16px]">Product</span>
          </button>

          <button className="text-secondary hover:text-primary">
            <span className="font-semibold text-[16px]">Faq</span>
          </button>

          <button className="text-secondary hover:text-primary">
            <span className="font-semibold text-[16px]">Product</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
