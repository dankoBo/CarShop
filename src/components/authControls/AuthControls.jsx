import BorderlessButton from '../../interface/borderlessButton/BorderlessButton'
import ContainedButton from '../../interface/containedButton/ContainedButton';
import AuthControlsContainerStyled from './AuthControlsStyled'

function AuthControls() {
	return (
		<AuthControlsContainerStyled>
			<BorderlessButton color='red' name="LogIn" />
			<ContainedButton background="red" name="Register" />
		</AuthControlsContainerStyled>
	);
}

export default AuthControls;