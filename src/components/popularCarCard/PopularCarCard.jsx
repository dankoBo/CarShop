import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import CustomButton from '../../interface/customButton/CustomButton';
import { CardStyled, CarBrandStyled, CarPriceContainerStyled, CarPriceStyled, CarPriceDiscoundStyled, CarPriceCrossedStyled, DeliveryStyled } from './PopularCarCardStyled'

function PopularCarCard(props) {
	return (
		<CardStyled sx={{ borderRadius: '10px'}}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="163"
					image={props.photo}
					alt="green iguana"
				/>
				<CardContent>
					<CarBrandStyled>{props.brand}</CarBrandStyled>
					<CarPriceContainerStyled>
					{
						props.discount ? 
								<>
									<CarPriceDiscoundStyled>{props.discount}</CarPriceDiscoundStyled>
									<CarPriceCrossedStyled>{props.price}</CarPriceCrossedStyled>
								</> : 
								<CarPriceStyled>{props.price}</CarPriceStyled> 
					}
					</CarPriceContainerStyled>
				</CardContent>
			</CardActionArea>
			<CardActions>
					<DeliveryStyled>{props.delivery}</DeliveryStyled>
					<CustomButton />
			</CardActions>
		</CardStyled>
	);
}

export default PopularCarCard;