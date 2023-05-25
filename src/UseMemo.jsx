import React, { useState, useMemo,useEffect } from 'react'

//when we state is changed this the function will run this will decrease the performance
function slowNumberFunction(num) {
    console.log('Calling slow function')
    for (let i = 0; i < 100000000000; i++) {
        return num * 2
    }
}

//when we should use the useMemo function
//1. timecomplexity is very high
//2. when we have referential inequality
const UseMemo1 = () => {
    const [number, setnumber] = useState(0)
    const [dark, setdark] = useState(false)
    // const doubleNumber = slowNumberFunction(number)
    // usememo caches the values and will not run every time unless depedency will not change
    const doubleNumber = useMemo(() => {
        return slowNumberFunction(number)
    }, [number])

    // const themeStyles = {
    //     backgroundColor: dark ? 'white' : 'black',
    //     color: dark ? 'black' : 'white',
    // }

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'white' : 'black',
            color: dark ? 'black' : 'white',
        }
    },[dark])
    // object is non primitive datatype so this useEffect will run at every render 
    //we should wrap this value in useMemo
    useEffect(() => {
        console.log('theme chnahge')
    }, [themeStyles])

    return (
        <div>
            <input type="number" value={number} onChange={e => setnumber(parseInt(e.target.value))} />
            <button onClick={() => { setdark(prevDark => !prevDark) }}>Change theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
}

export default UseMemo1