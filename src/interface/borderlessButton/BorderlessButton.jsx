import ButtonStyled from './BorderlessButtonStyled'

function BorderlessButton(props) {
	return (
		<div>
			<ButtonStyled>
				{props.name}
			</ButtonStyled>
		</div>
	);
}

export default BorderlessButton;