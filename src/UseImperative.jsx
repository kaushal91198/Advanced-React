import React, { useRef, useState } from "react";
import UseImperativeChild from "./UseImperativeChild";

//useImperativeHandle is a React Hook that lets you customize the handle exposed as a ref.
// this is the ref that we want to completely override we now no longer need to pass that to our input at all
// this function retrun value and that return value is our new value for ref
// we can also pass array of depedencies if you pass nothing it's going to refresh this value every render
// empty array is goping to refresh it once 
// if you want to change your ref to be something that entirely different

const UseImperative = () => {
  const [first, setfirst] = useState("red");
  const inputRef = useRef();
  return (
    <div>
      <UseImperativeChild
        ref={inputRef}
        value={first}
        type='text'
        onChange={(e) => {
          setfirst(e.target.value);
        }}
      />
      <button onClick={()=>inputRef.current.alertHi()}>Focus</button>
    </div>
  );
};

export default UseImperative;
