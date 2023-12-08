import { Container } from './Pagination.styled'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

function PaginationStyled() {
	return (
		<Container>
			<Stack spacing={2}>
				<Pagination count={10} shape="rounded" size='large' />
			</Stack>
		</Container>
	);
}

export default PaginationStyled