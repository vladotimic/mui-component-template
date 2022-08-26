import Head from 'next/head';

import Table from '../../components/list-views/data-table/DataTable';

export default function DataTable() {
  return (
    <>
      <Head>
        <title>List Views / Data Table</title>
      </Head>
      <Table />
    </>
  );
}
