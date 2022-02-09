import Button from "./Components/Button";
import "./App.css";

function App() {
  const names = [
    "Luke Skywalker",
    "C-3PO",
    "R2-D2",
    "Darth Vader",
    "Leia Organa",
    "Owen Lars",
    "Beru Whitesun lars",
    "R5-D4",
    "Biggs Darklighter",
    "Obi-Wan Kenobi",
  ];

  return (
    <div className="App">
      {names.map((n) => {
        return <Button name={n} key={names.indexOf(n)} />;
      })}
    </div>
  );
}

export default App;
