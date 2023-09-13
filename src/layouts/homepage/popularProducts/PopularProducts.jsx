import CarCard from '../../../components/carCard/CarCard';
import { PopularProductsWrapper, PopularProductsContainer } from './PopularProductsStyled'

import carsData from '../../../dataBase/carsData'

function PopularProducts() {
    return (
        <PopularProductsWrapper>
            <h2>Popular Products</h2>
            <PopularProductsContainer>
                {carsData.map(car => (
                    <CarCard 
                        key={car.id}
                        photo={car.photo}
                        brand={car.brand}
                        price={car.price}
                        discount={car.discount}
                        availability={car.availability}
                    />
                ))}
            </PopularProductsContainer>
        </PopularProductsWrapper>
    );
}

export default PopularProducts;