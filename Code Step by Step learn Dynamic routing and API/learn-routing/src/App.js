import './App.css';
import React from 'react';
import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom'
import User from './Components/User';
import { useEffect,useState } from 'react';
import Child from './Components/Child';
// function App() {
//   let users=[
//     {id:1,name:'Saurav',email:'saurav@gmail.com'},
//     {id:2,name:'jatin',email:'jatin@gmail.com'},
//     {id:3,name:'sachin',email:'sachin@gmail.com'},
//     {id:4,name:'Shubham',email:'shubham@gmail.com'},
//     {id:5,name:'Anil',email:'Anil@gmail.com'}

//   ]
//   return (
//     <div className="App">
//       <Router>
      
//       {
//         users.map((item)=>
//         <div><Link to={"/user/"+item.id+"/"+item.name}><h3>{item.name}</h3></Link>
//         </div>
//       )}
//         <Route path="/user/:id/:name"><User/></Route>
//       </Router>
//     </div>
//   );
// }

// function Home(){
//   return(
//     <>
//     <h1>This is Home Page</h1>
//     <p>Website of home PAge</p>
//     </>
//   )
// }

// function About(){
//   return(
//     <>
//     <h1>This is About Page</h1>
//     <p>Website of About PAge</p>
//     </>
//   )
// }

// export default App;

// //--starting with api

// function App(){
//   const [data,setdata]=useState([])
//   useEffect(()=>{
//     fetch("http://localhost:3000/users").then((result)=>{
//     result.json().then((resp)=>{
//       //console.warn("response",resp)
//       setdata(resp)
//     })
//   })
//   },[])
//   console.warn(data)
//   return(
//     <div className='App'>
//      <h1>This is API tutorial</h1>
//      <table border="1">
//       <tr>
//         <td>ID</td>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Contact</td>
//       </tr>
//       {
//         data.map((item)=>
//         <tr>
//         <td>{item.id}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.address}</td>
//       </tr>
//         )
//       }
//      </table>

//     </div>
//   )
// }
// export default App;


// //---Post method with rest API----
// function App(){
//   const [name,setname]=useState("");
//   const [email,setemail]=useState("");
//   const [address,setaddress]=useState("");

//   function saveuser(){
//     console.warn(name,email,address);
//     let data={name,email,address}
//     fetch("http://localhost:3000/users", {
//     method: "POST",
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body:JSON.stringify(data)
//   }).then((resp)=>{
//     // console.warn("resp",resp);;
//     resp.json().then((result)=>{
//         console.warn("response",result)
//     })
//   })
//   }
//   return(
//     <div className='App'>
//      <h1>Post API Method</h1>
//      <input type='text' value={name} onChange={(e)=>setname(e.target.value)} name='name' /><br/><br/>
//      <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} name='email' /><br/><br/>
//      <input type='text' value={address} onChange={(e)=>setaddress(e.target.value)} name='address' /><br/><br/>
//      <button type='button' onClick={saveuser}>Save new user</button>
//     </div>
//   );
// }
// export default App;


// //----Delete method,prefilled,update method using PUT request----

// function App(){
//   const [data,setdata]=useState([])
//   const [name,setname]=useState("")
//   const [email,setemail]=useState("")
//   const [address,setaddress]=useState("")
//   const [userid,setuserid]=useState(null)
//   useEffect(()=>{
//     getlist()
//   },[])

//   function getlist(){
//     fetch("http://localhost:3000/users").then((result)=>{
//       result.json().then((resp)=>{
//         //console.warn("response",resp)
//         setdata(resp)
//         setname(resp[0].name)
//         setemail(resp[0].email)
//         setaddress(resp[0].address)
//         setaddress(resp[0].userid)
//       })
//     })
//   }
// function deleteuser(id){
//   fetch(`http://localhost:3000/users${id}`,{
//     method:'DELETE'
//   }).then((result)=>{
//     result.json().then((resp)=>{
//       console.warn(resp)
//       getlist()
//     })
//   })
// }

// function selectuser(id){
//    console.warn(data[id-1])
//    setname(data[id-1].name)
//         setemail(data[id-1].email)
//         setaddress(data[id-1].address)
//         setuserid(data[id-1].userid)
// }

// function updateuser(){
//   let item={name,email,address,userid}
//   fetch(`http://localhost:3000/users${userid}`,{
//     method:'PUT',
//     headers:{
//       'Accept': 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body:JSON.stringify(item)
//   }).then((result)=>{
//     result.json().then((resp)=>{
//       console.warn(resp)
//       getlist()
//     })
//   })
// }
  
//   return(
//     <div className='App'>
//      <h1>This is API tutorial</h1>
//      <table border="1">
//       <tr>
//         <td>ID</td>
//         <td>Name</td>
//         <td>Email</td>
//         <td>Contact</td>
//       </tr>
//       {
//         data.map((item)=>
//         <tr>
//         <td>{item.id}</td>
//         <td>{item.name}</td>
//         <td>{item.email}</td>
//         <td>{item.address}</td>
//         <td><button onClick={()=>deleteuser(item.id)}>Delete</button></td>
//         <td><button onClick={()=>selectuser(item.id)}>Update</button></td>
//       </tr>
//         )
//       }
//      </table>
//      <div>
//       <input type='text' value={name} onChange={(e)=>setname(e.target.value)} /> <br/><br/>
//       <input type='text' value={email} onChange={(e)=>setemail(e.target.value)} /> <br/><br/>
//       <input type='text' value={address} onChange={(e)=>setaddress(e.target.value)} /> <br/><br/>
//       <button onClick={updateuser}>Uppdate</button>
//      </div>

//     </div>
//   )
// }
// export default App;


// //---Previous State---

// export default function App(){
//   const [count,setcount]=useState(1)

//   function updatestate(){
//     // let rand=Math.floor(Math.random()*10)
//     // //setcount(rand)
//     // setcount((pre)=>{
//     //   console.warn(pre)
//     //   if(pre<5)
//     //   alert("low value")
//     // return rand
//     // })

//     //for loop wala method
//     for(let i=0;i<5;i++){
//       setcount(count+5)
//     }
//   }
//   return(
//     <div className='App'>
//       <h1>{count}</h1>
//       <button onClick={updatestate}>Update kr</button>
//     </div>
//   )
// }


//---previous props with hooks

// export default function App(){
//   const [count,setcount]=useState(1)
//   return (
//     <div className='App'>
//       <h1>{count}</h1>
//       <Child count={count}/>
//       <button onClick={()=>setcount(Math.floor(Math.random()*10))}>Update Me</button>
//     </div>
//   )
// }


//--state with object---

export default function App(){
  const [data,setdata]=useState({name:'Saurav',age:21})
  return (
    <div className='App'>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <input type='text' placeholder='Enter name' value={data.name} onChange={(e)=>{setdata({...data,name:e.target.value})}}/>
      <input type='text' placeholder='Enter age' value={data.age} onChange={(e)=>{setdata({...data,age:e.target.value})}}/>
    </div>
  )
}
