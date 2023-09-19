import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';
import { CardStyled, CarBrandStyled, CarPriceContainerStyled, CarPriceStyled, CarPriceDiscoundStyled, CarPriceCrossedStyled, DeliveryStyled } from './CarCardStyled'

function CarCard(props) {
	return (
		<CardStyled sx={{ borderRadius: '10px'}}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="163"
					image={props.photo}
					alt="car"
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
					{ props.button }
			</CardActions>
		</CardStyled>
	);
}

export default CarCard;








// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { CardActionArea, CardActions } from '@mui/material';
// import { CarBrandStyled } from './CarCardStyled'

// function CarCard(props) {
// 	return (
// 		<CardStyled sx={{ borderRadius: '10px'}}>
// 			<CardActionArea>
// 				<CardMedia
// 					component="img"
// 					height="163"
// 					image={props.photo}
// 					alt="car"
// 				/>
// 				<CardContent>
// 					<CarBrandStyled>{props.brand}</CarBrandStyled>
// 				</CardContent>
// 			</CardActionArea>
// 		</CardStyled>
// 	);
// }

// export default CarCard;