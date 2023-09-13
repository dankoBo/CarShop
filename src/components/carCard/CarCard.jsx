import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import CustomButton from '../../interface/customButton/CustomButton';
import { CarBrandStyled, CarPriceContainerStyled, CarPriceStyled, CarPriceDiscoundStyled } from './CarCardStyled'

function CarCard(props) {
	return (
		<Card sx={{ width: 270, height: 325 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image={props.photo}
					alt="green iguana"
				/>
				<CardContent>
					<CarBrandStyled>{props.brand}</CarBrandStyled>
					<CarPriceContainerStyled>
						<CarPriceDiscoundStyled>{props.discount}</CarPriceDiscoundStyled>
						<CarPriceStyled>{props.price}</CarPriceStyled>
					</CarPriceContainerStyled>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<p>Available at your store</p>
				<CustomButton />
			</CardActions>
		</Card>
	);
}

export default CarCard;