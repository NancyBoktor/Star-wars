import "./ClickableImg.css";

const ClickableImg = (props) => {
  const { imgPath, name, onClick } = props;
  console.log("imgPath", imgPath);
  return <img src={imgPath} alt={name} onClick={onClick} className="img" />;
};
export default ClickableImg;
