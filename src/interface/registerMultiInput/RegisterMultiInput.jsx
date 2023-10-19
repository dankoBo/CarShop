import { TextFieldStyled } from './RegisterMultiInputStyled'

function RegisterMultiInput(props) {
	const { name, value, onChange, error, helperText } = props;
	return (
		<div>
			<TextFieldStyled
				name={name}
				value={value}
				onChange={onChange}
				error={error}
				helperText={helperText}
			/>
		</div>
	);
}

export default RegisterMultiInput;