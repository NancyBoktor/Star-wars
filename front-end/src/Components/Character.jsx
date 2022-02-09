import ClickableImg from "./ClickableImg";
import Button from "./Button";

import "./Character.css";
const Character = (props) => {
  const { name, imgPath, onClick } = props;
  return (
    <div className="character">
      <ClickableImg name={name} imgPath={imgPath} onClick={onClick} />
      <Button name={name} onClick={onClick} />
    </div>
  );
};
export default Character;
