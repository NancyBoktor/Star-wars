import CharacterItem from "./CharacterItem";
import "./CharactersList.css";
const CharactersList = ({ data, onClick }) => {
  return (
    <div className="characters-list">
      {data.map((c) => {
        return (
          <CharacterItem
            key={c.id}
            id={c.id}
            imgPath={c.img}
            onClick={() => onClick(c.id)}
            name={c.name}
          />
        );
      })}
    </div>
  );
};
export default CharactersList;
