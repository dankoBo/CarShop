import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, CardActions } from '@mui/material';

function CarCard() {
	return (
		<Card sx={{ maxWidth: 270, height: 325 }}>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					image="#"
					alt="green iguana"
				/>
				<CardContent>
					<p>Brand</p>
					<div>
						<p>Discount</p>
						<p>Price</p>
					</div>
					<p>Free Shipping</p>
				</CardContent>
			</CardActionArea>
			<CardActions>
				<CardButton />
			</CardActions>
		</Card>
	);
}

export default CarCard;