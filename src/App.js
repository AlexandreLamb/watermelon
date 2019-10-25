import React from "react";
import "./App.css";
import NavBarHome from "./Components/NavBarHome";
import LoginPage from "./Pages/LoginPage";
import TestRoute from "./Pages/TestRoute";

import { BrowserRouter, Route, Link } from "react-router-dom";
import Routes from "./Components/Routes";

// email prof technoweb :
// kevin.frydman@esquad.co
// deadline 28 octobre 23:59:59
// Object.assaign({}, object)
function App() {
  return (
    <div className="App">
      
      <Routes />
    </div>
  );
}

export default App;
