import React, { useState } from 'react';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import UserForm from './UserForm';
import './UserList.css'; // Ensure CSS is applied

const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Editor' },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const roles = [
    { id: 1, name: 'Admin' },
    { id: 2, name: 'Editor' },
    { id: 3, name: 'Viewer' },
  ];

  const handleAddUser = (user) => {
    setUsers([...users, { id: users.length + 1, ...user }]);
    setIsFormOpen(false);
  };

  return (
    <div>
      <h2>Users</h2>
      <Button 
        variant="contained" 
        color="primary" 
        onClick={() => setIsFormOpen(true)} 
        className="button add-user" // Class name for custom button styling
      >
        Add User
      </Button>
      <Table className="table"> {/* Apply the custom table class */}
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <DialogTitle>Add User</DialogTitle>
        <DialogContent>
          <UserForm roles={roles} onSubmit={handleAddUser} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserList;
