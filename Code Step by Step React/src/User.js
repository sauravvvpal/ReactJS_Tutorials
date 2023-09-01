import React from "react";

class User extends React.Component{
  constructor(){
    super();
    this.state={data:"Saurav"}
  }
  render(){
    console.warn("Render hua hai",this.state.data);
    return(
      <div>
<h1>Render is called</h1>
      <button onClick={()=>this.setState({data:"Bhavya"})}>Update name</button>
      </div>
      
    )
  }
}


export default User;