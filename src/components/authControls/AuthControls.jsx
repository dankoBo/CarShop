import BorderlessButton from '../../interface/borderlessButton/BorderlessButton'
import ContainedButton from '../../interface/containedButton/ContainedButton';
import AuthControlsContainerStyled from './AuthControlsStyled'

function AuthControls() {
	return (
		<AuthControlsContainerStyled>
			<BorderlessButton isRed='true' name="LogIn"/>
			<ContainedButton />
		</AuthControlsContainerStyled>
	);
}

export default AuthControls;