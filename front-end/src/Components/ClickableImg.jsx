import "./ClickableImg.css";

const ClickableImg = ({ imgPath, name, onClick }) => {
  return (
    <img
      src={imgPath}
      alt={name}
      onClick={onClick}
      className="img"
      loading="lazy"
    />
  );
};
export default ClickableImg;
