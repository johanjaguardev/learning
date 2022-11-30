import { useState, useId } from "react";
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

  return (
    <div className="App">
      <div className="squares__container">
        {squares.map((sq) => (
          <div className="square" key={useId()}>
            {sq}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
