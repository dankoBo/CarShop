import ButtonStyled from './CustomButtonStyled'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function CustomButton() {
	return (
		<div>
			<ButtonStyled>
				<ArrowRightAltIcon sx={{color: '#FFFFFF'}}/>
			</ButtonStyled>
		</div>
	);
}

export default CustomButton;