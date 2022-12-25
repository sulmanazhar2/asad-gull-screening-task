import React from "react";
import useStorageEventListernerToGetCounter from "../../hooks/useStorageEventListernerToGetCounter";

import "./multiplier.styles.scss";

const Multiplier: React.FC = () => {
  const count = useStorageEventListernerToGetCounter();
  const [multiplierResult, setMultiplierResult] = React.useState(0);

  React.useEffect(() => {
    setMultiplierResult(-5 * count);
  }, [count]);

  return (
    <div className="multiplier-component">
      <span className="value">-5 * {count}</span>
      <span className="result">{multiplierResult}</span>
    </div>
  );
};

export default Multiplier;
