import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [resource, setresource] = useState(window.innerWidth)
    const setWidth = () => {
        console.log("resource changed")
        setresource(window.innerWidth)
    }
    useEffect(() => {
        window.addEventListener('resize', setWidth)
        return () => {
            console.log("return from resource change")
            window.removeEventListener('resize', setWidth)
        }
    }, [])


    //Clean up functio n does run before the very time, side effect function runs in the useEffect (i.e when the component renders first time).
    // It runs before every new side Effect function execution in the useEffect hook (i.e the component re-renders and useEffect runs because of change in the value of any of the dependencies).
    // It runs whenever the component unmounts from the DOM.
    //example setTimeout function 
    

    return (
        <div>

            {resource}
        </div>
    )
}

export default UseEffect2