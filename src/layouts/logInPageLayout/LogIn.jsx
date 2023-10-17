import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';
import Link from '@mui/material/Link';
import ContainedButton from '../../interface/containedButton/ContainedButton'

import LogInInput from '../../interface/logInInput/LogInInput'
import LogInCheckbox from '../../interface/logInCheckbox/LogInCheckbox';
import { LogInWrapper, LogInTitle, InputName, ContainedButtonLogIn, ButtonWrapper } from './LogInStyled';

// Схема валідації для полів форми
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
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
		<LogInWrapper>
			<LogInTitle>Log In</LogInTitle>
			<form onSubmit={formik.handleSubmit}>
					<InputName>E-mail</InputName>
					<LogInInput
						name="email"
						type="email"
						label="Email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{formik.errors.email && formik.touched.email && (
						<div style={{ color: 'red' }}>{formik.errors.email}</div>
					)}
					<InputName>Password</InputName>
					<LogInInput
						name="password"
						type="password"
						label="Password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					{formik.errors.password && formik.touched.password && (
						<div style={{ color: 'red' }}>{formik.errors.password}</div>
					)}
					<Link href="#" underline='none'>Forgot your password?</Link>
					<LogInCheckbox />
					<ButtonWrapper>
						<ContainedButtonLogIn name="Log In" background="red" />
					</ButtonWrapper>
			</form>
		</LogInWrapper>
	);
};

export default LogIn;