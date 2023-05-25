import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [name, setName] = useState("");
  // const [renderCount, setRenderCount] = useState(0)

  const renderCount = useRef(0);

  // if we don't put any array then it will run at EVERY RENDER
  // useEffect(() => {
  //   setRenderCount(prevCount=>prevCount+1)
  // })

  //This will cause infinite loop so we can use the use ref hook
  //That persist between renders of your component
  //The difference between state and ref that ref doesn't cause the reupdate your component

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  }, []);

  //   function focus() {
  //     // console.log(inputRef.current)
  //     inputRef.current.focus()
  //     inputRef.current.value = "My name"
  //     //It will change the value not state
  // }

  return (
    <div className="App">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={renderCount}
      />
      <div>My name is {name}</div>
      {/* <div>I rendered {renderCount} times</div> */}
      <div>I rendered {renderCount.current} times</div>
    </div>
  );
};

export default UseRef;
