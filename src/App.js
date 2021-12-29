import React from 'react';
import './App.css';
import Home from './Components/PageTemplates/Home';
import About from './Components/PageTemplates/AboutUs';
import {BrowserRouter as Router , Route ,Routes} from 'react-router-dom';
import NavbarCom from './Components/NavbarCom';
import AddUser from './Components/PageTemplates/AddUser';
import View from './Components/PageTemplates/View';
import Update from './Components/PageTemplates/Update';
function App() {
  return (
    <>
    <div className="App">

   <Router>
   <NavbarCom/>
   <Routes>
       <Route exact path="/" element={<Home/>}/>
       <Route exact path="/about" element={<About/>}/>
       <Route exact path="/addUser" element={ <AddUser/> }/>
       <Route exact path="/update/:id" element={ <Update/> }/>
       <Route exact path="/View/:id" element={ <View/> }/>
        {/* <Route exact path="/update" element={ <Update/> }/> */}
    </Routes>
   </Router>

    </div>
    </>
  );
}

export default App;
