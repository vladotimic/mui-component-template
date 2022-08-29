import { Box, Typography } from '@mui/material';

export default function Field({ text, component }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        my: 3,
      }}
    >
      <Box
        sx={{
          width: 250,
          alignSelf: 'flex-start',
        }}
      >
        <Typography varaint="p">{text}</Typography>
      </Box>
      <Box
        sx={{
          mx: 2,
        }}
      >
        {component}
      </Box>
    </Box>
  );
}
