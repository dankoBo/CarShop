import { ButtonStyled } from './ContainedButtonStyled'

function ContainedButton(props) {
	return (
		<div>
			<ButtonStyled type='submit' background={props.background} variant='contained'>
				{props.name}
			</ButtonStyled>
		</div>
	);
}

export default ContainedButton;