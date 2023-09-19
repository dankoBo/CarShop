import { ShopCarsWrapper, ShopCarsContainer} from './ShopCarsStyled'
import CarCard from '../../../components/carCard/CarCard'
import ContainedButton from '../../../interface/containedButton/ContainedButton'
import { popularCarsData } from '../../../dataBase/carsData'

function ShopCars() {
	return (
		<ShopCarsWrapper>
			<h2>Our shop</h2>
			<ShopCarsContainer>
				{
						popularCarsData.map(car => (
							<CarCard 
								key={car.id}
								photo={car.photo}
								brand={car.brand}
								price={car.price}
								discount={car.discount}
								delivery={car.delivery}
								availability={car.availability}
								button={
									<ContainedButton
										name="Read more"
										background="red"
									/>
								}
							/>
						))
				}
			</ShopCarsContainer>
		</ShopCarsWrapper>
	);
}

export default ShopCars;