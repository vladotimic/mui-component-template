import Head from 'next/head';

import DialogForm from '../../components/forms/dialog-form/DialogForm';

export default function DialogFormPage() {
  return (
    <>
      <Head>
        <title>Forms / Dialog Form</title>
      </Head>
      <DialogForm />
    </>
  );
}
