import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EmployeeForm from './Components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    if (savedEmployees) {
      return JSON.parse(savedEmployees);
    }
    return [];
  });

  const addEmployee = (newEmployee) => {
    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    saveData(updatedEmployees);
  };

  const saveData = (dataToSave) => {
    localStorage.setItem('employees', JSON.stringify(dataToSave));
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            {}
            <Route exact path="/" element={<EmployeeForm addEmployee={addEmployee} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
