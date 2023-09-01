import {Link,useNavigate} from 'react-router-dom'
function Home() {
  const navigate=useNavigate();
  const navtopage= ()=>{
        navigate('/about')
  }
    return (
      <div className="App">
       <h1>Hello Home page </h1>
       <p>Hello this is Home Page</p>
       <p>We are learning react router here</p>
       <Link to='/about' >Go to about page</Link>
       {/* <button onClick={()=>navigate('/about')}>Go to about Page</button> <br/><br/> */}
       <button onClick={()=>navtopage()}>Go to about Page</button> <br/><br/>
       <button>Go to other Page Page</button>
      </div>
    );
  }
  
  export default Home;