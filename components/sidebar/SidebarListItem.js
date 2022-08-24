import Link from 'next/link';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

import useToggle from './useToggle';

export default function SidebarListItem({ name, links }) {
  const { isOpen, handleToggle } = useToggle();

  return (
    <>
      <ListItemButton onClick={handleToggle}>
        <ListItemText primary={name} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        {links.map((item) => {
          const { key, name, url } = item;
          return (
            <List key={key} component="div" disablePadding>
              <Link href={url}>
                <ListItemButton component="a" sx={{ pl: 4 }}>
                  <ListItemText primary={name} />
                </ListItemButton>
              </Link>
            </List>
          );
        })}
      </Collapse>
    </>
  );
}
