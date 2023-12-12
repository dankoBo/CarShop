import { ButtonStyled } from './BorderlessButton.styled'

function BorderlessButton(props) {
	return (
			<ButtonStyled textcolor={props.color}>
				{props.name}
			</ButtonStyled>
	);
}

export default BorderlessButton;