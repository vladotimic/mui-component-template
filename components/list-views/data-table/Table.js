import { useState } from 'react';
import { Box, Breadcrumbs, Typography } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

const VISIBLE_FIELDS = [
  'desk',
  'commodity',
  'traderName',
  'traderEmail',
  'quantity',
  'filledQuantity',
  'isFilled',
  'status',
  'unitPrice',
  'unitPriceCurrency',
  'subTotal',
];

export default function Table() {
  const [pageSize, setPageSize] = useState(5);

  const { data } = useDemoData({
    dataSet: 'Commodity',
    rowLength: 80,
    maxColumns: 12,
    visibleFields: VISIBLE_FIELDS,
  });

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
      <Box
        sx={{
          height: 500,
          width: '100%',
          mt: '2rem',
        }}
      >
        <DataGrid
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          rowsPerPageOptions={[5, 10, 20]}
          checkboxSelection
          components={{ Toolbar: GridToolbar }}
          {...data}
        />
      </Box>
    </>
  );
}
