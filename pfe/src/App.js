import Home from "./Screens/Home"
import {Routes, Route} from 'react-router-dom'
import './App.css';
import LogIn from "./Screens/Login";
import SignUp from "./Screens/Signup";
import Profile from "./Screens/Profile";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Login" element={<LogIn/>} />
        <Route path="/Signup" element={<SignUp/>} />
        <Route path="/Profile/:id" element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
