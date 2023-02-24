
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Login/Login';
import Register from './Login/Register';
import Food from './Login/Food';
import { Routes, Route } from "react-router-dom"


function App() {
  return (
    <div className="App">
       
     
      
       <Routes>
        <Route path="/" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/food" element={ <Food/> } />
      </Routes>
    </div>

    
  );
}

export default App;
