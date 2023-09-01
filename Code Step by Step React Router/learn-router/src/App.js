import Home from './Component/Home';
import About from './Component/About';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';
import Page404 from './Component/Page404';
import Navbar from './Component/Navbar';
import User from './Component/User';
import Contact from './Component/Contact';
import Channel from './Component/Channel';
import Company from './Component/Company';
import Others from './Component/Others';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path='/*' element={<Page404/>} />
        <Route path='/User/:name' element={<User/>} />
        <Route path='/Contact/' element={<Contact/>}>
        <Route path='Company' element={<Company/>} />
        <Route path='Channel' element={<Channel/>} />
        <Route path='Others' element={<Others/>} />
        
         
        </Route>


      </Routes>
      <Navbar/>
      </BrowserRouter>
    
     
    </div>
  );
}

export default App;
