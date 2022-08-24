import Box from '@mui/material/Box';

import Navbar from '../navbar/Navbar';
import Sidebar from '../sidebar/Sidebar';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        sx={{
          display: 'flex',
        }}
      >
        <Sidebar />
        <Box>{children}</Box>
      </Box>
    </>
  );
}
