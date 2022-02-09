import Character from "./Components/Character";
import getCharacterbyId from "./services/getInfo";
import data from "./services/hardCodedData";
import "./App.css";
import { Fragment } from "react";

function App() {
  const onClick = async (id) => {
    const response = await getCharacterbyId(id);
    console.log(response);
  };
  return (
    <div className="App">
      {data.map((c) => {
        return (
          <Character
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
}

export default App;
