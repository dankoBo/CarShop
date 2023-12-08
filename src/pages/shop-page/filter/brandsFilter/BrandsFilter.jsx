import { Container } from './BrandsFilter.styled'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'

function BrandsFilter({ setChecked, checked }) {
    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };

	return (
		<Container>
			<FormControlLabel
				control={<Checkbox onChange={handleChange} checked={checked['Audi']} name='Audi' />} 
				label="Audi"
			/>
			<FormControlLabel
				control={<Checkbox onChange={handleChange} checked={checked['Ford']} name='Ford' />} 
				label="Ford" 
			/>
			<FormControlLabel
				control={<Checkbox onChange={handleChange} checked={checked['Bugatti']} name='Bugatti' />} 
				label="Bugatti" 
			/>
			<FormControlLabel
				control={<Checkbox onChange={handleChange} checked={checked['Porsche']} name='Porsche' />} 
				label="Porsche" 
			/>
		</Container>
	);
}

export default BrandsFilter;