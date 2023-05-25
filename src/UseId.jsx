import React, { useId } from 'react'

const UseId = () => {

    //if we use this component two times then id is same 
    //each element must have its own id
    const id =useId()
  return (
    <div>
        {/* <label htmlFor='email'>Email</label>
        <input id='email' type='email'/> */}
        <label htmlFor={id}>Email</label>
        <input id={id} type='email'/>
    </div>
  )
}

export default UseId