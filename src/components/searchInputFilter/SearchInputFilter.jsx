import SearchTextFieldStyled from './SearchInputFilterStyled';

function SearchInputFilter() {
	return (
		<div>
			<SearchTextFieldStyled
				id="outlined-basic"
				type="text"
				variant="outlined"
				placeholder='Search by name'
			/>
		</div>
	);
}

export default SearchInputFilter;