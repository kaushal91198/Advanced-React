import React from "react";


class User extends React.Component {

    constructor(){
        super()
        console.log("child constructor called.")
    }
    componentWillUnmount() {
        //when component is unmounted (destroyed)
        console.log("Component will unmounted called")
      }
    render()
    {
        console.log(this.props,'dhbhjnjkn')
        return (
            
            <>
                <h1>User Component</h1>
            </>
        )
    }
}

export default User 