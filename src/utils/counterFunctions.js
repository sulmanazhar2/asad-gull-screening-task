export const getCounterValueFromStorage = () => {
  const counterStorageValue = localStorage.getItem("counter");
  const counterParsedValue =
    counterStorageValue !== null ? JSON.parse(counterStorageValue) : 0;
  const counterValue =
    typeof counterParsedValue === "number" ? counterParsedValue : 0;
  return counterValue;
};

export const setStorageCounter = (value) => {
  localStorage.setItem("counter", value);
  window.dispatchEvent(new Event("storage"));
};

export const incrementStorageCounter = () => {
  let counter = getCounterValueFromStorage();
  setStorageCounter(++counter);
};
export const decrementStorageCounter = () => {
  let counter = getCounterValueFromStorage();
  setStorageCounter(--counter);
};
