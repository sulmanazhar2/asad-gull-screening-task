import React from "react";

import Counter from "./components/counter/counter.component";
import Divider from "./components/divider/divider.component";
import Multiplier from "./components/multiplier/multiplier.component";
import Subtraction from "./components/subtraction/subtraction.component";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <Multiplier />
      <Subtraction />
      <Divider />
      <Counter />
    </div>
  );
};

export default App;
