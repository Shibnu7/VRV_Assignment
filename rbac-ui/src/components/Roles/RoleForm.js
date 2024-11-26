import React, { useState } from 'react';
import { TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import './RoleForm.css';

const RoleForm = ({ onSubmit }) => {
  const [roleName, setRoleName] = useState('');
  const [permissions, setPermissions] = useState({
    add: false,
    edit: false,
    delete: false,
  });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (roleName.trim() === '') {
      setError('Role name is required');
      return;
    }

    const selectedPermissions = Object.keys(permissions).filter((key) => permissions[key]);

    onSubmit({ name: roleName, permissions: selectedPermissions });

    // Reset form
    setRoleName('');
    setPermissions({ add: false, edit: false, delete: false });
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <TextField
          label="Role Name"
          value={roleName}
          onChange={(e) => setRoleName(e.target.value)}
          error={!!error}
          helperText={error}
          fullWidth
          margin="normal"
        />
      </div>
      <div className="form-group">
        {['Add', 'Edit', 'Delete'].map((perm) => (
          <FormControlLabel
            key={perm}
            control={
              <Checkbox
                checked={permissions[perm.toLowerCase()]}
                onChange={(e) =>
                  setPermissions({ ...permissions, [perm.toLowerCase()]: e.target.checked })
                }
                color="primary"
              />
            }
            label={perm}
          />
        ))}
      </div>
      <Button type="submit" variant="contained" color="primary" className="button submit">
        Save Role
      </Button>
    </form>
  );
};

export default RoleForm;
