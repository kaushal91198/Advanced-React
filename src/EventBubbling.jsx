import React from "react";

const EventBubbling = () => {
  return (
    <div onClick={() => alert("div clicked")}>
      topdiv
      <button
        onClick={(e) => {
          e.stopPropagation();
          console.log(e.isPropagationStopped())
          alert("Button clicked");
        }}
      >
        Button
      </button>
    </div>
  );
};

export default EventBubbling;
