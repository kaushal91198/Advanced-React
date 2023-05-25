import React, { useState } from 'react'


const countInitial = ()=>{
  console.log("fucntion called initial")
  return 0
}
const UseState = () => {
    //when we define the state with initial value then it is called at evry render
    // const [count, setcount] = useState(0)
    // const [count, setcount] = useState(countInitial())
    

    // but if we do by this then we will not be called every render
    const [count, setcount] = useState(()=>{
      console.log("function called")
      return 0
    })


    // if(true){
    //     // we can't put the usState in if else condition
    //        useState()
    // }

    function decrement(){
      //setstate method is asynchronous
      // setcount(count-1)
      // setcount(count-1)

      // if we wanna do update state depends on previous state then we should approach this method  
      setcount((count)=>count-1)
    }
    function increment(){
      setcount((count)=>count+1)
    }
  return (
    <div>
        <button onClick={decrement}>-</button>
        <span>{count}</span>
        <button onClick={increment}>+</button>

    </div>
  )
}

export default UseState