import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import BrandsFilterCheckboxContainer from './BrandsFilterStyled'

function BrandsFilter() {
	return (
		<BrandsFilterCheckboxContainer>
			<FormControlLabel control={<Checkbox />} label="Audi" />
			<FormControlLabel control={<Checkbox />} label="Ford" />
			<FormControlLabel control={<Checkbox />} label="Bugatti" />
			<FormControlLabel control={<Checkbox />} label="Porsche" />
		</BrandsFilterCheckboxContainer>
	);
}

export default BrandsFilter;