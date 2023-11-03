import './App.css';
import Main from './components/public/Main';
import  {Navbar}  from './components/public/Navbar';
import  {Footer}  from './components/public/Footer';
import  {Detail}  from './components/public/Detail';
import {Routes, Route } from 'react-router-dom';
import { UserForm } from './components/public/UserForm';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>

        <Route exact path= '/'  element={<Main/>}/>
        <Route path= '/details/:id' element={<Detail/>}/>
        <Route path='/user-form' element={<UserForm/>}/>
 
        
        
      </Routes>
      <Footer/>
     
    </div>

  );
}

export default App;