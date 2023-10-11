import PriceInputFilter from '../../interface/priceInputFilter/PriceInputFilter'
import PriceInputContainer from './PriceInputFilterContainerStyled'
import { useState } from 'react'
import { popularCarsData } from '../../dataBase/carsData'

function PriceInputFilterContainer({setMinPrice, setMaxPrice}) {
	// const [minPrice, setMinPrice] = useState(0);
	// const [maxPrice, setMaxPrice] = useState(Infinity);

	// function filterPrice(event) {
	// 	// if (event.key === 'Enter') {
	// 		const filteredCars = popularCarsData.filter((car) => {
	// 			return car.price >= minPrice && car.price <= maxPrice;
	// 		});

	// 		console.log(filteredCars);
			
	// 	// }
	// }

	function saveMinPrice(event) {
		setMinPrice(event.target.value)
	}

	function saveMaxPrice(event) {
		setMaxPrice(event.target.value)
	}

	return (
		<PriceInputContainer>
			<PriceInputFilter
				label="min"
				// value={minPrice}
				onChangeListener={saveMinPrice}
				// filtering={filterPrice}
			/>
							-
			<PriceInputFilter
				label="max" 
				// value={maxPrice}
				onChangeListener={saveMaxPrice}
				// filtering={filterPrice}
			/>
		</PriceInputContainer>
	);
}

export default PriceInputFilterContainer;