import React, { useEffect, useState } from 'react'

const UseEffect1 = () => {
    const [resource, setresource] = useState('posts')
    const [data, setdata] = useState([])

    console.log("rendeer happedn")

    //if u don't put any depedency in array then this function will run only at first render (componentonmount)
    // if we put any dependency in array when depedency change the function will run and rerender will happen
    useEffect(() => {
        console.log('useeffet run')

        fetch(`https://jsonplaceholder.typicode.com/${resource}`)
            .then(response => response.json())
            .then(json => setdata(json))    

    // }, [])
    }, [resource])
    console.log(data)
    return (
        <div>
            <button onClick={() => setresource('posts')}>posts</button>
            <button onClick={() => setresource('users')}>users</button>
            <button onClick={() => setresource('comments')}>comments</button>

            <h1>{resource}</h1>
            {data.map((resourceType) => {
                return (
                    <div>{JSON.stringify(data)}</div>
                )
            })}
        </div>
    )
}

export default UseEffect1