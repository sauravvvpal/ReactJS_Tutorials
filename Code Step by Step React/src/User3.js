import React from "react";

function User3(props){
    const name="Saurav"
    return (
        <div>
            <h1>User3 Component</h1>
            <button onClick={()=>props.data(name)}>Click Me</button>
        </div>
    )
}

export default User3;