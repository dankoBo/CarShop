import { 
	CardStyled,
	CarBrand, 
	CarDate
} from './LatestCarCard.styled'

import { CardActionArea } from '@mui/material'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'

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
					<CarBrand>{props.brand}</CarBrand>
					<CarDate>{props.date}</CarDate>
				</CardContent>
			</CardActionArea>
		</CardStyled>
	);
}

export default LatestCarCard;