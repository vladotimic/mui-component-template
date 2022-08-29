import { Typography } from '@mui/material';

import data from './data';
import ButtonExample from './ButtonExample';

export default function FormButtons() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{
          pb: '1rem',
        }}
      >
        Buttons
      </Typography>
      {data.map((item) => {
        const { id } = item;
        return <ButtonExample key={id} {...item} />;
      })}
    </>
  );
}
