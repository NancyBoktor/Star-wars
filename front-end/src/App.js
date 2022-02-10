import { useState } from "react";
import Character from "./Components/Character";
import InfoModal from "./Components/InfoModal";
import getCharacterbyId from "./services/getInfo";
import data from "./services/hardCodedData";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  console.log("info", info);
  const handleClose = () => setOpen(false);
  const onClick = async (id) => {
    try {
      const response = await getCharacterbyId(id);
      setInfo(response.data);
      setOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
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
      {open && (
        <InfoModal
          info={info}
          handleClose={handleClose}
          open={open}
          setOpen={setOpen}
        />
      )}
    </div>
  );
}

export default App;
