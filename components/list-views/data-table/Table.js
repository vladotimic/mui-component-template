import { useState } from 'react';
import { Box } from '@mui/material';
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
  );
}
