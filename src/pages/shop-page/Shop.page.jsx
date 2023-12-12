import { 
	Container, 
	FilterContactsContainer, 
	PaginationContainer 
} from './Shop.page.styled'

import { useState, useEffect } from 'react'

import Contacts from "./contacts/Contacts"
import Filter from "./filter/Filter"
import ShopCars from './shopCars/ShopCars'
import PaginationStyled from './pagination/Pagination'

import { popularCarsData } from '../../data/carsData'

function Shop() {
	const [minPrice, setMinPrice] = useState(0)
	const [maxPrice, setMaxPrice] = useState(Infinity)
	const [filteredCars, setFilteredCars] = useState(popularCarsData)
	const [searchTerm, setSearchTerm] = useState('')
	const [checked, setChecked] = useState({
        Audi: false,
        Ford: false,
        Bugatti: false,
        Porsche: false
    })

	useEffect(() => {
		const isAnyCheckboxChecked = Object.values(checked).some(value => value)
		const newFilteredCars = popularCarsData
			.filter(car => !isAnyCheckboxChecked || checked[car.brand])
			.filter(car => car.price >= minPrice && car.price <= maxPrice)
			.filter(car => car.model.toLowerCase().includes(searchTerm.toLowerCase()))
		setFilteredCars(newFilteredCars);
	}, [checked, minPrice, maxPrice, searchTerm])

	return (
		<Container>
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
			<PaginationContainer>
				<ShopCars filteredCars={filteredCars}/>
				<PaginationStyled />
			</PaginationContainer>
		</Container>
	);
}

export default Shop