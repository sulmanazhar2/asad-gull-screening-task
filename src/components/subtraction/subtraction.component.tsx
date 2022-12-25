import React from "react";
import useStorageEventListernerToGetCounter from "../../hooks/useStorageEventListernerToGetCounter";

import "./subtraction.styles.scss";

const Subtraction: React.FC = () => {
  const count = useStorageEventListernerToGetCounter();
  const [subtractionResult, setSubtractionResult] = React.useState(0);

  React.useEffect(() => {
    setSubtractionResult(4 - count);
  }, [count]);

  return (
    <div className="subtraction-component">
      <span className="value">4 - {count}</span>
      <span className="result">{subtractionResult}</span>
    </div>
  );
};

export default Subtraction;
