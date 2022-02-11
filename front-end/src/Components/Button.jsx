import "./Button.css";
const Button = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="button">
      {name}
    </button>
  );
};
export default Button;
