import { Breadcrumbs, Typography } from '@mui/material';

import Table from './Table';

export default function DataTable() {
  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        <Typography color="inherit">List Views</Typography>
        <Typography color="text.primary">Data Tables</Typography>
      </Breadcrumbs>
      <Typography
        variant="h4"
        sx={{
          mt: '1.5rem',
          mb: '1rem',
        }}
      >
        Data Table
      </Typography>
      <Table />
    </>
  );
}
