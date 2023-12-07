import { Container } from './Header.styled'
import HeaderLogo from '../../interface/headerLogo/HeaderLogo'
import NavButtons from '../../components/navButtons/NavButtons'
import AuthControls from '../../components/authControls/AuthControls'

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