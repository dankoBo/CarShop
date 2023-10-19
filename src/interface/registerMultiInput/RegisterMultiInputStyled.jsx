import styled from 'styled-components'
import TextField from '@mui/material/TextField';

const TextFieldStyled = styled(TextField)`
	& .MuiOutlinedInput-root {
		width: 245px;
		height: 35px;
	}
`

export { TextFieldStyled }