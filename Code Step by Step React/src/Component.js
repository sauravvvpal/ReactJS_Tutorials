import React,{Component} from "react";

class Student extends Component{
    render(){
        console.log(this.props)
    return(
        <div>
            <h2>Hello {this.props.name}</h2>
        <div>{this.props.email}</div>
        </div>
        
    )
    }
}

export default Student;