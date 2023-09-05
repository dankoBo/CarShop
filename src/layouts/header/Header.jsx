import AuthControls from '../../components/authControls/AuthControls';
import HeaderLogo from '../../components/headerLogo/HeaderLogo';
import HeaderNavButtons from '../../components/headerNavButtons/HeaderNavButtons';
import HeaderWrapperStyled from './HeaderStyled'

function Header() {
	return (
		<HeaderWrapperStyled>
			<HeaderLogo />
			<HeaderNavButtons />
			<AuthControls />
		</HeaderWrapperStyled>
	);
}

export default Header;