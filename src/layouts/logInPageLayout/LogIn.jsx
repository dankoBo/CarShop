import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';

// Схема валідації для полів форми
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Неправильний формат електронної пошти')
    .required('Поле Email є обов\'язковим'),
  password: Yup.string()
    .min(8, 'Пароль повинен містити принаймні 8 символів')
    .required('Поле Password є обов\'язковим'),
});

const LogIn = () => {
  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: () => {
      alert('hello');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        name="email"
        type="email"
        label="Email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {formik.errors.email && formik.touched.email && (
        <div>{formik.errors.email}</div>
      )}
      
      <TextField
        name="password"
        type="password"
        label="Password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />
      {formik.errors.password && formik.touched.password && (
        <div>{formik.errors.password}</div>
      )}
      
      <Button type="submit">
        Вхід
      </Button>
    </form>
  );
};

export default LogIn;