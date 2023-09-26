import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PaginationContainer from './PaginationStyled'

function PaginationShop() {
	return (
		<PaginationContainer>
			<Stack spacing={2}>
				<Pagination count={10} shape="rounded" size='large' />
			</Stack>
		</PaginationContainer>
	);
}

export default PaginationShop