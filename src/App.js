import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import './App.css';

import User from "./components/user"
import Dashboard from "./components/dashboard"


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<User/>}>
          
          </Route>
          <Route path="/" element={<User/>}>
  
          </Route>
          <Route path="/dashboard" element={<Dashboard/>}>
  
          </Route>
        </Routes>
      </Router>
  );
}

export default App;
