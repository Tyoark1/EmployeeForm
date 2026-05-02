import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from './Components/EmployeeForm';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
          <Routes>
            <Route exact path="/" element={<EmployeeForm />} />

            <Route path="/Page2" element={
              <div>
                <h1>Page 2</h1>
              </div>
            } />
          </Routes>

        </header>
      </div>
    </Router>
  );
}

export default App;