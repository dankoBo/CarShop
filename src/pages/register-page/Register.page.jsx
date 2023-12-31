import { 
	Container, 
	Title, 
	InputLabel, 
	FirstLastNamesContainer, 
	PasswordContainer, 
	ButtonContainer, 
	TermsPolicyContainer 
} from './Register.page.styled'

import { 
	FormControlLabel, 
	Radio, 
	RadioGroup, 
	FormControl, 
	Link 
} from '@mui/material'

import { useFormik } from 'formik'
import * as Yup from 'yup';

import RegisterMultiInput from './registerMultiInput/RegisterMultiInput'
import RegisterEmailInput from './registerEmailInput/RegisterEmailInput'
import ContainedButton from '../../components/containedButton/ContainedButton'

function Register() {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
			gender: 'male',
		},
		validationSchema: Yup.object({
			firstName: Yup.string().required('This field is required'),
			lastName: Yup.string().required('This field is required'),
			email: Yup.string().email('Enter a valid email').required('Email is required'),
			password: Yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
			confirmPassword: Yup.string()
				.oneOf([Yup.ref('password'), null], 'Passwords do not match')
				.required('This field is required'),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
  	});

	return (
		<Container>
			<Title>Create an Account</Title>
			<form onSubmit={formik.handleSubmit}>
				<FirstLastNamesContainer>
					<div>
						<InputLabel>First Name</InputLabel>
						<RegisterMultiInput
							id="firstName"
							name="firstName"
							label="First Name"
							onChange={formik.handleChange}
							value={formik.values.firstName}
							error={formik.touched.firstName && Boolean(formik.errors.firstName)}
							helperText={formik.touched.firstName && formik.errors.firstName}
						/>
					</div>
					<div>
						<InputLabel>Last Name</InputLabel>
						<RegisterMultiInput
							id="lastName"
							name="lastName"
							label="Last Name"
							onChange={formik.handleChange}
							value={formik.values.lastName}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
						/>
					</div>
				</FirstLastNamesContainer>
				<div>
					<InputLabel>E-mail</InputLabel>
					<RegisterEmailInput
						id="email"
						name="email"
						label="Email"
						onChange={formik.handleChange}
						value={formik.values.email}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
					/>
				</div>
				<FormControl component="fieldset">
					<RadioGroup
						name="gender"
						value={formik.values.gender}
						onChange={formik.handleChange}
						row
						>
						<FormControlLabel
							value="male"
							control={<Radio color="primary" />}
							label="Male"
						/>
						<FormControlLabel
							value="female"
							control={<Radio color="primary" />}
							label="Female"
						/>
					</RadioGroup>
				</FormControl>
				<PasswordContainer>
					<div>
						<InputLabel>Password</InputLabel>
						<RegisterMultiInput
							id="password"
							name="password"
							label="Password"
							type="password"
							onChange={formik.handleChange}
							value={formik.values.password}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
						/>
					</div>
					<div>
						<InputLabel>Confirm Password</InputLabel>
						<RegisterMultiInput
							id="confirmPassword"
							name="confirmPassword"
							label="Confirm Password"
							type="password"
							onChange={formik.handleChange}
							value={formik.values.confirmPassword}
							error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
							helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
						/>
					</div>
				</PasswordContainer>
				<ButtonContainer>
					<ContainedButton name="Register" background="red" />
				</ButtonContainer>
			</form>
			<TermsPolicyContainer>
				<p>
					By clicking the 'Sign Up' button, you confirm that you accept our and
				</p>
				<p>
					<Link href="#">Terms of Use</Link> and <Link href="#">Privacy Policy</Link>
				</p>
			</TermsPolicyContainer>
		</Container>
	);
};

export default Register;