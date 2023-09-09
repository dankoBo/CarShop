import CarCard from '../../../components/carCard/CarCard';
import { PopularProductsWrapper } from './PopularProductsStyled'

function PopularProducts() {
	return (
		<PopularProductsWrapper>
			<h2>Popular Products</h2>
			<div>
				<CarCard />
			</div>
		</PopularProductsWrapper>
	);
}

export default PopularProducts;