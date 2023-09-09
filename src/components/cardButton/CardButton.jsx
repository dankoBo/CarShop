import CardButtonStyled from './CardButtonStyled'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function CardButton() {
	return (
		<div>
			<CardButtonStyled variant='contained'>
				<ArrowRightAltIcon />
			</CardButtonStyled>
		</div>
	);
}

export default CardButton;