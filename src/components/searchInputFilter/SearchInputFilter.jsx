import SearchTextFieldStyled from './SearchInputFilterStyled';

function SearchInputFilter({ searchTerm, setSearchTerm }) {
	return (
		<div>
			<SearchTextFieldStyled
				id="outlined-basic"
				type="text"
				variant="outlined"
				placeholder='Search by name'
				value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
			/>
	);
}

export default SearchInputFilter;