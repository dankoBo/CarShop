import BrandsFilter from '../../../components/brandsFilter/BrandsFilter';
import SearchInputFilter from '../../../components/searchInputFilter/SearchInputFilter';
import { FilterWrapper, PriceFilterContainer, PriceFilterTitle,  BrandsFilterTitle, BrandsFilterContainer, SearchFilterContainer, SearchFilterTitle } from './FilterStyled'
import PriceFilterInputContainer from '../../../components/priceFilterInputContainer/PriceFilterInputContainer'

function Filter( {setMinPrice, setMaxPrice} ) {

	return (
		<FilterWrapper>
			<PriceFilterContainer>
				<PriceFilterTitle>Price</PriceFilterTitle>
				<PriceFilterInputContainer setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
			</PriceFilterContainer>
			<BrandsFilterContainer>
				<BrandsFilterTitle>Brands</BrandsFilterTitle>
				<BrandsFilter />
			</BrandsFilterContainer>
			<SearchFilterContainer>
				<SearchFilterTitle>Search</SearchFilterTitle>
				<SearchInputFilter />
			</SearchFilterContainer>
		</FilterWrapper>
	);
}

export default Filter;