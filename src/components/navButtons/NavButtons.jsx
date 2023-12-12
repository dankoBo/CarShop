import { ButtonsContainer } from './NavButtons.styled'
import BorderlessButton from '../borderlessButton/BorderlessButton'
import { Link } from 'react-router-dom'

function NavButtons(props) {
	return (
		<ButtonsContainer>
			<Link to='/'><BorderlessButton color={props.btn} name="Home" /></Link>
			<BorderlessButton color={props.btn} name="About us" />
			<Link to='shop'><BorderlessButton color={props.btn} name="Shop" /></Link>
			<BorderlessButton color={props.btn} name="Blog" />
			<BorderlessButton color={props.btn} name="Contacts" />
			<BorderlessButton color={props.btn} name="How it Works" />
		</ButtonsContainer>
	);
}

export default NavButtons;