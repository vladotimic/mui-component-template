import Head from 'next/head';
import { Typography } from '@mui/material';

import data from '../../components/forms/fields/data';
import Field from '../../components/forms/fields/Field';

export default function fields() {
  return (
    <>
      <Head>
        <title>Forms / Fields</title>
      </Head>
      <Typography variant="h4">Fields</Typography>
      {data.map((item) => {
        return <Field key={item.id} {...item} />;
      })}
    </>
  );
}
