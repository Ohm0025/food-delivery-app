import HowtoItem from "../howtoItem/HowtoItem";
import pic1 from "../../../assets/picHowto/pic1.svg";
import pic2 from "../../../assets/picHowto/pic2.svg";
import pic3 from "../../../assets/picHowto/pic3.svg";
import useHowtoComponent from "./HowtoComponent.hook";

const HowtoComponent = () => {
  const { text1_1, text1_2, text2_1, text2_2, text3_1, text3_2 } =
    useHowtoComponent();
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-semibold text-[44px]">How the app works</h1>
      <HowtoItem
        pic={pic1}
        text1={"Create an account"}
        text2={text1_1}
        text3={text1_2}
      />
      <HowtoItem
        pic={pic2}
        text1={"Explore varieties"}
        text2={text2_1}
        text3={text2_2}
      />
      <HowtoItem
        pic={pic3}
        text1={"Checkout"}
        text2={text3_1}
        text3={text3_2}
      />
    </div>
  );
};

export default HowtoComponent;
