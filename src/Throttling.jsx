import React, { useEffect, useState } from "react";

const Throttling = () => {
  const [normalCount, setNormalCount] = useState(0);
  const [throttleCount, setThrottleCount] = useState(0);

  let isScrolling = true;

  useEffect(() => {
    const handleScroll = () => {
      setNormalCount((count) => count + 1);
      if (isScrolling) {
        setThrottleCount((count) => count + 1);
        isScrolling = false;
        setTimeout(() => {
          isScrolling = true;
        }, 1000);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div style={{ height: "150vh" }}>
      <span>Normal Count : {normalCount}</span>
      <span>Throttle Count:{throttleCount}</span>
    </div>
  );
};

export default Throttling;
