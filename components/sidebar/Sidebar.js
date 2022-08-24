import { Box, List } from '@mui/material';

import sidebarLinks from './data';
import SidebarListItem from './SidebarListItem';

export default function Sidebar() {
  return (
    <Box
      component="nav"
      sx={{
        width: '22.5rem',
        height: '94vh',
        borderRight: 1,
        borderColor: 'primary.light',
      }}
    >
      <List>
        {sidebarLinks.map((link) => {
          return <SidebarListItem key={link.id} {...link} />;
        })}
      </List>
    </Box>
  );
}
