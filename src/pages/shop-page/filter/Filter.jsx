import { 
	Container, 
	PriceFilterContainer, 
	PriceFilterTitle,  
	BrandsFilterTitle, 
	BrandsFilterContainer, 
	SearchFilterContainer, 
	SearchFilterTitle 
} from './FilterStyled'

import BrandsFilter from './brandsFilter/BrandsFilter';
import SearchInputFilter from './searchInputFilter/SearchInputFilter';
import PriceFilterInputContainer from '../../../components/priceFilterInputContainer/PriceFilterInputContainer'

function Filter( {setMinPrice, setMaxPrice, checked, setChecked, searchTerm, setSearchTerm} ) {
	return (
		<Container>
			<PriceFilterContainer>
				<PriceFilterTitle>Price</PriceFilterTitle>
				<PriceFilterInputContainer setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
			</PriceFilterContainer>
			<BrandsFilterContainer>
				<BrandsFilterTitle>Brands</BrandsFilterTitle>
				<BrandsFilter checked={checked} setChecked={setChecked} />
			</BrandsFilterContainer>
			<SearchFilterContainer>
				<SearchFilterTitle>Search</SearchFilterTitle>
				<SearchInputFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</SearchFilterContainer>
		</Container>
	);
}

export default Filter;