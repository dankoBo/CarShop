import LogoContainerStyled from './HeaderLogoStyled'
import logoImage from '../../assets/headerImages/header_logo.png'


function HeaderLogo() {
	return (
		<LogoContainerStyled>
			<img src={logoImage} alt="logoauto" />
		</LogoContainerStyled>
	);
}

export default HeaderLogo;