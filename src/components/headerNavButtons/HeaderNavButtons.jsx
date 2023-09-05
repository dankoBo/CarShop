import ButtonsContainer from './HeaderNavButtonsStyled'
import BorderlessButton from "../../interface/borderlessButton/BorderlessButton";


function HeaderNavButtons() {
	return (
		<ButtonsContainer>
			<BorderlessButton name="Home" />
			<BorderlessButton name="About us" />
			<BorderlessButton name="Shop" />
			<BorderlessButton name="Blog" />
			<BorderlessButton name="Contacts" />
			<BorderlessButton name="How it Works" />
		</ButtonsContainer>
	);
}

export default HeaderNavButtons;