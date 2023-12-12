import { 
	Container, 
	Title, 
	InputLabel, 
	ButtonContainer 
} from './LogIn.page.styled'

import { useFormik } from 'formik';
import * as Yup from 'yup'

import Link from '@mui/material/Link';

import LogInInput from './logInInput/LogInInput'
import LogInCheckbox from './logInCheckbox/LogInCheckbox'
import ContainedButton from '../../components/containedButton/ContainedButton'

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
		}
	})

	return (
		<Container>
			<Title>Log In</Title>
			<form onSubmit={formik.handleSubmit}>
					<InputLabel>E-mail</InputLabel>
					<LogInInput
						name="email"
						type="email"
						label="Email"
						onChange={formik.handleChange}
						value={formik.values.email}
					/>
					{
						formik.errors.email && formik.touched.email && (
							<div style={{ color: 'red' }}>{formik.errors.email}</div>
						)
					}
					<InputLabel>Password</InputLabel>
					<LogInInput
						name="password"
						type="password"
						label="Password"
						onChange={formik.handleChange}
						value={formik.values.password}
					/>
					{
						formik.errors.password && formik.touched.password && (
							<div style={{ color: 'red' }}>{formik.errors.password}</div>
						)
					}
					<Link href="#" underline='none'>Forgot your password?</Link>
					<LogInCheckbox />
					<ButtonContainer>
						<ContainedButton name="Log In" background="red" />
					</ButtonContainer>
			</form>
		</Container>
	)
}

export default LogIn;