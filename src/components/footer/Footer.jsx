import { Container } from './Footer.styled'
import NavButtons from '../../components/navButtons/NavButtons'
import footerLogo from '../../assets/footerImages/footer_logo.png'

function Footer() {
	return (
		<Container>
			<img src={ footerLogo } alt="footer logo" />
			<NavButtons btn="white" />
		</Container>
	);
}

export default Footer