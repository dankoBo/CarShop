import { LogoContainerStyled } from './HeaderLogo.styled'
import logoImage from '../../../assets/images/header/header_logo.png'


function HeaderLogo() {
	return (
		<LogoContainerStyled>
			<img src={logoImage} alt="logo" />
		</LogoContainerStyled>
	);
}

export default HeaderLogo;