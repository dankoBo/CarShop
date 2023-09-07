import ButtonsContainer from './NavButtonsStyled'
import BorderlessButton from "../../interface/borderlessButton/BorderlessButton";


function NavButtons(props) {
	return (
		<ButtonsContainer>
			<BorderlessButton color={props.btn} name="Home" />
			<BorderlessButton color={props.btn} name="About us" />
			<BorderlessButton color={props.btn} name="Shop" />
			<BorderlessButton color={props.btn} name="Blog" />
			<BorderlessButton color={props.btn} name="Contacts" />
			<BorderlessButton color={props.btn} name="How it Works" />
		</ButtonsContainer>
	);
}

export default NavButtons;