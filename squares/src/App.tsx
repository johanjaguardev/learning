import { useState, useId, useEffect } from "react";
import "./App.scss";

const App = () => {
  const [squares, setSquares] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [fill, setFill] = useState(false);
  const toggleSquare = (index: number) => {
    const data = squares;
    data[index] = !data[index];

    setSquares(data);
  };
  useEffect(() => {
    if (squares.indexOf(false) === -1) {
      setFill(true);
    }
  });
  return (
    <div className="App">
      <div className={`squares ${fill ? "filled" : ""}`}>
        {squares.map((sq, index) => {
          console.log(sq);
          return (
            <button
              className={`square ${sq ? "active" : ""}`}
              key={index}
              onClick={() => toggleSquare(index)}
            >
              {sq}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default App;
