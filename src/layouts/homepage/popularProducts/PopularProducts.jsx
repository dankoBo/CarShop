import CarCard from '../../../components/carCard/CarCard';
import { PopularProductsWrapper, PopularProductsTitle, PopularProductsContainer } from './PopularProductsStyled'
import { popularCarsData } from '../../../dataBase/carsData'

import CustomButton from '../../../interface/customButton/CustomButton';

function PopularProducts() {
	const firstFourCars = popularCarsData.slice(0, 4);

    return (
        <PopularProductsWrapper>
            <PopularProductsTitle>Popular Products</PopularProductsTitle>
            <PopularProductsContainer>
                {
					firstFourCars.map(car => (
						<CarCard 
							key={car.id}
							photo={car.photo}
							brand={car.brand}
							price={car.price}
							discount={car.discount}
							delivery={car.delivery}
							availability={car.availability}
							button={<CustomButton />}
						/>
					))
				}
            </PopularProductsContainer>
        </PopularProductsWrapper>
    );
}

export default PopularProducts;