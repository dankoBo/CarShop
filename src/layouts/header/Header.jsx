import AuthControls from '../../components/authControls/AuthControls';
import HeaderLogo from '../../components/headerLogo/HeaderLogo';
import NavButtons from '../../components/navButtons/NavButtons';
import HeaderWrapperStyled from './HeaderStyled'

function Header() {
	return (
		<HeaderWrapperStyled>
			<HeaderLogo />
			<NavButtons btn="black" />
			<AuthControls />
		</HeaderWrapperStyled>
	);
}

export default Header;