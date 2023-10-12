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
	const [searchTerm, setSearchTerm] = useState('');
	const [checked, setChecked] = useState({
        Audi: false,
        Ford: false,
        Bugatti: false,
        Porsche: false
    });

	useEffect(() => {
		const isAnyCheckboxChecked = Object.values(checked).some(value => value);
		const newFilteredCars = popularCarsData
			.filter(car => !isAnyCheckboxChecked || checked[car.brand])
			.filter(car => car.price >= minPrice && car.price <= maxPrice)
			.filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()));
		setFilteredCars(newFilteredCars);
	}, [checked, minPrice, maxPrice, searchTerm]);


	return (
		<ShopPageContainer>
			<FilterContactsContainer>
				<Filter 
					setMinPrice={setMinPrice} 
					setMaxPrice={setMaxPrice} 
					checked={checked} 
					setChecked={setChecked}
					searchTerm={searchTerm}
					setSearchTerm={setSearchTerm}
				/>
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