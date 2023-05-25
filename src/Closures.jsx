import React from "react";

// a function with lexical scope is closure
// a function outer value is accessible in function but function inner value can't be accessible in outer scope that is lexical socpe
//A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time

const Closures = () => {
  let data = 10;
  function outer() {
    let b =200
    return function test() {
      let a = 100;
      return function inner() {
        console.log(b);
      };
    }
  }

  outer()()();

  return <div>Closures</div>;
};

export default Closures;
