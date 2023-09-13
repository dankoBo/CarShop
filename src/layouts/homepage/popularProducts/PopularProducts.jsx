import PopularCarCard from '../../../components/popularCarCard/PopularCarCard';
import { PopularProductsWrapper, PopularProductsTitle, PopularProductsContainer } from './PopularProductsStyled'
import { popularCarsData } from '../../../dataBase/carsData'

function PopularProducts() {
    return (
        <PopularProductsWrapper>
            <PopularProductsTitle>Popular Products</PopularProductsTitle>
            <PopularProductsContainer>
                {
					popularCarsData.map(car => (
						<PopularCarCard 
							key={car.id}
							photo={car.photo}
							brand={car.brand}
							price={car.price}
							discount={car.discount}
							delivery={car.delivery}
							availability={car.availability}
						/>
					))
				}
            </PopularProductsContainer>
        </PopularProductsWrapper>
    );
}

export default PopularProducts;