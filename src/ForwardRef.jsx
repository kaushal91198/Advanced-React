import React, {  useRef, } from "react";
import Input from "./ForwardRefChild";

// lets your component expose a DOM node to parent component with a ref.

const ForwardRef = () => {
  let inputRef = useRef(null);
  function updateInput() {
    inputRef.current.value = 1000;
  }
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={() => updateInput()}>update inputbox</button>
    </div>
  );
};

export default ForwardRef;
