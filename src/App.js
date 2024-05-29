import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersTable from './components/UsersTable';
import UserDetails from './components/UserDetails';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/" element={<UsersTable />} />
      </Routes>
    </Router>
  );
}

export default App;
