import React from "react";
import useStorageEventListernerToGetCounter from "../../hooks/useStorageEventListernerToGetCounter";
import {
  decrementStorageCounter,
  incrementStorageCounter,
} from "../../utils/counterFunctions";

import "./counter.styles.scss";

const Counter: React.FC = () => {
  const count = useStorageEventListernerToGetCounter();

  return (
    <div className="counter-component">
      <button onClick={incrementStorageCounter} className="increment-counter">
        +
      </button>
      <span className="value">{count}</span>
      <button onClick={decrementStorageCounter} className="decrement-counter">
        -
      </button>
    </div>
  );
};

export default Counter;
