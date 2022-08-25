import { Typography } from '@mui/material';

import BasicTabs from './BasicTabs';

export default function InlineForm() {
  return (
    <>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 'bold',
        }}
      >
        Inline Form Example
      </Typography>
      <BasicTabs />
    </>
  );
}
