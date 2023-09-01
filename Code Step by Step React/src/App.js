import User from "./User";
import React, { useRef, useState } from "react";
import "./App.css";
import User2 from "./User2";
import Student from "./Component";
import Studentt from "./Studentt";
import New from "./New";
import "./style1.css"
import style from './style3.module.css'
import Button from 'react-bootstrap/Button';
import {Table} from 'react-bootstrap'
import User3 from './User3'

// function App(){
//   const [data,setdata]=useState(null)
//   const [print,setprint]=useState(false)
//   function getData(val){
//     console.warn(val.target.value)
//     setdata(val.target.value)
//     setprint(false)

//   }
//   return (
//     <div className="App">
//       {
//         print?
//         <h1>{data}</h1>
//         :null
//       }
//     <input type='text' onChange={getData}></input>
//     <button onClick={()=>setprint(true)}>Print Data</button>
//     <User/>
//     <User2/>
//     </div>
//   );
// }

// Hide and Show Element
// function App(){
// const [status,setstatus]=useState(true)
//   return (
//     <div className="App">
//       {
//         status?
//         <h1>Saurav</h1>
//         :null
//       }
{
  /* <button onClick={()=>setstatus(true)}>Show</button>
      <button onClick={()=>setstatus(false)}>Hide</button> */
}
//     <button onClick={()=>setstatus(!status)}>Toggle</button>
//     <User/>
//     <User2/>
//     </div>
//   );
// }

// form validations
// function App(){
//   function getformdata(e){
//     console.warn(name,interest,tnc)
//     e.preventDefault()
//   }
//   const [name,setname]=useState("");
//   const [tnc,settnc]=useState(false);
//   const [interest,setinterest]=useState("");
//   return (
//   <div className='App'>
//     <h1>Hello world</h1>
//     <form onSubmit={getformdata}>
//       <input type='text' placeholder='Enter Name' onChange={(e)=>setname(e.target.value)} /> <br/><br/>
//       <select onChange={(e)=>setinterest(e.target.value)}>
//         <option>Select option</option>
//         <option>Marvel</option>
//         <option>DC</option>
//       </select> <br/><br/>
//       <input type='checkbox' onChange={(e)=>settnc(e.target.checked)} /> <span>Accept terms and conditions</span>
//       <br/><br/>
//       <button type='submit'>Submit</button>
//     </form>
//   </div>
//   );
// }

//----Render lifecycle method----
//   function App(){
//   const [name,setname]=useState("Saurav");
//   return(
//    <div className='App'>
//     <h1>Hello kese ho</h1>
//    </div>
//   );
// }

//---componentDidMouont----

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={data:"Saurav"}
//   }
//   componentDidMount(){
//     console.warn("componentDidMount")
//   }
//   render(){
//     console.warn("Render")

//     return(
//       <div className='App'>
//        <h1>Hello kese ho {this.state.data} </h1>
//        <button onClick={()=>this.setState({data:"Bhavya"})}>Click one me</button>
//       </div>
//      );
//   }
// }

//---compponentDidupdate----
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={data:0}
//   }
//   componentDidUpdate(preProps,preState,snapshot){
//     console.warn("componentUpdate",preState.data,this.state.data,snapshot)
//     if(preState.data!==this.state.data)
//     alert("values alag hai")
//   }
//   render(){
//     console.warn("Render")
//     return(
//       <div className='App'>
//        <h1>Hello kese ho {this.state.data} </h1>
//        <button onClick={()=>this.setState({data:this.state.data+1})}>Click one me</button>
//       </div>
//      );
//   }
// }

//---shouldComponentUpdate---
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={data:0}
//   }
//   componentDidUpdate(){
//     console.warn("componentDidUpdate")
//   }
//   shouldComponentUpdate(){
//     console.warn("shouldComponentUpdate",this.state.data)
//     if(this.state.data>5)
//     return true;
//   }
//   render(){
//     console.warn("Render")
//     return(
//       <div className='App'>
//        <h1>Hello kese ho {this.state.data} </h1>
//        <button onClick={()=>this.setState({data:this.state.data+1})}>Click one me</button>
//       </div>
//      );
//   }
// }

// -----componentWillUnmount------
// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={data:true}
//   }
//   render(){
//     console.warn("Render")
//     return(
//       <div className='App'>
//         {this.state.data?<Studentt/>:<h1>Remove ho gya</h1>}
//         <button onClick={()=>this.setState({data:!this.state.data})}>Click on me</button>
//       </div>
//      );
//   }
// }

//------Useeffect Hook----
// function App() {
//   const [count, setcount] = useState(0);
//   const [data,setdata]= useState(1)
//   return (
//     <div className="App">
//       <New data={data} count={count}/>
//       <button onClick={()=> setcount(count+1)}>count pe Click kr bhai</button>
//       <button onClick={()=> setdata(data+1)}>data pe Click kr bhai</button>
//     </div>
//   );
// }

