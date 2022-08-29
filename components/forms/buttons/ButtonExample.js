import { Box, Typography, Button } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

export default function ButtonExample({ text, buttons }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        my: '2rem',
      }}
    >
      <Typography
        sx={{
          width: 225,
        }}
      >
        {text}
      </Typography>
      {buttons.map((button) => {
        const { id, text, loading } = button;

        if (loading) {
          return (
            <LoadingButton
              key={id}
              {...button}
              sx={{
                mx: '0.5rem',
              }}
            >
              {text}
            </LoadingButton>
          );
        }

        return (
          <Button
            key={id}
            {...button}
            sx={{
              mx: '0.5rem',
            }}
          >
            {text}
          </Button>
        );
      })}
    </Box>
  );
}
