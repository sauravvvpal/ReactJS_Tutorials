import React from "react";

class Studentt extends React.Component{
    componentWillUnmount(){
        alert("componentWillUnmount Called")
    }
    render(){
      console.warn("Render")
      return(
        <di>
        <h1>Component Will mount </h1>
        </di>
       );
    }
  }

  export default Studentt;