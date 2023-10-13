// import { LogInWrapper } from './LogInStyled'

// function LogIn() {
// 	return (
// 		<LogInWrapper>
// 			<h4>Log In</h4>
// 			<div>
// 				email
// 				password
// 			</div>
// 			<p>
// 				forgot Password
// 			</p>
// 			<div>
// 				checkbox
// 			</div>
// 			<div>
// 				button login
// 			</div>
// 		</LogInWrapper>
// 	);
// }

// export default LogIn;

// import React from 'react';
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { Button, TextField } from '@mui/material';

// // Схема валідації для полів форми
// const validationSchema = Yup.object().shape({
//   email: Yup.string()
//     .email('Неправильний формат електронної пошти')
//     .required('Поле Email є обов\'язковим'),
//   password: Yup.string()
//     .min(8, 'Пароль повинен містити принаймні 8 символів')
//     .required('Поле Password є обов\'язковим'),
// });

// const LogIn = () => (
//   <Formik
//     initialValues={{ email: '', password: '' }}
//     validationSchema={validationSchema}
//     onSubmit={console.log('Hello')}
//   >
//     {({ isSubmitting }) => (
//       <Form>
//         <Field
//           component={TextField}
//           name="email"
//           type="email"
//           label="Email"
//         />
//         <ErrorMessage name="email" component="div" />
        
//         <Field
//           component={TextField}
//           type="password"
//           label="Password"
//           name="password"
//         />
//         <ErrorMessage name="password" component="div" />
        
//         <Button type="submit" disabled={isSubmitting}>
//           Вхід
//         </Button>
//       </Form>
//     )}
//   </Formik>
// );

// export default LogIn;


import React from 'react';
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