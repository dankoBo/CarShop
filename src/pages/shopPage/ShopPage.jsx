import { ShopPageContainer, FilterContactsContainer, OurShopPaginationContainer } from './ShopPageStyled'
import Contacts from "../../layouts/shopPage/contacts/Contacts";
import Filter from "../../layouts/shopPage/filter/Filter";
import ShopCars from '../../layouts/shopPage/shopCars/ShopCars';
import PaginationShop from '../../components/pagination/Pagination';

import { useState, useEffect } from 'react'
import { popularCarsData } from '../../dataBase/carsData'

function ShopPage() {

	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(Infinity);
	const [filteredCars, setFilteredCars] = useState(popularCarsData);

	useEffect(() => {
		const newFilteredCars = popularCarsData.filter((car) => {
			return car.price >= minPrice && car.price <= maxPrice;
		});
		setFilteredCars(newFilteredCars);
	}, [minPrice, maxPrice]);


	return (
		<ShopPageContainer>
			<FilterContactsContainer>
				<Filter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice} />
				<Contacts />
			</FilterContactsContainer>
			<OurShopPaginationContainer>
				<ShopCars filteredCars={filteredCars}/>
				<PaginationShop />
			</OurShopPaginationContainer>
		</ShopPageContainer>
	);
}

export default ShopPage;