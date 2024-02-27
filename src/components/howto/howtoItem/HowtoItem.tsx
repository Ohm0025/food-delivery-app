type Props = {
  pic: string;
  text1?: string;
  text2?: string;
  text3?: string;
};

const HowtoItem = (props: Props) => {
  return (
    <div>
      <div>
        <img src={props.pic} alt="pic" />
      </div>
      <div>
        <span>{props.text1}</span>
        <span>{props.text2}</span>
        <span>{props.text3}</span>
      </div>
    </div>
  );
};

export default HowtoItem;
