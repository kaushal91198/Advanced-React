import './App.css';
import CallApplyBind from './CallApplyBind';
import Closures from './Closures';
import Debouncing from './Debouncing';
import EventBubbling from './EventBubbling';
import ForwardRef from './ForwardRef';
import Throttling from './Throttling';
import UseCallback from './UseCallback';
import UseDeferedValue from './UseDeferedValue';
import UseEffect1 from './UseEffect1';
import UseEffect2 from './UseEffect2';
import UseId from './UseId';
import UseImperative from './UseImperative';
import UseLayoutEffect from './UseLayoutEffect';
import UseMemo1 from './UseMemo';
import UseRef from './UseRef';
import SearchParamsExample from './UseSearchParams';
import UseState from './UseState';
import UseTransition from './UseTransition';

function App() {

  return (
    <>
    {/* <UseState/> */}
    {/* <UseEffect1/> */}
    {/* <UseEffect2/> */}
    {/* <UseRef/> */}
    {/* <UseMemo1/> */}
    {/* <UseCallback/>    */}
    {/* <UseLayoutEffect/> */}
    {/* <UseTransition/> */}
    {/* <UseDeferedValue/> */}
    {/* <ForwardRef/> */}
    {/* <UseImperative/> */}
    {/* <UseId/> */}
    {/* <UseId/> */}
    {/* <SearchParamsExample/> */}
    {/* <Throttling/> */}
    {/* <Debouncing/> */}
    {/* <EventBubbling/> */}
    {/* <Closures/> */}
    {/* <CallApplyBind/> */}
    </>
     );
}

export default App;




// app second component


// import logo from './logo.svg';
// import './App.css';
// import Table from './Table';
// import { useState } from 'react';
// import Table2 from './Table2';
// import Table3 from './Table3';

// function App() {
//   const columnDefsOne = [
//     { headerName: "ID", field: "postId",checkboxSelection:true,headerCheckboxSelection:true },
//     { headerName: "Name", field: "name", },
//     { headerName: "Email", field: "email" },
//     { headerName: "Body", field: "body" ,hide:true},
//   ]

//   const columnDefsTwo = [
//     { headerName: "ID", field: "postId",checkboxSelection:true,headerCheckboxSelection:true },
//     { headerName: "Name", field: "name", },
//     { headerName: "Email", field: "email" },
//     { headerName: "Body", field: "body"},
//   ]
//   return (
//     <div className="App">
//       {/* <Table rowData={[]} columnDefs={columnDefsOne} /> */}
//       {/* <Table2 columnDefs={columnDefsTwo}/> */}
//       <Table3/>
//     </div>
//   );
// }

// export default App;


// import React from "react"
// import Child from './Child'

// class App extends React.Component {
//   constructor() {
//     super()
//     console.log("constructor called.")
//     this.state = {
//       data: "Anil",
//       show: true
//     }
//   }

//   componentDidMount() {
//     //Component Did mount - your component is already mounted
//     // state and props has no effect on componentDidMount method
//     // when html and css or dom are ready then this method will be called
//     // like hide show operation ,api calling
//     // first render is called then componentdidupdate will be calleds
//     console.log("component did mount called")
//   }

//   shouldComponentUpdate() {
//     //it can stop rendering
//     //ex. your state meets condtion but you don't want to call the function
//     console.log("should Component Update called")

//     if (this.state.data == 'anil') {
//       return false
//     }
//     return true
//   }



//   componentDidUpdate(preProps, prevState) {
//     console.log(preProps, prevState, "prwv state ")

//     console.log("component did update  called")
//     //Component Did update -when state update this will be called
//     //When you wanna perform event on state
//     //You can't update the state in this method
//     // we can't update the state with condition, without condition it will be in infinite loop.

//     //componentDidUpdate() will not be invoked if shouldComponentUpdate returns false
//   }


//   componentWillUnmount() {
//     //when component is unmounted (destroyed)
//   }
//   render() {
//     console.log("render called")

//     //When render method will be called
//     //1. When component is ready.
//     //2. state update
//     //3. props update


//     //You can't update the state in this method
//     // we can't update the state with condition, without condition it will be in infinite loop.




//     return (
//       <>
//         <h1>
//           Hello world  {this.state.data}
//         </h1>
//         <button onClick={() => { this.setState({ ...this.state, name: 'kaushal' }) }}>Update name</button>
//         <button onClick={() => { this.setState({ ...this.state, show: !this.state.show }) }}>Toggle child component</button>
//         <Child munno={'munno'} />
//         {this.state.show ? <Child /> : <h1>Component destroyed</h1>}
//       </>
//     )
//   }
// }

// export default App
