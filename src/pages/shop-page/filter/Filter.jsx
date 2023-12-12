import { 
	Container, 
	PriceContainer, 
	PriceFilterTitle,  
	BrandsFilterTitle, 
	BrandsContainer, 
	SearchContainer, 
	SearchFilterTitle 
} from './FilterStyled'

import BrandFilter from './brandFilter/BrandFilter';
import SearchFilter from './searchFilter/SearchFilter';
import PriceFilter from './priceFilter/PriceFilter'

function Filter( {setMinPrice, setMaxPrice, checked, setChecked, searchTerm, setSearchTerm} ) {
	return (
		<Container>
			<PriceContainer>
				<PriceFilterTitle>Price</PriceFilterTitle>
				<PriceFilter setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
			</PriceContainer>
			<BrandsContainer>
				<BrandsFilterTitle>Brands</BrandsFilterTitle>
				<BrandFilter checked={checked} setChecked={setChecked} />
			</BrandsContainer>
			<SearchContainer>
				<SearchFilterTitle>Search</SearchFilterTitle>
				<SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
			</SearchContainer>
		</Container>
	);
}

export default Filter;