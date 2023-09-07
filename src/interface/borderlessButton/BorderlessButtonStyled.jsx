import styled from 'styled-components'
import Button from '@mui/material/Button';

const ButtonStyled = styled(Button)`
	&.MuiButton-root {
		color: ${ props => {
				if (props.textcolor === 'black') {
					return '#252A34'
				} else if (props.textcolor === 'red') {
					return '#eb4034'
				} else if (props.textcolor === 'white') {
					return '#FFFFFF'
				}
			}
		};
		font-family: Open Sans;
		font-style: normal;
		text-transform: none;
	}

	&.MuiButton-text {
		font-weight: 600;
		font-size: 14px;
		&:hover {
			font-weight: 900;
			font-size: 16px;
		}
	}
`
export default ButtonStyled