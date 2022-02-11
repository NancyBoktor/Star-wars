import ClickableImg from "./ClickableImg";
import Button from "./Button";
import "./CharacterItem.css";

const CharacterItem = ({ name, imgPath, onClick }) => {
  return (
    <div className="character">
      <ClickableImg
        name={name}
        imgPath={imgPath}
        onClick={onClick}
        className="character-img"
      />
      <Button name={name} onClick={onClick} />
    </div>
  );
};
export default CharacterItem;
