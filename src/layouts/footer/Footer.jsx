import FooterWrapperStyled from './FooterStyled'
import NavButtons from '../../components/navButtons/NavButtons'
import footerLogo from '../../assets/footerImages/footer_logo.png'

function Footer() {
	return (
		<FooterWrapperStyled>
			<img src={ footerLogo } alt="footer logo" />
			<NavButtons btn="white" />
		</FooterWrapperStyled>
	);
}

export default Footer