import React from "react";
function New(props) {
    React.useEffect(() => {
      console.warn("UseEffect on data",props.data);
    },[props.data])
  
    React.useEffect(() => {
      console.warn("UseEffect on count", props.count);
    },[props.count])
    return (
      <div className="App">
        <h1>Useeffect on data:{props.data}</h1>
        <h1>Useeffect on count:{props.count}</h1>
      </div>
    );
  }

  export default New;