import { BrowserRouter } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Page404 from "./Page404";
import { Link,NavLink } from "react-router-dom";
import User from "./User";
function Navbar() {
    return (
      <div className="nav">
        <ul className="Navbar"> 
      <li><NavLink className="nav-link" style={{backgroundColor:"green"}}  to="/">Home</NavLink> <br/></li>
      <li> <NavLink className="nav-link" to="/About">About</NavLink> <br/></li>
      <li><NavLink className="nav-link" to="/User/Anil" state={{name:'saurav Pal',age:20}} >Anil</NavLink> <br/></li>
     <li> <NavLink className="nav-link" to="/User/Peter" >Peter</NavLink> <br/></li>
     <li> <NavLink className="nav-link" to="/Contact" >Contact</NavLink> <br/></li>
        </ul>
       
      </div>
    );
  }
  
  export default Navbar;