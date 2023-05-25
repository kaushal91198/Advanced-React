import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

//it almost identical to use Effect
// useEffect they are not going to block the dom as they happpen asynchrounously
// useLayoutEffect runs synchronously between react calculated your dom and when it paints it put to screen
//It is perfect when you need to actually do something based on the layout of your dom
//but useLayout effect is not quite as performant since it happens synchronously

const UseLayoutEffect = () => {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();


//   useEffect(() => {
//     if (popup.current == null || button.current == null) return;
//     const { bottom } = button.current.getBoundingClientRect();
//     popup.current.style.top = `${bottom+25}px`
//   }, [show]);

    // it's not flickering

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom+25}px`
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup}>
          This is a popup
        </div>
      )}
    </>
  );
};

export default UseLayoutEffect;
