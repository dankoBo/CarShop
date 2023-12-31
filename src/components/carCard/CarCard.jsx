import { 
	CardActionsStyled, 
	CardStyled, 
	CarModelStyled, 
	CarPriceContainerStyled, 
	CarPriceStyled, 
	CarPriceDiscoundStyled, 
	CarPriceCrossedStyled, 
	DeliveryStyled 
} from './CarCard.styled'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'

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
					<CarModelStyled>{props.model}</CarModelStyled>
					<CarPriceContainerStyled $stylesMargin={props.stylesMargin}>
						{
							props.discount ? 
									<>
										<CarPriceDiscoundStyled>${props.discount}</CarPriceDiscoundStyled>
										<CarPriceCrossedStyled>${props.price}</CarPriceCrossedStyled>
									</> : 
									<CarPriceStyled>${props.price}</CarPriceStyled> 
						}
					</CarPriceContainerStyled>
					<DeliveryStyled>{props.delivery}</DeliveryStyled>
				</CardContent>
			</CardActionArea>
				<CardActionsStyled>
					{props.button}
				</CardActionsStyled>
			
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