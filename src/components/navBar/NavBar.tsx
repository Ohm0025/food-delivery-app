import { useRef } from "react";
import logoWeb from "../../assets/logo.svg";
import useNavBar from "./NavBar.hook";
import "./NavBar.css";

const NavBar = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const {} = useNavBar(navRef);
  return (
    <div
      ref={navRef}
      className="nav-sticky-head w-full bg-[white] h-[156px] sticky top-0 left-0 z-50"
    >
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
