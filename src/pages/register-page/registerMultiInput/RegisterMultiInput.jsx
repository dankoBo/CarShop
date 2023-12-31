import { TextFieldStyled } from './RegisterMultiInput.styled'

function RegisterMultiInput(props) {
	const { name, value, onChange, error, helperText } = props
	
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

export default RegisterMultiInput;