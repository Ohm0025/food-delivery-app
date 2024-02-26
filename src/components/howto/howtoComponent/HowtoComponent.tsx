import React from "react";
import HowtoItem from "../howtoItem/HowtoItem";

type Props = {};

const HowtoComponent = (props: Props) => {
  return (
    <div>
      <h1 className="font-semibold text-[44px]">How the app works</h1>
      <HowtoItem />
      <HowtoItem />
      <HowtoItem />
    </div>
  );
};

export default HowtoComponent;
