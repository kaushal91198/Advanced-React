import React, { useState } from "react";

const Debouncing = () => {
  const [input, setInput] = useState("");
  const [debounceInput, setDebounceInput] = useState("");

  let isSet = true;

  function debounce() {
    if (isSet) {
      isSet = false;
      setTimeout(() => {
        setDebounceInput(input);
        isSet = true;
      }, 1000);
    }
  }

  return (
    <>
      <input
        onChange={(e) => {
          setInput(e.target.value);
          debounce();
        }}
      />
      {debounceInput.length !== 0 &&
        debounceInput.split("").map((x) => <div>{x}</div>)}
    </>
  );
};

export default Debouncing;
