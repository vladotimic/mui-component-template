import { useState } from 'react';

export default function useFormDialog() {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    showPassword: false,
    gender: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    handleClose();
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return {
    open,
    values,
    handleSubmit,
    handleChange,
    handleClickOpen,
    handleClickShowPassword,
    handleClose,
  };
}
