import React from "react";
import useStorageEventListernerToGetCounter from "../../hooks/useStorageEventListernerToGetCounter";

import "./divider.styles.scss";

const Divider: React.FC = () => {
  const count = useStorageEventListernerToGetCounter();
  const [dividerResult, setDividerResult] = React.useState(0);

  React.useEffect(() => {
    setDividerResult(6 / count);
  }, [count]);

  return (
    <div className="divider-component">
      <span className="value">6/{count}</span>
      <span className="result">{dividerResult}</span>
    </div>
  );
};

export default Divider;
