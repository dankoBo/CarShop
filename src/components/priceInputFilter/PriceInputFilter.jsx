import TextField from '@mui/material/TextField';
import TextFieldStyled from './PriceInputFilterStyled'


function PriceInputFilter(props) {
	return (
		<div>
			<TextFieldStyled
				id="outlined-basic"
				type="number"
				label={props.label}
				variant="outlined"
				InputLabelProps={{ shrink: true }}
			/>
		</div>
	);
}

export default PriceInputFilter;