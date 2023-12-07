import { ButtonStyled } from './CustomButtonStyled'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'

function CustomButton() {
	return (
			<ButtonStyled>
				<ArrowRightAltIcon sx={{ color: '#FFFFFF' }}/>
			</ButtonStyled>
	)
}

export default CustomButton;