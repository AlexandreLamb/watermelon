import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import LoginPage from './Pages/LoginPage';
import { BrowserRouter, Route, Link} from 'react-router-dom';
import Routes from './Components/Routes';

// email prof technoweb : 
// kevin.frydman@esquad.co
// deadline 28 octobre 23:59:59
// Object.assaign({}, object)
function App() {
  return (
    <div className="App">
      <NavBar/>
    </div>
        
  );
}

export default App;
