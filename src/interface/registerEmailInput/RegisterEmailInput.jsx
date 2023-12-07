import { TextFieldStyled } from './RegisterEmailInputStyled'

function RegisterEmailInput(props) {
	const { name, value, onChange, error, helperText } = props;

	return (
			<TextFieldStyled
				name={name}
				value={value}
				onChange={onChange}
				error={error}
				helperText={helperText}
			/>
	);
}

export default RegisterEmailInput;