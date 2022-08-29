import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  Rating,
  InputLabel,
  Select,
  MenuItem,
  Stack,
  Slider,
  Switch,
  TextareaAutosize,
} from '@mui/material';
import { VolumeDown, VolumeUp } from '@mui/icons-material';

const data = [
  {
    id: '1',
    text: 'Outlined text field',
    component: <TextField label="Outlined text field" variant="outlined" />,
  },
  {
    id: '2',
    text: 'Checkbox field',
    component: (
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Do you accept our privacy policy?"
      />
    ),
  },
  {
    id: '3',
    text: 'Radio buttons',
    component: (
      <FormControl>
        <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="female"
          name="radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioGroup>
      </FormControl>
    ),
  },
  {
    id: '4',
    text: 'Ratings',
    component: <Rating name="simple-controlled" value={2} />,
  },
  {
    id: '5',
    text: 'Select field',
    component: (
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select value={10} label="Age">
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
    ),
  },
  {
    id: '6',
    text: 'Slider',
    component: (
      <Box sx={{ width: 250 }}>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider defaultValue={60} valueLabelDisplay="auto" />
          <VolumeUp />
        </Stack>
      </Box>
    ),
  },
  {
    id: '7',
    text: 'Switch',
    component: (
      <FormControlLabel control={<Switch defaultChecked />} label="On/Off" />
    ),
  },
  {
    id: '8',
    text: 'TextArea Field',
    component: (
      <TextareaAutosize
        aria-label="empty textarea"
        placeholder="Enter message..."
        style={{
          width: 300,
          height: 100,
        }}
      />
    ),
  },
];

export default data;
