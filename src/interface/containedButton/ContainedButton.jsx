import { ButtonStyled } from './ContainedButtonStyled'

function ContainedButton(props) {
	return (
		<div>
			<ButtonStyled variant='contained'>
				{props.name}
			</ButtonStyled>
		</div>
	);
}

export default ContainedButton;