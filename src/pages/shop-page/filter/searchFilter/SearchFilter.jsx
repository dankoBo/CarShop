import { TextFieldStyled } from './SearchFilter.styled';

function SearchFilter({ searchTerm, setSearchTerm }) {
	return (
			<TextFieldStyled
				id="outlined-basic"
				type="text"
				variant="outlined"
				placeholder='Search by name'
				value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
			/>
	)
}

export default SearchFilter