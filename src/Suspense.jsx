import React from 'react'

// Suspense is all about the doing asynchronous things in reactso we can take this suspense component so we can just wrap ourchild 
// compoent in our suspense component and this takes fallback and this fallback is going to be rerendered we are in loading state

const Suspense = () => {
  return (
    <div>Suspense</div>
  )
}

export default Suspense