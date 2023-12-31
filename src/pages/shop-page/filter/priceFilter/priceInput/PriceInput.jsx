import { TextFieldStyled } from './PriceInput.styled'


function PriceInput(props) {
	return (
		<div>
			<TextFieldStyled
				id="outlined-basic"
				type="number"
				label={props.label}
				variant="outlined"
				InputLabelProps={{ shrink: true }}
				onChange={props.onChangeListener}
				onBlur={props.filtering}
			/>
		</div>
	);
}

export default PriceInput;