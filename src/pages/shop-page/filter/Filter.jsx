import BrandsFilter from '../../../components/brandsFilter/BrandsFilter';
import SearchInputFilter from '../../../components/searchInputFilter/SearchInputFilter';
import PriceFilterInputContainer from '../../../components/priceFilterInputContainer/PriceFilterInputContainer'

function Filter( {setMinPrice, setMaxPrice, checked, setChecked, searchTerm, setSearchTerm} ) {
	return (
		<FilterWrapper>
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
		</FilterWrapper>
	);
}

export default Filter;