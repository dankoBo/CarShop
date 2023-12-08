import { Container } from './Footer.styled'
import NavButtons from '../navButtons/NavButtons'
import footerLogo from '../../assets/images/footer/footer_logo.png'

function Footer() {
	return (
		<Container>
			<img src={ footerLogo } alt="footer logo" />
			<NavButtons btn="white" />
		</Container>
	);
}

export default Footer