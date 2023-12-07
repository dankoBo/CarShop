import BorderlessButton from '../../interface/borderlessButton/BorderlessButton'
import ContainedButton from '../../interface/containedButton/ContainedButton';
import { Link } from 'react-router-dom'

function AuthControls() {
	return (
		<AuthControlsContainerStyled>
			<Link to='logIn'><BorderlessButton color='red' name="LogIn" /></Link>
			<Link to='register'><ContainedButton background="red" name="Register" /></Link>
		</AuthControlsContainerStyled>
	);
}

export default AuthControls;