import { CarBrandStyled, CarDateStyled, CardStyled } from './LatestCarCard.styled'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

function LatestCarCard(props) {
	return (
		<CardStyled>
			<CardActionArea>
				<CardMedia
					component="img"
					height="200"
					image={props.photo}
					alt="car"
				/>
				<CardContent>
					<CarBrandStyled>{props.brand}</CarBrandStyled>
					<CarDateStyled>{props.date}</CarDateStyled>
				</CardContent>
			</CardActionArea>
		</CardStyled>
	);
}

export default LatestCarCard;