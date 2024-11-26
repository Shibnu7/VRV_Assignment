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
  IconButton,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';  // Importing Material UI icons
import RoleForm from './RoleForm';
import './RoleList.css';

const RoleList = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: 'Admin', permissions: ['Add', 'Edit', 'Delete'] },
    { id: 2, name: 'Editor', permissions: ['Add', 'Edit'] },
  ]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);

  const handleAddOrUpdateRole = (role) => {
    if (editingRole) {
      // Update role
      setRoles((prevRoles) =>
        prevRoles.map((r) => (r.id === editingRole.id ? { ...r, ...role } : r))
      );
    } else {
      // Add new role
      setRoles([...roles, { id: Date.now(), ...role }]);
    }
    setIsFormOpen(false);
    setEditingRole(null);
  };

  const handleDeleteRole = (id) => {
    setRoles((prevRoles) => prevRoles.filter((role) => role.id !== id));
  };

  const handleEditRole = (role) => {
    setEditingRole(role);
    setIsFormOpen(true);
  };

  return (
    <div className="role-list-container">
      <h2>Roles</h2>
      <Button
        variant="contained"
        color="primary"
        className="button add"
        onClick={() => setIsFormOpen(true)}
      >
        Add Role
      </Button>

      <Table className="table">
        <TableHead>
          <TableRow>
            <TableCell>Role</TableCell>
            <TableCell>Permissions</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id} hover>
              <TableCell>{role.name}</TableCell>
              <TableCell>
                {role.permissions.length > 0 ? role.permissions.join(', ') : 'No Permissions'}
              </TableCell>
              <TableCell>
                <IconButton
                  color="primary"
                  onClick={() => handleEditRole(role)}
                  className="button edit"
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  onClick={() => handleDeleteRole(role.id)}
                  className="button delete"
                >
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={isFormOpen} onClose={() => setIsFormOpen(false)}>
        <DialogTitle>{editingRole ? 'Edit Role' : 'Add Role'}</DialogTitle>
        <DialogContent>
          <RoleForm onSubmit={handleAddOrUpdateRole} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RoleList;
