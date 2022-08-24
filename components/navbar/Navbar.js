import React from 'react';
import { Box, AppBar, Typography, Button } from '@mui/material';

const pages = ['Link 1', 'Link 2', 'Link 3'];

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '3.5rem',
        px: 10,
      }}
    >
      <Typography variant="h6">MUI Component Template</Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'flex-end',
        }}
      >
        {pages.map((page) => (
          <Button
            key={page}
            sx={{
              color: 'white',
            }}
          >
            {page}
          </Button>
        ))}
      </Box>
    </AppBar>
  );
}
