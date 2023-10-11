import BrandsFilter from '../../../components/brandsFilter/BrandsFilter';
import SearchInputFilter from '../../../components/searchInputFilter/SearchInputFilter';
import { FilterWrapper, PriceFilterContainer, PriceFilterTitle, PriceInputContainer, BrandsFilterTitle, BrandsFilterContainer, SearchFilterContainer, SearchFilterTitle } from './FilterStyled'

function Filter() {
	return (
		<FilterWrapper>
			<PriceFilterContainer>
				<PriceFilterTitle>Price</PriceFilterTitle>
				<PriceInputContainer>
					<PriceInputFilter label="min" />
									-
					<PriceInputFilter label="max" />
				</PriceInputContainer>
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