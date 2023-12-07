import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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