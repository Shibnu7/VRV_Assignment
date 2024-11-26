import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './components/Users/UserList'; // Assuming the component path is correct
import RoleList from './components/Roles/RoleList'; // Assuming the component path is correct
import PermissionList from './components/Permissions/PermissionList'; // Import the PermissionList component
import './App.css';

const App = () => {
  const roles = [
    { id: 1, name: 'Admin', permissions: ['Create User', 'Delete User', 'Edit User', 'View Dashboard'] },
    { id: 2, name: 'Manager', permissions: ['Create User', 'View Dashboard'] },
    { id: 3, name: 'Viewer', permissions: ['View Dashboard'] },
  ];

  return (
    <Router>
      <div className="container">
        <h1>RBAC Admin Dashboard</h1>
        <nav>
          <Link to="/" className="nav-button">Users</Link>
          <Link to="/roles" className="nav-button">Roles</Link>
          <Link to="/permissions" className="nav-button">Permissions</Link> {/* Added link to Permissions */}
        </nav>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/roles" element={<RoleList />} />
          <Route path="/permissions" element={<PermissionList roles={roles} />} /> {/* Added PermissionList route */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
