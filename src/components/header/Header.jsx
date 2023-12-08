import { Container } from './Header.styled'
import HeaderLogo from './headerLogo/HeaderLogo'
import NavButtons from '../navButtons/NavButtons'
import AuthControls from './authControls/AuthControls'

function Header() {
	return (
		<Container>
			<HeaderLogo />
			<NavButtons btn="black" />
			<AuthControls />
		</Container>
	);
}

export default Header;