import { Container } from './AuthControls.styled'
import BorderlessButton from '../../borderlessButton/BorderlessButton'
import ContainedButton from '../../containedButton/ContainedButton'
import { Link } from 'react-router-dom'

function AuthControls() {
	return (
		<Container>
			<Link to='logIn'><BorderlessButton color='red' name="LogIn" /></Link>
			<Link to='register'><ContainedButton background="red" name="Register" /></Link>
		</Container>
	);
}

export default AuthControls;