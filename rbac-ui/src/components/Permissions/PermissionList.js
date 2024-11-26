import React from 'react';
import './PermissionList.css';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const PermissionList = ({ roles }) => {
  return (
    <div className="permission-container">
      <h2 className="permission-title">Permissions Overview</h2>
      <Table className="permission-table">
        <TableHead>
          <TableRow>
            <TableCell className="table-header">Role</TableCell>
            <TableCell className="table-header">Permissions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {roles.map((role) => (
            <TableRow key={role.id} className="table-row">
              <TableCell>{role.name}</TableCell>
              <TableCell>{role.permissions.join(', ')}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PermissionList;
