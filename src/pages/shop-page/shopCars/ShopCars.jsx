import { ShopCarsWrapper, ShopCarsContainer, ShopCarsTitle} from './ShopCarsStyled'
import CarCard from '../../../components/carCard/CarCard'
import ContainedButton from '../../../components/containedButton/ContainedButton'


function ShopCars(props) {
	return (
		<ShopCarsWrapper>
			<ShopCarsTitle>Our shop</ShopCarsTitle>
			<ShopCarsContainer>
				{
					props.filteredCars.map(car => (
						<CarCard 
							key={car.id}
							photo={car.photo}
							model={car.model}
							price={car.price}
							discount={car.discount}
							delivery={car.delivery}
							availability={car.availability}
							stylesMargin='10px 0px'
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