import React, { useState } from 'react';
import { TextField, Button, Select, MenuItem } from '@mui/material';
import './UserForm.css';  // Ensure the CSS is being applied

const UserForm = ({ roles, onSubmit }) => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    role: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
    setUser({ name: '', email: '', role: '' });
  };

  return (
    <div className="form-container"> {/* Added a wrapper div to apply custom styling */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>

        <div className="form-group">
          <TextField
            label="Email"
            name="email"
            value={user.email}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
        </div>

        <div className="form-group">
          <Select
            name="role"
            value={user.role}
            onChange={handleChange}
            displayEmpty
            fullWidth
            margin="normal"
          >
            <MenuItem value="" disabled>Select Role</MenuItem>
            {roles.map((role) => (
              <MenuItem key={role.id} value={role.name}>
                {role.name}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div className="form-group">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className="button submit"  // Added custom submit button styling
          >
            Save User
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
