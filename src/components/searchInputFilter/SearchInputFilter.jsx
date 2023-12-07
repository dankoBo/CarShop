import { TextFieldStyled } from './SearchInputFilter.styled';

function SearchInputFilter({ searchTerm, setSearchTerm }) {
	return (
			<TextFieldStyled
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