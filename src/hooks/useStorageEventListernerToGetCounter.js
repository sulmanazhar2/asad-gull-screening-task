import React from "react";
import {
  getCounterValueFromStorage,
  setStorageCounter,
} from "../utils/counterFunctions";

const useStorageEventListernerToGetCounter = () => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setStorageCounter(0);
    const checkCounterValue = () => {
      const counterValue = getCounterValueFromStorage();
      if (counterValue) {
        setCount(counterValue);
      }
    };
    window.addEventListener("storage", checkCounterValue);
    return () => {
      window.removeEventListener("storage", checkCounterValue);
    };
  }, []);

  return count;
};

export default useStorageEventListernerToGetCounter;
