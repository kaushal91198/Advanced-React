import React, { useState, useTransition } from "react";

//useTransition is a React Hook that lets you update the state without blocking the UI.
//when we call the useTransition hook its gives array of values back and this array variables has two values inside of it
// so the first value is pending and this is true or false depending on if the data is being rendered and then we start transition function
// by default all of our state changes in reacct are high priority and they all run one after the other until they all are all finished

// here we want to update the input on high priority
// here input state matters a lot but list stae has low priority
// the key important thing to understand about this start transition and usetransition hook is just taht you are setting priority task

// by using use transition you are making more renders than normal

const UseTransition = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleChange(e) {
    setInput(e.target.value);
    startTransition(() => {
      const l = [];
      for (let index = 0; index < 20000; index++) {
        l.push(e.target.value);
      }
      setList(l);
      console.log(list);
    });
  }
  //   function handleChange(e) {
  //     setInput(e.target.value);
  //       const l = [];
  //       for (let index = 0; index < 100; index++) {
  //         l.push(e.target.value);
  //       }
  //       setList(l);
  //       console.log(list);
  //   }

  return (
    <>
      <input value={input} onChange={(e) => handleChange(e)} />
      {isPending ? (
        <>Loading</>
      ) : (
        list.map((item, index) => <div key={index}>{item}</div>)
      )}
    </>
  );
};

export default UseTransition;
