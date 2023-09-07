import ButtonStyled from './BorderlessButtonStyled'

function BorderlessButton(props) {
	return (
		<div>
			<ButtonStyled textcolor={props.color}>
				{props.name}
			</ButtonStyled>
		</div>
	);
}

export default BorderlessButton;