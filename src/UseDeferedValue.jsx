import React, { useDeferredValue, useEffect, useMemo, useState } from "react";

//useDeferredValue is a React Hook that lets you defer updating a part of the UI.
// here in this case we want to defer this input value if this input value has lot of changes going on i don't want to render out brand
// new list at every single time we make a change
// it will work like debounce

const List = ({ input }) => {
  const deferedInput = useDeferredValue(input);
  const list = useMemo(() => {
    const l = [];
    for (let index = 0; index < 20000; index++) {
      l.push(<div key={index}>{input}</div>);
    }
    return l;
  }, [deferedInput]);

  useEffect(() => {
    console.log`Input ${input} deferedValue ${deferedInput}`;
  }, [input, deferedInput]);

  return list;
};

const UseDeferedValue = () => {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }
  return (
    <>
      <input type="text" value={input} onChange={(e) => handleChange(e)} />
      <List input={input} />
    </>
  );
};

export default UseDeferedValue;
