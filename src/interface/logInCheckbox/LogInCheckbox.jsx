import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function LogInCheckbox() {
	return (
		<div>
			<FormControlLabel control={<Checkbox />} label="Remember me" />
		</div>
	);
}

export default LogInCheckbox;