//----Styles-----
// function App(){
//   return(
//     <div className="App">
//        <h1 className="style1">style 1 ka colour</h1>
//        <h1 style={{color:'blue',backgroundColor:'purple'}}>style 2 ka colour</h1>
//        <h1 className= {style.success}>style 3 ka colour</h1>
//        <Button variant="primary">Primary</Button>{' '}
       
//     </div>
//   )
// }

// ------Map function, array,list------
// function App(){
//   const array=['saurav', 'jatin', 'Sachin', 'bhavya']
//   const person=[
//     {name:'Saurav',email:'saurav@gmail.com',Address:[
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"}
//     ]},
//     {name:'Jatin',email:'jatin@gmail.com',Address:[
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"}
//     ]},
//     {name:'Sachin',email:'sachin@gmail.com',Address:[
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"}
//     ]},
//     {name:'Bhavya',email:'bhavya@gmail.com',Address:[
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"},
//       {Hno:"123", City:"Ghaziabad", Country:"India"}
//     ]}
// ]
  // array.map((data)=>
  // console.warn("Map ke items: ",data)
  // )

  // for(let i=0;i<array.length;i++){
  //   console.warn("Array ke item for loop: ",array[i])
  // }
//   return(
//     <div className="App">
//        <h1>hello</h1>
//        <Table >
//         <tr>
//          <td>Name</td>
//          <td>Email</td>
//          <td>Contact</td>
//         </tr>
//         { 
//        person.map((item,i)=>
//        <tr key={i}> 
//        <td>{i+1}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>
//           <Table>
//             <tbody>
//             {
//               item.Address.map((data)=>
//               <tr>
//                 <td>{data.Hno}</td>
//                 <td>{data.City}</td>
//                 <td>{data.Country}</td>
//               </tr>
//               )
//             }
//             </tbody>
//           </Table>
//           </td>
//        </tr>
      
//        )
// }
//        </Table>
//     </div>
//   )
// }

// export default App;


//---Lifting State Up (send data from child to parent)
// function App(){
//   function parentalert(name){
//     alert(name)
//   }
//   return(
//     <div className="App">
//       <h1>Lifting up the state</h1>
//     <User3 data={parentalert}/>
//     </div>
//   )
// }


// Useref Hook

// function App(){
//   let inputref= React.useRef(null);
//   function controlInput(){
//     inputref.current.focus()
//     inputref.current.style.color="red"
//     inputref.current.style.backgroundColor="blue"
//     //inputref.current.style.display="none"

//   }
//   return(
//     <div className="App">
//       <h1>UseRef Hook</h1>
//       <input type="text" ref={inputref} />
//       <button onClick={controlInput}>Handle Useref</button>
       
//     </div>
//   )
// }



//-------controlled component and Uncontrolled component-------

// function App(){
//   let inputref= React.useRef(null)
//   let inputref2= React.useRef(null)
//   function Onsubmit(e){
//     e.preventDefault()
//     console.warn("Value of Inputref:",inputref.current.value)
//     console.warn("Value of Inputref2:",inputref2.current.value)
//     let input3= document.getElementById('ref3').value;
//     console.warn("Value of Ref3:",input3)

//   }
  // const [val,setval]= useState("00")
  // console.warn(val)
  // return(
  //   <div className="App">
      {/* <h1>Controlled component</h1>
      <input type="text" val={val} onChange={(e)=>setval(e.target.value)}/>
      <h3>Value: {val}</h3> */}
      
      {/* Uncontrolled component */}
//       <form onSubmit={Onsubmit}>
//         <h1>Uncontrolled Component</h1>
//         <input ref={inputref} type="text"/> <br/> <br/>
//         <input ref={inputref2} type="text"/> <br/> <br/>
//         <input id="ref3" type="text"/> <br/> <br/>
//         <button>Submit</button>
//       </form>
//     </div>
//   )
// }

//---- Higher Order Component----//

function App(){
  return(
    <div className="App">
      <h1>High Order Componnet</h1>
      <HOC cmp={Counter}/>
      <HOC2 cmp2={Counter}/>
    </div>
  )
}
function HOC(props){
  return <h2 style={{color:"red",backgroundColor:"white"}}><props.cmp/></h2>
}

function HOC2(props){
  return <h2 style={{color:"blue",backgroundColor:"white"}}><props.cmp2/></h2>
}

function Counter(){
  const [val,setval]=useState(0)
  return (
    <div>
      <h1>Count: {val}</h1>
      <button onClick={()=>setval(val+1)}>Click Me</button>
    </div>
  )
}
export default App;