import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import BrandsFilterCheckboxContainer from './BrandsFilterStyled'

function BrandsFilter({ setChecked, checked }) {
    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };

	return (
		<BrandsFilterCheckboxContainer>
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
		</BrandsFilterCheckboxContainer>
	);
}

export default BrandsFilter;