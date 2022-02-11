import { useState } from "react";
import CharactersList from "./Components/CharactersList";
import InfoModal from "./Components/InfoModal";
import Search from "./Components/Search";
import getCharacterbyId from "./services/getInfo";
import data from "./services/hardCodedData";
import Loading from "./Components/Loading";
import "./App.css";

function App() {
  const [open, setOpen] = useState(false);
  const [info, setInfo] = useState({});
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  /* ----- handle open && render Character info && close Modal ------*/
  const handleClose = () => setOpen(false);
  const onClick = async (id) => {
    setLoading(true);
    try {
      const response = await getCharacterbyId(id);
      if (response) {
        setInfo(response.data);
        setOpen(true);
      }
    } catch (error) {
      alert("This ID is not exist !! ");
    } finally {
      setLoading(false);
    }
  };
  /* ----- Controll the Input Component ------*/
  const onChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <div className="App">
        <div>
          <Search value={value} onChange={onChange} onClick={onClick} />
          <div>
            <CharactersList data={data} onClick={onClick} />
          </div>
        </div>
        {open && (
          <InfoModal
            info={info}
            handleClose={handleClose}
            open={open}
            setOpen={setOpen}
          />
        )}
        {loading && <Loading />}
      </div>
    </div>
  );
}

export default App;
