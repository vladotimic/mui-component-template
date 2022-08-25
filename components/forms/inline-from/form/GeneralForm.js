import { Visibility, VisibilityOff } from '@mui/icons-material';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
} from '@mui/material';

import useFormState from './useFormState';

const nameFields = [
  {
    variant: 'outline',
    label: 'First Name',
    name: 'firstName',
    sx: {
      width: '100%',
    },
  },
  {
    variant: 'outline',
    label: 'Last Name',
    name: 'lastName',
    sx: {
      width: '100%',
      ml: 2,
    },
  },
];

export default function GeneralForm() {
  const { values, handleSubmit, handleChange, handleClickShowPassword } =
    useFormState();

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        py: 2,
        width: 650,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          my: 3,
        }}
      >
        <TextField
          variant="outlined"
          label="First name"
          name="firstName"
          value={values.firstName}
          onChange={handleChange}
          sx={{
            width: '100%',
          }}
        />
        <TextField
          variant="outlined"
          label="Last name"
          name="lastName"
          value={values.lastName}
          onChange={handleChange}
          sx={{
            width: '100%',
            ml: 2,
          }}
        />
      </Box>
      <Box
        sx={{
          my: 3,
        }}
      >
        <TextField
          variant="outlined"
          label="Email"
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          fullWidth
        />
      </Box>
      <Box>
        <FormControl sx={{ width: '100%' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <FormControl
          variant="outlined"
          sx={{
            width: 125,
          }}
        >
          <InputLabel id="demo-simple-select-standard-label">Gender</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Gender"
            value={values.gender}
            name="gender"
            onChange={handleChange}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="I want to receive marketing promotions and updates via email."
          />
        </FormGroup>
      </Box>
      <Button
        variant="contained"
        type="submit"
        sx={{
          my: 2,
        }}
      >
        Sign Up
      </Button>
    </Box>
  );
}
