import styled from 'styled-components'
import Button from '@mui/material/Button';

const ButtonStyled = styled(Button)`
	&.MuiButton-root {
		width: 110px;
		background-color: ${ props => props.background === 'red' ? '#FF2E63' : '#346CD9' };
		text-transform: none;

		font-family: Open Sans;
		font-size: 16px;
		font-style: normal;
		font-weight: 600;
		&:hover {
			background-color: #880123;
		}
	}
`

export { ButtonStyled }