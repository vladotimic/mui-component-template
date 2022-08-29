import Head from 'next/head';
import { Typography } from '@mui/material';

import GeneralDialog from '../../components/dialogs/GeneralDialog';

export default function DialogPage() {
  return (
    <>
      <Head>
        <title>Dialogs / Dialog Example</title>
      </Head>
      <Typography variant="h4">Dialog</Typography>
      <GeneralDialog />
    </>
  );
}
