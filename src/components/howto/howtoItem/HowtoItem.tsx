import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "react-spring";

type Props = {
  pic: string;
  text1?: string;
  text2?: string;
  text3?: string;
  locationRef: number;
};

const HowtoItem = (props: Props) => {
  const [scrollY, setScrollY] = useState(0);
  const currentDiv = useRef<HTMLDivElement>(null);

  const fadeAnimation = useSpring({
    transform: `translateX(${
      scrollY > (currentDiv.current?.offsetTop || 0) - 800 ? 0 : 100
    }px)`,
    opacity: scrollY > (currentDiv.current?.offsetTop || 0) - 800 ? 1 : 0,
    from: { opacity: 0, transform: "translateX(100px)" },
    config: { duration: 400 },
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex items-center" ref={currentDiv}>
      <animated.div style={fadeAnimation}>
        <img src={props.pic} alt="pic" />
      </animated.div>
      <div className="flex flex-col gap-[7px] max-w-[568px]">
        <span className="text-primary text-[24px] font-bold">
          {props.text1}
        </span>
        <span className="text-secondary text-[40px] font-bold">
          {props.text2}
        </span>
        <span className="text-[#737373] text-[24px] font-medium">
          {props.text3}
        </span>
      </div>
    </div>
  );
};

export default HowtoItem;
