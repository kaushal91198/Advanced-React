import React, { forwardRef, useImperativeHandle } from "react";

const Input = (props, ref) => {
  useImperativeHandle(
    ref,
    () => {
      return{
        alertHi: () => alert("hi")
      }
    },
    []
  );

  return <input type="text" ref={ref} {...props} />;
};

export default forwardRef(Input);
