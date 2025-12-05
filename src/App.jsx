import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import DocLayout from './layouts/DocLayout';
import Login from './pages/Login';
import Home from './pages/Home';
import History from './pages/History';
import Leave from './pages/Leave';
import Request from './pages/Request';
import Approval from './pages/Approval';
import Employee from './pages/Employee';
import Personal from './pages/Personal';
import Attendance from './pages/Attendance';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DocLayout />}>
          <Route index element={<Navigate to="/login" replace />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="leave" element={<Leave />} />
          <Route path="request" element={<Request />} />
          <Route path="approval" element={<Approval />} />
          <Route path="employee" element={<Employee />} />
          <Route path="personal" element={<Personal />} />
          <Route path="attendance" element={<Attendance />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
