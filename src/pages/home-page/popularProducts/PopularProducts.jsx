import { 
	Container,
	Title,
	CardContainer, 
} from './PopularProducts.styled'
import CarCard from '../../../components/carCard/CarCard'
import { popularCarsData } from '../../../data/carsData'
import CustomButton from './customButton/CustomButton'

function PopularProducts() {
	const firstFourCars = popularCarsData.slice(0, 4);

    return (
        <Container>
            <Title>Popular Products</Title>
            <CardContainer>
                {
					firstFourCars.map(car => (
						<CarCard 
							key={car.id}
							photo={car.photo}
							model={car.model}
							price={car.price}
							discount={car.discount}
							delivery={car.delivery}
							availability={car.availability}
							button={<CustomButton />}
							stylesMargin='38px 0px 17px'
						/>
					))
				}
            </CardContainer>
        </Container>
    );
}

export default PopularProducts;